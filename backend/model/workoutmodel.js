const mongoose=require('mongoose');
const schema=mongoose.Schema;
const workoutschema=new schema({
title:{
    type:String,
    required:true
},
load:{
    type:Number,
    required:true
},
rep:{
   type:Number,
    required:true
}
},{
    timestamps:true
})
module.exports=mongoose.model('workout',workoutschema);