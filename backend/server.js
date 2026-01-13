require('dotenv').config();
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const workouts=require('./router/workout');
const user=require('./router/Userrouts');
app.use(express.json())
//middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next();
})
app.use('/api/workout',workouts)
app.use('/api/user',user)
// app.get('/',(req,res)=>{
//     res.json("hi");
// })
mongoose.connect(process.env.MONGO_URI)
.then(()=>{

    app.listen(process.env.PORT,()=>{
        console.log("hello "+process.env.PORT);
    })
}).catch((error)=>{
    console.log(error);
})
