// import { FaHandsHelping } from "react-icons/fa";
// import { useNavigate } from "react-router-dom"; // Assuming you're using react-router for navigation

// const VolunteerOPadmin = ({ username }: { username: string }) => {
//   const navigate = useNavigate(); // Function for handling navigation

//   return (
//     <div
//       // Main container with a background image
//       className="min-h-screen bg-cover bg-center relative"
//       style={{
//         backgroundImage: 'url("/src/img/alu11.png")', // Custom background image for the page
//       }}
//     >
//       {/* Navbar Section */}
//       <nav className="bg-gray-800 bg-opacity-100 text-white p-4 flex justify-between items-center">
//         {/* Left Side of Navbar: User Icon */}
//         <div className="flex-1 flex items-center space-x-4">
//           {/* User Icon */}
//           {/* <FaUser size={24} /> */}
//           {/* Display the logged-in username */}
//           {/* <span className="text-lg font-semibold">
//             {username} <span className="text-sm text-gray-300">Admin</span>
//           </span> */}
//         </div>

//         {/* Center of Navbar: Page Title */}
//         <div className="flex-1 flex justify-center items-center space-x-4">
//           {/* Volunteer Opportunity Icon */}
//           <FaHandsHelping size={32} />
//           {/* Title of the page */}
//           <span className="text-2xl font-bold">Alumni Volunteer Opportunities</span>
//         </div>

//         {/* Right Side of Navbar: Add Event Button */}
//         <div className="flex-1 flex justify-end space-x-4">
//           {/* Button that navigates to the 'Add Event' page */}
//           <button
//             className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
//             onClick={() => navigate("/CreatedVO")}
//           >
//             Created VO
//           </button>
//         </div>
//       </nav>

//       {/* Form Section */}
//       <div className="w-full max-w-4xl bg-white mt-6 p-6 rounded-md shadow-md mx-auto">
//         {/* Form Title */}
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Create Volunteer Opportunity
//         </h1>

//         {/* Volunteer Opportunity Form */}
//         <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Volunteer Name Field */}
//           <div className="col-span-1">
//             <label className="text-gray-700 font-semibold">Volunteer Name</label>
//             <input
//               type="text"
//               className="mt-2 p-2 w-full border rounded-md shadow-sm"
//               placeholder="Enter Volunteer Name"
//             />
//           </div>

//           {/* Date & Time Field */}
//           <div className="col-span-1">
//             <label className="text-gray-700 font-semibold">Date & Time</label>
//             <input type="datetime-local" className="mt-2 p-2 w-full border rounded-md shadow-sm" />
//           </div>

//           {/* Location Field */}
//           <div className="col-span-1">
//             <label className="text-gray-700 font-semibold">Location</label>
//             <input
//               type="text"
//               className="mt-2 p-2 w-full border rounded-md shadow-sm"
//               placeholder="Enter Location"
//             />
//           </div>

//           {/* Time Duration Field */}
//           <div className="col-span-1">
//             <label className="text-gray-700 font-semibold">Time Duration (hours)</label>
//             <input
//               type="number"
//               className="mt-2 p-2 w-full border rounded-md shadow-sm"
//               placeholder="Enter Duration"
//             />
//           </div>

//           {/* Description Field */}
//           <div className="col-span-2">
//             <label className="text-gray-700 font-semibold">Description</label>
//             <textarea
//               className="mt-2 p-2 w-full border rounded-md shadow-sm"
//               placeholder="Enter Description"
//               rows={4}
//             ></textarea>
//           </div>

//           {/* Member Count Field */}
//           <div className="col-span-1">
//             <label className="text-gray-700 font-semibold">Members (Count)</label>
//             <input
//               type="number"
//               className="mt-2 p-2 w-full border rounded-md shadow-sm"
//               placeholder="Enter Number of Members"
//             />
//           </div>

//           {/* Volunteer Opportunity Coordinator Field */}
//           <div className="col-span-1">
//             <label className="text-gray-700 font-semibold">Volunteer Opportunity Coordinator</label>
//             <input
//               type="text"
//               className="mt-2 p-2 w-full border rounded-md shadow-sm"
//               placeholder="Enter Coordinator Name"
//             />
//           </div>

//           {/* Button Section */}
//           <div className="col-span-2 flex justify-center mt-6 space-x-4">
//             {/* Create Opportunity Button */}
//             <button className="bg-indigo-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-600 transition duration-200">
//               Create Opportunity
//             </button>
            
//             {/* Cancel Button */}
//             <button
//               className="bg-red-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-600 transition duration-200"
//               onClick={() => navigate("/CreatedVO")}
//             >
//               Cancel
//             </button>

//             {/* Back Button to navigate to Home */}
//             <button
//               className="bg-gray-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-600 transition duration-200"
//               onClick={() => navigate("/")}
//             >
//               Back to Home
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VolunteerOPadmin;

import { FaHandsHelping } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router for navigation
import { useState } from "react"; // Import useState hook

