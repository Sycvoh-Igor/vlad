
import PostEdit from 'features/Posts/PostEdit'
import PostForm from 'features/Posts/PostForm'
import PostInfo from 'features/Posts/PostInfo'
import PostsList from 'features/Posts/PostList'
import UserEdit from 'features/Users/UserEdit/UserEdit'
import UserForm from 'features/Users/UserForm/UserForm'
import UserInfo from 'features/Users/UserInfo'
import UsersList from 'features/Users/UserList'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' />
            <Route exact path='/users' component={UsersList} />
            <Route exact path='/users/create' component={UserForm} />
            <Route exact path='/users/:id?' component={UserInfo} />
            <Route path='/users/:id?/edit' component={UserEdit} />
            <Route exact path='/posts/' component={PostsList} />
            <Route exact path='/posts/create' component={PostForm} />
            <Route exact path='/posts/:id?' component={PostInfo} />
            <Route path='/posts/:id?/edit' component={PostEdit} />
        </Switch>

    )
}
