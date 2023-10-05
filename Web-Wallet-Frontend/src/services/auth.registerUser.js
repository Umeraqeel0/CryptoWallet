import axios from "axios";

const API_URL = "http://localhost:3000/admin/";

class AuthService {
  login(email, password) {
    return axios.post(API_URL + "login", {
      email,
      password
    });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name, email, password) {
    return axios.post(API_URL + "registerUser", {
      name,
      email,
      password
    });
  }

  getRegisterUserById(id) {
    console.log("fihirst", id);
    return axios.get(API_URL + "getRegisterUserById/"+ id)
  };

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();