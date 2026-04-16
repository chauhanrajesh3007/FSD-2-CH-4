//Body Parameter
var express=require("express")
var app=express()
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.send(`<form method="post" action="/about">
              Name: <input type="text" name="uname"><br>
              Password: <input type="password" name="pwd"><br>
              <input type="submit">
              </form>`)
})
app.post("/about",(req,res)=>{
    res.send("Welcome "+req.body.uname+" your password is "+req.body.pwd)
})
app.listen(8085)