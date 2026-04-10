/*Unit - 4 ExpressJS-->chances for MCQ
  -->mkdir express
  -->cd express
  -->npm init 
  -->npm config set proxy http://192.168.10.254:808
  -->npm install express --save
*/
/* Syntax
  -->npm-node package manager
  -->to check npm version-npm -v
  -->to check express version-npm list express
*/
/* http request method
  -->get--read and fetch data
  -->post--write data
  -->put
  -->delete
  -->all
*/
/*Syntax
  -->app.method(URI,request listner function)
  -->eg.app.get("/",function(req,res){
                })
*/
var expr=require("express")
var app=expr()
app.get("/",function(req,res){
  res.set("Content-Type","text/plain")/*res.set("Content-Type",mime type) or res.type(mime type)*/
  res.write("Hello World")
  res.send()//--> we can write or send anyone have a data writing
})
app.listen(3000)
