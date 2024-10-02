// import React, { useState } from 'react';
// import { FaBriefcase, FaUser } from 'react-icons/fa';
// import { Modal } from 'react-responsive-modal'; // Make sure to install react-responsive-modal
// import 'react-responsive-modal/styles.css';

// type Job = {
//   id: number;
//   jobName: string;
//   companyName: string;
//   location: string;
//   salaryDetails: string;
//   jobDescription: string;
//   expireDate: string;
//   jobApplyMethod: string;
//   poster?: string; // Optional property
// };

// // Sample job data
// const sampleJobs: Job[] = [
//   {
//     id: 1,
//     jobName: 'Software Engineer',
//     companyName: 'Tech Corp',
//     location: 'San Francisco, CA',
//     salaryDetails: '$120,000 - $150,000',
//     jobDescription: 'Develop and maintain software applications.',
//     expireDate: '2024-12-31',
//     jobApplyMethod: 'EMAIL',
//     poster: 'poster1.png' // Sample poster image
//   },
//   {
//     id: 2,
//     jobName: 'Product Manager',
//     companyName: 'Innovate Inc.',
//     location: 'New York, NY',
//     salaryDetails: '$110,000 - $140,000',
//     jobDescription: 'Lead product development and strategy.',
//     expireDate: '2024-11-30',
//     jobApplyMethod: 'DIRECTCONTACT',
//     poster: 'poster2.png' // Sample poster image
//   },
//   // Add more sample jobs as needed
// ];

// type NavBarProps = {
//   username: string;
// };

// const JobUser: React.FC<NavBarProps> = ({ username }) => {
//   const [jobs, setJobs] = useState<Job[]>(sampleJobs);
//   const [selectedJob, setSelectedJob] = useState<Job | null>(null);
//   const [open, setOpen] = useState(false);

//   const handleCardClick = (job: Job) => {
//     setSelectedJob(job);
//     setOpen(true);
//   };

//   const closeModal = () => {
//     setOpen(false);
//     setSelectedJob(null);
//   };

//   return (
//     <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url("/src/img/alu8.png")' }}>
//       <nav className="bg-gray-800 bg-opacity-100 text-white p-4 flex justify-between items-center">
//         <div className="flex-1 flex items-center space-x-4">
//           {/* <FaUser size={24} />
//           <span className="text-lg font-semibold">
//             {username} <span className="text-sm text-gray-300">User</span>
//           </span> */}
//         </div>
//         <div className="flex-1 flex justify-center items-center space-x-4">
//           <FaBriefcase size={32} />
//           <span className="text-2xl font-bold">Job Board</span>
//         </div>
//         <div className="flex-1 flex justify-end">
          
//         </div>
//       </nav>

//       {/* List of Jobs */}
//       <div className="container mx-auto mt-5">
//         <h1 className="text-center text-3xl font-bold mb-5 mt-12 text-slate-950">Available Jobs</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {jobs.map((job) => (
//             <div
//               key={job.id}
//               className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer border-4 border-yellow-500"
//               onClick={() => handleCardClick(job)}
//             >
//               <div className="p-6">
//                 <h2 className="text-xl font-bold mb-2">{job.jobName}</h2>
//                 <p className="text-gray-700 mb-2"><strong>Company:</strong> {job.companyName}</p>
//                 <p className="text-gray-700 mb-2"><strong>Location:</strong> {job.location}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Job Detail Modal */}
//       {selectedJob && (
//         <Modal open={open} onClose={closeModal} center>
//           <div className="p-4">
//             <h2 className="text-2xl font-bold mb-2">{selectedJob.jobName}</h2>
//             <p className="text-gray-700 mb-2"><strong>Company:</strong> {selectedJob.companyName}</p>
//             <p className="text-gray-700 mb-2"><strong>Location:</strong> {selectedJob.location}</p>
//             <p className="text-gray-700 mb-2"><strong>Salary:</strong> {selectedJob.salaryDetails}</p>
//             <p className="text-gray-700 mb-2"><strong>Description:</strong> {selectedJob.jobDescription}</p>
//             <p className="text-gray-700 mb-4"><strong>Expire Date:</strong> {selectedJob.expireDate}</p>
//             <p className="text-gray-700 mb-4"><strong>Apply Method:</strong> {selectedJob.jobApplyMethod}</p>
//             {selectedJob.poster && (
//               <img
//                 src={`/src/img/${selectedJob.poster}`} // Path to sample poster image
//                 alt={`${selectedJob.jobName} Poster`}
//                 className="w-full h-48 object-cover mb-4"
//               />
//             )}
//             <div className="flex justify-between">
//               <a
//                 href={`mailto:apply@${selectedJob.companyName.replace(/\s+/g, '').toLowerCase()}.com`} // Adjust as needed
//                 className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//               >
//                 Apply
//               </a>
//             </div>
//           </div>
//         </Modal>
//       )}

