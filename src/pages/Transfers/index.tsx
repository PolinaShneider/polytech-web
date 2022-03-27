import React, {useEffect, useState} from "react";
import {Button} from "@alfalab/core-components/button";
import {Input} from "@alfalab/core-components/input";
import {OptionShape, Select} from '@alfalab/core-components/select';
import UserService from "../../services/UserService";
import './styles.css';
import TransferService from "../../services/TransferService";
import {TransferOperation} from "../../types/ApiTypes";
import {TransferItem} from "../../components/TransferItem";
import {TransferOperations} from "../../components/TransferOperations";

type OnSelectProps = {
    selected: OptionShape | null;
    selectedMultiple: OptionShape[];
    initiator: OptionShape | null;
    name?: string;
}

export const Transfers = () => {
    const [totalBonuses, setTotalBonuses] = useState(0);
    const [userOperations, setUserOperations] = useState([] as TransferOperation[]);
    const [bonusesToTransfer, setBonusesToTransfer] = useState('');
    const [recipientId, setRecipientId] = useState('');
    const [otherUsers, setOtherUsers] = useState([] as OptionShape[]);

    useEffect(() => {
        getTransfersHistory();
        getUserBalance();
        getOtherUsers()
    }, []);

    const selectOption = ({selected}: OnSelectProps) => {
        if (selected) {
            setRecipientId(selected.key)
        }
    };

    const transfer = () => {
        TransferService.transferTo(+bonusesToTransfer, recipientId).then((result) => {
            setTotalBonuses(result.userCurrentBalance);
            getTransfersHistory();
            return result;
        }).catch((error) => {
            console.log(error);
        });
    };

    const getUserBalance = () => {
        UserService.getMe().then((data) => {
            setTotalBonuses(data.balance)
        });
    };

    const getOtherUsers = () => {
        UserService.getUsers().then((users) => {
            const selectOptions = users.map((user) => {
                return {
                    key: user.id,
                    content: user.name,
                }
            });
            setOtherUsers(selectOptions)
        });
    };

    const getTransfersHistory = () => {
        UserService.getOperations().then((result) => {
            setUserOperations(result);
            return result;
        }).catch((error) => {
            console.log(error);
        });
    };

    return <div>
        <h1 className="transfers-title">Поделись бонусами с друзьями</h1>
        <div className="transfers">
            <div className="info">
                <h3 className="user-text transfer-title">
                    Ваш баланс: <span className="user-balance">{totalBonuses} бонусов</span>
                </h3>
                <Select
                    options={otherUsers}
                    className="select-field"
                    placeholder="id получателя"
                    onChange={selectOption}
                />
                <Input
                    className="field"
                    placeholder="Сколько отправляем?"
                    type="text"
                    onChange={(event) => setBonusesToTransfer(event.target.value)}
                />
                <div className="buttons-holder">
                    <Button
                        className="button"
                        onClick={transfer}
                    >
                        Перевести
                    </Button>
                </div>
            </div>
            <TransferOperations userOperations={userOperations}/>
        </div>
    </div>
};
