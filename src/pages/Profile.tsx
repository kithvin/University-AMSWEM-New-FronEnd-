import React, { useState } from 'react';

const Profile = () => {
  // State for profile fields
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@email.com',
    phone: '+1 234 567 890',
    location: 'New York, USA',
    about: 'Passionate alumni member with a background in event management and volunteerism. Loves to connect with people and help others.',
    title: 'Senior Alumni Member',
    quote: 'Helping the community grow, one event at a time.',
  });

  // State for profile picture
  const [profilePic, setProfilePic] = useState('/src/img/profile.jpg');
  
  // State to toggle edit mode
  const [editMode, setEditMode] = useState(false);

  // Handler for input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Handler for profile picture upload
  const handlePicUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Save and toggle edit mode
  const handleSave = () => {
    setEditMode(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-10 flex items-center justify-center">
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
          {editMode ? (
            <input
              type="text"
              name="title"
              value={profile.title}
              onChange={handleChange}
              className="text-sm italic text-gray-300 bg-transparent border-b border-white text-center w-full"
            />
          ) : (
            <p className="text-sm italic text-gray-300">{profile.title}</p>
          )}
          {editMode ? (
            <textarea
              name="quote"
              value={profile.quote}
              onChange={handleChange}
              className="mt-4 text-sm text-gray-400 text-center bg-transparent border-b border-white w-full resize-none"
            />
          ) : (
            <p className="mt-4 text-sm text-gray-400 text-center">{profile.quote}</p>
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
              <label className="font-semibold text-gray-700">Full Name</label>
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
              <label className="font-semibold text-gray-700">Phone</label>
              {editMode ? (
                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="mt-2 p-2 border border-gray-300 rounded"
                />
              ) : (
                <p className="mt-2 text-gray-900">{profile.phone}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Location</label>
              {editMode ? (
                <input
                  type="text"
                  name="location"
                  value={profile.location}
                  onChange={handleChange}
                  className="mt-2 p-2 border border-gray-300 rounded"
                />
              ) : (
                <p className="mt-2 text-gray-900">{profile.location}</p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label className="font-semibold text-gray-700">About Me</label>
            {editMode ? (
              <textarea
                name="about"
                value={profile.about}
                onChange={handleChange}
                className="mt-2 p-2 border border-gray-300 rounded w-full"
              />
            ) : (
              <p className="mt-2 text-gray-700 leading-relaxed">{profile.about}</p>
            )}
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
    </div>
  );
};

export default Profile;
