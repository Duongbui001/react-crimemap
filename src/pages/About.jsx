import React from "react";
import "./Contact-style.css";

const About = () => {
return (
	<div>
		<div className="container">
	<p>Welcome to my web app about the London Crime Map! Based on data provided by the UK Police API, the app provides a convenient and interactive way for users to view updated crime data in London.</p>
	<p>The web app, built with the React framework, is user-friendly and intuitive, allowing users to easily navigate and explore crime data in London. Whether you live in London, are a tourist planning a trip, or are simply interested in crime trends in the city, my app has a wealth of information at your fingertips.</p>
	<h3>📌📌 About</h3>
	<p>The web app shows the number of crimes and their types for a selected month and location (postcode) within London. The interactive map lets you zoom in and out, and explore crime hotspots throughout the city. </p>
	<p>One of the app’s most distinguishing features is its use of the UK Police API, which provides crime data directly from the UK police database. However, it should be noted that as the database is updated with a two-month delay, you will need to ensure you select a date at least two months prior to the current date.</p>
	<h3>📌📌 How to Use</h3>
	<p>- <strong>Search:</strong> You need to select a postcode location and a date (month-year) in order for the app to work. </p>
	<p>- <strong>Result: </strong> The app will return the number of crimes and their locations near the postcode input. </p>
	<p>You can zoom in and out and click on the clusters to see more specific locations of where the crimes took place. Each crime is represented by the handcuff icon which, if clicked on, will pop up information relating to the specific crime. </p>
	<h3>📌📌 Retrieving Data</h3>
	<p>Data is dealt with using RESTful API and responded to by the below APIs:</p>
	<p>- Crime: <a href="https://data.police.uk/docs/">https://data.police.uk/docs/</a></p>
	<p>- Location: <a href="https://api.postcodes.io/">https://api.postcodes.io/</a></p>
	<h3>📌📌 Responsive</h3>
	<p>This responsive web application provides interactive features, such as giving results based on selected dates and locations, clustering data, and pop-up information. </p>
	<h3>📌📌 Sending Feedback</h3>
	<p>I am always open to your feedback. Please find my contact information on the web page if you wish to contact me, such as if you have any ideas regarding further functionalities that could be added to the app</p>
		</div>
		<div id="icon" class="copyright">
        <strong> &copy; Duong Bui</strong>
        </div>
	</div>
);
};

export default About;
