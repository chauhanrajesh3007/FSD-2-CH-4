//req.params-->dynamic parameters
var expr=require("express")
var app=expr()
app.get("/name/:uname",(req,res)=>{
    res.send(req.params)
})
app.listen(5051)
//running--localhost:5051/name/Rajesh
//output--{"uname":"Rajesh"}