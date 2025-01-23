import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [coursesOpen, setCoursesOpen] = useState(false); // State for the courses dropdown menu (mobile)

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to handle active link selection
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // Close the menu when a link is clicked
    setCoursesOpen(false); // Close courses dropdown if open
  };

  // Function to toggle the courses dropdown menu
  const toggleCoursesMenu = () => {
    setCoursesOpen(!coursesOpen);
  };

  // List of course categories and their subcategories
  const courseCategories = [
    {
      category: 'Early Education',
      courses: [
        { name: 'Preschool Basics', path: '/courses/preschool-basics' },
        { name: 'Kindergarten Readiness', path: '/courses/kindergarten-readiness' },
      ],
    },
    {
      category: 'Primary School',
      courses: [
        { name: 'Mathematics', path: '/courses/primary-math' },
        { name: 'Science', path: '/courses/primary-science' },
        { name: 'English', path: '/courses/primary-english' },
      ],
    },
    {
      category: 'Secondary School',
      courses: [
        { name: 'Mathematics', path: '/courses/secondary-math' },
        { name: 'Physics', path: '/courses/secondary-physics' },
        { name: 'Biology', path: '/courses/secondary-biology' },
        { name: 'History', path: '/courses/secondary-history' },
      ],
    },
    {
      category: 'Higher Education',
      courses: [
        { name: 'Engineering', path: '/courses/engineering' },
        { name: 'Medicine', path: '/courses/medicine' },
        { name: 'Law', path: '/courses/law' },
        { name: 'Business Administration', path: '/courses/business-administration' },
      ],
    },
    {
      category: 'Skill Development',
      courses: [
        { name: 'Web Development', path: '/courses/web-development' },
        { name: 'Data Science', path: '/courses/data-science' },
        { name: 'Digital Marketing', path: '/courses/digital-marketing' },
        { name: 'Graphic Design', path: '/courses/graphic-design' },
      ],
    },
  ];

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

        {/* Search Bar */}
        <div className="hidden sm:flex flex-grow max-w-lg mx-6">
          <input
            type="text"
            placeholder="Search for courses or content"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex items-center space-x-8">
          {['home', 'about', 'teach', 'contact'].map((link) => (
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

          {/* Courses Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <button
              className={`text-lg flex items-center text-gray-700 hover:text-red-500 transition-all duration-300 cursor-pointer ${
                activeLink === 'courses' ? 'text-red-500' : ''
              }`}
            >
              Courses
              <FaChevronDown className="ml-1 text-sm" />
            </button>
            <div
              className={`absolute top-8 left-0 bg-white shadow-lg rounded-lg py-4 px-6 w-72 transition-all duration-300 ${
                coursesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              {courseCategories.map((category) => (
                <div key={category.category} className="mb-4">
                  <h3 className="font-semibold text-gray-800">{category.category}</h3>
                  {category.courses.map((course) => (
                    <Link
                      key={course.path}
                      to={course.path}
                      className="block px-2 py-1 text-gray-700 hover:bg-red-100 hover:text-red-500 transition-all duration-300"
                      onClick={() => handleLinkClick('courses')}
                    >
                      {course.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

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
          {['home', 'about', 'teach', 'contact'].map((link) => (
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

          {/* Mobile Courses Dropdown */}
          <div className="w-full">
            <button
              className={`text-lg flex items-center text-gray-700 hover:text-red-500 transition-all duration-300 cursor-pointer ${
                activeLink === 'courses' ? 'text-red-500' : ''
              }`}
              onClick={toggleCoursesMenu}
            >
              Courses
              <FaChevronDown className="ml-1 text-sm" />
            </button>
            {coursesOpen && (
              <div className="mt-2 bg-white shadow-lg rounded-lg py-2 w-full">
                {courseCategories.map((category) => (
                  <div key={category.category} className="mb-4">
                    <h3 className="font-semibold text-gray-800 px-4">{category.category}</h3>
                    {category.courses.map((course) => (
                      <Link
                        key={course.path}
                        to={course.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-500 transition-all duration-300"
                        onClick={() => handleLinkClick('courses')}
                      >
                        {course.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

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
