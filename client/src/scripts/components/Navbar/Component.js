import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ReactComponent as SearchIcon } from 'src/assets/icons/search_icon.svg';
import { ReactComponent as ProfileIcon } from 'src/assets/icons/profile_icon.svg';
import { ReactComponent as MessagesIcon } from 'src/assets/icons/messages_icon.svg';
import { ReactComponent as SettingsIcon } from 'src/assets/icons/settings_icon.svg';
import style from './style.module.css';

const Navbar = ({ location }) => {
  const { pathname } = location;

  return (
    <div className={style.navbar}>
      <Link
        className={classNames({
          [style.item]: true,
          [style.hover]: true,
          [style.active]: pathname === '/app/search',
        })}
        to='/app/search'
      >
        <SearchIcon className={style.item_icon} />
        <p>Search</p>
      </Link>
      <Link
        className={classNames({
          [style.item]: true,
          [style.hover]: true,
          [style.active]: pathname.startsWith('/app/profile'),
        })}
        to='/app/profile'
      >
        <ProfileIcon className={style.item_icon} />
        <p>Profile</p>
      </Link>
      <Link
        className={classNames({
          [style.item]: true,
          [style.hover]: true,
          [style.active]: pathname.startsWith('/app/messages'),
        })}
        to='/app/messages'
      >
        <MessagesIcon className={style.item_icon} />
        <p>Messages</p>
      </Link>
      <Link
        className={classNames({
          [style.item]: true,
          [style.hover]: true,
          [style.active]: pathname === '/app/settings',
        })}
        to='/app/settings'
      >
        <SettingsIcon className={style.item_icon} />
        <p>Settings</p>
      </Link>
    </div>
  );
};

Navbar.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Navbar;
