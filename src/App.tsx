import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import Posts from './components/Posts/Posts';
const logo = require('./assets/img/ball.png')

function App() {
  return (
    <div className="App">
      <header className="header">
        <NavLink to='/' className="logo">
          <img src={logo} alt="logo" />
        </NavLink>
        <div className="menu">Menu</div>
      </header>
      <main>
        <Route path='/' />
        <Route path='/users' component={UsersContainer} />
        <Route path='/posts' component={Posts} />
      </main>
    </div>
  );
}

export default App;
