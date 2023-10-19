const db = require("../models");
const RegisterUser = db.registerUser;
const Addresses = db.userAddresses;
const UserTransaction = db.userTransaction;

const crypto = require('crypto');

const addAddress = async (req, res) => {

  const id = req.params.id;
  console.log(id);
  var address = '0x' + crypto.randomBytes(16).toString('hex');
  try {
    const data = await Addresses.create({
      address: address,
      balance: 0,
      registerUserId: id
    });

    return res.status(201).send(data);

  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

const getUserAccount = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    Addresses.findAll({
      where: {
        registerUserId: id
      }
    }).then(users => {
      res.send(users);
    })
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

const updateBalance = async (req, res) => {
  try {
    const { balance } = req.body;
    const address = req.params.address;
    console.log(balance, address);
    Addresses.update({ balance: balance }, {
      where: {
        address: address
      }
    }).then(users => {
      return res.status(201).send(users);
      //res.send("User Updated", users);
    })
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

const addBalance = async (req, res) => {
  try {
    const { balance } = req.body;
    const address = req.params.address;
    console.log(balance, address);
    const data = await Addresses.findAll({
      where: {
        address: address
      }
    });
    console.log(data[0].dataValues.balance);

    const currentBalance = data[0].dataValues.balance;
    const newBalance = currentBalance + balance;    
    const updatedBalance = await Addresses.update({ balance: newBalance }, {
      where: {
        address: address
      }
    });

    return res.status(201).send(updatedBalance);

  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

const getUserBalanceByAddress = async (req, res) => {
  try {
    const address = req.params.address;
    Addresses.findAll({
      where: {
        address: address
      }
    }).then(users => {
      res.send(users);
    })
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

const getAllUserAccounts = async (req, res) => {
  try {
    const userAcc = await Addresses.findAll();
    return res.status(201).send(userAcc);

  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

const getAllUserTx = async (req, res) => {
  try {
    const userAcc = await UserTransaction.findAll();
    return res.status(201).send(userAcc);

  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};



module.exports = {
  updateBalance,
  addAddress,
  getUserAccount,
  getAllUserAccounts,
  getUserBalanceByAddress,
  addBalance,
  getAllUserTx
}