import React from 'react'
import styles from './Post.module.scss'
import { PostProps } from './types';
import { NavLink } from 'react-router-dom';



let Post: React.FC<PostProps> = ({ post }) => {
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
