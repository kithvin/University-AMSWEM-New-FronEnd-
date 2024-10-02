// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { MdEvent } from 'react-icons/md';
// import { FaComment, FaUser } from 'react-icons/fa';

// // Define the type for props expected by the Adminevent component
// type NavBarProps = {
//   username: string;
// };

// // Functional component for Admin Event Management
// const Adminevent: React.FC<NavBarProps> = ({ username }) => {
//   // State to hold the list of user events
//   const [Userevent, setUserevents] = useState<any[]>([]);
//   const navigate = useNavigate();

//   // useEffect hook to load events when the component mounts
//   useEffect(() => {
//     loadUserevents();
//   }, []);

//   // Function to fetch events from the API
//   const loadUserevents = async () => {
//     try {
//       // Fetch data from the API endpoint
//       const result = await axios.get("http://127.0.0.1:8080/api/teacher");
//       setUserevents(result.data);
//     } catch (error) {
//       // Log any errors encountered during the API call
//       console.error("Error fetching events:", error);
//     }
//   };

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center relative"
//       style={{
//         backgroundImage: 'url("/src/img/alu5.jpg")',
//       }}
//     >
//       {/* Navigation bar */}
//       <nav className="bg-gray-800 bg-opacity-100 text-white p-4 flex items-center">
//         <div className="flex-1 flex items-center space-x-4">
//           {/* <FaUser size={24} />
//           <span className="text-lg font-semibold">
//             {username} <span className="text-sm text-gray-300">Admin</span>
//           </span> */}
//         </div>
//         <div className="flex-1 flex justify-center items-center space-x-4">
//           <MdEvent size={32} />
//           <span className="text-2xl font-bold">Admin Event Management</span>
//         </div>
//         <div className="flex-1"></div>
//       </nav>

//       {/* Main content area */}
//       <div className="container mx-auto mt-5">
//         <h1 className="text-center text-3xl font-bold mb-5 mt-12 text-red-600">List of Event</h1>
//         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-purple-50 text-black">
//             <tr>
//               <th className="py-3 px-4">#</th>
//               <th className="py-3 px-4">Event Name</th>
//               <th className="py-3 px-4">Date and Time</th>
//               <th className="py-3 px-4">Location</th>
//               <th className="py-3 px-4">Description</th>
//               <th className="py-3 px-4">Target Audience</th>
//               <th className="py-3 px-4">Event Coordinator</th>
//               <th className="py-3 px-4">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Userevent.map((event, index) => (
//               <tr key={index} className="even:bg-gray-100">
//                 <td className="py-3 px-4 text-center">{index + 1}</td>
//                 <td className="py-3 px-4 text-center">{event.eventname}</td>
//                 <td className="py-3 px-4 text-center">{event.dateandtime}</td>
//                 <td className="py-3 px-4 text-center">{event.location}</td>
//                 <td className="py-3 px-4 text-center">{event.description}</td>
//                 <td className="py-3 px-4 text-center">{event.targetaudince}</td>
//                 <td className="py-3 px-4 text-center">{event.eventcoordinator}</td>
//                 <td className="py-3 px-4 text-center space-x-2">
//                   {/* Buttons for accepting or rejecting events */}
//                   <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 ml-4 mt-2 w-auto">Accepted</button>
//                   <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 ml-4 mt-2 w-auto">Rejected</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Floating message button
//       <button
//         className="absolute bottom-20 right-4 p-3 bg-amber-500 text-white rounded-full shadow-md hover:bg-amber-600 z-50"
//         title="Send Message"
//       >
//         <FaComment size={24} />
//       </button> */}

//       {/* Footer */}
//       <footer className="bg-gray-800 bg-opacity-100 text-white p-4 text-center absolute bottom-0 w-full">
//         <p>&copy; {new Date().getFullYear()} Alumni Management with Event Management.</p>
//       </footer>
//     </div>
//   );
// };

// export default Adminevent;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MdEvent } from 'react-icons/md';
import { FaComment, FaUser } from 'react-icons/fa';

// Define the type for props expected by the Adminevent component
type NavBarProps = {
  username: string;
};

// Functional component for Admin Event Management
const Adminevent: React.FC<NavBarProps> = ({ username }) => {
  // State to hold the list of user events
  const [Userevent, setUserevents] = useState<any[]>([]);
  const navigate = useNavigate();

  // useEffect hook to load events when the component mounts
  useEffect(() => {
    loadUserevents();
  }, []);

  // Function to fetch events from the API
  const loadUserevents = async () => {
    try {
      // Fetch data from the API endpoint
      const result = await axios.get("http://127.0.0.1:8080/api/teacher");
      setUserevents(result.data);
    } catch (error) {
      // Log any errors encountered during the API call
      console.error("Error fetching events:", error);
    }
  };

  // Function to handle navigation back to the home page
  const handleBackToHome = () => {
    navigate('/'); // Adjust the route as needed for your home page
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: 'url("/src/img/alu5.jpg")',
      }}
    >
      {/* Navigation bar */}
      <nav className="bg-gray-800 bg-opacity-100 text-white p-4 flex items-center">
        <div className="flex-1 flex items-center space-x-4">
          {/* <FaUser size={24} />
          <span className="text-lg font-semibold">
            {username} <span className="text-sm text-gray-300">Admin</span>
          </span> */}
        </div>
        <div className="flex-1 flex justify-center items-center space-x-4">
          <MdEvent size={32} />
          <span className="text-2xl font-bold">Admin Event Management</span>
        </div>
        <div className="flex-1"></div>
      </nav>

      {/* Main content area */}
      <div className="container mx-auto mt-5">
        <h1 className="text-center text-3xl font-bold mb-5 mt-12 text-red-600">List of Event</h1>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-purple-50 text-black">
            <tr>
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Event Name</th>
              <th className="py-3 px-4">Date and Time</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4">Target Audience</th>
              <th className="py-3 px-4">Event Coordinator</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {Userevent.map((event, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="py-3 px-4 text-center">{index + 1}</td>
                <td className="py-3 px-4 text-center">{event.eventname}</td>
                <td className="py-3 px-4 text-center">{event.dateandtime}</td>
                <td className="py-3 px-4 text-center">{event.location}</td>
                <td className="py-3 px-4 text-center">{event.description}</td>
                <td className="py-3 px-4 text-center">{event.targetaudince}</td>
                <td className="py-3 px-4 text-center">{event.eventcoordinator}</td>
                <td className="py-3 px-4 text-center space-x-2">
                  {/* Buttons for accepting or rejecting events */}
                  <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 ml-4 mt-2 w-auto">Accepted</button>
                  <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 ml-4 mt-2 w-auto">Rejected</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Back to Home Page button at the bottom */}
      <div className="flex justify-center mt-8 mb-4">
        <button 
          className="bg-gray-500 text-white font-bold p-3 rounded-lg hover:bg-gray-600 transition-colors"
          onClick={handleBackToHome} // Redirect to home page
        >
          Back to Home Page
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 bg-opacity-100 text-white p-4 text-center absolute bottom-0 w-full">
        <p>&copy; {new Date().getFullYear()} Alumni Management with Event Management.</p>
      </footer>
    </div>
  );
};

export default Adminevent;
