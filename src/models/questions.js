const mongoose=require("mongoose");
const validator=require("validator");

const questionSchema= new mongoose.Schema({
    question:{
        type:String
        
    },
    subject:{
        type:String
    },
    answer:
        [{type:String}]
    ,
    options:
      [{ type:String}]
    

})

const Question=new mongoose.model('questions',questionSchema)
module.exports=Question