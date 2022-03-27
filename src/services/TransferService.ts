import axios from "axios";

import {config} from "../config";
import authHeader from "./utils";
import {TransferOperationSuccess} from "../types/ApiTypes";

class TransferService {
    transferTo(paymentAmount: number, incomingAccount: string): Promise<TransferOperationSuccess> {
        return axios.post(`${config.BACKEND_URL}/operations/transfer`, {
            paymentAmount,
            incomingAccount,
        }, {
            headers: authHeader()
        }).then(({data}) => {
            return data.response;
        }).catch((error) => {
            console.log(error)
        });
    }

    purchase(productId: string): Promise<TransferOperationSuccess> {
        return axios.post(`${config.BACKEND_URL}/operations/purchase`, {
            productId,
        }, {
            headers: authHeader()
        }).then(({data}) => {
            return data.response;
        }).catch((error) => {
            console.log(error)
        });
    }
}

export default new TransferService();
