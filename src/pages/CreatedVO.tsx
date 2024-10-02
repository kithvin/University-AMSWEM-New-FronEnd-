// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { FaHandsHelping } from 'react-icons/fa';
// // import { Link } from 'react-router-dom';

// // type Volunteer = {
// //   id: number;
// //   volunteerName: string;
// //   dateTime: string;
// //   location: string;
// //   timeDuration: number;
// //   description: string;
// //   members: number;
// //   coordinator: string;
// // };

// // type CreatedVOPProps = {
// //   username: string;
// // };

// // const CreatedVO: React.FC<CreatedVOPProps> = ({ username }) => {
// //   const [volunteers, setVolunteers] = useState<Volunteer[]>([]);

// //   useEffect(() => {
// //     loadVolunteers();
// //   }, []);

// //   const loadVolunteers = async () => {
// //     try {
// //       const result = await axios.get('http://127.0.0.1:8080/api/volunteers'); // Replace with actual API endpoint
// //       setVolunteers(result.data);
// //     } catch (error) {
// //       console.error('Error loading volunteer opportunities:', error);
// //     }
// //   };

// //   const handleDelete = async (id: number) => {
// //     try {
// //       await axios.delete(`http://127.0.0.1:8080/api/volunteers/${id}`); // Replace with actual API endpoint
// //       setVolunteers(volunteers.filter(volunteer => volunteer.id !== id));
// //     } catch (error) {
// //       console.error('Error deleting volunteer opportunity:', error);
// //     }
// //   };

// //   return (
// //     <div
// //       className="min-h-screen bg-cover bg-center relative"
// //       style={{ backgroundImage: 'url("/src/img/alu12.jpg")' }}
// //     >
// //       <nav className="bg-gray-800 bg-opacity-100 text-white p-4 flex justify-center items-center">
// //         <div className="flex justify-center items-center space-x-4">
// //           <FaHandsHelping size={32} />
// //           <span className="text-2xl font-bold text-center">Volunteer Opportunities</span>
// //         </div>
// //       </nav>

