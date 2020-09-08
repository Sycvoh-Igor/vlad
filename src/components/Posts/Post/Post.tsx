import React from 'react'
import styles from './Post.module.scss'
import { postType } from '../../../types/types';
import { NavLink } from 'react-router-dom';

type PropsType = {
    post: postType
}

let Post: React.FC<PropsType> = ({ post }) => {
    return (
        <ul className={styles.post}>
            <li>{post.id}</li>
            <li>{post.user_id}</li>
            <li>{post.title}</li>
            <li><NavLink to={'/posts/:' + post.id}>Подробнее</NavLink></li>
        </ul>
    )
}

export default Post
