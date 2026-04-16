/*Devlope a web application that stimulates a college class room entry system using middlewave when a student access flash class root lock that student entered the class 
verify wheather the student has a valid id card if valid allow entry and give welcome massage else denied entry.*/
var expr=require("express")
var app=expr()
const entryLog=(req,res,next)=>{
    console.log("Student entered the class")
    next()
}
const checkID=(req,res,next)=>{
    const hasID=true
    if(hasID){
        req.student="abc"
        console.log("ID varified")
        next()}
    else{
        console.log("Access denied:NO ID card")
    }
}
app.use("/class",entryLog,checkID)
app.get("/class",(req,res)=>{
    res.send("Welcome "+req.student+" to the class!!")
})
app.listen(9093)