const db = require("../models");
const Addresses = db.userAddresses;
const crypto = require('crypto');
const timestamp = require('unix-timestamp');

const sendTransaction = async (req, res) => {
  try {
    const { balance, toAddress } = req.body;
    const address = req.params.address;
    const data = await Addresses.findAll({
      where: {
        address: address,
      },
    });
    console.log(data[0].dataValues.balance);

    if (data[0].dataValues.balance < balance) {
      return res.status(201).send("Insufficient Balance");
    }
    const currentBalance = data[0].dataValues.balance;
    const newBalance = currentBalance - balance;
    const updatedBalance = await Addresses.update(
      { balance: newBalance },
      {
        where: {
          address: address,
        },
      }
    );
    console.log(updatedBalance);

    const toData = await Addresses.findAll({
      where: {
        address: toAddress,
      },
    });

    const toCurrentBalance = toData[0].dataValues.balance;
    const toNewBalance = toCurrentBalance + balance;
    const toUpdatedBalance = await Addresses.update(
      { balance: toNewBalance },
      {
        where: {
          address: toAddress,
        },
      }
    );

    var txHash = '0x' + crypto.randomBytes(30).toString('hex');
    var block = crypto.randomInt(25689, 845841);
  
    
    const txData = {
        From: address,
        To: toAddress,
        Balance: balance + ' ETH',
        Hash: txHash,
        Timestamp: timestamp.now(),
        Status: 'Success',
        Block: block
    }

    console.log(txData);

    return res.status(201).send(txData);
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = {
  sendTransaction,
};
