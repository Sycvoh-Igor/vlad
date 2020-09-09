import React from 'react'
import Paginator from '../../../components/common/paginator/Paginator'
import Post from './components/Post'
import Preloader from '../../../components/common/preloader/Preloader';
import styles from './PostsList.module.scss'
import {RootState} from "../../../app/store";
import {useSelector} from "react-redux";


let PostsList: React.FC = () => {
    const { page, totalPages, fetching, data, total } = useSelector((state: RootState) => state.posts.list)
    return (
        <div className={styles.postsStyle}>
            <h1>Статьи</h1>
            <Paginator currentPage={page} onPageChanged={console.log}
                totalItemsCount={total} pageSize={totalPages} portionSize={10} />
            <div className={styles.postsStyle__content}>
                {fetching ? <Preloader /> :
                    data.map((u) =>
                        <Post post={u} key={`${u.id}`} />
                    )
                }
            </div>
            <Paginator currentPage={page} onPageChanged={console.log}
                       totalItemsCount={total} pageSize={totalPages} portionSize={10} />
        </div>
    )
}

export default PostsList