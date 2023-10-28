const db = require("../models");
const Addresses = db.userAddresses;
const UserTransaction = db.userTransaction;
const networks = require("../config/networks");
const ethers = require("ethers");

const sendTransaction = async (req, res) => {
  try {
    const customHttpProvider = ethers.getDefaultProvider(
      networks.PUBLIC_SEPOLIA_TESTNET
    );

    const { balance, toAddress } = req.body;
    const fromAddress = req.params.address;

    const data = await Addresses.findAll({
      where: {
        address: fromAddress,
      },
    });
    const privateKey = data[0].dataValues.privateKey;

    const wallet = new ethers.Wallet(privateKey, customHttpProvider);
  
    let tx = {
      to: toAddress,
      value: ethers.parseUnits(balance, 'ether'),
    };
    console.log("first1")
    wallet.sendTransaction(tx).then((txObj) => {
      console.log("txHash", txObj);
      return res.status(201).send(txObj);
    });
    // const response = await wallet.sendTransaction(tx);
    //   console.log("first");    
    //   console.log("txHash", response);
      

  } catch (error) {
    console.log("s")
    return res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = {
  sendTransaction,
};
