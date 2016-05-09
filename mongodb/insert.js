var mongoose=require('mongoose');

require('./model.js');
var Book=mongoose.model('Book');
var book=new  Book({
	name:'tanjibo',
	author:'fdsf',
	publishTime:new Date().getHours(),
})
book.author='wang';
book.save(function(err){
	console.log(err?'failed':"success");

})