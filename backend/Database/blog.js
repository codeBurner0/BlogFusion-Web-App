const mongoose = require('mongoose');
const blogSchema=new mongoose.Schema({
    name:String,
    imageUrl:String,
    title:String,
    content:String,
    userId:String,
    color:String,
    coloricon:String,

})
module.exports=mongoose.model('blogs',blogSchema);