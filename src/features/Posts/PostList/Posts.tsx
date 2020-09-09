import React from 'react'
import Paginator from '../../../components/common/paginator/Paginator'
import Post from './components/Post'
import { PostsProps } from './types';
import Preloader from '../../../components/common/preloader/Preloader';
import styles from './Posts.module.scss'


let Posts: React.FC<PostsProps> = (props) => {
    return (
        <div className={styles.postsStyle}>
            <h1>Статьи</h1>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                totalItemsCount={props.totalPostsCount} pageSize={props.pageSize} portionSize={props.portionSize} />
            <div className={styles.postsStyle__content}>
                {props.isFetching ? <Preloader /> :
                    props.posts.map((u, index) =>
                        <Post post={u} key={`${u.id}_${index}`} />
                    )
                }
            </div>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                totalItemsCount={props.totalPostsCount} pageSize={props.pageSize} portionSize={props.portionSize} />
        </div>
    )
}

export default Posts