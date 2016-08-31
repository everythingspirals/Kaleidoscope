// Libraries
import fs from 'fs';
import express from 'express';

let app = express();

app.get("/shows", function(req,res){
  res.send("Welcome to the desert of the real.");
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('public'));

app.listen(1337, ()=>{
  console.log("Server started on port 1337...")
});
