import React from 'react'
import Post from './Post/Post'
import styles from './Posts.module.scss'
import { postType } from '../../types/types';
import Preloader from '../preloader/Preloader';
import Paginator from 'components/paginator';

type PropsType = {
    posts: Array<postType>
    currentPage: number,
    pageSize: number,
    total: number,
    portionSize: number,
    isFetching: boolean,
    onPageChanged: (pageNumber: number) => void
};

let Posts: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.postsStyle}>
            <h1>Статьи</h1>
            {/* <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                total={props.total} pageSize={props.pageSize} portionSize={props.portionSize} />
            <div className={styles.postsStyle__content}>
                {props.isFetching ? <Preloader /> :
                    props.posts.map((u, index) =>
                        <Post post={u} key={`${u.id}_${index}`} />
                    )
                }
            </div>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                total={props.total} pageSize={props.pageSize} portionSize={props.portionSize} /> */}
        </div>
    )
}

export default Posts