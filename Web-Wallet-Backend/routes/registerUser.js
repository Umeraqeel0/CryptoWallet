const express = require('express');
const  authJwt  = require("../middleware/authJwt");
const verifySignUp = require('../middleware/verifySignUp');
const registerUser = require('../controllers/registerUser');
const router = express.Router();

router.post('/registerUser', [verifySignUp.checkDuplicateUsernameOrEmail], registerUser.createUser);
router.post('/updateUser/:id', registerUser.updateUser);
router.post('/addAddress/:id', registerUser.addAddress);
router.get('/getRegisterUser', [authJwt.verifyToken], registerUser.getRegisterUser);
router.get('/getRegisterUserById/:id', [authJwt.verifyToken],registerUser.getRegisterUserById);

module.exports = router;

