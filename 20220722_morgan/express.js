var morgan = require('morgan')
const express = require("express");
const server = express();
server.use(express.static('public'));
server.use(morgan('tiny'))

server.get("/", (req,res)=>{
  res.sendFile(__dirname + "/index.html")
})

server.get("/sub1", (req,res)=>{
    res.sendFile(__dirname + "/sub1.html")
})

server.get("/sub2", (req,res)=>{
    res.sendFile(__dirname + "/sub2.html")
})

server.get("/sub3", (req,res)=>{
    res.sendFile(__dirname + "/sub3.html")
})

server.listen(3000, (err)=>{
    if (err) return console.log(err);
    console.log("The server is listning on port 3000");
});