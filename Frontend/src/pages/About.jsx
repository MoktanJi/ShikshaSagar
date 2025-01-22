const About = () => {
  return (
    <div>
      <section className="bg-red-600 text-white py-20 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold">About Shiksha Sagar</h1>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
            We are dedicated to providing high-quality digital education across Nepal, empowering learners to unlock their full potential.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto text-gray-600">
            At Shiksha Sagar, we aim to revolutionize education by offering a comprehensive and interactive learning platform that caters to learners of all backgrounds.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Our Values</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-red-600">Innovation</h3>
              <p className="mt-4 text-gray-700">
                We embrace innovation, continuously improving our platform and offering cutting-edge tools to make learning engaging and efficient.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-red-600">Accessibility</h3>
              <p className="mt-4 text-gray-700">
                We believe in making education accessible to everyone, with a focus on affordability and inclusivity for all learners.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-red-600">Excellence</h3>
              <p className="mt-4 text-gray-700">
                Our platform strives for excellence, providing top-tier content and support from industry experts to ensure quality education.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Join Us in Our Journey</h2>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto text-gray-600">
            Be part of the future of education. Together, we can create an empowered, knowledgeable society.
          </p>
          <a
            href="#signup"
            className="mt-6 inline-block bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300"
          >
            Join for Free
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
