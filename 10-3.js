/* Response Method
-->res.write()
-->res.send()
-->res.end()
-->res.json()
-->res.sendfile()
-->res.render()
-->res.redirect()
*/
var expr=require("express")
var app=expr()
app.get("/",function(req,res){
    res.type("text/plain")
    res.write("Welcome to home page")
    res.send()})
app.get("/about",function(req,res){
    res.type("text/html")
    res.send("<h1> Welcome to about page </h1>")
})
app.listen(8081,()=>{
    console.log("Server Started")
})