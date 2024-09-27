import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaBriefcase, FaComment } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

type NavBarProps = {
  username: string;
};

const Jobadmin: React.FC<NavBarProps> = ({ username }) => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    const result = await axios.get('http://127.0.0.1:8080/api/jobs'); // Replace with actual API endpoint
    setJobs(result.data);
  };

  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url("/src/img/alu8.png")' }}>
      <nav className="bg-gray-800 bg-opacity-100 text-white p-4 flex justify-between items-center">
        <div className="flex-1 flex items-center space-x-4">
          {/* <FaUser size={24} />
          <span className="text-lg font-semibold">
            {username} <span className="text-sm text-gray-300">Admin</span>
          </span> */}
        </div>
        <div className="flex-1 flex justify-center items-center space-x-4">
          <FaBriefcase size={32} />
          <span className="text-2xl font-bold">Job Board</span>
        </div>
        <div className="flex-1 flex justify-end">
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            onClick={() => navigate('/addjob')} // Navigate to Add Job page
          >
            Add Job
          </button>
        </div>
      </nav>

      {/* List of Job Table */}
      <div className="container mx-auto mt-5">
        <h1 className="text-center text-3xl font-bold mb-5 mt-12 text-fuchsia-500">List of Jobs</h1>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-purple-50 text-black">
            <tr>
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Job Name</th>
              <th className="py-3 px-4">Company Name</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Salary Details</th>
              <th className="py-3 px-4">Job Description</th>
              <th className="py-3 px-4">Expire Date</th>
              <th className="py-3 px-4">Job Apply Method</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="py-3 px-4 text-center">{index + 1}</td>
                <td className="py-3 px-4 text-center">{job.jobName}</td>
                <td className="py-3 px-4 text-center">{job.companyName}</td>
                <td className="py-3 px-4 text-center">{job.location}</td>
                <td className="py-3 px-4 text-center">{job.salaryDetails}</td>
                <td className="py-3 px-4 text-center">{job.jobDescription}</td>
                <td className="py-3 px-4 text-center">{job.expireDate}</td>
                <td className="py-3 px-4 text-center">{job.jobApplyMethod}</td>
                <td className="py-3 px-4 text-center space-x-2">
                  <Link
                    to={`/editjob/${job.id}`}
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

      {/* Footer */}
      <footer className="bg-gray-800 bg-opacity-100 text-white p-4 text-center absolute bottom-0 w-full">
        <p>&copy; {new Date().getFullYear()} Alumni Management with Job Management.</p>
      </footer>
    </div>
  );
};

export default Jobadmin;