const VolunteerOPadmin = ({ username }: { username: string }) => {
  const navigate = useNavigate(); // Function for handling navigation

  // State to manage form input values
  const [formData, setFormData] = useState({
    volunteerName: "",
    dateTime: "",
    location: "",
    timeDuration: "",
    description: "",
    memberCount: "",
    coordinator: "",
  });

  // Function to handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to clear form data
  const clearForm = () => {
    setFormData({
      volunteerName: "",
      dateTime: "",
      location: "",
      timeDuration: "",
      description: "",
      memberCount: "",
      coordinator: "",
    });
  };

  return (
    <div
      // Main container with a background image
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: 'url("/src/img/alu11.png")', // Custom background image for the page
      }}
    >
      {/* Navbar Section */}
      <nav className="bg-gray-800 bg-opacity-100 text-white p-4 flex justify-between items-center">
        {/* Left Side of Navbar: User Icon */}
        <div className="flex-1 flex items-center space-x-4">
          {/* User Icon */}
          {/* <FaUser size={24} /> */}
          {/* Display the logged-in username */}
          {/* <span className="text-lg font-semibold">
            {username} <span className="text-sm text-gray-300">Admin</span>
          </span> */}
        </div>

        {/* Center of Navbar: Page Title */}
        <div className="flex-1 flex justify-center items-center space-x-4">
          {/* Volunteer Opportunity Icon */}
          <FaHandsHelping size={32} />
          {/* Title of the page */}
          <span className="text-2xl font-bold">Alumni Volunteer Opportunities</span>
        </div>

        {/* Right Side of Navbar: Add Event Button */}
        <div className="flex-1 flex justify-end space-x-4">
          {/* Button that navigates to the 'Add Event' page */}
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            onClick={() => navigate("/CreatedVO")}
          >
            Created VO
          </button>
        </div>
      </nav>

      {/* Form Section */}
      <div className="w-full max-w-4xl bg-white mt-6 p-6 rounded-md shadow-md mx-auto">
        {/* Form Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Volunteer Opportunity
        </h1>

        {/* Volunteer Opportunity Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Volunteer Name Field */}
          <div className="col-span-1">
            <label className="text-gray-700 font-semibold">Volunteer Name</label>
            <input
              type="text"
              name="volunteerName"
              value={formData.volunteerName}
              onChange={handleInputChange}
              className="mt-2 p-2 w-full border rounded-md shadow-sm"
              placeholder="Enter Volunteer Name"
            />
          </div>

          {/* Date & Time Field */}
          <div className="col-span-1">
            <label className="text-gray-700 font-semibold">Date & Time</label>
            <input
              type="datetime-local"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleInputChange}
              className="mt-2 p-2 w-full border rounded-md shadow-sm"
            />
          </div>

          {/* Location Field */}
          <div className="col-span-1">
            <label className="text-gray-700 font-semibold">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="mt-2 p-2 w-full border rounded-md shadow-sm"
              placeholder="Enter Location"
            />
          </div>

          {/* Time Duration Field */}
          <div className="col-span-1">
            <label className="text-gray-700 font-semibold">Time Duration (hours)</label>
            <input
              type="number"
              name="timeDuration"
              value={formData.timeDuration}
              onChange={handleInputChange}
              className="mt-2 p-2 w-full border rounded-md shadow-sm"
              placeholder="Enter Duration"
            />
          </div>

          {/* Description Field */}
          <div className="col-span-2">
            <label className="text-gray-700 font-semibold">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="mt-2 p-2 w-full border rounded-md shadow-sm"
              placeholder="Enter Description"
              rows={4}
            ></textarea>
          </div>

          {/* Member Count Field */}
          <div className="col-span-1">
            <label className="text-gray-700 font-semibold">Members (Count)</label>
            <input
              type="number"
              name="memberCount"
              value={formData.memberCount}
              onChange={handleInputChange}
              className="mt-2 p-2 w-full border rounded-md shadow-sm"
              placeholder="Enter Number of Members"
            />
          </div>

          {/* Volunteer Opportunity Coordinator Field */}
          <div className="col-span-1">
            <label className="text-gray-700 font-semibold">Volunteer Opportunity Coordinator</label>
            <input
              type="text"
              name="coordinator"
              value={formData.coordinator}
              onChange={handleInputChange}
              className="mt-2 p-2 w-full border rounded-md shadow-sm"
              placeholder="Enter Coordinator Name"
            />
          </div>

          {/* Button Section */}
          <div className="col-span-2 flex justify-center mt-6 space-x-4">
            {/* Create Opportunity Button */}
            <button className="bg-indigo-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-600 transition duration-200">
              Create Opportunity
            </button>
            
            {/* Cancel Button */}
            <button
              type="button"
              className="bg-red-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-600 transition duration-200"
              onClick={() => {
                clearForm(); // Clear form data
                
              }}
            >
              Cancel
            </button>

            {/* Back Button to navigate to Home */}
            <button
              type="button"
              className="bg-gray-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-600 transition duration-200"
              onClick={() => navigate("/")}
            >
              Back to Home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VolunteerOPadmin;

