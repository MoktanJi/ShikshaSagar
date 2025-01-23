import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  const [primaryData, setPrimaryData] = useState([]);
  const [highData, setHighData] = useState([]);
  const [collegeData, setCollegeData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [technologyData, setTechnologyData] = useState([]);

  useEffect(() => {

    AOS.init({
      duration: 1000, 
      once: true, 
    });

    const fetchData = async () => {
      const primaryRes = await import('../data/primary.json');
      const highRes = await import('../data/high.json');
      const collegeRes = await import('../data/college.json');
      const skillsRes = await import('../data/skills.json');
      const techRes = await import('../data/technology.json');

      setPrimaryData(primaryRes.default);
      setHighData(highRes.default);
      setCollegeData(collegeRes.default);
      setSkillsData(skillsRes.default);
      setTechnologyData(techRes.default);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <h2
        className="text-3xl font-bold text-center mb-12 text-gray-800 pt-8"
        data-aos="fade-up" 
      >
        Courses Available for You
      </h2>

      <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          For Kids (Primary & Early Secondary Education)
        </h3>
        <CourseCard courses={primaryData} />
      </div>

      <div className="mb-12" data-aos="fade-up" data-aos-delay="200">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Middle School & High School Students
        </h3>
        <CourseCard courses={highData} />
      </div>

      <div className="mb-12" data-aos="fade-up" data-aos-delay="300">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          College Students & Adults
        </h3>
        <CourseCard courses={collegeData} />
      </div>

      <div className="mb-12" data-aos="fade-up" data-aos-delay="400">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Vocational & Skill-based Courses
        </h3>
        <CourseCard courses={skillsData} />
      </div>

      <div className="mb-12" data-aos="fade-up" data-aos-delay="500">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Technology Courses
        </h3>
        <CourseCard courses={technologyData} />
      </div>
    </div>
  );
};

export default Courses;
