const Router = require("express");
const fs = require("fs")
const user = Router();

user.post("/login",(req,res)=>{
    //res.send("got");
    fs.readFile("./db.json","utf-8",(err,data)=>{
        const parsed = JSON.parse(data);
        parsed.user = parsed.user.filter((el)=>el.token==token);
        if(!req.query.token){
            return res.status(401).send("Invalid Credentials")
        }
        fs.writeFile("./db.json",JSON.stringify({username:"joe",password:"1234"}),"utf-8",(err,data)=>{
           res.write({username:"joe",password:"1234"});
            res.end("login sucessfull")
        })
    })
});
user.get("/logout",(req,res)=>{
    //res.send("got");
    const {token} = req.params;
    fs.readFile("./db.json","utf-8",(err,data)=>{
        const parsed = JSON.parse(data);
        parsed.user = parsed.user.filter((el)=>el.token!==token);
        
        fs.writeFile("./db.json",JSON.stringify(parsed),"utf-8",(err,data)=>{
          
            res.end("user logged out successfully")
        })
    })
});
module.exports = user;