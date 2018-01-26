const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();
// import any controllers
const contacts_controller= require('./controllers/contacts_controller');

const app = (express());
// Middle ware
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then( dbInstance => app.set('db', dbInstance));

// Endpoints
//postman get: http://localhost:3000/api/test
app.get('/api/test', res=>{
    console.log("Test Endpoint Hit!")
})
// EndPoint comming from imported controller
app.get('/api/contacts', contacts_controller.getAll );
//console.log(contacts_controller)


// Set server to listen on port
const port = 3000;
app.listen(port, ()=>{console.log(`Server listening on port: ${port}`);});