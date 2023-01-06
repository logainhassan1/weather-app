// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Express to run server and routes
const express=require('express');

// Start up an instance of app
const app=express();

/* Dependencies */
let bodyParser = require('body-parser')

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));

/* Spin up the server*/
const port=8080;
const server = app.listen(port, listening);



  // Callback to debug


  function listening(){
    console.log(`server running at ${port}`);
};

app.listen(port, listening);



// Initialize all route with a callback function
app.get('/all', sendprojectData);

// Callback function to complete GET '/all'

let sendprojectData =(req,res)=>res.send(projectData);

// get Route


// post function


// Post Route  recape before submit

app.post("/app",adddata)

function adddata(req,res){
  newDate=
    req.body.date;
    req.body.temp;
     req.body.content;
    req.send(projectData);
}