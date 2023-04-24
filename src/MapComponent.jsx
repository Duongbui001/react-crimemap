import React, { useCallback, useEffect, useState } from 'react';
import L from "leaflet";
import useSupercluster from "use-supercluster";
import { Marker, Popup, useMap } from 'react-leaflet';
import "./MapComponent.css";
import iconUrl from "./handcuffs.svg";

// styling the clusters with red circle and handcuffs
const icons = {};
const fetchIcon = (count, size) => {
  if (!icons[count]) {
    icons[count] = L.divIcon({
      html: `<div class="cluster-marker" style="width: ${size}px; height: ${size}px;">
        ${count}
      </div>`,
    });
  }
  return icons[count];
};

const cuffs = new L.Icon({
  iconUrl,
  iconSize: [25, 25],
});

// Create MapComponent to convert data in clusters
const MapComponent = ({ location, data, date }) => {
    const maxZoom = 22;
    const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(12);
  const map = useMap();

  // get map bounds
  function updateMap() {
    console.log("updating");
    const b = map.getBounds();
    setBounds([
      b.getSouthWest().lng,
      b.getSouthWest().lat,
      b.getNorthEast().lng,
      b.getNorthEast().lat,
    ]);
    setZoom(map.getZoom());
  }
 
  // moving map function when users using the map
  const onMove = useCallback(() => {
    updateMap();
  }, [map]);

  React.useEffect(() => {
    updateMap();
  }, [map]);

  useEffect(() => {
    map.on("move", onMove);
    return () => {
      map.off("move", onMove);
    };
  }, [map, onMove]);

  // clustering data 
    const points = data.map((datacrime) => ({
        type: "Feature",
        properties: { cluster: false, crimeId: datacrime.id, category: datacrime.category, street: datacrime.location.street.name},
        geometry: {
          type: "Point",
          coordinates: [
            parseFloat(datacrime.location.longitude),
            parseFloat(datacrime.location.latitude),
          ],
        },
      }));
    
      const { clusters, supercluster } = useSupercluster({
        points: points,
        bounds: bounds,
        zoom: zoom,
        options: { radius: 75, maxZoom: 17 },
      });
    
      console.log(clusters.length);
 
    return (
           <>
           {clusters.map((cluster) => {
              const [longitude, latitude] = cluster.geometry.coordinates;
              const { cluster: isCluster, point_count: pointCount } = cluster.properties;
          if (isCluster) {
            return (                    //return cluster
                <Marker
                    key={`cluster-${cluster.id}`}   
                    position={[latitude, longitude]}
                    icon={fetchIcon(
                        pointCount,
                        10 + (pointCount / points.length) * 40
                    )}
                    eventHandlers={{
                        click: () => {
                            const expansionZoom = Math.min(
                                supercluster.getClusterExpansionZoom(cluster.id),
                                maxZoom
                            );
                            map.setView([latitude, longitude], expansionZoom, {
                                animate: true,
                            });
                        },
                      }}> 
                    
              </Marker>
              )};

              return (                  //return point with pop-up information
                <Marker 
            key={`crime-${cluster.properties.crimeId}`}
            position={[latitude, longitude]}
            icon={cuffs}>
                    <Popup>
                    <div>
                    <h3>Category: {cluster.properties.category}</h3>
                    <p>Location: {cluster.properties.street}</p>
                  </div>
                </Popup>
            </Marker>
              );
              })}
              </>
            
    );
  };

export default MapComponent;

