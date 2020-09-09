import React from 'react'
import Paginator from '../common/paginator/Paginator'
import User from './User/User'
import styles from './Users.module.scss'
import { usersType } from '../../types/types';
import Preloader from '../common/preloader/Preloader';
import { NavLink } from 'react-router-dom';

type PropsType = {
    users: Array<usersType>
    currentPage: number,
    pageSize: number,
    totalUsersCount: number,
    portionSize: number,
    isFetching: boolean,
    filterOption: string,
    onPageChanged: (pageNumber: number) => void
};

type filterItemType = {
    name: string,
    type: string
}

const filterItems: Array<filterItemType> = [
    { name: 'Имя пользователя', type: 'name' },
    { name: 'Пол пользователя', type: 'gender' },
    { name: 'Статус пользователя', type: 'status' }]

let Users: React.FC<PropsType> = (props) => {
    const [popUp, setPopUp] = React.useState(false)
    const refSort = React.useRef(null)
    const activeLabel = ensure(filterItems.find((obj) => obj.type === props.filterOption)).name

    function ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
        if (argument === undefined || argument === null) {
            throw new TypeError(message);
        }
        return argument;
    }

    const togglePopUp = () => {
        setPopUp(!popUp)
    }

    const SelectSort = (type: string) => {
        // if (props.onClickFilterBy) {
        //     props.onClickFilterBy(type)
        // }
        setPopUp(false)
    }

    const handleOutsideClick = (event: any) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(refSort.current)) {
            setPopUp(false)
        };
    }


    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, [])

    return (
        <div className={styles.usersStyle}>
            <h1>Пользователи</h1>
            <div className={styles.filter}>
                <div className={styles.filter__popup} ref={refSort}>
                    <b>Сортировка по:</b>
                    <span onClick={togglePopUp}>{activeLabel}</span>
                </div>
                {popUp &&
                    <ul className={styles.filter__items}>
                        {filterItems.map((obj, index) => {
                            return (
                                <li className={styles.filter__link}
                                    onClick={() => SelectSort(obj.type)} key={`${obj.type}_${index}`}>{obj.name}</li>
                            )
                        })}
                    </ul>
                }
            </div>

            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} portionSize={props.portionSize} />
            <div className={styles.usersStyle__content}>
                {props.isFetching ? <Preloader /> :
                    props.users.map((u, index) =>
                        <User user={u} key={`${u.id}_${index}`} />
                    )
                }
            </div>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} portionSize={props.portionSize} />
            <NavLink className={styles.create} to='/users/create'>Создать пользователя</NavLink>
        </div>
    )
}

export default Users
