// import React, { useState } from 'react';
// import { AiOutlineEdit, AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai';
// import { FaUser, FaNewspaper } from 'react-icons/fa';

// const AdminNews: React.FC = () => {
//   const [showModal, setShowModal] = useState(false);
//   const username = 'Admin'; // Replace with the actual username or fetch dynamically

//   // Sample news data
//   const newsList = [
//     { 
//       authorName: 'John Doe', 
//       title: 'Alumni Event Announced', 
//       publishDate: '2024-09-10', 
//       coverArea: 'Events', 
//       group: 'Alumni', 
//       expireDate: '2024-09-30',
//       description: 'Join us for the alumni meet...' 
      
//     },
//     // Add more sample data as needed
//   ];

//   return (
//     <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url("/src/img/alu10.png")' }}>
//       <nav className="bg-gray-800 bg-opacity-100 text-white p-4 flex justify-between items-center">
//         <div className="flex-1 flex items-center space-x-4">
//           {/* <FaUser size={24} />
//           <span className="text-lg font-semibold">
//             {username} <span className="text-sm text-gray-300"></span>
//           </span> */}
//         </div>
//         <div className="flex-1 flex justify-center items-center space-x-4">
//           <FaNewspaper size={32} />
//           <span className="text-2xl font-bold">News Board</span>
//         </div>
//         <div className="flex-1 flex justify-end">
          
//         </div>
//       </nav>

//       <div className="p-8">
//         <h1 className="text-3xl font-bold text-center mb-8 text-fuchsia-700">Alumni News Updates</h1>

//         {/* News Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {newsList.map((news, index) => (
//             <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
//               <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
//               <p className="text-sm text-gray-600 mb-1">By: {news.authorName}</p>
//               <p className="text-sm text-gray-600 mb-1">Publish Date: {news.publishDate}</p>
//               <p className="text-sm text-gray-600 mb-1">Group: {news.group}</p>
//               <p className="text-sm text-gray-600 mb-1">Cover Area: {news.coverArea}</p>
//               <p className="text-sm text-gray-600 mb-4">Expires on: {news.expireDate}</p>
//               <p className="text-sm">{news.description}</p>
//               <div className="flex justify-end mt-4">
//                 <button className="text-blue-500 hover:text-blue-700 mr-2">
//                   <AiOutlineEdit size={24} />
//                 </button>
//                 <button className="text-red-500 hover:text-red-700">
//                   <AiOutlineDelete size={24} />
//                 </button>
//               </div>
//             </div>
//           ))}
//           {/* Add News Button */}
//           <div 
//             onClick={() => setShowModal(true)} 
//             className="cursor-pointer flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-6 shadow-lg transition-colors">
//             <AiOutlinePlus size={40} />
//           </div>
//         </div>

//         {/* Add News Modal */}
//         {showModal && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//             <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//               <h2 className="text-2xl font-bold mb-4 text-center">Create News</h2>
//               <form>
//                 <input 
//                   type="text" 
//                   placeholder="Author Name" 
//                   className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <input 
//                   type="text" 
//                   placeholder="News Title" 
//                   className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <input 
//                   type="date" 
//                   placeholder="Publish Date" 
//                   className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <input 
//                   type="text" 
//                   placeholder="Cover Area" 
//                   className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <input 
//                   type="text" 
//                   placeholder="Group" 
//                   className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <input 
//                   type="date" 
//                   placeholder="Expire Date" 
//                   className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <textarea 
//                   placeholder="Description" 
//                   className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />

//                 {/* Media Upload */}
//                 <label className="block mb-2 text-sm font-medium text-gray-700">Upload Media</label>
//                 <input 
//                   type="file" 
//                   className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   accept="image/*,video/*" // restrict file types to images and videos
//                 />

