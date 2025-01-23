import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>

      <section className="relative bg-gray-100 pt-20 pb-12 px-6 text-center" data-aos="fade-up" data-aos-duration="1000">
        <div className="max-w-7xl mx-auto text-center text-gray-800">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight pt-5">About Shiksha Sagar</h1>

          <div className="overflow-hidden relative h-12 mt-6 pt-5">
            <div className="absolute whitespace-nowrap animate-scroll-left-smooth text-red-600 text-2xl font-semibold" data-aos="zoom-in">
              At Shiksha Sagar, we are dedicated to providing high-quality digital education across Nepal, empowering learners to unlock their full potential!
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <div className="max-w-7xl mx-auto text-center">
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguEpeKZvfOYsQwV-KgtPWBNa-4lLIRrnsPq3FVqoCon-X-Z-ON1PKDXF-qlKbADZ7ObcHwgEpZQlxA5ULwrsm4FyV3Y2nYwmIiTamwIpktCkhZBX2XdAvK0AyEUVJYZwsJLgDsZgED7D4/s1600/Canopy.png" 
            alt="About Image" 
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-300" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-8">
            <div className="w-full sm:w-1/2">
              <p className="text-lg sm:text-xl text-gray-600">
                At Shiksha Sagar, we aim to revolutionize education by offering a comprehensive and interactive learning platform that caters to learners of all backgrounds.
              </p>
            </div>
            <div className="w-full sm:w-1/2">
              <img 
                src="https://www.riseup.ai/hs-fs/hubfs/teamwork.jpg?width=750&name=teamwork.jpg" 
                alt="Mission Image" 
                className="rounded-lg shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-100" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Our Values</h2>
          <div className="mt-12 space-y-16">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="w-full sm:w-1/2">
                <img 
                  src="https://production.static.classvr.com/production/12518_main_1737371424.png" 
                  alt="Innovation" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="w-full sm:w-1/2 text-left">
                <h3 className="text-xl font-semibold text-red-600">Innovation</h3>
                <p className="mt-4 text-gray-700">
                  We embrace innovation, continuously improving our platform and offering cutting-edge tools to make learning engaging and efficient.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="w-full sm:w-1/2 text-left">
                <h3 className="text-xl font-semibold text-red-600">Accessibility</h3>
                <p className="mt-4 text-gray-700">
                  We believe in making education accessible to everyone, with a focus on affordability and inclusivity for all learners.
                </p>
              </div>
              <div className="w-full sm:w-1/2">
                <img 
                  src="https://thumbs.dreamstime.com/b/disabled-girl-wheelchair-other-children-sitting-laptops-learning-coding-informatics-lesson-school-inclusive-88204932.jpg?w=992" 
                  alt="Accessibility" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="w-full sm:w-1/2">
                <img 
                  src="https://cdn.theeducationhub.org.nz/wp-content/uploads/2021/03/2.-Practices-of-effective-professional-learning-communities-scaled.jpg" 
                  alt="Excellence" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="w-full sm:w-1/2 text-left">
                <h3 className="text-xl font-semibold text-red-600">Excellence</h3>
                <p className="mt-4 text-gray-700">
                  Our platform strives for excellence, providing top-tier content and support from industry experts to ensure quality education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
