const user=require('../model/Usermodel');
const jsonweb=require('jsonwebtoken');
const createtoken=(_id)=>{
    return jsonweb.sign({_id},process.env.SECRET,{expiresIn:'3d'});
}
const login=async(req,res)=>{
const {email,password}=req.body;
try{
const users=await user.login(email,password);
const token=createtoken(users._id);
res.status(200).json({email,token});
}
catch(error){
res.status(400).json({error:error.message});
}

};
const signup=async(req,res)=>{
const {email,password}=req.body;
try{
    const users=await user.signup(email,password);
    const token=createtoken(users._id);
   res.status(200).json({email,token});

}
catch(error){
res.status(400).json({error:error.message});
}
}
module.exports={login,signup};