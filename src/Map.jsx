import React, { useState } from "react";
import axios from 'axios';
import "./Map.css";
import { MapContainer, TileLayer } from 'react-leaflet';
import MapComponent from "./MapComponent";

function Map() {
    const [postcode, setPostcode] = useState('');
    const [date, setDate] = useState('');
    const [policeData, setPoliceData] = useState([]);
    const [location, setLocation] = useState({ latitude: 51.505, longitude: -0.09 });

    const handlePostcodeChange = (e) => {
      setPostcode(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
      };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.get(`https://api.postcodes.io/postcodes/${postcode}`);
        const { latitude, longitude } = response.data.result;
        const year = date.split('-')[0];
        const month = date.split('-')[1];
        const geoJsonResponse = await axios.get(`https://data.police.uk/api/crimes-street/all-crime?lat=${latitude}&lng=${longitude}&date=${year}-${month}`);
        setPoliceData(geoJsonResponse.data);
        setLocation({ latitude, longitude });
      } catch (error) {
        console.log(error);
      }
    };

  //Change month number to letter
  function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString('en-US', { month: 'long' });
  };

  // return the map
  return (
    <div>     
      <form onSubmit={handleSubmit}>   
        <label htmlFor="postcode-input">Enter UK Postcode:</label>
        <input type="text" id="postcode-input" value={postcode} onChange={handlePostcodeChange} />
        <div id="datecss">
        <label htmlFor="date-input">Enter Date:</label>
        <input type="month" id="date-input" value={date} onChange={handleDateChange} />
        </div>
        <button type="submit" className="btn">Search</button>
      </form>

        {policeData.length > 0 &&
        <p><strong>{policeData.length} crimes on {getMonthName(date.split('-')[1])} {date.split('-')[0]} near the selected area</strong></p> }
        
        <p>📍Click on the map for more detailes</p>    
        <MapContainer center={[location.latitude, location.longitude]} zoom={12}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="Map data © OpenStreetMap contributors" />
            <MapComponent location={location} data={policeData} date={date} />
        </MapContainer>    
    </div>
  );
};

export default Map;
