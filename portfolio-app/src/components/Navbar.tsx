import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import { Reorder as ReorderIcon } from '@mui/icons-material';

function Navbar() {
  const [expandedNavbar, setExpandedNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandedNavbar(false);
  }, [location]);

  return (
    <div className='navbar' id={expandedNavbar ? 'open' : 'close'}>
      <div className='toggleButton'>
        <button
          type='button'
          className=''
          onClick={() => setExpandedNavbar((prev) => !prev)}
        >
          Reorder
          <ReorderIcon />
        </button>
      </div>
      <div className='links'>
        <Link to='/'> Home </Link>
        <Link to='/projects'> Projects </Link>
        <Link to='/experience'> Experience </Link>
        <Link to='/hobbies'> Hobbies </Link>
      </div>
    </div>
  );
}

export default Navbar;
