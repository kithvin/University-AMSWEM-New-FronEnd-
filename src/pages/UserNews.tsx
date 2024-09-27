// import React from 'react';
// import { FaUser, FaNewspaper } from 'react-icons/fa';

// const UserNews: React.FC = () => {
//   const username = 'User'; // Replace with the actual username or fetch dynamically

//   // Sample news data with media
//   const newsList = [
//     { 
//       authorName: 'John Doe', 
//       title: 'Alumni Event Announced', 
//       publishDate: '2024-09-10', 
//       coverArea: 'Events', 
//       group: 'Alumni', 
//       expireDate: '2024-09-30',
//       description: 'Join us for the alumni meet...', 
//       mediaUrl: '/src/img/alu7.jpg', // Example image URL
//       mediaType: 'image' // 'image' or 'video'
//     },
//     { 
//       authorName: 'Jane Smith', 
//       title: 'Alumni Video Message', 
//       publishDate: '2024-08-15', 
//       coverArea: 'General', 
//       group: 'Alumni', 
//       expireDate: '2024-09-01',
//       description: 'A message from our alumni president...', 
//       mediaUrl: '/src/img/alu6.jpg', // Example video URL
//       mediaType: 'image' // 'image' or 'video'
//     },
//     // Add more sample data as needed
//   ];

//   return (
//     <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url("/src/img/alu10.png")' }}>
//       <nav className="bg-gray-800 bg-opacity-100 text-white p-4 flex justify-between items-center">
//         <div className="flex-1 flex items-center space-x-4">
//           <FaUser size={24} />
//           <span className="text-lg font-semibold">
//             {username} <span className="text-sm text-gray-300"></span>
//           </span>
//         </div>
//         <div className="flex-1 flex justify-center items-center space-x-4">
//           <FaNewspaper size={32} />
//           <span className="text-2xl font-bold">News Board</span>
//         </div>
//         <div className="flex-1 flex justify-end">
          
//         </div>
//       </nav>

//       <div className="p-8">
//         <h1 className="text-3xl font-bold text-center mb-8 text-bg-gray-400">Alumni News</h1>

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

//               {/* Display media based on type */}
//               {news.mediaType === 'image' && (
//                 <img src={news.mediaUrl} alt="News media" className="w-full h-64 object-cover rounded-lg mt-4" />
//               )}
//               {news.mediaType === 'video' && (
//                 <video controls className="w-full h-64 rounded-lg mt-4">
//                   <source src={news.mediaUrl} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserNews;

import React, { useState } from 'react';
import { FaUser, FaNewspaper } from 'react-icons/fa';

const UserNews: React.FC = () => {
  // State to hold the currently selected news item
  const [selectedNews, setSelectedNews] = useState<any>(null);
  const username = 'User'; // Replace with the actual username or fetch dynamically

  // Sample news data with media
  const newsList = [
    { 
      authorName: 'John Doe', 
      title: 'Alumni Event Announced', 
      publishDate: '2024-09-10', 
      coverArea: 'Events', 
      group: 'Alumni', 
      expireDate: '2024-09-30',
      description: 'Join us for the alumni meet...', 
      mediaUrl: '/src/img/alu7.jpg', // Example image URL
      mediaType: 'image' // 'image' or 'video'
    },
    { 
      authorName: 'Jane Smith', 
      title: 'Alumni Video Message', 
      publishDate: '2024-08-15', 
      coverArea: 'General', 
      group: 'Alumni', 
      expireDate: '2024-09-01',
      description: 'A message from our alumni president...', 
      mediaUrl: '/src/img/alu6.jpg', // Example video URL
      mediaType: 'image' // 'image' or 'video'
    },
    // Add more sample data as needed
  ];

  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url("/src/img/alu10.png")' }}>
      {/* Navigation bar */}
      <nav className="bg-gray-800 bg-opacity-100 text-white p-4 flex justify-between items-center">
        {/* User info section */}
        <div className="flex-1 flex items-center space-x-4">
          {/* <FaUser size={24} />
          <span className="text-lg font-semibold">
            {username} <span className="text-sm text-gray-300"></span>
          </span> */}
        </div>
        {/* Centered title section */}
        <div className="flex-1 flex justify-center items-center space-x-4">
          <FaNewspaper size={32} />
          <span className="text-2xl font-bold">News Board</span>
        </div>
        <div className="flex-1 flex justify-end">
        </div>
      </nav>

      <div className="p-8">
        {/* Conditional rendering based on whether a news item is selected */}
        {selectedNews ? (
          // Detailed view of the selected news item
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-2">{selectedNews.title}</h2>
            <p className="text-sm text-gray-600 mb-1">By: {selectedNews.authorName}</p>
            <p className="text-sm text-gray-600 mb-1">Publish Date: {selectedNews.publishDate}</p>
            <p className="text-sm text-gray-600 mb-1">Group: {selectedNews.group}</p>
            <p className="text-sm text-gray-600 mb-1">Cover Area: {selectedNews.coverArea}</p>
            <p className="text-sm text-gray-600 mb-4">Expires on: {selectedNews.expireDate}</p>
            <p className="text-sm mb-4">{selectedNews.description}</p>

            {/* Display media based on type */}
            {selectedNews.mediaType === 'image' && (
              <img src={selectedNews.mediaUrl} alt="News media" className="w-full h-64 object-cover rounded-lg mb-4" />
            )}
            {selectedNews.mediaType === 'video' && (
              <video controls className="w-full h-64 rounded-lg mb-4">
                <source src={selectedNews.mediaUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}

            {/* Button to go back to the news list */}
            <div className="flex justify-center mt-8">
              <button 
                className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
                onClick={() => setSelectedNews(null)} // Reset selectedNews to null to go back to the news list
              >
                Back to News List
              </button>
            </div>
          </div>
        ) : (
          // News Grid view when no specific news item is selected
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsList.map((news, index) => (
              <div 
                key={index} 
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedNews(news)} // Set the clicked news item as selected
              >
                <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
                <p className="text-sm text-gray-600 mb-1">By: {news.authorName}</p>
                <p className="text-sm text-gray-600 mb-1">Publish Date: {news.publishDate}</p>
                <p className="text-sm text-gray-600 mb-1">Group: {news.group}</p>
                <p className="text-sm text-gray-600 mb-1">Cover Area: {news.coverArea}</p>
                <p className="text-sm text-gray-600 mb-4">Expires on: {news.expireDate}</p>
                <p className="text-sm">{news.description}</p>

                {/* Display media based on type */}
                {news.mediaType === 'image' && (
                  <img src={news.mediaUrl} alt="News media" className="w-full h-64 object-cover rounded-lg mt-4" />
                )}
                {news.mediaType === 'video' && (
                  <video controls className="w-full h-64 rounded-lg mt-4">
                    <source src={news.mediaUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserNews;