//       {/* Footer */}
//       <footer className="bg-gray-800 bg-opacity-100 text-white p-4 text-center absolute bottom-0 w-full">
//         <p>&copy; {new Date().getFullYear()} Alumni Management with Job Management.</p>
//       </footer>
//     </div>
//   );
// };

// export default JobUser;

import React, { useState } from 'react';
import { FaBriefcase, FaUser } from 'react-icons/fa';
import { Modal } from 'react-responsive-modal'; // Make sure to install react-responsive-modal
import 'react-responsive-modal/styles.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

type Job = {
  id: number;
  jobName: string;
  companyName: string;
  location: string;
  salaryDetails: string;
  jobDescription: string;
  expireDate: string;
  jobApplyMethod: string;
  poster?: string; // Optional property
};

// Sample job data
const sampleJobs: Job[] = [
  {
    id: 1,
    jobName: 'Software Engineer',
    companyName: 'Tech Corp',
    location: 'San Francisco, CA',
    salaryDetails: '$120,000 - $150,000',
    jobDescription: 'Develop and maintain software applications.',
    expireDate: '2024-12-31',
    jobApplyMethod: 'EMAIL',
    poster: 'poster1.png', // Sample poster image
  },
  {
    id: 2,
    jobName: 'Product Manager',
    companyName: 'Innovate Inc.',
    location: 'New York, NY',
    salaryDetails: '$110,000 - $140,000',
    jobDescription: 'Lead product development and strategy.',
    expireDate: '2024-11-30',
    jobApplyMethod: 'DIRECTCONTACT',
    poster: 'poster2.png', // Sample poster image
  },
  // Add more sample jobs as needed
];

type NavBarProps = {
  username: string;
};

const JobUser: React.FC<NavBarProps> = ({ username }) => {
  const [jobs, setJobs] = useState<Job[]>(sampleJobs);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleCardClick = (job: Job) => {
    setSelectedJob(job);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url("/src/img/alu8.png")' }}>
      <nav className="bg-gray-800 bg-opacity-100 text-white p-4 flex justify-between items-center">
        <div className="flex-1 flex items-center space-x-4">
          {/* <FaUser size={24} />
          <span className="text-lg font-semibold">
            {username} <span className="text-sm text-gray-300">User</span>
          </span> */}
        </div>
        <div className="flex-1 flex justify-center items-center space-x-4">
          <FaBriefcase size={32} />
          <span className="text-2xl font-bold">Job Board</span>
        </div>
        <div className="flex-1 flex justify-end"></div>
      </nav>

      {/* List of Jobs */}
      <div className="container mx-auto mt-5">
        <h1 className="text-center text-3xl font-bold mb-5 mt-12 text-slate-950">Available Jobs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer border-4 border-yellow-500"
              onClick={() => handleCardClick(job)}
            >
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{job.jobName}</h2>
                <p className="text-gray-700 mb-2"><strong>Company:</strong> {job.companyName}</p>
                <p className="text-gray-700 mb-2"><strong>Location:</strong> {job.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home Page Button */}
        <div className="flex justify-center mt-4">
          <button
            className="bg-gray-500 text-white font-bold p-3 rounded-lg hover:bg-gray-600 transition-colors"
            onClick={() => navigate('/')} // Navigate to Home Page
          >
            Back to Home Page
          </button>
        </div>
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <Modal open={open} onClose={closeModal} center>
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">{selectedJob.jobName}</h2>
            <p className="text-gray-700 mb-2"><strong>Company:</strong> {selectedJob.companyName}</p>
            <p className="text-gray-700 mb-2"><strong>Location:</strong> {selectedJob.location}</p>
            <p className="text-gray-700 mb-2"><strong>Salary:</strong> {selectedJob.salaryDetails}</p>
            <p className="text-gray-700 mb-2"><strong>Description:</strong> {selectedJob.jobDescription}</p>
            <p className="text-gray-700 mb-4"><strong>Expire Date:</strong> {selectedJob.expireDate}</p>
            <p className="text-gray-700 mb-4"><strong>Apply Method:</strong> {selectedJob.jobApplyMethod}</p>
            {selectedJob.poster && (
              <img
                src={`/src/img/${selectedJob.poster}`} // Path to sample poster image
                alt={`${selectedJob.jobName} Poster`}
                className="w-full h-48 object-cover mb-4"
              />
            )}
            <div className="flex justify-between">
              <a
                href={`mailto:apply@${selectedJob.companyName.replace(/\s+/g, '').toLowerCase()}.com`} // Adjust as needed
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Apply
              </a>
            </div>
          </div>
        </Modal>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 bg-opacity-100 text-white p-4 text-center absolute bottom-0 w-full">
        <p>&copy; {new Date().getFullYear()} Alumni Management with Job Management.</p>
      </footer>
    </div>
  );
};

export default JobUser;

