const express = require('express');
const verifySignUp = require('../middleware/verifySignUp');
const registerUser = require('../controllers/registerUser');
const router = express.Router();

router.post('/registerUser', [verifySignUp.checkDuplicateUsernameOrEmail], registerUser.createUser);
router.post('/updateUser/:id', registerUser.updateUser);
router.get('/getRegisterUser', registerUser.getRegisterUser);
router.get('/getRegisterUserById/:id', registerUser.getRegisterUserById);

module.exports = router;
