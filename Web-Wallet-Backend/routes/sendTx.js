const express = require('express');
const sendTx = require('../controllers/sendTransaction');
const router = express.Router();

router.post('/sendTransaction/:address', sendTx.sendTransaction);

module.exports = router;

