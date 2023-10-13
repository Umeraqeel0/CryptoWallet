const db = require("../models");
const RegisterUser = db.registerUser;
const Addresses = db.userAddresses;
const crypto = require('crypto');
var bcrypt = require("bcryptjs");
const addArray = [];

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    var address = '0x' + crypto.randomBytes(16).toString('hex');
    const data = await RegisterUser.create({
      name: name,
      email: email,
      password: bcrypt.hashSync(password, 8)
    });
    const data1 = await Addresses.create({
      registerUserId: data.dataValues.id,
      address:address,
      balance: 0
    });
    if(data && data1){
      return res.status(201).send(data);
    }
    
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

const addAddress = async (req, res) => {

  const id = req.params.id;
  console.log(id);
  var address = '0x' + crypto.randomBytes(16).toString('hex');
  const data = await RegisterUser.findAll({
    where: {
      id: id
    }
  });
  if(data == 0) {
    return res.status(201).send("Invalid Id");
  }
  const prevAdd = data[0].dataValues.address;
  prevAdd.push(address);
  try {
    RegisterUser.update({ address: prevAdd }, {
      where: {
        id: id
      }
    }).then(users => {
      return res.status(201).send("Address added");
    })
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const id = req.params.id;
    console.log(id);
    RegisterUser.update({ name: name, email: email, password: password }, {
      where: {
        id: id
      }
    }).then(users => {
      return res.status(201).send(users);
      //res.send("User Updated", users);
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
    RegisterUser.update({ balance: balance }, {
      where: {
        address: [address]
      }
    }).then(users => {
      return res.status(201).send(users);
      //res.send("User Updated", users);
    })
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

const getRegisterUser = async (req, res) => {
  try {
    RegisterUser.findAll().then(users => {
      res.send(users);
    })
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

const getRegisterUserById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    RegisterUser.findAll({
      where: {
        id: id
      }
    }).then(users => {
      res.send(users);
    })
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

const getRegisterUserByAddress = async (req, res) => {
  try {
    const address = req.params.address;
    console.log(address);
    RegisterUser.findAll({
      where: {
        address: [address]
      }
    }).then(users => {
      console.log(users);
      res.send(users);
    })
    console.log("1")
  } catch (error) {
    console.log("2")
    return res.status(error.status || 500).json({ message: error.message });
  }
};


module.exports = {
  createUser,
  getRegisterUser,
  getRegisterUserById,
  getRegisterUserByAddress,
  updateUser,
  updateBalance,
  addAddress
}