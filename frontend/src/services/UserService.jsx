import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/sessions/";
const USER_API_BASE_URL_LOGIN = "http://localhost:8080/sessions/login";

class UserService {
    saveUser(user) {
        return axios.post(USER_API_BASE_URL, user);
    }
    
    loginUser(user) {
        return axios.post(USER_API_BASE_URL_LOGIN, user);
    }
}

export default new UserService();