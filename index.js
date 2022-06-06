const express = require("express");
const voterRoutes = require("./routes/votes.route")
const authRoutes = require("./routes/auth.route")
const app  = express();
app.get("/",(req,res)=>res.send("app working"))
app.use("./voter",voterRoutes);
app.use("./user",authRoutes);
app.use((req,res,next)=>{
    
    if(!req.query.token){
        return res.status(401).send("Invalid Credentials")
    }
    fs.writeFile("./db.json",JSON.stringify({username:"joe",password:"1234"}),"utf-8",(err,data)=>{
       res.write({username:"joe",password:"1234"});
        res.end("login sucessfull")
    })
    next()
})
const PORT = process.env.PORT || 8080
app.listen(PORT)
