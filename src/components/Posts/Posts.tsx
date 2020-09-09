import React from 'react'
import Paginator from '../common/paginator/Paginator'
import Post from './Post/Post'
import styles from './Posts.module.scss'
import { postType } from '../../types/types';
import Preloader from '../common/preloader/Preloader';

type PropsType = {
    posts: Array<postType>
    currentPage: number,
    pageSize: number,
    totalPostsCount: number,
    portionSize: number,
    isFetching: boolean,
    onPageChanged: (pageNumber: number) => void
};

let Posts: React.FC<PropsType> = (props) => {
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
        </div>
    )
}

export default Posts