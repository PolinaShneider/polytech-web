import React, {useEffect, useState} from "react";

import './styles.css'
import {Link, useLocation} from "react-router-dom";
import UserService from "../../services/UserService";

export const Header = () => {
    const location = useLocation();
    const [isAuthorized, setAuthorized] = useState(false);
    const logOut = () => {
        UserService.logout();
    };
    useEffect(() => {
        setAuthorized(Boolean(UserService.isAuthorized()));
    }, [location]);
    return (
        <header className="header">
            <Link className="logo" to="/">
                Логотип
            </Link>
            {
                isAuthorized ? (
                    <nav className="navigation">
                        <Link to="/">Главная</Link>
                        <Link to="/profile">Профиль</Link>
                        <Link to="/shop">Каталог</Link>
                        <Link to="/transfer">Перевести баллы</Link>
                        <Link to="/auth" onClick={logOut}>Выйти</Link>
                    </nav>
                ) : (
                    <nav className="navigation">
                        <Link to="/auth">Войти</Link>
                        <Link to="/register">Создать аккаунт</Link>
                    </nav>
                )
            }
        </header>
    )
};
