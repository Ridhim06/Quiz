const mongoose=require("mongoose");
const validator=require("validator");

const courseSchema= new mongoose.Schema({
    name:{
        type:String
        
    },
    id:{
        type:String
    }
   
    

})

const Course=new mongoose.model('courses',courseSchema)
module.exports=Course