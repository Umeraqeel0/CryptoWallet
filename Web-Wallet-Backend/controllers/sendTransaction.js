const db = require("../models");
const Addresses = db.userAddresses;
const UserTransaction = db.userTransaction;
const crypto = require("crypto");
const timestamp = require("unix-timestamp");

const sendTransaction = async (req, res) => {
  try {
    var status = false;
    const { balance, toAddress } = req.body;
    const fromAddress = req.params.address;

    console.log(toAddress);
    console.log(fromAddress);

    var txHash = "0x" + crypto.randomBytes(30).toString("hex");
    var block = crypto.randomInt(25689, 845841);
    var nonce = crypto.randomInt(29, 841);

    var txData = {
      from: fromAddress,
      to: toAddress,
      balance: balance + " ETH",
      hash: txHash,
      timestamp: timestamp.now(),
      status: status,
      block: block,
      nonce: nonce,
    };
    console.log(txData);
    const data = await Addresses.findAll({
      where: {
        address: fromAddress,
      },
    });

    if (data[0].dataValues.balance < balance) {
      await UserTransaction.create(txData);
      return res.status(201).send("Insufficient Balance");
    }
    const currentBalance = data[0].dataValues.balance;
    const newBalance = currentBalance - balance;
    await Addresses.update(
      { balance: newBalance },
      {
        where: {
          address: fromAddress,
        },
      }
    );

    const toData = await Addresses.findAll({
      where: {
        address: toAddress,
      },
    });

    const toCurrentBalance = toData[0].dataValues.balance;
    const toNewBalance = toCurrentBalance + balance;
    await Addresses.update(
      { balance: toNewBalance },
      {
        where: {
          address: toAddress,
        },
      }
    );

    if (txData && data) {
      txData.status = true
      console.log(txData);
      await UserTransaction.create(txData);
      return res.status(201).send(txData);
    }
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = {
  sendTransaction,
};
