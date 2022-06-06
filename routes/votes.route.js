const {Router} = require("express");

const votes = Router();

const fs = require("fs")
votes.get("/party/:party",(req,res)=>{
    //res.send("got");
    fs.readFile("./db.json","utf-8",(err,data)=>{
        const parsed = JSON.parse(data);
        parsed.user = parsed.user.filter((el)=>el.party==party);
     fs.writeFile("./db.json",JSON.stringify(parsed),"utf-8",(err,data)=>{
         res.end("users party")
     })
    })
});
votes.get("/voter",(req,res)=>{
   // res.end("got");
    fs.readFile("./db.json","utf-8",(err,data)=>{
        const parsed = JSON.parse(data);
        parsed.user = parsed.user.filter((el)=>el.role=="voter");
        fs.writeFile("./db.json",JSON.stringify(parsed),"utf-8",(err,data)=>{
            res.send("users party")
        })
    })
});
votes.post("/vote/:user",(req,res)=>{
    //res.send("got");
    fs.readFile("./db.json","utf-8",(err,data)=>{
        const parsed = JSON.parse(data);
        parsed.user = parsed.user.filter((el)=>el.username= el.votes+1);
        fs.writeFile("./db.json",JSON.stringify(parsed),"utf-8",(err,data)=>{
            res.end("users party")
        })
    })
});
votes.get("/count/:user",(req,res)=>{
    //res.send("got");
    fs.readFile("./db.json","utf-8",(err,data)=>{
        const parsed = JSON.parse(data);
        parsed.user = parsed.user.filter((el)=>el.name=user);
        fs.writeFile("./db.json",JSON.stringify(parsed),"utf-8",(err,data)=>{
            res.end("users party")
        })
    })
});
module.exports = votes;