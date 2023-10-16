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
      name: name.toLowerCase(),
      email: email.toLowerCase(),
      password: bcrypt.hashSync(password, 8)
    });
    const data1 = await Addresses.create({
      registerUserId: data.dataValues.id,
      address: address,
      balance: 0
    });
    if (data && data1) {
      return res.status(201).send(data);
    }

  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const id = req.params.id;
    console.log(id);
    RegisterUser.update({ name: name.toLowerCase(), email: email.toLowerCase() }, {
      where: {
        id: id
      },
      order: [
        ['id', 'DESC'],
      ],
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
      },
      order: [
        ['id', 'DESC'],
      ],
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
      },
      order: [
        ['id', 'DESC'],
      ],
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
  updateUser
}