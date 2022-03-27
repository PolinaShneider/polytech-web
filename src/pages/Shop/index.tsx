import React, {useEffect, useState} from "react";
import {Notification} from '@alfalab/core-components/notification';
import GoodsService from "../../services/GoodsService";
import {Product} from "../../types/ApiTypes";

import './styles.css'
import {Button} from "@alfalab/core-components/button";
import TransferService from "../../services/TransferService";

export const Shop = () => {
    const [products, setProducts] = useState([] as Product[]);
    useEffect(() => {
        GoodsService.getProducts().then((products) => {
            setProducts(products);
        })
    }, []);

    const [status, setStatus] = React.useState("positive" as "positive" | "negative");
    const [isVisible, setIsVisible] = React.useState(false);
    const hideNotification = React.useCallback(() => setIsVisible(false), []);

    const buyProduct = (productId: string) => {
        TransferService.purchase(productId).then((result) => {
            setIsVisible(true);
            setStatus(Boolean(result) ? "positive" : "negative");
        }).catch(() => {
            setIsVisible(true);
            setStatus("negative");
        });
    };

    return (
        <div>
            <h1 className="profile-title">Каталог</h1>
            <Notification
                badge={status}
                title="Уведомление о покупке"
                visible={isVisible}
                offset={180}
                onClickOutside={hideNotification}
                onClose={hideNotification}
                onCloseTimeout={hideNotification}
            >
                {status === "positive" ? "Поздравляем с покупкой" : "Не удалось совершить покупку :("}
            </Notification>
            <div className="products">
                {products.map((item, key) => {
                    return (
                        <div className="product" key={key}>
                            <h3 className="product-title">{item.title}</h3>
                            <p>{item.description}</p>
                            <div>{item.price} баллов</div>
                            <Button className="button product-button"
                                    onClick={() => buyProduct(item.id)}>Купить</Button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
