import React from 'react'
import styles from './Post.module.scss'
import { postType } from '../../types/types';
import { NavLink } from 'react-router-dom';

type PropsType = {
    post: postType
}

let Post: React.FC<PropsType> = ({ post }) => {
    return (
        <ul className={styles.post}>
            <li className={styles.post__item}>{post.id}</li>
            <li className={styles.post__item}>{post.user_id}</li>
            <li className={styles.post__item}>{post.title}</li>
            <li className={styles.post__item}><NavLink className='btn' to={'/posts/:' + post.id}>Подробнее</NavLink></li>
        </ul>
    )
}

export default Post