// //       <div className="container mx-auto mt-5">
// //         <h1 className="text-center text-3xl font-bold mb-5 mt-12 text-pink-300">List of Volunteer Opportunities</h1>
// //         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
// //           <thead className="bg-purple-50 text-black">
// //             <tr>
// //               <th className="py-3 px-4">#</th>
// //               <th className="py-3 px-4">Volunteer Name</th>
// //               <th className="py-3 px-4">Date & Time</th>
// //               <th className="py-3 px-4">Location</th>
// //               <th className="py-3 px-4">Duration (hours)</th>
// //               <th className="py-3 px-4">Description</th>
// //               <th className="py-3 px-4">Members</th>
// //               <th className="py-3 px-4">Coordinator</th>
// //               <th className="py-3 px-4">Actions</th> {/* Actions Column */}
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {volunteers.map((volunteer, index) => (
// //               <tr key={volunteer.id} className="even:bg-gray-100">
// //                 <td className="py-3 px-4 text-center">{index + 1}</td>
// //                 <td className="py-3 px-4 text-center">{volunteer.volunteerName}</td>
// //                 <td className="py-3 px-4 text-center">{volunteer.dateTime}</td>
// //                 <td className="py-3 px-4 text-center">{volunteer.location}</td>
// //                 <td className="py-3 px-4 text-center">{volunteer.timeDuration}</td>
// //                 <td className="py-3 px-4 text-center">{volunteer.description}</td>
// //                 <td className="py-3 px-4 text-center">{volunteer.members}</td>
// //                 <td className="py-3 px-4 text-center">{volunteer.coordinator}</td>
// //                 <td className="py-3 px-4 text-center space-x-2">
// //                   <Link
// //                     to={`/editvolunteer/${volunteer.id}`}
// //                     className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
// //                   >
// //                     Edit
// //                   </Link>
// //                   <button
// //                     onClick={() => handleDelete(volunteer.id)}
// //                     className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 ml-4"
// //                   >
// //                     Delete
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CreatedVO;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaHandsHelping } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// type Volunteer = {
//   id: number;
//   volunteerName: string;
//   dateTime: string;
//   location: string;
//   timeDuration: number;
//   description: string;
//   members: number;
//   coordinator: string;
// };

// type CreatedVOPProps = {
//   username: string;
// };

// const CreatedVO: React.FC<CreatedVOPProps> = ({ username }) => {
//   const [volunteers, setVolunteers] = useState<Volunteer[]>([]);

//   useEffect(() => {
//     loadVolunteers();
//   }, []);

//   const loadVolunteers = async () => {
//     try {
//       const result = await axios.get('http://127.0.0.1:8080/api/volunteers'); // Replace with actual API endpoint
//       setVolunteers(result.data);
//     } catch (error) {
//       console.error('Error loading volunteer opportunities:', error);
//     }
//   };

//   const handleDelete = async (id: number) => {
//     try {
//       await axios.delete(`http://127.0.0.1:8080/api/volunteers/${id}`); // Replace with actual API endpoint
//       setVolunteers(volunteers.filter(volunteer => volunteer.id !== id));
//     } catch (error) {
//       console.error('Error deleting volunteer opportunity:', error);
//     }
//   };

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center relative"
//       style={{ backgroundImage: 'url("/src/img/alu12.jpg")' }}
//     >
//       <nav className="bg-gray-800 bg-opacity-100 text-white p-4 flex justify-center items-center">
//         <div className="flex justify-center items-center space-x-4">
//           <FaHandsHelping size={32} />
//           <span className="text-2xl font-bold text-center">Volunteer Opportunities</span>
//         </div>
//       </nav>

//       <div className="container mx-auto mt-5">
//         <h1 className="text-center text-3xl font-bold mb-5 mt-12 text-pink-300">List of Volunteer Opportunities</h1>

        

//         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-purple-50 text-black">
//             <tr>
//               <th className="py-3 px-4">#</th>
//               <th className="py-3 px-4">Volunteer Name</th>
//               <th className="py-3 px-4">Date & Time</th>
//               <th className="py-3 px-4">Location</th>
//               <th className="py-3 px-4">Duration (hours)</th>
//               <th className="py-3 px-4">Description</th>
//               <th className="py-3 px-4">Members</th>
//               <th className="py-3 px-4">Coordinator</th>
//               <th className="py-3 px-4">Actions</th> {/* Actions Column */}
//             </tr>
//           </thead>
//           <tbody>
//             {volunteers.map((volunteer, index) => (
//               <tr key={volunteer.id} className="even:bg-gray-100">
//                 <td className="py-3 px-4 text-center">{index + 1}</td>
//                 <td className="py-3 px-4 text-center">{volunteer.volunteerName}</td>
//                 <td className="py-3 px-4 text-center">{volunteer.dateTime}</td>
//                 <td className="py-3 px-4 text-center">{volunteer.location}</td>
//                 <td className="py-3 px-4 text-center">{volunteer.timeDuration}</td>
//                 <td className="py-3 px-4 text-center">{volunteer.description}</td>
//                 <td className="py-3 px-4 text-center">{volunteer.members}</td>
//                 <td className="py-3 px-4 text-center">{volunteer.coordinator}</td>
//                 <td className="py-3 px-4 text-center space-x-2">
//                   <Link
//                     to={`/editvolunteer/${volunteer.id}`}
//                     className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     onClick={() => handleDelete(volunteer.id)}
//                     className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 ml-4"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
        
//       </div>
      
//     </div>

    
//   );
// };

// export default CreatedVO;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaHandsHelping } from 'react-icons/fa';
import { Link } from 'react-router-dom';

type Volunteer = {
  id: number;
  volunteerName: string;
  dateTime: string;
  location: string;
  timeDuration: number;
  description: string;
  members: number;
  coordinator: string;
};

type CreatedVOPProps = {
  username: string;
};

const CreatedVO: React.FC<CreatedVOPProps> = ({ username }) => {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);

  useEffect(() => {
    loadVolunteers();
  }, []);

  const loadVolunteers = async () => {
    try {
      const result = await axios.get('http://127.0.0.1:8080/api/volunteers'); // Replace with actual API endpoint
      setVolunteers(result.data);
    } catch (error) {
      console.error('Error loading volunteer opportunities:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://127.0.0.1:8080/api/volunteers/${id}`); // Replace with actual API endpoint
      setVolunteers(volunteers.filter(volunteer => volunteer.id !== id));
    } catch (error) {
      console.error('Error deleting volunteer opportunity:', error);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: 'url("/src/img/alu12.jpg")' }}
    >
      <nav className="bg-gray-800 bg-opacity-100 text-white p-4 flex justify-center items-center">
        <div className="flex justify-center items-center space-x-4">
          <FaHandsHelping size={32} />
          <span className="text-2xl font-bold text-center">Volunteer Opportunities</span>
        </div>
      </nav>

      <div className="container mx-auto mt-5">
        <h1 className="text-center text-3xl font-bold mb-5 mt-12 text-pink-300">List of Volunteer Opportunities</h1>

        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-purple-50 text-black">
            <tr>
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Volunteer Name</th>
              <th className="py-3 px-4">Date & Time</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Duration (hours)</th>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4">Members</th>
              <th className="py-3 px-4">Coordinator</th>
              <th className="py-3 px-4">Actions</th> {/* Actions Column */}
            </tr>
          </thead>
          <tbody>
            {volunteers.map((volunteer, index) => (
              <tr key={volunteer.id} className="even:bg-gray-100">
                <td className="py-3 px-4 text-center">{index + 1}</td>
                <td className="py-3 px-4 text-center">{volunteer.volunteerName}</td>
                <td className="py-3 px-4 text-center">{volunteer.dateTime}</td>
                <td className="py-3 px-4 text-center">{volunteer.location}</td>
                <td className="py-3 px-4 text-center">{volunteer.timeDuration}</td>
                <td className="py-3 px-4 text-center">{volunteer.description}</td>
                <td className="py-3 px-4 text-center">{volunteer.members}</td>
                <td className="py-3 px-4 text-center">{volunteer.coordinator}</td>
                <td className="py-3 px-4 text-center space-x-2">
                  <Link
                    to={`/editvolunteer/${volunteer.id}`}
                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(volunteer.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 ml-4"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Back to Admin Page Button at the bottom */}
        <div className="mt-5 text-center">
          <Link
            to="/VolunteerOPadmin"
            className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-500"
          >
            Back to Previous Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreatedVO;


