import axios from "axios";
import {RegisterRequest} from "../types/ApiTypes";

class UserService {
    getMe() {
        return axios.get('/user/me');
    }

    getUsers() {
        return axios.get('/usersWithoutMe');
    }

    register({name, photo, email, password}: RegisterRequest) {
        return axios.post('/auth/register', {
            name,
            photo,
            email,
            password
        })
    }
}

export default new UserService();
