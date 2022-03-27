import React, {ChangeEvent, useState} from "react";
import {Input} from "@alfalab/core-components/input";
import {Button} from "@alfalab/core-components/button";

import './styles.css'
import UserService from "../../services/UserService";
import {useNavigate} from "react-router";

export const LoginForm = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const change = (event: ChangeEvent<HTMLInputElement>, field: 'email' | 'password') => {
        const value = event.target.value;
        switch (field) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
        }
    };
    const submitForm = async () => {
        const result = await UserService.login({
            email,
            password,
        });

        if (result) {
            navigate('/profile');
        }
    };
    return (
        <>
            <h1 className="title">Есть аккаунт?</h1>
            <form>
                <Input
                    className="field"
                    value={email}
                    placeholder="Email"
                    type="email"
                    onChange={(event) => change(event, 'email')}
                />
                <Input
                    className="field"
                    value={password}
                    placeholder="Пароль"
                    type="password"
                    onChange={(event) => change(event, 'password')}
                />
                <Button
                    className="button"
                    onClick={submitForm}
                >
                    Войти
                </Button>
            </form>
        </>
    )
};
