import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Map from "../Map";

const queryClient = new QueryClient();
const Home = () => {
return (
	<div>
	<h1>Crime map in London</h1>
	<QueryClientProvider client={queryClient}>
      <Map />
    </QueryClientProvider>
	</div>
);
};

export default Home;
