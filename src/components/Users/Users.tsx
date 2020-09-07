import React from 'react'
import Paginator from '../common/paginator/Paginator'
import User from './User/User'
import { usersType } from '../../types/types';

type PropsType = {
    users: Array<usersType>
    currentPage: number,
    pageSize: number,
    totalUsersCount: number,
    followingInProgress: Array<number>,
    portionSize: number,
    onPageChanged: (pageNumber: number) => void
};

let Users: React.FC<PropsType> = (props) => {
    console.log(props.users);
    return (
        <div>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} portionSize={props.portionSize} />
            {
                props.users.map(u =>
                    <User />
                )
            }
        </div>
    )
}

export default Users
