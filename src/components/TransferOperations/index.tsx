import React from "react";
import {TransferItem} from "../TransferItem";
import {TransferOperation} from "../../types/ApiTypes";

import './styles.css'

export const TransferOperations = ({userOperations}: {userOperations: TransferOperation[]}) => {
    return (
        <div className="user-transfers">
            <h3 className="user-transfers-title">Операции пользователя</h3>
            {userOperations.map((item, index) => <TransferItem {...item} key={index}/>)}
        </div>
    )
};
