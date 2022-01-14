import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import { UserContext } from '../contexts/UserContext';

const Header = () => {
  const [usernameSearchTerm, setUsernameSearchTerm] = useState('');
  const { isLoggedIn, handleLogin, handleLogout } =
    useLogin(usernameSearchTerm);
  const { username, loginFailure } = useContext(UserContext);

  const handleLoginForm = (event) => {
    event.preventDefault();
    handleLogin();
    setUsernameSearchTerm('');
    console.log(username);
  };

  const handleUsernameChange = (event) => {
    setUsernameSearchTerm(event.target.value);
  };

  return (
    <div className='headerParent'>
      <div className='header'>
        <Link to='/reviews' className='link header__link'>
          <h1 className='header__title'>Game Ratings</h1>
        </Link>
        {/* FIXME: Currently not being used due to lack of api capability. */}
        {/* <div className='header__searchBar'> */}
        {/* <form className='header__searchBar'>
          <label htmlFor='search'>
            <img
              className='searchBar__image searchBar__element'
              src='https://www.seekpng.com/png/full/920-9209972_magnifying-glass-png-white-search-icon-white-png.png'
              alt='Search Icon'
            />
          </label>
          <input
            id='search'
            className='searchBar__input searchBar__element'
            type='text'
            placeholder='Search'
          ></input>
        </form> */}
        {/* FIXME: Currently not being used due to lack of api capability. */}
        {isLoggedIn ? (
          <div className='header__user'>
            <p className='user__username'>{username}</p>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/OOjs_UI_icon_logOut-ltr-invert.svg/1024px-OOjs_UI_icon_logOut-ltr-invert.svg.png'
              alt='Sign Out'
              className='user__signout'
              onClick={handleLogout}
            />
          </div>
        ) : (
          <form className='header__login' onSubmit={handleLoginForm}>
            <input
              type='text'
              placeholder={loginFailure ? 'Invalid username' : 'Username'}
              id='username'
              className={
                loginFailure
                  ? 'login__input--status-failed'
                  : 'login__input--status-default'
              }
              value={usernameSearchTerm}
              onChange={handleUsernameChange}
            ></input>
            <label
              htmlFor='username'
              className='login__text'
              type='submit'
              onClick={handleLoginForm}
            >
              Login
            </label>
          </form>
        )}
      </div>
    </div>
    // </div>
  );
};

export default Header;
