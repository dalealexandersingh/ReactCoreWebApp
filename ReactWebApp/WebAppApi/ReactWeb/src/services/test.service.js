import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.REACT_APP_API_URL;
const API_TEST = "api/Test/test";

class TestService {

  getTest() {
    return axios.get(API_URL + API_TEST, { headers: authHeader() });
  }

}

export default new TestService();