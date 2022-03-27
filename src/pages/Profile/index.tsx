import React, {useEffect, useState} from "react";
import {Button} from "@alfalab/core-components/button";
import './styles.css';

import UserService from "../../services/UserService";
import {Link} from "react-router-dom";

export const Profile = () => {
    const [userState, setUserState] = useState({bonuses: 0, id: '', name: '', src: ''});

    useEffect(() => {
        UserService.getMe().then((userData) => {
            const {balance, name, photo, id} = userData;
            setUserState({
                bonuses: balance,
                name,
                src: photo,
                id
            })

        })
    }, []);

    const avatarContent = userState.src ?
        <img width="180" src={userState.src}/> : <h3 className="avatar-placeholder">{userState.name[0]}</h3>;

    return <div>
        <h1 className="profile-title">Твой профиль</h1>
        <div className="profile">
            <div className="avatar-holder">
                <div className="avatar user-avatar">
                    {avatarContent}
                </div>
            </div>
            <div className="info">
                <h2 className="user-name">
                    {userState.name}
                </h2>
                <h3 className="user-text">
                    id: {userState.id}
                </h3>
                <h3 className="user-text">
                    Баланс: <span className="user-balance">{userState.bonuses} бонусов</span>
                </h3>
                <div className="buttons-holder">
                    <Button
                        className="button"
                    >
                        <Link to="/shop">
                            В каталог
                        </Link>
                    </Button>
                    <Button
                        className="button transfer-button"
                    >
                        <Link to="/transfer">
                            Перевести
                        </Link>
                    </Button>

                </div>
            </div>
        </div>
    </div>
};
