import React from "react";

import './styles.css'
import {Link} from "react-router-dom";

export const Header = () => {
    const isAuthorized = true;
    return (
        <header className="header">
            <span className="logo">Логотип</span>
            {
                isAuthorized && (
                    <nav className="navigation">
                        <Link to="/">Главная</Link>
                        <Link to="/tasks">Задания</Link>
                        <Link to="/transfer">Перевести баллы</Link>
                    </nav>
                )
            }
        </header>
    )
};
