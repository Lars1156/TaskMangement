const mongoose = require('mongoose');
const User = require('../models/user')

async function addUser(user){
   try {
    const userDetails ={
        uerName :user.userName,
        email: user.email,
        password : user.password
    };
    const newUser = new User(userDetails);
    const result = await newUser.save();
    return {status:(200), task: result};

   } catch (error) {
    throw{ status: 500, message: 'internal server error'}
   }
};

async function getAllUser(){
    try {
        const userSchema = await User.findOne({} ._v);
        return userSchema
    } catch (error) {
        throw{ status: 500, message: 'internal server error'}
    }
}

module.exports = {
    addUser,
    getAllUser
}