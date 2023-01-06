/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


// Personal API Key for OpenWeatherMap API
let url="https://api.openweathermap.org/data/2.5/weather?zip=";
let APIKey="&appid=06c960e76d49d98e165fd325c8002420&units=metric";


// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', click);

function click(x){
    let userData={
        userzip:document.getElementById('zip'),
        userfeelings:document.getElementById('feelings'),
    };
    getdata(url,zip, APIKey);
    then(function (userData) {
        postData('/add', { date: b, temp: userData, content:feelings })
    });
    updateUI()};

/* Function to GET Web API Data*/
let getdata= async function(url,zip, APIKey) {
    try{let res=await fetch(url+zip+APIKey);}
    catch (error){console.log(error);}}
return data;


/* Function to POST data */
let postdata= async function(url ="",data=""){let req =await fetch(url,{
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})}

try{
let newdata =await res.JSON();
return newdata;
}
catch (error){console.log(error);}


let newUI = async function() {
    let request = await fetch('/newurl');
    try {
      let Data = await request.json()
      document.getElementById('date').innerHTML = Data.date;
      document.getElementById('temp').innerHTML =Data.temp;
      document.getElementById('content').innerHTML=Data.content;
    }
    catch (error) {
      console.log( error);
    }
  };





