var expr=require("express")
var app=expr()
var student={name:"LJU",age:28}
app.get("/",function(req,res){
    res.type("application/json")
    //res.json(student.age)
    //res.write(student.age+"")//-->always string can be contain
    //res.send(student.name)
})
app.listen(8085)
