const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left mb-6 sm:mb-0">
          <h3 className="text-2xl font-semibold">Shiksha Sagar</h3>
          <p className="text-sm mt-2">
            Empowering learners for a smarter digital future in Nepal. Join us in revolutionizing education!
          </p>
        </div>
      </div>

      <div className="mt-12 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Shiksha Sagar. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
