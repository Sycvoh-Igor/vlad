import React from 'react'
import Preloader from 'components/preloader/Preloader';
import { RootState } from "app/store";
import { useDispatch, useSelector } from "react-redux";
import Paginator from 'components/paginator';
import User from 'components/User/User';
import { fetchUsers } from './actions';
import styles from './UsersList.module.scss'

type filterItemType = {
    name: string,
    type: string
}

const filterItems: Array<filterItemType> = [
    { name: 'Имя пользователя', type: 'name' },
    { name: 'Пол пользователя', type: 'gender' },
    { name: 'Статус пользователя', type: 'status' }]


let UsersList: React.FC = React.memo((props) => {
    const [popUp, setPopUp] = React.useState(false)
    const refSort = React.useRef(null)
    const { page, limit, fetching, data, total, error, filterOption } = useSelector((state: RootState) => state.users.userList)
    const dispatch = useDispatch()

    const activeLabel = ensure(filterItems.find((obj) => obj.type === filterOption)).name

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


    const onClickPageChange = React.useCallback((currentPage: number) => {
        dispatch(fetchUsers(currentPage))
    }, [dispatch])

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, [])

    React.useEffect(() => {
        onClickPageChange(page)
    }, [])

    return (
        <div className={styles.postsStyle}>
            <h1>Пользователи</h1>
            <div className={styles.filter}>
                <div className={styles.filter__popup} ref={refSort}>
                    <b>Сортировка по:</b>
                    <span onClick={togglePopUp}>{activeLabel}</span>
                </div>
                {popUp &&
                    <ul className={styles.filter__items}>
                        {filterItems.map((obj) => {
                            return (
                                <li className={styles.filter__link}
                                    onClick={() => SelectSort(obj.type)} key={`${obj.type}`}>{obj.name}</li>
                            )
                        })}
                    </ul>
                }
            </div>
            <Paginator currentPage={page} onPageChanged={onClickPageChange}
                total={total} pageSize={limit} portionSize={10} />
            { error ? <div>Что-то пошло не так</div> :
                <div className={styles.postsStyle__content}>
                    {fetching ? <Preloader /> :
                        data.map((u) =>
                            <User user={u} key={`${u.id}`} />
                            // <Card data={u} route='users' key={`${u.id}`} />
                        )
                    }
                </div>
            }
            <Paginator currentPage={page} onPageChanged={onClickPageChange}
                total={total} pageSize={limit} portionSize={10} />
        </div>
    )
}
)

export default UsersList