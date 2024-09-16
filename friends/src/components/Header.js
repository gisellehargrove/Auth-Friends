import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {


  return (
    <header>
      <Link className="link" to='/create'>Create New Friend</Link>
      <Link className="link" to='/'>See All Friends</Link>
    </header>
  )
};


export default Header;
