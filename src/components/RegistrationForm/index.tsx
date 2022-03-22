import React, {ChangeEvent, useState} from "react";
import {Input} from "@alfalab/core-components/input";
import {Button} from "@alfalab/core-components/button";

import './styles.css';

export const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const change = (event: ChangeEvent<HTMLInputElement>, field: 'name' | 'email' | 'password') => {
        const value = event.target.value;
        switch (field) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
        }
    };
    const submitForm = () => {
        console.log('submit');
    };
    return (
        <>
            <h1 className="title">Регистрируйся получай бонусы уже сейчас!</h1>
            <form className="registration-form">
                <Input
                    className="field"
                    value={name}
                    placeholder="Введите имя"
                    type="text"
                    onChange={(event) => change(event, 'name')}
                />
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
                <SelectAvatar/>
                <Button
                    className="button"
                    onClick={submitForm}
                >
                    Регистрация
                </Button>
            </form>
        </>
    )
};

const SelectAvatar = () => {
    const emoji = ['👨🏻‍💻', '👩🏼‍💼', '🥷🏻', '🧝🏻'];
    return (
        <div className="select-avatar">
            <h2 className="select-avatar-title">Выберите аватарку:</h2>
            <div className="avatars-wrapper">
                {emoji.map((item, index) => <div className="avatar" key={index}>{item}</div>)}
            </div>
        </div>
    )
};
