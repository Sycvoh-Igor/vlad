import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import PostsContainer from './components/Posts/PostsContainer';
const logo = require('./assets/img/ball.png')

function App() {
  const [menuOpen, setmenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setmenuOpen(!menuOpen)
  }

  return (
    <div className="App">
      <header className="header">
        <NavLink to='/' className="logo">
          <span>LOGO</span>
          <img src={logo} alt="logo" />
        </NavLink>
        <div className="toggler" onClick={toggleMenu}  >Menu
          {menuOpen &&
            <div className='menu'>
              <div className='menu__item'><NavLink to='/users'>Пользователи</NavLink></div>
              <div className='menu__item'><NavLink to='/posts'>Посты</NavLink></div>
            </div>
          }
        </div>
      </header>
      <main>
        <Route path='/' />
        <Route path='/users' component={UsersContainer} />
        <Route path='/posts' component={PostsContainer} />
      </main>
    </div >
  );
}

export default App;
