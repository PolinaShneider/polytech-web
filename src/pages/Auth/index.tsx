import React from "react";
import {Grid} from '@alfalab/core-components/grid';
import {RegistrationForm} from "../../components/RegistrationForm";
import {LoginForm} from "../../components/LoginForm";
import './styles.css';

export const Auth = () => {
    return (
        <Grid.Row justify="between">
            <Grid.Col>
                <RegistrationForm/>
            </Grid.Col>
            <Grid.Col className="right">
                <LoginForm/>
            </Grid.Col>
        </Grid.Row>
    )
};
