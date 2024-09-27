import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { MdEvent } from 'react-icons/md';
import { FaComment } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

type NavBarProps = {
  username: string;
};

const Userevent: React.FC<NavBarProps> = ({ username }) => {
  const [Userevent, setUserevents] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    loadUserevents();
  }, []);

  const loadUserevents = async () => {
    const result = await axios.get("http://127.0.0.1:8080/api/teacher");
    setUserevents(result.data);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: 'url("/src/img/alu3.jpg")',
      }}
    >
      <nav className="bg-gray-800 bg-opacity-100 text-white p-4 flex justify-between items-center">
        <div className="flex-1 flex items-center space-x-4">
          {/* <FaUser size={24} />
          <span className="text-lg font-semibold">
            {username} <span className="text-sm text-gray-300">User</span>
          </span> */}
        </div>
        <div className="flex-1 flex justify-center items-center space-x-4">
          <MdEvent size={32} />
          <span className="text-2xl font-bold">User Event Management</span>
        </div>
        <div className="flex-1 flex justify-end">
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            onClick={() => navigate('/addevent')} // Navigate to the Add Event page
          >
            Add Event
          </button>
        </div>
      </nav>

      {/* List of event Table */}
      <div className="container mx-auto mt-5">
        <h1 className="text-center text-3xl font-bold mb-5 mt-12 text-amber-300">List of Event</h1>
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
            {Userevent.map((userevent, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="py-3 px-4 text-center">{index + 1}</td>
                <td className="py-3 px-4 text-center">{userevent.eventname}</td>
                <td className="py-3 px-4 text-center">{userevent.dateandtime}</td>
                <td className="py-3 px-4 text-center">{userevent.eventtype}</td>
                <td className="py-3 px-4 text-center">{userevent.description}</td>
                <td className="py-3 px-4 text-center">{userevent.targetaudince}</td>
                <td className="py-3 px-4 text-center">{userevent.eventcoordinator}</td>
                <td className="py-3 px-4 text-center space-x-2">
                  <Link
                    to={`/edituserevent/${userevent.id}`}
                    className="border border-blue-500 text-blue-500 py-1 px-3 rounded hover:bg-blue-500 hover:text-white"
                  >
                    Edit
                  </Link>
                  <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 ml-4">Email</button>
                  <button className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 ml-4">Notification</button>
                  <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 ml-4 mt-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Message Button
      <button
        className="absolute bottom-20 right-4 p-3 bg-amber-500 text-white rounded-full shadow-md hover:bg-amber-600 z-50"
        title="Send Message"
        // Add your onClick handler here
      >
        <FaComment size={24} />
      </button> */}

      {/* Footer */}
      <footer className="bg-gray-800 bg-opacity-100 text-white p-4 text-center absolute bottom-0 w-full">
        <p>&copy; {new Date().getFullYear()} Alumni Management with Event Management.</p>
      </footer>
    </div>
  );
};

export default Userevent;