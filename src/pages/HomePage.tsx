// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaCalendarAlt, FaBars, FaTimes, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

// // Navbar Component
// const Navbar: React.FC = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // Toggle sidebar visibility
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <nav className="bg-gray-900 p-6 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Sidebar Toggle Icon */}
//         <div className="text-white cursor-pointer" onClick={toggleSidebar}>
//           <FaBars className="text-2xl" />
//         </div>

//         {/* Centered Text and Icon */}
//         <div className="flex items-center justify-center flex-grow">
//           <FaCalendarAlt className="text-white text-2xl mr-4" />
//           <div className="text-white text-3xl font-extrabold">
//             Alumni Management with Event Management
//           </div>
//         </div>
//       </div>

//       {/* Sidebar */}
//       {isSidebarOpen && (
//         <>
//           {/* Sidebar Content */}
//           <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 shadow-lg z-50">
//             <div className="p-4 text-white">
//               <br />
//               <div className="flex justify-between items-center">
//                 <h2 className="text-xl font-bold">AMSEM</h2>
//                 <FaTimes className="text-2xl cursor-pointer" onClick={toggleSidebar} />
//               </div>
//               <br />
//               <ul className="space-y-4 mt-4">
//                 {/* Add your existing sidebar links */}
//                 {/* Example */}
//                 <li>
//                   <Link to="/VolunteerOPadmin" className="hover:text-gray-400">
//                     Volunteer Opportunity (Admin)
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/VolunteerOPuser" className="hover:text-gray-400">
//                     Volunteer Opportunity (User)
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/AdminNews" className="hover:text-gray-400">
//                     News and Updates (Admin)
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/UserNews" className="hover:text-gray-400">
//                     News and Updates (User)
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/Adminevent" className="hover:text-gray-400">
//                     Event Management (Admin)
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/Userevent" className="hover:text-gray-400">
//                     Event Management (User)
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/UpcomingProgramme" className="hover:text-gray-400">
//                     Monitor Programme
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/Jobadmin" className="hover:text-gray-400">
//                     Job Board (Admin)
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/JobUser" className="hover:text-gray-400">
//                     Job Board (User)
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/AlumniReport" className="hover:text-gray-400">
//                     Alumni Report
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/Donationadmin" className="hover:text-gray-400">
//                     Alumni Donation (Admin)
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/Donationuser" className="hover:text-gray-400">
//                     Alumni Donation (User)
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/Profile" className="hover:text-gray-400">
//                     Profile
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Overlay to close sidebar when clicking outside */}
//           <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleSidebar}></div>
//         </>
//       )}
//     </nav>
//   );
// };

// // Footer Component
// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-900 p-6 text-white mt-12">
//       <div className="container mx-auto text-center">
//         <div className="flex justify-center space-x-6">
//           {/* Social Icons */}
//           {/* <FaFacebookF className="text-xl cursor-pointer hover:text-gray-400" />
//           <FaTwitter className="text-xl cursor-pointer hover:text-gray-400" />
//           <FaLinkedinIn className="text-xl cursor-pointer hover:text-gray-400" /> */}
//         </div>
//         <p>&copy; 2024 Alumni Management with Event Management.</p>
//         <p>Godakawela, Sri Lanka</p>
//       </div>
//     </footer>
//   );
// };

// // HomePage Component
// const HomePage: React.FC = () => {
//   return (
//     <div className="font-sans bg-gray-50 min-h-screen">
//       <Navbar />
//       <main className="container mx-auto p-8">
//         {/* Main Content */}
//         <section className="text-center my-16">
//           <div className="bg-gradient-to-r from-blue-500 to-green-500 p-12 rounded-lg shadow-lg">
//             <h1 className="text-5xl font-extrabold text-white mb-4 animate__animated animate__fadeIn">
//               Welcome to Alumni Management with Event Management
//             </h1>
//             <p className="text-2xl text-white mb-6 animate__animated animate__fadeIn animate__delay-1s">
//               Your Pathway to Personalized Alumni Get Together
//             </p>
//             <p className="text-lg text-white mb-8 animate__animated animate__fadeIn animate__delay-2s">
//               Empowering every alumni to collaborate together.
//             </p>
//             <div className="flex justify-center space-x-4">
//               {/* <Link
//                 to="/login"
//                 className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
//               >
//                 Register
//               </Link> */}
//             </div>
//           </div>
//         </section>

//         {/* About Section */}
//         <section className="my-16 bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-4xl font-bold mb-4 text-gray-800">About Us</h2>
//           <p className="text-xl text-gray-700 text-justify">
//             Welcome to Alumni Management With Event Management where we seamlessly integrate alumni management with dynamic event management to foster lifelong connections and engagement. Our platform is designed to enhance the alumni experience by offering a comprehensive suite of tools for tracking leadership roles, managing events, and facilitating meaningful interactions. Whether you're an administrator aiming to streamline alumni relations or a member seeking to stay connected, our system provides an intuitive interface and robust features to meet your needs. With a focus on user-friendly design and effective management, Alumni Management With Event Management is dedicated to supporting the growth and success of your alumni network through innovative solutions and exceptional service.
//           </p>
//         </section>

