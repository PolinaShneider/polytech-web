import {Product, UserWithBalance} from "../types/ApiTypes";
import axios from "axios";
import {config} from "../config";
import authHeader from "./utils";

const PRODUCTS_MOCK = [
    {
        "title": "Пылесос",
        "description": "Уберет вашу квартиру на 5+",
        "price": 500,
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "createdAt": "2022-03-27T12:29:30.571Z",
        "updatedAt": "2022-03-27T12:29:30.571Z"
    },
    {
        "title": "Айфон",
        "description": "Исполни её мечту уже наконец",
        "price": 2000,
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa2",
        "createdAt": "2022-02-27T12:29:30.571Z",
        "updatedAt": "2022-02-27T12:29:30.571Z"
    },
    {
        "title": "Чипсы",
        "description": "Просто и вкусно",
        "price": 10,
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa1",
        "createdAt": "2022-02-27T12:29:30.571Z",
        "updatedAt": "2022-02-27T12:29:30.571Z"
    }
];

class GoodsService {
    getProducts(): Promise<Product[]> {
        return axios.get(`${config.BACKEND_URL}/products`, {
            headers: authHeader()
        }).then(({data}) => {
            if (!data.response.length) {
                return PRODUCTS_MOCK;
            }
            return data.response;
        }).catch((error) => {
            console.log(error)
        });
    }
}

export default new GoodsService();
