import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import PostsContainer from './components/Posts/PostsContainer';
import UserInfo from './components/Users/UserInfo/UserInfo';
import UserForm from './components/Users/UserForm/UserForm';

const logo = require('./assets/img/ball.png')

function App() {
  const [menuOpen, setmenuOpen] = React.useState(false)
  const refMenu = React.useRef(null)

  const toggleMenu = () => {
    setmenuOpen(!menuOpen)
  }

  const menuClose = () => {
    setmenuOpen(false)
  }

  const handleOutsideClick = (event: any) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(refMenu.current)) {
      setmenuOpen(false)
    };
  }


  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
  }, [])

  return (
    <div className="App">
      <header className="header">
        <div className="header__container">
          <NavLink to='/' className="logo">
            <span>LOGO</span>
            <img src={logo} alt="logo" />
          </NavLink>
          <nav ref={refMenu}>
            <div className="toggler" onClick={toggleMenu}  >Menu
            </div>
            {menuOpen &&
              <div className='menu' >
                <div className='menu__item'><NavLink to='/users' onClick={menuClose}>Пользователи</NavLink></div>
                <div className='menu__item'><NavLink to='/posts' onClick={menuClose}>Статьи</NavLink></div>
              </div>
            }
          </nav>
        </div>
      </header>
      <main>
        <Switch>
          <Route exact path='/' />
          <Route exact path='/users' component={UsersContainer} />
          <Route exact path='/users/create' component={UserForm} />
          <Route path='/users/:id?' component={UserInfo} />
          <Route path='/posts/' component={PostsContainer} />
        </Switch>
      </main>
    </div >
  );
}

export default App;
