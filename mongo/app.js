const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const mongoURL = 'mongodb://localhost:27017/newdb';

const app = express();

MongoClient.connect(mongoURL)
.then((client)=>{
    console.log(client);
    app.listen(8080,()=>{
        console.log(`server is running at port`,8080);
    })
})
.catch((err)=>{
    console.log(err);
})