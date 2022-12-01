const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 8000;
const server = express();
server.use(cors());
server.use(express.json());

/* const uri = process.env.ATLAS_URI || "mongodb://127.0.0.1:27017";
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB database connection established")
}) */

server.get("/study/:id", (req,res)=>{
    console.log(`study route, id: ${req.params.id}`);
    res.json({message:"in study route", test:"test string", num:10});
})

server.post("/login", (req,res)=>{
    console.table(req.body)
    const {username, password} = req.body

    if(!username || !password || username.length <= 0 || password.length <= 0){
        res.status(300).json({message:"username or password is missing"});
    }
    res.status(200).json({username:username, password:password, message:"success"});
    
})

server.get("/study", (req,res)=>{
    console.log("study route");
    res.json({message:"in study route", test:"test string", num:10});
})

server.get("/login", (req,res)=>{
    console.log("login route");
    res.json({message:"in login route", test:"test string"})
})

server.get("/profile", (req,res)=>{
    console.log("profile route");
})

server.get("/register", (req,res)=>{
    console.log("in registration");
})

server.get("/*", (req, res)=>{
    console.log("in catch-all");
    res.json({message:"catch-all"});
})

server.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
});