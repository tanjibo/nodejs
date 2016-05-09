var express=require('express'),
   superagent=require('superagent'),
   cheerio=require('cheerio');
var app=express();

   app.get('/',function(req,res,next){
   	var a=superagent.get('https://cnodejs.org/')
   	.end(function(err,aa){
   		
   		if(err){
   			return  next(err);
   		}

   	})
   	 res.send(a.text);
   	// var $=cheerio.load(sres.text);
   	// var items=[];
   	// $('#topic_list .topic_title').each(function(idx,element){
    //   var $element=$(element);
    //   items.push({
    //   	title:$element.attr('title'),
    //   	href:$element.attr('href')
    //   })
   	// })
   	// res.send(item);
   })
   app.listen(3000,function(req,res){
   	console.log('listening 3000')
   })