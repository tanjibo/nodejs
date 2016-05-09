var mongoose=require('mongoose');
var url='mongodb://username:password@hostname:port/databasename';
var url='mongodb://localhost/nodejs/mongodb';
mongoose.connect(url);

var BookSchema=new mongoose.Schema({
	name:String,
	author:String,
	publishTime:Date,

})
mongoose.model('Book',BookSchema);