import React from 'react'
import Preloader from 'components/preloader/Preloader';
import { RootState } from "app/store";
import { useDispatch, useSelector } from "react-redux";
import Paginator from 'components/paginator';
import Post from 'components/Posts/Post/Post';
import styles from './PostsList.module.scss'
import { fetchPosts } from './actions';


let PostsList: React.FC = () => {
    const { page, totalPages, fetching, data, total, error } = useSelector((state: RootState) => state.posts.postList)
    const dispatch = useDispatch()

    const onClickPageChange = (currentPage: number) => {
        dispatch(fetchPosts(currentPage))
    }

    React.useEffect(() => {
        onClickPageChange(page)
    }, [])

    return (
        <div className={styles.postsStyle}>
            <h1>Статьи</h1>
            <Paginator currentPage={page} onPageChanged={onClickPageChange}
                total={total} pageSize={totalPages} portionSize={20} />
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
                total={total} pageSize={totalPages} portionSize={20} />
        </div>
    )
}

export default PostsList