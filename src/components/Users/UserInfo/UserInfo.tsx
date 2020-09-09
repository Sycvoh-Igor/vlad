import React from 'react'
import styles from './UserInfo.module.scss'
import { RouteComponentProps } from 'react-router-dom';
import { AppStateType } from '../../../redux/store';
import { getUserInfo } from '../../../redux/user-reducer';
import { connect } from 'react-redux';

class UserInfo extends React.Component<PropsType> {


    refreshUser() {
        let userId: number | null = +this.props.match.params.id

        if (!userId) {
            console.log("ID should exist in ULR or in state")
        } else {
            this.props.getUserInfo(userId)
        }
    }

    componentDidMount(): void {
        this.refreshUser()
    }
    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.refreshUser()
        }
    }

    render() {
        return (<>
            {this.props.user.id !== +this.props.match.params.id ? <> </> :
                <div className='center'>
                    <h1>Пользователь {this.props.user.name}</h1>
                    <ul className={styles.userInfo}>
                        <li className={styles.userInfo__item}>Пользователь id:{this.props.user.id}</li>
                        <li className={styles.userInfo__item}>Статус: {this.props.user.status}</li>
                        <li className={styles.userInfo__item}>Пол: {this.props.user.gender}</li>
                        <li className={styles.userInfo__item}>Email: {this.props.user.email}</li>
                        <li className={styles.userInfo__item}>Создан: {this.props.user.created_at}</li>
                        <li className={styles.userInfo__item}>Обновлен: {this.props.user.updated_at}</li>
                    </ul>
                </div>
            }
        </>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    user: state.user.user

})

export default connect<mapStateToPropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, { getUserInfo })(UserInfo)


type mapStateToPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchPropsType = {
    getUserInfo: (userId: number) => void
}

type PathParamsType = {
    id: string
}

type PropsType = mapStateToPropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>;