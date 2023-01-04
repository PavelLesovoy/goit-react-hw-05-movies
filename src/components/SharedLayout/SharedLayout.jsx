import css from './SharedLayout.module.css';
import styled from 'styled-components';
const { Suspense } = require('react');
const { NavLink, Outlet } = require('react-router-dom');

const StyledLink = styled(NavLink)`
  &.active {
    color: #fff;
    background-color: #838ae7;
  }
`;

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav className={css.navigation}>
          <StyledLink className={css.navigation__item} to="/" end>
            Home
          </StyledLink>
          <StyledLink className={css.navigation__item} to="/movies">
            Movies
          </StyledLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
