import React from 'react';
import { connect } from 'react-redux';
import { getPostsThunkCreator, onPageChangedThunkCreator } from '../../../redux/posts-reducer';
import Posts from './Posts'
import { postType } from '../../../types/types';
import { AppStateType } from '../../../redux/store';


type MapStatePropsType = {
    currentPage: number,
    pageSize: number,
    posts: Array<postType>,
    isFetching: boolean,
    totalPostsCount: number,
    portionSize: number
}
type MapDispatchPropsType = {
    getPostsThunkCreator: (currentPage: number) => void,
    onPageChangedThunkCreator: (pageNumber: number) => void,
}
type OwnPropsType = {
    //
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class PostsContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getPostsThunkCreator(this.props.currentPage);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.onPageChangedThunkCreator(pageNumber);
    }

    render() {

        return <>
            <Posts
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                posts={this.props.posts}
                totalPostsCount={this.props.totalPostsCount}
                portionSize={this.props.portionSize}
                onPageChanged={this.onPageChanged}
                isFetching={this.props.isFetching}
            />
        </>

    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.posts.posts,
        pageSize: state.posts.pageSize,
        totalPostsCount: state.posts.totalPostsCount,
        currentPage: state.posts.currentPage,
        isFetching: state.posts.isFetching,
        portionSize: state.posts.portionSize
    }
}



export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,
    { getPostsThunkCreator, onPageChangedThunkCreator })(PostsContainer)
