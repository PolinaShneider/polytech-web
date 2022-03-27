import React from "react";
import {TransferOperation} from "../../types/ApiTypes";

import './styles.css';
import moment from "moment";

const getPaymentType = (type: 'transfer' | 'purchase' | 'present') => {
    return {
        transfer: 'перевод',
        purchase: 'покупка',
        present: 'подарок'
    }[type];
};

export const TransferItem = (item: TransferOperation) => {
    return (
        <div className={["transfer-item", item.paymentType].join(" ")}>
            <h3 className="transfer-item-title">{getPaymentType(item.paymentType)}</h3>
            <div className="transfer-item-text">дата: {moment(item.createdAt).format("MM-DD-YYYY hh:mm:ss")}</div>
            <div className="transfer-item-text">количество: {item.paymentAmount} баллов</div>
            {item.outgoingAccount?.name && (
                <div className="transfer-item-text">получатель: {item.outgoingAccount?.name}</div>
            )}
        </div>
    )
};
