const dotenv = require("dotenv");
// Add environment variables for our api key
dotenv.config();
// index.js is the the entry point of webpack to build the dependency tree,
// and it will map all of our app assets and their dependencies
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
const bodyParser = require("body-parser");
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

///

app.use(express.static('dist'))
console.log(__dirname)


var aylien = require("aylien_textapi");
//set aylien api credentials
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

var projectData = {};

app.post("/api", function(req, res){
    let textData = req.body.url;
    console.log(textData);
    textapi.sentiment(
        {url: textData},
     function(error, response) {

        if (error === null) {
            // console.log(response);
          projectData["text"] = response.text;
          projectData["polarity"] = response.polarity;
          projectData["confidence"] = response.polarity_confidence;
          projectData["subjectivity"] = response.subjectivity;
          projectData["subjectivity_confidence"] = response.subjectivity_confidence;
          console.log(projectData);
          res.send(projectData);
        } else{
            projectData["message"] = "The url is not valid for API to do analysis!!!!";
            res.send(projectData);
            //res.send({message: "there is an error"});
        }
      });
      
})



app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
