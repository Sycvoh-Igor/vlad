import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store';
import styles from './PostInfo.module.scss'
import Preloader from 'components/preloader/Preloader';
import { fetchPost } from './actions';
import { useParams, withRouter } from 'react-router-dom';
import Title from 'components/Title';


let PostInfo: React.FC = () => {
    const { data, error, fetching } = useSelector((state: RootState) => state.posts.post)
    const dispatch = useDispatch()
    const params = useParams();
    // @ts-ignore
    const id = +params.id
    const getPost = React.useCallback((id: number) => {
        dispatch(fetchPost(id))
    }, [dispatch])

    React.useEffect(() => {
        getPost(id)
    }, [getPost, id])
    console.log(data);
    return (
        <div className='center'>
            { error ? <>
                <div>Что-то пошло не так</div>
                <button onClick={() => getPost(id)}>Перезагрузить</button>
            </> :
                <>
                    {fetching ? <Preloader /> :
                        data.map((data) =>
                            <div key={data.id} >
                                <Title title={data.title} />
                                <ul className={styles.root}>
                                    <li className={styles.root__item}>id:{data.id}</li>
                                    <li className={styles.root__item}>Статья пользователя: {data.user_id}</li>
                                    <li className={styles.root__item}>Создан: {data.created_at}</li>
                                    <li className={styles.root__item}>Обновлен: {data.updated_at}</li>
                                    <li className={styles.root__item}>{data.body}</li>
                                </ul>
                            </div>
                        )
                    }
                </>
            }
        </div >

    )
}

export default withRouter(PostInfo)
