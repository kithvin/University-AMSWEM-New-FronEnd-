// import React, { useState } from 'react';
// import { MdEvent } from 'react-icons/md';
// import { useNavigate } from 'react-router-dom';

// type NavBarProps = {
//   username: string;
// };

// const AlumniReport: React.FC<NavBarProps> = () => {
//   const [selectedDate, setSelectedDate] = useState<string>('');
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const navigate = useNavigate(); // useNavigate hook for navigation

//   const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedDate(event.target.value);
//   };

//   const handleToggleCalendar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleCancel = () => {
//     navigate('/'); // navigate to home or another route
//   };

//   return (
//     <div className="bg-[url('/src/img/alu6.jpg')] bg-cover bg-center min-h-screen flex flex-col">
//       {/* Navbar */}
//       <nav className="bg-gray-800 bg-opacity-100 text-white p-4 flex justify-center items-center">
//         <div className="flex items-center space-x-4">
//           <MdEvent size={32} />
//           <span className="text-2xl font-bold">Alumni and Event Management Report</span>
//         </div>
//       </nav>

//       {/* Main content area */}
//       <div className="flex-grow bg-white bg-opacity-80 p-6">
//         {/* Main container for the form */}
//         <div className="container max-w-lg mx-auto p-4 mt-4">
//           <h2 className="text-center text-3xl font-bold mb-4">Report Category</h2>
          
//           {/* Form container with a background color and shadow */}
//           <div className="bg-amber-100 shadow-md rounded-lg p-6">
//             <form>
//               {/* Report Type combo box */}
//               <div className="mb-3">
//                 <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="reportType">
//                   Report Type
//                 </label>
//                 <select
//                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   id="reportType"
//                 >
//                   <option value="">Select Report Type</option>
//                   <option value="Event">Event Details</option>
//                   <option value="Donation">Donation Details</option>
//                   <option value="Job">Job Details</option>
//                   <option value="News">Alumni News Details</option>
//                   <option value="VolunteerOP">Volunteer Opportunities</option>
//                   {/* Add more report types as needed */}
//                 </select>
//               </div>

//               <div className="mb-3">
//                 <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="dateTime">
//                   Date & Time
//                 </label>
//                 <input
//                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   id="dateTime"
//                   type="datetime-local"
//                 />
//               </div>

//               {/* Select button */}
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4 mb-2"
//               >
//                 Select
//               </button>

//               {/* Cancel button */}
//               <button
//                 type="button"
//                 onClick={handleCancel}
//                 className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
//               >
//                 Cancel
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-800 bg-opacity-100 text-white p-4 text-center">
//         <p>&copy; {new Date().getFullYear()} Alumni Management with Event Management.</p>
//       </footer>
//     </div>
//   );
// };

// export default AlumniReport;

import React, { useState } from 'react';
import { MdEvent } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

type NavBarProps = {
  username: string;
};

const AlumniReport: React.FC<NavBarProps> = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedReportType, setSelectedReportType] = useState<string>(''); // State for report type
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleReportTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedReportType(event.target.value); // Handle report type change
  };

  const handleCancel = () => {
    setSelectedDate(''); // Clear the date
    setSelectedReportType(''); // Clear the report type
    navigate('/'); // Navigate to home or another route
  };

  return (
    <div className="bg-[url('/src/img/alu6.jpg')] bg-cover bg-center min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-800 bg-opacity-100 text-white p-4 flex justify-center items-center">
        <div className="flex items-center space-x-4">
          <MdEvent size={32} />
          <span className="text-2xl font-bold">Alumni and Event Management Report</span>
        </div>
      </nav>

      {/* Main content area */}
      <div className="flex-grow bg-white bg-opacity-80 p-6">
        {/* Main container for the form */}
        <div className="container max-w-lg mx-auto p-4 mt-4">
          <h2 className="text-center text-3xl font-bold mb-4">Report Category</h2>

          {/* Form container with a background color and shadow */}
          <div className="bg-amber-100 shadow-md rounded-lg p-6">
            <form>
              {/* Report Type combo box */}
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="reportType">
                  Report Type
                </label>
                <select
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  id="reportType"
                  value={selectedReportType} // Controlled component
                  onChange={handleReportTypeChange} // Handle report type change
                >
                  <option value="">Select Report Type</option>
                  <option value="">User Details</option>
                  <option value="Event">Event Details</option>
                  <option value="Donation">Donation Details</option>
                  <option value="Job">Job Details</option>
                  <option value="News">Alumni News Details</option>
                  <option value="VolunteerOP">Volunteer Opportunities</option>
                  
                  {/* Add more report types as needed */}
                </select>
              </div>

              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="dateTime">
                  Date & Time
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  id="dateTime"
                  type="datetime-local"
                  value={selectedDate} // Controlled component
                  onChange={handleDateChange} // Handle date change
                />
              </div>

              {/* Select button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4 mb-2"
              >
                Select
              </button>

              {/* Cancel button */}
              <button
                type="button"
                onClick={handleCancel}
                className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Cancel
              </button>
            </form>
          </div>
          
        </div>

        {/* Back to Home Page Button */}
        <div className="flex justify-center mb-4">
            <button
              className="bg-gray-500 text-white font-bold p-3 rounded-lg hover:bg-gray-600 transition-colors"
              onClick={() => navigate('/')} // Navigate to Home Page
            >
              Back to Home Page
            </button>
          </div>

      </div>

      {/* Footer */}
      <footer className="bg-gray-800 bg-opacity-100 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Alumni Management with Event Management.</p>
      </footer>
    </div>
  );
};

export default AlumniReport;

