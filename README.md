
Welcome to my web app about the London Crime Map! Based on data provided by the UK Police API, the app provides a convenient and interactive way for users to view updated crime data in London.

The web app, built with the React framework, is user-friendly and intuitive, allowing users to easily navigate and explore crime data in London. Whether you live in London, are a tourist planning a trip, or are simply interested in crime trends in the city, my app has a wealth of information at your fingertips.

## About
The web app shows the number of crimes and their types for a selected month and location (postcode) within London. The interactive map lets you zoom in and out, and explore crime hotspots throughout the city. 

One of the app’s most distinguishing features is its use of the UK Police API, which provides crime data directly from the UK police database. However, it should be noted that as the database is updated with a two-month delay, you will need to ensure you select a date at least two months prior to the current date.

## How to Use

- Search: You need to select a postcode location and a date (month-year) in order for the app to work. 
- Result: The app will return the number of crimes and their locations near the postcode input. 
You can zoom in and out and click on the clusters to see more specific locations of where the crimes took place. Each crime is represented by the handcuff icon which, if clicked on, will pop up information relating to the specific crime. 

## Retrieving Data

Data is dealt with using RESTful API and responded to by the below APIs:

- Crime: https://data.police.uk/api
- Location: https://api.postcodes.io/

## Responsive

This responsive web application provides interactive features, such as giving results based on selected dates and locations, clustering data, and pop-up information. 

## Sending Feedback

I am always open to your feedback. Please find my contact information on the web page if you wish to contact me, such as if you have any ideas regarding further functionalities that could be added to the app.

