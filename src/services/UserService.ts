import axios from "axios";
import {LoginRequest, RegisterRequest, TransferOperation, UserSchema, UserWithBalance} from "../types/ApiTypes";
import {config} from "../config";
import authHeader from "./utils";

class UserService {
    getMe(): Promise<UserWithBalance> {
        return axios.get(`${config.BACKEND_URL}/user/me`, {
            headers: authHeader()
        }).then(({data}) => {
            return data.response;
        }).catch((error) => {
            console.log(error)
        });
    }

    getUsers(): Promise<UserSchema[]> {
        return axios.get(
            `${config.BACKEND_URL}/user/usersWithoutMe`, {headers: authHeader()}
        ).then(({data}) => {
            return data.response;
        }).catch((error) => console.log(error));
    }

    getOperations(): Promise<TransferOperation[]> {
        return axios.get(
            `${config.BACKEND_URL}/user/operations`,
            {headers: authHeader()}
        ).then(({data}) => {
            return data.response;
        }).catch((error) => {
            console.log(error);
        });
    }

    register({name, photo, email, password}: RegisterRequest) {
        return axios.post(`${config.BACKEND_URL}/auth/register`, {
            name,
            photo,
            email,
            password
        }).then(response => {
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        }).catch((error) => {
            console.log(error);
        });
    }

    isAuthorized() {
        return localStorage.getItem('user');
    }

    login({email, password}: LoginRequest) {
        return axios.post(`${config.BACKEND_URL}/auth/login`, {
            email,
            password
        }).then(response => {
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }

            return response.data;
        }).catch((error) => {
            console.log(error);
        });
    }

    logout() {
        localStorage.removeItem('user');
    }
}

export default new UserService();
