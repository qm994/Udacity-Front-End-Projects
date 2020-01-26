// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

const bodyParser = require("body-parser");
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = app.listen(port, listening);

function listening(){
    console.log(`The locale server is ${port}`);
};
// // 2. Set up the POST request route;
app.post("/api", function(req, res){
    // req.body is the data we put inside the POST body in client side;
    let data = req.body;
    // see what we have received
    projectData["date"] = data.date;
    projectData["temprature"] = data.temprature;
    projectData["userResponse"] = data.userResponse;

    // When we POST the request, we also need to res.send(); Otherwise
    // we cannot get the data by GET method
    res.send({});
})



app.get("/apiData", function(req, res){
    console.log("data requested from API data");
    res.send(projectData);
})
