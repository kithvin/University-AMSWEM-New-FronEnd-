// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

// const Profile = () => {
//   const navigate = useNavigate(); // Initialize the useNavigate hook

//   // State for profile fields
//   const [profile, setProfile] = useState({
//     name: 'John Doe',
//     email: 'johndoe@email.com',
//     password: '********',
//   });

//   // State for profile picture
//   const [profilePic, setProfilePic] = useState('/src/img/profile.jpg');

//   // State to toggle edit mode
//   const [editMode, setEditMode] = useState(false);

//   // Handler for input changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setProfile((prevProfile) => ({
//       ...prevProfile,
//       [name]: value,
//     }));
//   };

//   // Handler for profile picture upload
//   const handlePicUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfilePic(reader.result as string);
//       };
//       reader.readAsDataURL(file); // Convert file to base64 string
//     }
//   };

//   // Save and toggle edit mode
//   const handleSave = () => {
//     setEditMode(false);
//     // Here you would normally handle saving the profile changes to a backend
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-10 flex flex-col items-center justify-center">
      
//       {/* Main Profile Container */}
//       <div className="bg-white shadow-lg rounded-3xl w-full max-w-4xl mx-auto flex flex-col md:flex-row">
        
//         {/* Left Side: Profile Picture and Info */}
//         <div className="flex flex-col items-center p-8 bg-gradient-to-b from-gray-700 to-gray-900 text-white rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl w-full md:w-1/3">
//           <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden mb-6">
//             <img
//               src={profilePic}
//               alt="Profile"
//               className="object-cover w-full h-full"
//             />
//           </div>

//           {/* Profile picture upload option */}
//           {editMode && (
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handlePicUpload}
//               className="mb-4 text-white"
//             />
//           )}

//           {editMode ? (
//             <input
//               type="text"
//               name="name"
//               value={profile.name}
//               onChange={handleChange}
//               className="text-3xl font-bold mb-2 bg-transparent border-b border-white text-center w-full"
//             />
//           ) : (
//             <h2 className="text-3xl font-bold mb-2">{profile.name}</h2>
//           )}
//         </div>

//         {/* Right Side: Profile Details */}
//         <div className="flex flex-col justify-center p-8 w-full md:w-2/3">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-2xl font-bold text-gray-900">Profile Details</h3>
//             <button
//               className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
//               onClick={() => setEditMode(!editMode)}
//             >
//               {editMode ? 'Cancel' : 'Edit'}
//             </button>
//           </div>

//           {/* Editable form when in edit mode */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="flex flex-col">
//               <label className="font-semibold text-gray-700">Name</label>
//               {editMode ? (
//                 <input
//                   type="text"
//                   name="name"
//                   value={profile.name}
//                   onChange={handleChange}
//                   className="mt-2 p-2 border border-gray-300 rounded"
//                 />
//               ) : (
//                 <p className="mt-2 text-gray-900">{profile.name}</p>
//               )}
//             </div>
//             <div className="flex flex-col">
//               <label className="font-semibold text-gray-700">Email</label>
//               {editMode ? (
//                 <input
//                   type="email"
//                   name="email"
//                   value={profile.email}
//                   onChange={handleChange}
//                   className="mt-2 p-2 border border-gray-300 rounded"
//                 />
//               ) : (
//                 <p className="mt-2 text-gray-900">{profile.email}</p>
//               )}
//             </div>
//             <div className="flex flex-col">
//               <label className="font-semibold text-gray-700">Password</label>
//               {editMode ? (
//                 <input
//                   type="password"
//                   name="password"
//                   value={profile.password}
//                   onChange={handleChange}
//                   className="mt-2 p-2 border border-gray-300 rounded"
//                 />
//               ) : (
//                 <p className="mt-2 text-gray-900">{profile.password}</p>
//               )}
//             </div>
//           </div>

//           {/* Save button when in edit mode */}
//           {editMode && (
//             <button
//               className="mt-6 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
//               onClick={handleSave}
//             >
//               Save Changes
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Back to Home button placed at the bottom of the page */}
//       <button
//         className="mt-6 bg-gray-500 text-white font-bold px-10 py-4 rounded-lg hover:bg-gray-600 transition"
//         onClick={() => navigate('/')} // Navigate to the home page
//       >
//         Back to Home
//       </button>
//     </div>
//   );
// };

// export default Profile;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const Profile = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // State for profile fields
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@email.com',
    password: '********',
  });

  // State for profile picture
  const [profilePic, setProfilePic] = useState('/src/img/profile.jpg');

  // State to toggle edit mode
  const [editMode, setEditMode] = useState(false);

  // Handler for input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Handler for profile picture upload
  const handlePicUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file); // Convert file to base64 string
    }
  };

  // Save and toggle edit mode
  const handleSave = () => {
    setEditMode(false);
    // Here you would normally handle saving the profile changes to a backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-10 flex flex-col items-center justify-center">
      
      {/* Main Profile Container */}
      <div className="bg-white shadow-lg rounded-3xl w-full max-w-4xl mx-auto flex flex-col md:flex-row">
        
        {/* Left Side: Profile Picture and Info */}
        <div className="flex flex-col items-center p-8 bg-gradient-to-b from-gray-700 to-gray-900 text-white rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl w-full md:w-1/3">
          <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden mb-6">
            <img
              src={profilePic}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Profile picture upload option */}
          {editMode && (
            <input
              type="file"
              accept="image/*"
              onChange={handlePicUpload}
              className="mb-4 text-white"
            />
          )}

          {editMode ? (
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="text-3xl font-bold mb-2 bg-transparent border-b border-white text-center w-full"
            />
          ) : (
            <h2 className="text-3xl font-bold mb-2">{profile.name}</h2>
          )}
        </div>

        {/* Right Side: Profile Details */}
        <div className="flex flex-col justify-center p-8 w-full md:w-2/3">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-900">Profile Details</h3>
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              onClick={() => setEditMode(!editMode)}
            >
              {editMode ? 'Cancel' : 'Edit'}
            </button>
          </div>

          {/* Editable form when in edit mode */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Name</label>
              {editMode ? (
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="mt-2 p-2 border border-gray-300 rounded"
                />
              ) : (
                <p className="mt-2 text-gray-900">{profile.name}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Email</label>
              {editMode ? (
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="mt-2 p-2 border border-gray-300 rounded"
                />
              ) : (
                <p className="mt-2 text-gray-900">{profile.email}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Password</label>
              {editMode ? (
                <input
                  type="password"
                  name="password"
                  value={profile.password}
                  onChange={handleChange}
                  className="mt-2 p-2 border border-gray-300 rounded"
                />
              ) : (
                <p className="mt-2 text-gray-900">{profile.password}</p>
              )}
            </div>
          </div>

          {/* Save button when in edit mode */}
          {editMode && (
            <button
              className="mt-6 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              onClick={handleSave}
            >
              Save Changes
            </button>
          )}
        </div>
      </div>

      {/* Back to Home button placed at the bottom of the page */}
      <div className="mt-10"> {/* Added extra margin-top for more spacing */}
        <button
          className="bg-gray-500 text-white font-bold px-10 py-4 rounded-lg hover:bg-gray-600 transition"
          onClick={() => navigate('/')} // Navigate to the home page
        >
          Back to Home Page
        </button>
      </div>
    </div>
  );
};

export default Profile;
