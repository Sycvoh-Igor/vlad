import React from 'react'
import styles from '../User/User.module.scss'
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
        console.log('1');
        return (
            <ul className={styles.user}>
                <li>{this.props.user.id}</li>
                <li>{this.props.user.name}</li>
                <li>{this.props.user.email}</li>
                <li>{this.props.user.status}</li>
                <li>{this.props.user.gender}</li>
                <li>{this.props.user.created_at}</li>
                <li>{this.props.user.updated_at}</li>
            </ul>
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