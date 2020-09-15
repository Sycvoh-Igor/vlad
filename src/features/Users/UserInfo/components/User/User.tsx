import React, { useMemo } from 'react'
import { UserProps } from './types';
import Card from "components/Card";
import { CardData } from "components/Card/types";



let User: React.FC<UserProps> = ({ user }) => {
    const data = useMemo<CardData>(
        () => [
            { key: 1, label: 'Пользователь id', value: user.id },
            { key: 2, label: 'Имя', value: user.name },
            { key: 3, label: 'Email', value: user.email },
            { key: 4, label: 'Пол', value: user.gender },
            { key: 5, label: 'Имя', value: user.status },
            { key: 6, label: 'Создан', value: user.created_at },
            { key: 7, label: 'Обновлен', value: user.updated_at },
        ],
        [user]
    );
    return (
        <Card data={data} />
    )
}

export default User
