import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';
import './navbar.css';

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <section id="navbar">
      <div className="container navbar__container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="topnav-right">
          <nav ref={navRef}>
            <a href="/#">Home</a>
            <a href="/#">About</a>
            <a href="/#">Menu</a>
            <a href="/#">Feedback</a>
            <a href="/#">ContactUs</a>

            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
        </div>

        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </section>
  );
}

export default Navbar;
