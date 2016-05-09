var express=require('express');
var app=express();
app.get('/',function(req,res){
res.send('fdsfsd');
})
app.listen(8080,function(req,res){
  console.log('successfully');
})