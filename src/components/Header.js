import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <Nav>
      <Logo src='/images/logo.svg'/>
      <NavMenu>

        <Link to='/'>
          <img src="/images/home-icon.svg" alt="home-icon" />
          <span>HOME</span>
        </Link>

        <a>
          <img src="/images/search-icon.svg" alt="search-icon" />
          <span>SEARCH</span>
        </a>

        <a>
          <img src="/images/watchlist-icon.svg" alt="watchlist-icon" />
          <span>WATCHLIST</span>
        </a>

        <a>
          <img src="/images/original-icon.svg" alt="original-icon" />
          <span>ORIGINAL</span>
        </a>

        <a>
          <img src="/images/movie-icon.svg" alt="movie-icon" />
          <span>MOVIE</span>
        </a>

        <a>
          <img src="/images/series-icon.svg" alt="series-icon" />
          <span>SERIES</span>
        </a>

      </NavMenu>

      <UserImg src='https://via.placeholder.com/100'/>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  justify-content: space-between;
  z-index: 999;
`;

const Logo = styled.img`
  width: 80px;

`;

const NavMenu = styled.div`
  display: flex;

  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 12px;

    img {
      height: 25px;
    }

    span {
      position: relative;
      font-size: 13px;
      letter-spacing: 1.42px;

      &:after {
        content: '';
        height: 2px;
        background: white; 
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all .3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;