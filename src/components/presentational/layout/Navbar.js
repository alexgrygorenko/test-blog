import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/home">
          <i className="fas fa-pencil-alt" /> Awesome Test Blog
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">All Posts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
