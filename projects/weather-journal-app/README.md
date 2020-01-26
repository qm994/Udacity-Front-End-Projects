# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions

### server.js file
In side this file, I have a POST route called `/api` to POST my data and a GET route called `/apiData` to get
the data. Also a `projectData` to hold all the information.

### app.js file
In side this file, I have 4 async functions: (1) `getWeatherData` to get the weather information based on zipcode from `openWeather website`; (2) `postWeatherAndUserRes` to POST the weather data and get user responses; (3) `getAPIData` to get the data after POST; (4) `updateUI` to update the Entries based on the retrieved data from API;

