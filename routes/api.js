const express = require ('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/user/addUser', userController.addUser);
router.get('/user/getAllUsers', userController.getAllUsers);
router.get('/user/loginUser',userController.loginUser);

module.exports = router;