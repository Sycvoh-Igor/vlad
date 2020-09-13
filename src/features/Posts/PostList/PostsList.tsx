import React from 'react'
import Preloader from 'components/preloader/Preloader';
import { RootState } from "app/store";
import { useDispatch, useSelector } from "react-redux";
import Paginator from 'components/paginator';
import Post from 'components/Post/Post';
import { fetchPosts } from './actions';
import Title from 'components/Title';
import Filter from 'components/Filter';
import { filterType } from './types';
import styles from './PostsList.module.scss'


const filterItems: Array<filterType> = [
    { name: 'Нет фильтрации', type: 'nofilter' },
    { name: 'ID пользователя', type: 'user_id' },
    { name: 'Название', type: 'title' }]

let PostsList: React.FC = () => {
    const { page, limit, fetching, data, total, error, filterOption } = useSelector((state: RootState) => state.posts.postList)
    const dispatch = useDispatch()

    const onClickPageChange = React.useCallback((currentPage: number) => {
        dispatch(fetchPosts(currentPage))
    }, [dispatch])

    React.useEffect(() => {
        onClickPageChange(page)
    }, [])
    return (
        <div className={styles.postsStyle}>
            <Title title='Статьи' />
            <Filter items={filterItems} filterOption={filterOption} />
            <Paginator currentPage={page} onPageChanged={onClickPageChange}
                total={total} pageSize={limit} portionSize={10} />
            { error ? <div>Что-то пошло не так</div> :
                <div className={styles.postsStyle__content}>
                    {fetching ? <Preloader /> :
                        data.map((u) =>
                            <Post post={u} key={`${u.id}`} />
                        )
                    }
                </div>
            }
            <Paginator currentPage={page} onPageChanged={onClickPageChange}
                total={total} pageSize={limit} portionSize={10} />
        </div>
    )
}

export default PostsList