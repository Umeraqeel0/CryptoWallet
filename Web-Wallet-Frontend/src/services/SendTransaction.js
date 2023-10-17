import axios from "axios";

const API_URL = "http://localhost:3001/admin/";

class SendTransaction {
  sendTx(address, balance, toAddress) {
    return axios.post(API_URL + "sendTransaction/" + address, {
      balance,
      toAddress,
    });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new SendTransaction();
