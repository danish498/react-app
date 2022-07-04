import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <NavLink to='/home' className={classes.logo}>
        {' '}
        Home
      </NavLink>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/laon-approved' activeClassName={classes.active}>
              Loan Approved
            </NavLink>
          </li>
          <li>
            <NavLink to='/shop' activeClassName={classes.active}>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to='/add-items' activeClassName={classes.active}>
              Add Items
            </NavLink>
          </li>
          <li>
            <NavLink to='cart' activeClassName={classes.active}>
              Add To Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