//         {/* About Alumni Management With Event Management Section */}
//         <section className="my-16 bg-white p-8 rounded-lg shadow-lg">
//           <h2 className="text-4xl font-bold mb-4 text-gray-800">About Alumni Management With Event Management</h2>
//           <p className="text-lg text-gray-700 text-justify">
//             At Alumni Management with Event Management, we provide an integrated solution designed to bring together the best of alumni engagement and event coordination. Our platform simplifies the complexities of managing alumni networks while offering powerful tools for organizing and executing events. With our system, you can effortlessly track alumni achievements, coordinate impactful events, and foster meaningful connections within your community. Our user-centric approach ensures that both administrators and alumni have access to a seamless, intuitive experience. By combining advanced technology with a commitment to excellence, we empower organizations to enhance their alumni relations and drive successful events that strengthen their network.
//           </p>
//         </section>

//         {/* Contact Section */}
//         <section className="my-16 bg-white p-8 rounded-lg shadow-lg">
//           <h2 className="text-4xl font-bold mb-4 text-gray-800">Contact</h2>
//           <div className="text-lg text-gray-700 mb-4">
//             <div className="flex items-center mb-2">
//               <FaUser className="text-gray-500 mr-2" />
//               <p>
//                 <strong>Name:</strong> Mr. Director
//               </p>
//             </div>
//             <div className="flex items-center mb-2">
//               <FaEnvelope className="text-gray-500 mr-2" />
//               <p>
//                 <strong>Email:</strong> info@alumnimanagementwitheventmanagement.com
//               </p>
//             </div>
//             <div className="flex items-center mb-2">
//               <FaPhone className="text-gray-500 mr-2" />
//               <p>
//                 <strong>Phone:</strong> +94 76 963 1234
//               </p>
//             </div>
//             <div className="flex items-center mb-2">
//               <FaMapMarkerAlt className="text-gray-500 mr-2" />
//               <p>
//                 <strong>Address:</strong> Godakawela, Sri Lanka
//               </p>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default HomePage;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaBars, FaTimes, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBell, FaCommentDots } from 'react-icons/fa'; // Added FaCommentDots for chatbot icon

// Chatbot Component
const Chatbot: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Toggle Chatbot Window
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chatbot Toggle Button */}
      <div className="cursor-pointer bg-blue-600 text-white p-4 rounded-full shadow-lg" onClick={toggleChat}>
        <FaCommentDots className="text-2xl" />
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-16 right-4 w-80 bg-white rounded-lg shadow-lg">
          <div className="p-4 border-b flex justify-between items-center bg-blue-600 text-white rounded-t-lg">
            <h4 className="font-bold">Chatbot</h4>
            <FaTimes className="cursor-pointer" onClick={toggleChat} />
          </div>
          <div className="p-4">
            <p className="text-gray-600 text-sm">Hi! How can I assist you today?</p>
            {/* Chat content goes here */}
            <div className="mt-4">
              <textarea
                className="w-full p-2 border rounded-lg"
                placeholder="Type your message..."
              ></textarea>
              <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg">Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Navbar Component
