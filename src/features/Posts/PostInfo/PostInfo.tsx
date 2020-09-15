import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store';
import styles from './PostInfo.module.scss'
import Preloader from 'components/preloader/Preloader';
import { fetchPost } from './actions';
import { useHistory, useParams, withRouter } from 'react-router-dom';
import Title from 'components/Title';
import Post from './components/Post';


let PostInfo: React.FC = () => {
    const { data, error, fetching } = useSelector((state: RootState) => state.posts.post)
    const dispatch = useDispatch()
    const history = useHistory()
    const params = useParams<{ id: string }>();
    const id = +params.id

    const getPost = React.useCallback((id: number) => {
        dispatch(fetchPost(id))
    }, [dispatch])

    React.useEffect(() => {
        getPost(id)
    }, [getPost, id])
    return (
        <div className={styles.root}>
            { error ? <>
                <div>Что-то пошло не так</div>
                <button onClick={() => getPost(id)}>Перезагрузить</button>
            </> :
                <div className={styles.content}>
                    {fetching ? <Preloader /> :
                        data.map((data) =>
                            <div className={styles.info} key={data.id}>
                                <Title title={data.title} />
                                <Post post={data} />
                            </div>
                        )
                    }
                </div>
            }
        </div >

    )
}

export default withRouter(PostInfo)
