const About = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative bg-cover bg-center h-[60vh]" style={{ backgroundImage: "url('https://www.example.com/your-image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Dark overlay */}
        <div className="relative z-10 max-w-7xl mx-auto text-center text-white py-20 px-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight pt-5">About Shiksha Sagar</h1>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
            We are dedicated to providing high-quality digital education across Nepal, empowering learners to unlock their full potential.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <div className="flex justify-center mt-8 gap-8">
            <div className="w-1/2">
              <p className="text-lg sm:text-xl text-gray-600">
                At Shiksha Sagar, we aim to revolutionize education by offering a comprehensive and interactive learning platform that caters to learners of all backgrounds.
              </p>
            </div>
            <div className="w-1/2">
              <img 
                src="https://www.example.com/mission-image.jpg" 
                alt="Mission Image" 
                className="rounded-lg shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Images on Left and Right */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Our Values</h2>
          <div className="mt-12">
            {/* First Value */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-12">
              <div className="w-full sm:w-1/2">
                <img 
                  src="https://www.example.com/innovation-image.jpg" 
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

            {/* Second Value */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-12">
              <div className="w-full sm:w-1/2 text-left">
                <h3 className="text-xl font-semibold text-red-600">Accessibility</h3>
                <p className="mt-4 text-gray-700">
                  We believe in making education accessible to everyone, with a focus on affordability and inclusivity for all learners.
                </p>
              </div>
              <div className="w-full sm:w-1/2">
                <img 
                  src="https://www.example.com/accessibility-image.jpg" 
                  alt="Accessibility" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Third Value */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-12">
              <div className="w-full sm:w-1/2">
                <img 
                  src="https://www.example.com/excellence-image.jpg" 
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

      {/* Join Us Section */}
      <section className="py-16 px-6 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Join Us in Our Journey</h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto">
            Be part of the future of education. Together, we can create an empowered, knowledgeable society.
          </p>
          <a
            href="#signup"
            className="mt-6 inline-block bg-white text-red-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Join for Free
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
