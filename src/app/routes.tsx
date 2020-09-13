
import PostsList from 'features/Posts/PostList'
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
            <Route path='/users/:id?' component={UserInfo} />
            <Route path='/posts/' component={PostsList} />
        </Switch>

    )
}
