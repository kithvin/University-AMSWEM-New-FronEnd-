import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaGift } from 'react-icons/fa';
import { MdEvent } from 'react-icons/md';

type NavBarProps = {
  username: string;
};

const DonationAdmin: React.FC<NavBarProps> = ({ username }) => {
  const [donations, setDonations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadDonations();
  }, []);

  const loadDonations = async () => {
    const result = await axios.get('http://127.0.0.1:8080/api/donations'); // Replace with actual API endpoint
    setDonations(result.data);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="bg-gray-800 bg-opacity-100 text-white p-4 flex justify-between items-center">
        <div className="flex-1 flex items-center space-x-4">
          {/* Uncomment this if you want to show user information */}
          {/* <FaUser size={24} />
          <span className="text-lg font-semibold">
            {username} <span className="text-sm text-gray-300">User</span>
          </span> */}
        </div>
        <div className="flex-1 flex justify-center items-center space-x-4">
          <FaGift size={32} />
          <span className="text-2xl font-bold">Donation Board</span>
        </div>
        <div className="flex-1 flex justify-end">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition ease-in-out duration-200"
            onClick={() => navigate('/adddonation')}
          >
            Add Donation
          </button>
        </div>
      </nav>

      {/* List of Donations as Cards */}
      <div className="container mx-auto mt-12 px-5 flex-grow">
        <h1 className="text-center text-4xl font-bold mb-10 text-indigo-600">Available Donations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {donations.map((donation, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow ease-in-out duration-200">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">{donation.donationName}</h2>
              <p className="text-gray-600">
                <span className="font-semibold">Contact:</span> {donation.contactDetails}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Billing Address:</span> {donation.billingAddress}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Amount:</span> ${donation.amount}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Donation Type:</span> {donation.donationType}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Description:</span> {donation.description}
              </p>
              <div className="flex justify-between items-center">
                <Link
                  to={`/editdonation/${donation.id}`}
                  className="text-blue-500 hover:text-white border border-blue-500 hover:bg-blue-500 transition ease-in-out duration-200 py-2 px-4 rounded-lg"
                >
                  Edit
                </Link>
                <div className="space-x-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200">
                    Email
                  </button>
                  <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition duration-200">
                    Notify
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition duration-200">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} Alumni Management System. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default DonationAdmin;
