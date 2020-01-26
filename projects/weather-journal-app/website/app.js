/* Global Variables */
var baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
var apiKey = "&units=metric&APPID=8ed5ec8a8669511a1b37cc4b98e3427d";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1 +'.'+ d.getDate()+'.'+ d.getFullYear();


// Fetch the data from openWeather API based on the zipcode
/* 
Every `then` return a promsie object which will make chain all the promise together very easily;
If we want to use the reutrn real, we have to use return inside the `then` method;

*/
getWeatherData = async (url = "", zip = "", apikey) => {
    let response = await fetch(url + zip + apikey);
    let data = await response.json();
    return data; 
};

getAPIData = async (url = "") => {
    let response = await fetch(url);
    let data = await response.json();
    return data; 
};

postWeatherAndUserRes = async (url, data) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    return await response.json();
};

const updateUI = (data) => {
    document.getElementById("date").textContent = data.date;
    document.getElementById("temp").textContent = data.temprature;
    document.getElementById("content").textContent = data.userResponse;
}

// Add the eventlistener with the id = "generate"
// there must be a callback functions after event type
document.querySelector("#generate").addEventListener("click",
    async function(call){

        let inputZipCode = document.getElementById("zip").value;
        if (inputZipCode == "" || inputZipCode == null){
            alert("Please enter the zipcode first!")
        };
        let inputText = document.getElementById("feelings").value;
        if (inputText == "" || inputText == null){
            alert("Please enter the feelings relevant message first!!")
        };


        let retrievedWeatherData = await getWeatherData(baseURL, inputZipCode, apiKey);
        console.log(retrievedWeatherData);

        let responseData = await postWeatherAndUserRes('http://localhost:8000/api', {
            date: newDate,
            userResponse: inputText,
            temprature: retrievedWeatherData.main.temp
        });
        
        let finalUpdate = await getAPIData("http://localhost:8000/apiData");
        console.log(finalUpdate);
        updateUI(finalUpdate);
        
    }
 );

