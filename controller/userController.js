const User = require('../models/user');
const userServices = require('../services/userServices');

const addUser =async(req,res) =>{
  console.log("User details are added" ,req.body);
  try {
       const result = await userServices.addUser(req.body);
       res.status(result.status).send(result.task ||{message: result.message});
  } catch (error) {
    res.status(500).send({ message: 'Internal server error' });   
  }
};

const getAllUsers = async(req,res)=>{
    console.log("**getAllUsers" , req.body);
    try {
        const result = await userServices.getAllUser();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ message: 'Internal server error' });    
    }
}

const loginUser = async(req, res)=>{
    const userData = req.body;
    console.log("userDetails of login",req.body);
    try {
        const userEmail =  await User.findOne({ email:userData.email});
        if(!userEmail){
            res.status(userEmail.status).send({message: userEmail.message});
        }else{
            const password = await User.findOne({password:userData.password});
            if(!password){
                res.status(500).send({message:"Invailed password"});
            }else{
                res.status(200).send({message:"successfull"});
            }
        }
        
    } catch (error) {
        res.status(500).send ({message :"invalid password"});
    }
}

module.exports = {
    addUser,
    getAllUsers,
    loginUser
}; 
