var express=require("express")
var app=express()
app.get("/",(req,res)=>{
    res.send(`<form method="get" action="/about">
              Name: <input type="text" name="uname"><br>
              Password: <input type="password" name="pwd"><br>
              <input type="submit">
              </form>`)
})
app.get("/about",(req,res)=>{
    res.send("Welcome "+req.query.uname+" your password is "+req.query.pwd)
})
app.listen(8085)