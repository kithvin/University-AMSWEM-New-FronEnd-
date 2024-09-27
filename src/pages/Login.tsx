import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa'; // Added FaUser for username icon

const Login = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/register');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    navigate('/');
  };

  return (
    <div className="flex w-full min-h-screen p-0 m-0">
      {/* Left Side: Background Image */}
      <div className="hidden w-1/2 bg-center bg-no-repeat bg-cover lg:flex" style={{ backgroundImage: 'url(/src/img/alu1.jpg)' }}>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex flex-col items-center justify-start w-full bg-amber-100 lg:w-1/2">
        <div className="mt-24 mb-20">
          <h1 className="text-5xl font-bold text-center text-black">
            Alumni Management with Event Management
          </h1>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="relative w-full h-auto xl:w-[80%] 2xl:w-[70%] 3xl:w-[60%] bg-base-100 rounded-lg shadow-md flex flex-col items-center p-5 pb-7 gap-8 pt-20 xl:pt-7 bg-white">
          
          {/* Logo and Title */}
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-black p-2 rounded-md">
              Alumni Management Login
            </span>
          </div>

          {/* Welcome Message */}
          <span className="mb-4 text-xl font-semibold">
            Hello, 👋 Welcome AMSEM!
          </span>

          {/* Login Form Inputs */}
          <div className="flex flex-col items-stretch w-full gap-3 bg">
            
            {/* Email Input with Icon */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                required
                className="w-full h-auto pl-10 pr-3 min-h-[50px] text-lg border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 transition duration-200"
                placeholder="Email"
              />
            </div>

            {/* Password Input with Icon */}
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                required
                className="w-full h-auto pl-10 pr-4 min-h-[50px] text-lg border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 transition duration-200"
                placeholder="Password"
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center justify-center mt-4">
              <div className="flex items-center gap-2 form-control">
                <label className="flex items-center gap-2 cursor-pointer label">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded-md checkbox checkbox-primary"
                  />
                  <span className="text-xs label-text">
                    Remember me 
                  </span>
                </label>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="mt-4 btn btn-block btn-primary bg-indigo-600 text-white font-semibold py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Login 
            </button>

            {/* Redirect to Registration */}
            <div className="flex justify-center mt-4 text-blue-700 text-md">
              Don't you have an account?{' '}
              <span className="ml-2">
                <a
                  onClick={handleLoginRedirect}
                  className="flex justify-center text-purple-600 cursor-pointer hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-100 hover:underline"
                >
                  Register Here! 
                </a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

