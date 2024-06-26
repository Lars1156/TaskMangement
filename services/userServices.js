const mongoose = require('mongoose');
const User = require('../models/user')

async function addUser(user){
   try {
    const userDetails ={
        uerName :user.userName,
        email: user.email,
        password : user.password
    }
   } catch (error) {
    
   }
}