const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Toggle notification popup visibility
  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <nav className="bg-gray-900 p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Sidebar Toggle Icon */}
        <div className="text-white cursor-pointer" onClick={toggleSidebar}>
          <FaBars className="text-2xl" />
        </div>

        {/* Centered Text and Icon */}
        <div className="flex items-center justify-center flex-grow">
          <FaCalendarAlt className="text-white text-2xl mr-4" />
          <div className="text-white text-3xl font-extrabold">
            Alumni Management with Event Management
          </div>
        </div>

        {/* Notification Icon */}
        <div className="relative text-white cursor-pointer" onClick={toggleNotification}>
          <FaBell className="text-2xl" />
          {isNotificationOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded-lg shadow-lg">
              <div className="p-4">
                <h3 className="font-bold text-lg">Notifications</h3>
                <ul className="space-y-2 mt-2">

                  {/* Sample notifications */}
                  <li className="border-b border-gray-200 pb-2">New event added: Alumni Meetup</li>
                  <li className="border-b border-gray-200 pb-2">Volunteer Opportunity Updated</li>
                  <li className="pb-2">New Donation Received</li>
                </ul>
                <div className="text-center mt-4">
                  {/* <Link to="/notifications" className="text-blue-500 hover:underline">
                    View all
                  </Link> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <>
          {/* Sidebar Content */}
          <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 shadow-lg z-50">
            <div className="p-4 text-white">
              <br />
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">AMSEM</h2>
                <FaTimes className="text-2xl cursor-pointer" onClick={toggleSidebar} />
              </div>
              <br />
              <ul className="space-y-4 mt-4">
                <li>
                  <Link to="/VolunteerOPadmin" className="hover:text-gray-400">
                    Volunteer Opportunity (Admin)
                  </Link>
                </li>
                <li>
                  <Link to="/VolunteerOPuser" className="hover:text-gray-400">
                    Volunteer Opportunity (User)
                  </Link>
                </li>
                <li>
                  <Link to="/AdminNews" className="hover:text-gray-400">
                    News and Updates (Admin)
                  </Link>
                </li>
                <li>
                  <Link to="/UserNews" className="hover:text-gray-400">
                    News and Updates (User)
                  </Link>
                </li>
                <li>
                  <Link to="/Adminevent" className="hover:text-gray-400">
                    Event Management (Admin)
                  </Link>
                </li>
                <li>
                  <Link to="/Userevent" className="hover:text-gray-400">
                    Event Management (User)
                  </Link>
                </li>
                <li>
                  <Link to="/UpcomingProgramme" className="hover:text-gray-400">
                    Monitor Programme
                  </Link>
                </li>
                <li>
                  <Link to="/Jobadmin" className="hover:text-gray-400">
                    Job Board (Admin)
                  </Link>
                </li>
                <li>
                  <Link to="/JobUser" className="hover:text-gray-400">
                    Job Board (User)
                  </Link>
                </li>
                <li>
                  <Link to="/AlumniReport" className="hover:text-gray-400">
                    Alumni Report
                  </Link>
                </li>
                <li>
                  <Link to="/Donationadmin" className="hover:text-gray-400">
                    Alumni Donation (Admin)
                  </Link>
                </li>
                <li>
                  <Link to="/Donationuser" className="hover:text-gray-400">
                    Alumni Donation (User)
                  </Link>
                </li>
                <li>
                  <Link to="/Profile" className="hover:text-gray-400">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Overlay to close sidebar when clicking outside */}
          <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleSidebar}></div>
        </>
      )}
    </nav>
  );
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 p-6 text-white mt-12">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6">
          {/* Social Icons */}
          {/* <FaFacebookF className="text-xl cursor-pointer hover:text-gray-400" />
          <FaTwitter className="text-xl cursor-pointer hover:text-gray-400" />
          <FaLinkedinIn className="text-xl cursor-pointer hover:text-gray-400" /> */}
        </div>
        <p>&copy; 2024 Alumni Management with Event Management.</p>
        <p>Godakawela, Sri Lanka</p>
      </div>
    </footer>
  );
};

// HomePage Component
const HomePage: React.FC = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Navbar />
      <main className="container mx-auto p-8">
        {/* Main Content */}
        <section className="text-center my-16">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 p-12 rounded-lg shadow-lg">
            <h1 className="text-5xl font-extrabold text-white mb-4 animate__animated animate__fadeIn">
              Welcome to Alumni Management with Event Management
            </h1>
            <p className="text-2xl text-white mb-6 animate__animated animate__fadeIn animate__delay-1s">
              Your Pathway to Personalized Alumni Get Together
            </p>
            <p className="text-lg text-white mb-8 animate__animated animate__fadeIn animate__delay-2s">
              Empowering every alumni to collaborate together.
            </p>
            <div className="flex justify-center space-x-4">
              {/* <Link
                to="/login"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Register
              </Link> */}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="my-16 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">About Us</h2>
          <p className="text-xl text-gray-700 text-justify">
            Welcome to Alumni Management With Event Management where we seamlessly integrate alumni management with dynamic event management to foster lifelong connections and engagement. Our platform is designed to enhance the alumni experience by offering a comprehensive suite of tools for tracking leadership roles, managing events, and facilitating meaningful interactions. Whether you're an administrator aiming to streamline alumni relations or a member seeking to stay connected, our system provides an intuitive interface and robust features to meet your needs. With a focus on user-friendly design and effective management, Alumni Management With Event Management is dedicated to supporting the growth and success of your alumni network through innovative solutions and exceptional service.
          </p>
        </section>

        {/* About Alumni Management With Event Management Section */}
        <section className="my-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">About Alumni Management With Event Management</h2>
          <p className="text-lg text-gray-700 text-justify">
            At Alumni Management with Event Management, we provide an integrated solution designed to enhance alumni engagement while simplifying event management tasks. This system tracks and monitors alumni data, facilitates volunteer opportunities, offers news and updates, and includes career services like a job board. With our platform, managing alumni networks and organizing events is seamless, efficient, and impactful. Stay connected with fellow alumni, contribute to events, and access a wealth of career-related opportunities.
          </p>
        </section>

        {/* Notifications */}
        <section>
          {/* notifications component content */}
        </section>

        {/* Contact Section */}
        
        <section className="my-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Contact</h2>
          <div className="text-lg text-gray-700 mb-4">
            <div className="flex items-center mb-2">
            <FaUser className="text-gray-500 mr-2" />
            <p>
            <strong>Name:</strong> Mr. Director
            </p>
            </div>
            <div className="flex items-center mb-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <p>
                <strong>Email:</strong> info@alumnimanagementwitheventmanagement.com
              </p>
            </div>
            <div className="flex items-center mb-2">
              <FaPhone className="text-gray-500 mr-2" />
              <p>
                <strong>Phone:</strong> +94 76 963 1234
              </p>
            </div>
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="text-gray-500 mr-2" />
              <p>
                <strong>Address:</strong> Godakawela, Sri Lanka
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
      </main>

      {/* Add Chatbot */}
      <Chatbot />
      
      <Footer />
    </div>
  );
};

export default HomePage;

