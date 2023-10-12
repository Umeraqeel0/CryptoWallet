import axios from "axios";

const API_URL = "http://localhost:3001/admin/";

class AddressDetails {

  getRegisterUserById(id, accessToken) {
    console.log("ID", id);
    console.log("ID", accessToken);
    return axios.get(API_URL + "getRegisterUserById/" + id, {
      headers: {
        'Authorization': `${accessToken}`
      }
    })
  };

  updateBalanceByAddress(address, balance) {
    if(address && balance){
      return axios.post(API_URL + "updateBalanceByAddress/" + address, {
        balance
      });
    }
    
  }

  getRegisterUserByAddress(address, accessToken) {
    console.log("ID", address);
    console.log("ID", accessToken);
    return axios.get(API_URL + "getRegisterUserByAddress/" + address, {
      headers: {
        'Authorization': `${accessToken}`
      }
    })
  };

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AddressDetails();