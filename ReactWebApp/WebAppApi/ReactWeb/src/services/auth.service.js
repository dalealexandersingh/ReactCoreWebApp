import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;
const API_URL_SCOPE = process.env.REACT_APP_API_URL_SCOPE;

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + API_TOKEN, {
                "client_id": username,
                "client_secret": password,
                "scope": API_URL_SCOPE
            })
            .then(response => {

                if (response.data.access_token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }else {
                    return null;
                }

                return response.data;

            }).catch(err => {
                return null;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    isLoggedIn() {
        var user = JSON.parse(localStorage.getItem('user'));
        return user == null;
    }

    getUsername(){
        var user = JSON.parse(localStorage.getItem('user'));
        return user.username;
    }
}

export default new AuthService();