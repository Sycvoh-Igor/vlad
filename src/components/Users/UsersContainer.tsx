import React from 'react';
import { connect } from 'react-redux';
import { getUsersThunkCreator, onPageChangedThunkCreator } from '../../redux/users-reducer';
import Users from './Users'
import { usersType } from '../../types/types';
import { AppStateType } from '../../redux/store';


type MapStatePropsType = {
    currentPage: number,
    pageSize: number,
    users: Array<usersType>,
    isFetching: boolean,
    totalUsersCount: number,
    portionSize: number
    filterOption: string
}
type MapDispatchPropsType = {
    getUsersThunkCreator: (currentPage: number) => void,
    onPageChangedThunkCreator: (pageNumber: number) => void,
}
type OwnPropsType = {
    //
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.onPageChangedThunkCreator(pageNumber);
    }

    render() {

        return <>
            <Users
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                portionSize={this.props.portionSize}
                onPageChanged={this.onPageChanged}
                isFetching={this.props.isFetching}
                filterOption={this.props.filterOption}
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
        portionSize: state.users.portionSize,
        filterOption: state.users.filterOption
    }
}



export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,
    { getUsersThunkCreator, onPageChangedThunkCreator })(UsersContainer)
