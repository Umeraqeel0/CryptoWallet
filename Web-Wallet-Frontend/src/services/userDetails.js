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

    getUserAccount(id) {
        console.log("ID", id);
        return axios.get(API_URL + "getUserAccount/" + id, {
        })
    };

    updateBalanceByAddress(address, balance) {
        if (address && balance) {
            return axios.post(API_URL + "updateBalance/" + address, {
                balance
            });
        }

    }

    getUserBalanceByAddress(address) {
        console.log("ID", address);
        return axios.get(API_URL + "getUserBalanceByAddress/" + address, {
        })
    };

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