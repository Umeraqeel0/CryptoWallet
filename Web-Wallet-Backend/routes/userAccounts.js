const express = require('express');
const userAccounts = require('../controllers/userAccounts');
const router = express.Router();

router.post('/addAddress/:id', userAccounts.addAddress);
router.post('/updateBalance/:address', userAccounts.updateBalance);
router.post('/addBalance/:address', userAccounts.addBalance);
router.get('/getUserAccount/:id', userAccounts.getUserAccount);
router.get('/getUserBalanceByAddress/:address', userAccounts.getUserBalanceByAddress);

module.exports = router;

