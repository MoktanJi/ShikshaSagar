import PropTypes from "prop-types";
import { FaYoutube } from "react-icons/fa"; 

const CourseCard = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course) => (
        <a
          key={course.id}
          href={course.pdf} 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 block"
        >
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="mt-4 text-2xl font-semibold text-gray-800">{course.title}</h3>
          <p className="mt-2 text-gray-600">{course.description}</p>
          <p className="mt-2 text-gray-500 font-semibold">Duration: {course.duration}</p>
          <p className="mt-1 text-gray-500 font-semibold">Level: {course.level}</p>

          <div className="mt-4 flex space-x-4">
            {course.youtube && (
              <a
                href={course.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-700"
              >
                <FaYoutube size={28} />
              </a>
            )}
          </div>
        </a>
      ))}
    </div>
  );
};

CourseCard.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default CourseCard;
