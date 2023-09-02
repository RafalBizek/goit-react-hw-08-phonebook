import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/actions';
import { useAuthUser } from 'hooks/useAuthUser';
import { useNavigate } from 'react-router-dom';
import css from './NavigationBar.module.css';

export const NavigationBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLogged } = useAuthUser();

  const handleLogout = () => {
    navigate('/goit-react-hw-08-phonebook/login');
    dispatch(logOut());
  };

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink
          className={css.navLink}
          activeClassName="active"
          to="/goit-react-hw-08-phonebook"
        >
          Home
        </NavLink>
        <NavLink
          className={css.navLink}
          activeClassName={css.active}
          to="/goit-react-hw-08-phonebook/contacts"
        >
          Contacts
        </NavLink>
        {isLogged ? (
          <button className={css.logoutButton} onClick={handleLogout}>
            Log out
          </button>
        ) : (
          <>
            <NavLink
              className={css.navLink}
              activeClassName={css.active}
              to="/goit-react-hw-08-phonebook/login"
            >
              Login
            </NavLink>
            <NavLink
              className={css.navLink}
              activeClassName={css.active}
              to="/goit-react-hw-08-phonebook/register"
            >
              Register
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};
