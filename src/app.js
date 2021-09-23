const express=require("express");
// const env = require("dotenv");
const result=require('dotenv').config();
// env.config({ path: process.cwd() + 'E:\Quiz\src\.env' });
if(result.error){
    throw result.error}


// const env=require('dotenv').config({path:'src\.env'});
const Question=require('./models/questions')
 const Course=require('./models/courses')
 var cors = require('cors');
const { urlencoded } = require("express");

require("./db/conn");
const app= express();
app.use(express.json())
// env.config({path:'src\.env'});
app.use(cors());
let port=process.env.PORT;
console.log("port====>",port)



app.get("/",(req,res)=>{
    res.send("1. to get courses add '/getCourses' in url.  , 2.To Post or create questions add '/course' in the url .   ,3. To add questions add '/questions' in the url .4. To fetch questions add '/questions' from url ");
    

})
// create a new student

app.post("/questions",(req,res)=>{
    console.log(req.body)
    const question=new Question(req.body)
        question.save()

    res.send("hello from the other side. ");

} )

app.post("/course",(req,res)=>{
    console.log(req.body)
     const course=new Course({name:req.body.name,id:`CO_${req.body.name}`})
        course.save()

    res.send("hello from the other side. ");

} )

app.get("/getCourses",async(req,res)=>{
    try{
        console.log("ffsfsg")
        const getCourses=await Course.find();
        console.log(getCourses);
        res.send(getCourses);
    }
    catch(e){
        res.send(e);

    }
})

app.get("/questions",async(req,res)=>{
    try{
        const getQuestions=await Question.find();
        console.log(getQuestions) ;
        res.send(getQuestions);
    }
    catch(e){
        res.send(e);
    }
})



app.listen(port, ()=>{
    console.log(`connection is setup at ${port}`);
})
