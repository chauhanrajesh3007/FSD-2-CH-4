//Query Parameters
var express=require("express")
var app=express()
app.get("/about",(req,res)=>{
    res.send(req.query)
})
app.listen(8081)