import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaHome } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { AiFillMessage } from 'react-icons/ai';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiStats } from 'react-icons/bi';
import { BiMessageSquareAdd } from 'react-icons/bi';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <IconContext.Provider value={{ size: '42px', className: 'icon-logo' }}>
        <ul className="navbar-list">
          <li>
            <Link to="/home">
              <FaHome />
            </Link>
          </li>
          <li>
            <Link to="/post">
              <BiMessageSquareAdd />
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <FiSettings />
            </Link>
          </li>
          <li>
            <Link to="/stats">
              <BiStats />
            </Link>
          </li>
          <li>
            <Link to="/info">
              <AiOutlineInfoCircle />
            </Link>
          </li>
        </ul>
      </IconContext.Provider>
    </div>
  );
};

export default Navbar;
