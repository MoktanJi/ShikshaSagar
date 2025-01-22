const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-20 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Welcome to Shiksha Sagar
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
            Empowering learners across Nepal with a smarter digital education
            experience. Join us in revolutionizing education for a brighter future.
          </p>
          <a
            href="#signup"
            className="mt-6 inline-block bg-white text-red-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Join for Free
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Key Features</h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            Shiksha Sagar offers a range of features to enhance your learning
            experience. From interactive courses to smart tools, explore what we
            have to offer.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-red-600">Interactive Courses</h3>
              <p className="mt-4 text-gray-700">
                Engage with interactive content that enhances learning with quizzes,
                videos, and real-world scenarios.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-red-600">Smart Tools</h3>
              <p className="mt-4 text-gray-700">
                Use our intelligent tools to track progress, get personalized
                recommendations, and optimize your learning path.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-red-600">Expert Mentors</h3>
              <p className="mt-4 text-gray-700">
                Connect with industry experts for guidance, mentorship, and support
                throughout your learning journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">About Shiksha Sagar</h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto text-gray-600">
            Shiksha Sagar is committed to delivering high-quality education through
            innovative technology. Our platform helps learners across Nepal acquire
            new skills and knowledge, bridging the gap between traditional education
            and the future of learning.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-red-600 text-white py-16 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold">Start Your Learning Journey Today</h2>
          <p className="mt-4 text-lg sm:text-xl">
            Don&#39;t wait! Sign up now and start exploring the future of education.
          </p>
          <a
            href="#signup"
            className="mt-6 inline-block bg-white text-red-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Sign Up Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
