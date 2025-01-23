import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaBook, FaPhone } from 'react-icons/fa'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); 
  };

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/about') {
      setActiveLink('about');
    } else if (path === '/contact') {
      setActiveLink('contact');
    } else if (path === '/courses') {
      setActiveLink('courses');
    } else {
      setActiveLink('home');
    }
  }, []);

  return (
    <nav className="bg-white shadow-md py-4 px-6 transition-all ease-in-out duration-300 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/home"
          className="text-red-600 text-3xl font-bold flex items-center cursor-pointer"
          onClick={() => handleLinkClick('home')}
        >
          <span className="mr-2 text-lg">🎓</span>
          <span>Shiksha Sagar</span>
        </Link>
        
        <div className="hidden sm:flex items-center space-x-8">
          <Link
            to="/home"
            className={`text-lg text-gray-700 hover:text-red-500 transition-all duration-300 cursor-pointer ${activeLink === 'home' ? 'text-red-500' : ''}`}
            onClick={() => handleLinkClick('home')}
          >
            <FaHome className="inline-block mr-1" /> Home
          </Link>

          <Link
            to="/about"
            className={`text-lg text-gray-700 hover:text-red-500 transition-all duration-300 cursor-pointer ${activeLink === 'about' ? 'text-red-500' : ''}`}
            onClick={() => handleLinkClick('about')}
          >
            <FaInfoCircle className="inline-block mr-1" /> About
          </Link>

          <Link
            to="/courses"
            className={`text-lg text-gray-700 hover:text-red-500 transition-all duration-300 cursor-pointer ${activeLink === 'courses' ? 'text-red-500' : ''}`}
            onClick={() => handleLinkClick('courses')}
          >
            <FaBook className="inline-block mr-1" /> Courses
          </Link>

          <Link
            to="/contact"
            className={`text-lg text-gray-700 hover:text-red-500 transition-all duration-300 cursor-pointer ${activeLink === 'contact' ? 'text-red-500' : ''}`}
            onClick={() => handleLinkClick('contact')}
          >
            <FaPhone className="inline-block mr-1" /> Contact
          </Link>
        </div>

        <div className="sm:hidden flex items-center">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-3xl text-gray-700 focus:outline-none"
          >
            {menuOpen ? 'X' : '≡'}
          </button>
        </div>
      </div>

      <div
        className={`sm:hidden ${menuOpen ? 'block' : 'hidden'} bg-white shadow-lg py-4 px-6 absolute top-0 left-0 w-full h-screen transition-all duration-300`}
      >
        <div className="flex flex-col items-center space-y-6">
          <Link
            to="/home"
            className={`text-lg text-gray-700 hover:text-red-500 transition-all duration-300 cursor-pointer ${activeLink === 'home' ? 'text-red-500' : ''}`}
            onClick={() => handleLinkClick('home')}
          >
            <FaHome className="inline-block mr-1" /> Home
          </Link>

          <Link
            to="/about"
            className={`text-lg text-gray-700 hover:text-red-500 transition-all duration-300 cursor-pointer ${activeLink === 'about' ? 'text-red-500' : ''}`}
            onClick={() => handleLinkClick('about')}
          >
            <FaInfoCircle className="inline-block mr-1" /> About
          </Link>

          <Link
            to="/courses"
            className={`text-lg text-gray-700 hover:text-red-500 transition-all duration-300 cursor-pointer ${activeLink === 'courses' ? 'text-red-500' : ''}`}
            onClick={() => handleLinkClick('courses')}
          >
            <FaBook className="inline-block mr-1" /> Courses
          </Link>

          <Link
            to="/contact"
            className={`text-lg text-gray-700 hover:text-red-500 transition-all duration-300 cursor-pointer ${activeLink === 'contact' ? 'text-red-500' : ''}`}
            onClick={() => handleLinkClick('contact')}
          >
            <FaPhone className="inline-block mr-1" /> Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
