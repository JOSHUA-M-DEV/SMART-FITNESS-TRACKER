const mongoose=require('mongoose');

const schema=mongoose.Schema;
const bcrypt=require('bcrypt');
const validator=require('validator');

const userschema=new schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
       type:String,
        required:true, 
    }
})

userschema.statics.signup= async function(email,password){
    if(!email||!password){
        throw Error('all fields must be filled');
    }
    const exist=await this.findOne({email});
if(!validator.isEmail(email)){
    throw Error('enter valid email');
}
if(!validator.isStrongPassword(password)){
    throw Error('enter Strong Password');
}
    if(exist){
throw Error('email already exist');
    }
    const salt=await bcrypt.genSalt(10);
    const hash=await bcrypt.hash(password,salt);
    const user=await this.create({email,password:hash});
    return user;
}
userschema.statics.login= async function(email,password){
    if(!email||!password){
        throw Error('all fields must be filled');
    }
    const exist=await this.findOne({email});

    if(!exist){
throw Error('in correct mail');
    }
    const match=await bcrypt.compare(password,exist.password);
    if(!match){
        throw Error('incorrect password');
    }
    return exist;
}
module.exports=mongoose.model('user',userschema);