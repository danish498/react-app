// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import MenuItems from './MenuItems';

// // import classes from './Dropdown.module.css';
// import './Dropdown.css';

// const Dropdown = () => {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);

//   return (
//     <>
//       <ul
//         // className={classes.dropdown}
//         onClick={handleClick}
//         className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
//       >
//         {MenuItems.map((item, index) => {
//           return (
//             <li key={index}>
//               <Link
//                 className={item.cName}
//                 to={item.path}
//                 onClick={() => setClick(false)}
//               >
//                 {item.title}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

// export default Dropdown;

//---------------------------------------------------------------------------------------------//

// import { Menu, MenuItem } from '@szhsin/react-menu';
// import '@szhsin/react-menu/dist/index.css';
// import '@szhsin/react-menu/dist/transitions/slide.css';
// import { Link, NavLink } from 'react-router-dom';
// import classes from '../components/layout/MainNavigation.module.css';

// // import Shop from '../pages/Shop';

// const Dropdown = () => {
//   return (
//     <Menu
//       // menuStyle={{ }}
//       menuButton={
//         <NavLink to='/' activeClassName={classes.active}>
//           Shop
//         </NavLink>
//         // <MenuButton style={{ backgroundColor: 'transparent', borderWidth: 0 }}>
//         //   Shop{' '}
//         // </MenuButton>
//       }
//       transition
//     >
//       <MenuItem>
//         <Link to='/amazon'>New File</Link>
//       </MenuItem>
//       <MenuItem>
//         <Link to='/amazon'>Save</Link>
//       </MenuItem>
//       <MenuItem>
//         <Link to='/amazon'>Close Window</Link>
//       </MenuItem>
//     </Menu>
//   );
// };

// export default Dropdown;

import { useRef } from 'react';
import { ControlledMenu, MenuItem, useMenuState } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import './Dropdown.css';

import { Link } from 'react-router-dom';

const Dropdown = () => {
  const ref = useRef(null);
  const [menuProps, toggleMenu] = useMenuState({ transition: true });

  return (
    <>
      <div ref={ref} onMouseEnter={() => toggleMenu(true)}>
        Shop
      </div>

      <ControlledMenu
        {...menuProps}
        anchorRef={ref}
        onMouseLeave={() => toggleMenu(false)}
        onClose={() => toggleMenu(false)}
      >
        <MenuItem>
          <Link to='/amazon'> From Amazon </Link>
        </MenuItem>
        <MenuItem>
          <Link to='/flipkart'> From Flipkart </Link>
        </MenuItem>
        <MenuItem>
          <Link to='/macys'> From Macys </Link>
        </MenuItem>
      </ControlledMenu>
    </>
  );
};

export default Dropdown;
