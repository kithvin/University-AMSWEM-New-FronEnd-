import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; // Importing necessary icons

const Register = () => {
  const navigate = useNavigate(); // Initializing the navigate function for routing

  // Function to handle navigation to the login page
  const handleLoginRedirect = () => {
    navigate('/login'); // Redirects to the login page
  };

  return (
    <div className="flex w-full min-h-screen p-0 m-0">
      {/* Left Side: Background Image */}
      <div className="hidden w-1/2 bg-center bg-no-repeat bg-cover lg:flex" style={{ backgroundImage: 'url(/src/img/alu2.jpg)' }}>
        {/* This div holds the background image for larger screens */}
      </div>
      
      {/* Right Side: Registration Form */}
      <div className="flex flex-col items-center justify-start w-full bg-orange-200 lg:w-1/2">
        <div className="mt-24 mb-20">
          {/* Title of the application */}
          <h1 className="text-5xl font-bold text-center text-black">
            Alumni Management with Event Management
          </h1>
        </div>
        
        <div className="relative w-full h-auto xl:w-[80%] 2xl:w-[70%] 3xl:w-[60%] bg-base-100 rounded-lg shadow-md flex flex-col items-center p-5 pb-7 gap-8 pt-20 xl:pt-7 bg-white">
          {/* Card container for the registration form */}
          
          {/* Logo and Title */}
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-black p-2 rounded-md">
              Alumni Management Register
            </span>
          </div>

          {/* Welcome Message */}
          <span className="mb-4 text-xl font-semibold">
            Hello, 👋 Welcome AMSEM!
          </span>

          {/* Registration Form */}
          <div className="flex flex-col items-stretch w-full gap-3">
            <div className="space-y-4">
              {/* Username Input with Icon */}
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  required
                  className="w-full h-auto pl-10 pr-3 min-h-[50px] text-lg border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 transition duration-200"
                  placeholder="Username" // Username placeholder
                />
              </div>

              {/* Email Input with Icon */}
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  required
                  className="w-full h-auto pl-10 pr-3 min-h-[50px] text-lg border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 transition duration-200"
                  placeholder="Email" // Email placeholder
                />
              </div>

              {/* Password Input with Icon */}
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  required
                  className="w-full h-auto pl-10 pr-3 min-h-[50px] text-lg border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 transition duration-200"
                  placeholder="Password" // Password placeholder
                />
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center justify-center mt-4">
              <div className="flex items-center gap-2 form-control">
                <label className="flex items-center gap-2 cursor-pointer label">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 rounded-md checkbox checkbox-primary"
                  />
                  <span className="text-xs label-text">
                    Remember me
                  </span>
                </label>
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit" 
              className="mt-4 btn btn-block btn-primary bg-indigo-600 text-white font-semibold py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Register
            </button>

            {/* Login Redirect Link */}
            <div className="flex justify-center mt-4 text-blue-700 text-md">
              Already have an account?{' '}
              <span className="ml-2">
                <a
                  onClick={handleLoginRedirect} // Redirects to the login page on click
                  className="flex justify-center text-purple-600 cursor-pointer hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-100 hover:underline"
                >
                  Login instead
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
