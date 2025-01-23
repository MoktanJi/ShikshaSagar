import React, { useEffect, useRef } from "react";
import comingSoon from "../data/comingSoon.json";
import Typing from "react-typing-effect";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Home = () => {
  const courseRefs = useRef(comingSoon.map(() => React.createRef()));

  const handleMouseEnter = (index) => {
    if (courseRefs.current[index]) {
      courseRefs.current[index].current.style.animationPlayState = 'paused'; 
    }
  };

  const handleMouseLeave = (index) => {
    if (courseRefs.current[index]) {
      courseRefs.current[index].current.style.animationPlayState = 'running'; 
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div>
      <section
        className="relative h-[75vh] bg-red-600 text-white py-10 px-6 text-center flex items-center"
        data-aos="fade-up" 
        data-aos-duration="1500"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.globalgiving.org/pfil/17757/ph_17757_62751.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
          <h1 className="mb-6 text-5xl font-extrabold text-white md:text-6xl">
            <span>Welcome to </span>
            <span className="text-red-600">
              <Typing
                speed={150} 
                eraseSpeed={150} 
                eraseDelay={300} 
                text={['Shiksha Sagar']} 
                cursorColor="yellow" 
              />
            </span>
          </h1>
          <p className="mt-4 text-xl sm:text-2xl max-w-3xl mx-auto opacity-90">
            Empowering learners across Nepal with smarter, 100% free digital education for a brighter future!
          </p>
        </div>
      </section>

      <section className="py-6 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800" data-aos="fade-up">
            Our Vision
          </h2>
          <div className="overflow-hidden relative h-12 mt-6">
            <div className="absolute whitespace-nowrap animate-scroll-left-smooth text-red-600 text-2xl font-semibold" data-aos="zoom-in">
              At Shiksha Sagar, education is 100% free for everyone, anywhere, anytime!
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8" data-aos="fade-up">
            Coming Soon
          </h2>
          <div className="overflow-hidden">
            <div className="flex space-x-8 animate-scroll-left-smooth">
              {comingSoon.map((item, index) => (
                <div
                  key={index}
                  ref={courseRefs.current[index]}
                  className="flex-shrink-0 w-full max-w-xs bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  onMouseEnter={() => handleMouseEnter(index)} 
                  onMouseLeave={() => handleMouseLeave(index)} 
                  data-aos="fade-up" 
                  data-aos-duration="1000"
                  data-aos-delay={index * 100} 
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-36 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-600 text-white py-16 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold" data-aos="fade-up">
            Start Your Learning Journey Today
          </h2>
          <p className="mt-4 text-xl sm:text-2xl opacity-80">
            Join a growing community of learners shaping the future with the power of free education. No barriers, no limits — just learning.
          </p>
          <a
            href="/courses"
            className="mt-6 inline-block bg-white text-red-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 animate-bounce"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            Explore Courses
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
