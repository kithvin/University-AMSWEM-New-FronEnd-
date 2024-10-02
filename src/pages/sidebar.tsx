import React from 'react'
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaBars, FaTimes, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';


const Sidebar = () => {

      // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
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
                {/* Add your existing sidebar links */}
                {/* Example */}
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
    </div>
  )
}

export default Sidebar
