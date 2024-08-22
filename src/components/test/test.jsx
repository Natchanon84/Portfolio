import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components.css"

import profile_img from '../../img/img1.jpg';
import img1 from '../../img/computer.svg';
import img2 from '../../img/computer.svg';
import img3 from '../../img/checklist.svg';
import img4 from '../../img/comment.svg';
import img5 from '../../img/contact.svg';

function Test() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={profile_img} className="profile-img" alt="Profile" />
          <div className="name">
            <h5>Natchanon Phomuang</h5>
            <h6>Front End Developer</h6>
          </div>
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/mywork">
                <img src={img1} alt="My Portfolio" /> My Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <img src={img2} alt="About" /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                <img src={img4} alt="Education" /> Education
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experience">
                <img src={img3} alt="Experience" /> Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <img src={img5} alt="Contact" /> Contact
              </Link>
            </li>
          </ul>
          <div className="container-stack">
            <h6>Tech Stack</h6>
            <p>- HTML</p>
            <p>- CSS</p>
            <p>- JavaScript</p>
            <p>- React.js</p>
            <p>- Bootstrap</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Test;