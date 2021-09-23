const mongoose=require("mongoose");
const env = require("dotenv");
env.config();

console.log('process',process.env.MONGO_DB_USER)
// mongoose.connect(
//    // `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.bupf2.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,     {


//     //  `mongodb+srv://root:<admin>@cluster0.hsavm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
//     // `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.hsavm.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
//     // {
    

    
    
    
    
//     "mongodb://localhost:27017/quiz-api",{
//     useCreateIndex:true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useFindAndModify: false,


// }).then(()=>{
//     console.log("connection is successful");
// }).catch((e)=>{
//     console.log("No connection",e);
// })



mongoose.connect(`
    mongodb+srv://root:admin@cluster0.hsavm.mongodb.net/quiz?retryWrites=true&w=majority`,
    
    
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });