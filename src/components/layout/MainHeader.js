import { NavLink } from 'react-router-dom';
import Dropdown from '../Dropdown';

import classes from './MainNavigation.module.css';

const MainHeader = () => {
  // const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };

  return (
    <header className={classes.header}>
      <NavLink to='/home' className={classes.logo}>
        Home
      </NavLink>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/laon-approved' activeClassName={classes.active}>
              Loan Approved
            </NavLink>
          </li>
          <li /*   onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} */>
            <NavLink
              to='/shop'
              activeClassName={classes.active}
              // onClick={closeMobileMenu}
            >
              <Dropdown />
            </NavLink>
            {/* {dropdown && <Dropdown />} */}
          </li>
          <li>
            <NavLink to='/add-items' activeClassName={classes.active}>
              {/* Add Items  */} Users List
            </NavLink>
          </li>
          <li>
            <NavLink to='cart' activeClassName={classes.active}>
              Add Expenses
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
