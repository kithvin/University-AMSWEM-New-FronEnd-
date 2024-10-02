// import React from 'react';
// import { FaCalendarAlt } from 'react-icons/fa';

// // Define the AddEvent component
// const Addevent: React.FC = () => {
//   return (
//     <div className="bg-[url('/src/img/alu4.jpg')] bg-cover bg-center min-h-screen flex flex-col">
//       {/* Navbar with centered title */}
//       <nav className="bg-gray-800 bg-opacity-100 p-4 flex justify-center items-center">
//         <div className="text-white text-2xl font-bold flex items-center">
//           <FaCalendarAlt className="mr-2" /> {/* Calendar icon */}
//           User Event Management {/* Centered title */}
//         </div>
//       </nav>

//       {/* Main container for the form */}
//       <div className="flex-grow container max-w-lg mx-auto p-4">
//         <h2 className="text-center text-3xl font-bold mb-4">Add Event</h2> {/* Page title */}
        
//         {/* Form container with a background color and shadow */}
//         <div className="bg-amber-100 shadow-md rounded-lg p-6">
//           <form>
//             {/* Event Name input field */}
//             <div className="mb-3">
//               <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="eventName">
//                 Event Name
//               </label>
//               <input
//                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 id="eventName"
//                 type="text"
//                 placeholder="Enter event name"
//               />
//             </div>

//             {/* Date & Time input field */}
//             <div className="mb-3">
//               <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="dateTime">
//                 Date & Time
//               </label>
//               <input
//                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 id="dateTime"
//                 type="datetime-local"
//               />
//             </div>

//             {/* Location input field */}
//             <div className="mb-3">
//               <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="location">
//                 Location
//               </label>
//               <input
//                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 id="location"
//                 type="text"
//                 placeholder="Enter event location"
//               />
//             </div>

//             {/* Event Type combo box */}
//             <div className="mb-3">
//               <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="eventType">
//                 Event Type
//               </label>
//               <select
//                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 id="eventType"
//               >
//                 <option value="">Select Event Type</option>
//                 <option value="Conference">Conference</option>
//                 <option value="Workshop">Workshop</option>
//                 <option value="Seminar">Seminar</option>
//                 <option value="Meetup">Meetup</option>
//                 {/* Add more event types as needed */}
//               </select>
//             </div>

//             {/* Description textarea */}
//             <div className="mb-3">
//               <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="description">
//                 Description
//               </label>
//               <textarea
//                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 id="description"
//                 placeholder="Enter event description"
//               ></textarea>
//             </div>

//             {/* Target Audience combo box */}
//             <div className="mb-3">
//               <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="targetAudience">
//                 Target Audience
//               </label>
//               <select
//                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 id="targetAudience"
//               >
//                 <option value="">Select Target Audience</option>
//                 <option value="Students">Students</option>
//                 <option value="Faculty">Faculty</option>
//                 <option value="Alumni">Alumni</option>
//                 <option value="Public">Public</option>
//                 {/* Add more audience types as needed */}
//               </select>
//             </div>

//             {/* Event Coordinator input field */}
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="eventCoordinator">
//                 Event Coordinator
//               </label>
//               <input
//                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 id="eventCoordinator"
//                 type="text"
//                 placeholder="Enter event coordinator name"
//               />
//             </div>

//             {/* Submit button */}
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               Add Event
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-800 bg-opacity-100 p-4 text-center text-white mt-8">
//         <p>&copy; 2024 Alumni Management with Event Management.</p>
//       </footer>
//     </div>
//   );
// };

// export default Addevent;

import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Define the AddEvent component
const Addevent: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="bg-[url('/src/img/alu4.jpg')] bg-cover bg-center min-h-screen flex flex-col">
      {/* Navbar with centered title */}
      <nav className="bg-gray-800 bg-opacity-100 p-4 flex justify-center items-center">
        <div className="text-white text-2xl font-bold flex items-center">
          <FaCalendarAlt className="mr-2" /> {/* Calendar icon */}
          User Event Management {/* Centered title */}
        </div>
      </nav>

      {/* Main container for the form */}
      <div className="flex-grow container max-w-lg mx-auto p-4">
        <h2 className="text-center text-3xl font-bold mb-4">Add Event</h2> {/* Page title */}
        
        {/* Form container with a background color and shadow */}
        <div className="bg-amber-100 shadow-md rounded-lg p-6">
          <form>
            {/* Event Name input field */}
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="eventName">
                Event Name
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="eventName"
                type="text"
                placeholder="Enter event name"
              />
            </div>

            {/* Date & Time input field */}
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="dateTime">
                Date & Time
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="dateTime"
                type="datetime-local"
              />
            </div>

            {/* Location input field */}
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="location">
                Location
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="location"
                type="text"
                placeholder="Enter event location"
              />
            </div>

            {/* Event Type combo box */}
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="eventType">
                Event Type
              </label>
              <select
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="eventType"
              >
                <option value="">Select Event Type</option>
                <option value="Conference">Conference</option>
                <option value="Workshop">Workshop</option>
                <option value="Seminar">Seminar</option>
                <option value="Meetup">Meetup</option>
                {/* Add more event types as needed */}
              </select>
            </div>

            {/* Description textarea */}
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="description">
                Description
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="description"
                placeholder="Enter event description"
              ></textarea>
            </div>

            {/* Target Audience combo box */}
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="targetAudience">
                Target Audience
              </label>
              <select
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="targetAudience"
              >
                <option value="">Select Target Audience</option>
                <option value="Students">Students</option>
                <option value="Faculty">Faculty</option>
                <option value="Alumni">Alumni</option>
                <option value="Public">Public</option>
                {/* Add more audience types as needed */}
              </select>
            </div>

            {/* Event Coordinator input field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="eventCoordinator">
                Event Coordinator
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="eventCoordinator"
                type="text"
                placeholder="Enter event coordinator name"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Add Event
            </button>
          </form>
        </div>
      </div>

      {/* Back to User Events button */}
      <div className="flex justify-center mt-4 mb-4">
        <button 
          className="bg-gray-500 text-white font-bold p-3 rounded-lg hover:bg-gray-600 transition-colors"
          onClick={() => navigate('/userevent')} // Redirect to User Events page
        >
          Back to Previous Page
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 bg-opacity-100 p-4 text-center text-white mt-8">
        <p>&copy; 2024 Alumni Management with Event Management.</p>
      </footer>
    </div>
  );
};

export default Addevent;

