import Navbar from './Navbar';
// ...
import { Link } from 'react-router-dom';
import Search from './Search'
import { useState } from 'react';


const Header = (props) => {

    
  return (
    <header>
      <div className="nav-area">
        <Link to="/shop-all" className="logo">
          Secret Potions | SoHo, New York
        </Link>
        <Navbar />
        {/* <Search onChange={props.onChange}/> */}
      </div>
    </header>
  );
};

export default Header;