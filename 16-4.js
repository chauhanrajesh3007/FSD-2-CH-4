/*# Middlewave
Syntax
app.use(route,middlename function)
app.method(route,middlewave1,middlewave2,.....,(req,res)=>{
    })
in middlewave function(req,res,next)
*/
var expr=require("express")
var app=expr()
const addName=(req,res,next)=>{
    req.name="abc"
    console.log("Nmae added")
    next()}
const addCol=(req,res,next)=>{
    req.col="LJU"
    console.log("college added")
    next()}
const addMarks=(req,res,next)=>{
    req.marks=50+40
    console.log("marks added")
    next()}
app.get("/class",addName,addCol,addMarks,(req,res)=>{
    res.send("Welcome "+req.name+" to "+req.col+" you scored "+req.marks)
})
app.listen(9091)
