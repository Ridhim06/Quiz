const express=require("express");
const env = require("dotenv");
const Question=require('./models/questions')
 const Course=require('./models/courses')
 var cors = require('cors')

require("./db/conn");
const app= express();
app.use(express.json())
env.config();
app.use(cors());
const port=8000;



// app.get("/",(req,res)=>{
//     res.send("hello from the other side by ridhim ");

// })
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



app.listen(port, ()=>{
    console.log(`connection is setup at ${port}`);
})