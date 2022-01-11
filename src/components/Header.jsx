import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/reviews' className='link header__link'>
        <h1 className='header__title'>Game Ratings</h1>
      </Link>
      <div className='header__searchBar'>
        <form>
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
        </form>
      </div>
    </div>
  );
};

export default Header;
