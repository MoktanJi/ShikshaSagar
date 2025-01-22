import { useState } from 'react';
import { Link } from 'react-router-dom';

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

  return (
    <nav className="bg-white shadow-md py-4 px-6 transition-all ease-in-out duration-300 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo and Brand Name */}
        <Link
          to="/home"
          className="text-red-600 text-3xl font-bold flex items-center cursor-pointer"
          onClick={() => handleLinkClick('home')}
        >
          <span className="mr-2 text-lg">🎓</span>
          <span>Shiksha Sagar</span>
        </Link>

        {/* Search Bar (hidden on mobile) */}
        <div className="hidden sm:flex flex-grow max-w-lg mx-6">
          <input
            type="text"
            placeholder="Search for courses or content"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex items-center space-x-8">
          {['home', 'about', 'courses', 'teach', 'contact'].map((link) => (
            <Link
              key={link}
              to={`/${link}`}
              className={`text-lg text-gray-700 hover:text-red-500 transition-all duration-300 cursor-pointer ${
                activeLink === link ? 'text-red-500' : ''
              }`}
              onClick={() => handleLinkClick(link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          ))}

          <Link
            to="/signup"
            className="px-4 py-2 text-white bg-red-600 rounded-full hover:bg-red-700 transition-all duration-300"
            onClick={() => handleLinkClick('signup')}
          >
            Join for Free
          </Link>
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Navigation Links */}
      <div
        className={`sm:hidden ${menuOpen ? 'block' : 'hidden'} bg-white shadow-lg py-4 px-6 absolute top-0 left-0 w-full h-screen transition-all duration-300`}
      >
        <div className="flex flex-col items-center space-y-6">
          {['home', 'about', 'courses', 'teach', 'contact'].map((link) => (
            <Link
              key={link}
              to={`/${link}`}
              className={`text-lg text-gray-700 hover:text-red-500 transition-all duration-300 cursor-pointer ${
                activeLink === link ? 'text-red-500' : ''
              }`}
              onClick={() => handleLinkClick(link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          ))}

          <Link
            to="/signup"
            className="px-4 py-2 text-white bg-red-600 rounded-full hover:bg-red-700 transition-all duration-300"
            onClick={() => handleLinkClick('signup')}
          >
            Join for Free
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
