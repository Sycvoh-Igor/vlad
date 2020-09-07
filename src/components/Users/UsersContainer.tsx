import React from 'react';
import { connect } from 'react-redux';
import { getUsersThunkCreator, onPageChangedThunkCreator } from '../../redux/users-reducer';
import Users from './Users'
import { usersType } from '../../types/types';
import Preloader from '../common/preloader/Preloader';
import { AppStateType } from '../../redux/store';


type MapStatePropsType = {
    currentPage: number,
    pageSize: number,
    users: Array<usersType>,
    isFetching: boolean,
    totalUsersCount: number,
    followingInProgress: Array<number>,
    portionSize: number
}
type MapDispatchPropsType = {
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void,
    onPageChangedThunkCreator: (pageNumber: number, pageSize: number) => void,
    // onPageChanged: () => void
}
type OwnPropsType = {
    //
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);

    }

    onPageChanged = (pageNumber: number) => {
        this.props.onPageChangedThunkCreator(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                followingInProgress={this.props.followingInProgress}
                portionSize={this.props.portionSize}
                onPageChanged={this.onPageChanged}
            />
        </>

    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress,
        portionSize: state.users.portionSize
    }
}



export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,
    { getUsersThunkCreator, onPageChangedThunkCreator })(UsersContainer)
