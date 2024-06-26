const express = require('express');
const {connection} = require('./config/db');
const bodyParser =require('body-parser');
const routeAPI = require('./routes/api');
const app =express();
const port = 5004;

//  coonection for database
connection('mongodb://localhost:27017/TaskMangement').then(()=>{
   console.log("Databse Connected Successfully");
}).catch((error)=>{
   console.error("Felied to connect With database",error);
})

app.use(bodyParser.json());
app.use(express.json());

app.use('/api',routeAPI);

 app.listen(port,()=>{
    console.log(`Server is Listiong on Port ${port}`);
 });