//                 <button 
//                   type="submit" 
//                   className="bg-blue-500 text-white w-full p-3 rounded-lg hover:bg-blue-600 transition-colors">
//                   Submit
//                 </button>
//               </form>
//               <button 
//                 className="bg-red-600 text-white w-full p-3 rounded-lg hover:bg-red-600 transition-colors mt-4" 
//                 onClick={() => setShowModal(false)}>
//                 Cancel
//               </button>

//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminNews;

import React, { useState } from 'react';
import { AiOutlineEdit, AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai';
import { FaUser, FaNewspaper } from 'react-icons/fa';

const AdminNews: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const username = 'Admin'; // Replace with the actual username or fetch dynamically

  // Sample news data
  const newsList = [
    { 
      authorName: 'John Doe', 
      title: 'Alumni Event Announced', 
      publishDate: '2024-09-10', 
      coverArea: 'Events', 
      group: 'Alumni', 
      expireDate: '2024-09-30',
      description: 'Join us for the alumni meet...' 
    },
    // Add more sample data as needed
  ];

  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url("/src/img/alu10.png")' }}>
      <nav className="bg-gray-800 bg-opacity-100 text-white p-4 flex justify-between items-center">
        <div className="flex-1 flex items-center space-x-4">
          {/* <FaUser size={24} />
          <span className="text-lg font-semibold">
            {username} <span className="text-sm text-gray-300"></span>
          </span> */}
        </div>
        <div className="flex-1 flex justify-center items-center space-x-4">
          <FaNewspaper size={32} />
          <span className="text-2xl font-bold">News Board</span>
        </div>
        <div className="flex-1 flex justify-end">
          {/* Optional additional controls */}
        </div>
      </nav>

      <div className="p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-fuchsia-700">Alumni News Updates</h1>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsList.map((news, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
              <p className="text-sm text-gray-600 mb-1">By: {news.authorName}</p>
              <p className="text-sm text-gray-600 mb-1">Publish Date: {news.publishDate}</p>
              <p className="text-sm text-gray-600 mb-1">Group: {news.group}</p>
              <p className="text-sm text-gray-600 mb-1">Cover Area: {news.coverArea}</p>
              <p className="text-sm text-gray-600 mb-4">Expires on: {news.expireDate}</p>
              <p className="text-sm">{news.description}</p>
              <div className="flex justify-end mt-4">
                <button className="text-blue-500 hover:text-blue-700 mr-2">
                  <AiOutlineEdit size={24} />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <AiOutlineDelete size={24} />
                </button>
              </div>
            </div>
          ))}
          {/* Add News Button */}
          <div 
            onClick={() => setShowModal(true)} 
            className="cursor-pointer flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-6 shadow-lg transition-colors">
            <AiOutlinePlus size={40} />
          </div>
        </div>

        {/* Add News Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4 text-center">Create News</h2>
              <form>
                <input 
                  type="text" 
                  placeholder="Author Name" 
                  className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="text" 
                  placeholder="News Title" 
                  className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="date" 
                  className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="text" 
                  placeholder="Cover Area" 
                  className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="text" 
                  placeholder="Group" 
                  className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="date" 
                  className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea 
                  placeholder="Description" 
                  className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Media Upload */}
                <label className="block mb-2 text-sm font-medium text-gray-700">Upload Media</label>
                <input 
                  type="file" 
                  className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  accept="image/*,video/*" // restrict file types to images and videos
                />

                <button 
                  type="submit" 
                  className="bg-blue-500 text-white w-full p-3 rounded-lg hover:bg-blue-600 transition-colors">
                  Submit
                </button>
              </form>
              <button 
                className="bg-red-600 text-white w-full p-3 rounded-lg hover:bg-red-600 transition-colors mt-4" 
                onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        )}
        
        {/* Back to Home Button */}
        <div className="flex justify-center mt-8">
          <button 
            className="bg-gray-500 text-white font-bold p-3 rounded-lg hover:bg-gray-600 transition-colors"
            onClick={() => window.location.href = '/'}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminNews;




