// import React, { useState } from 'react';
// import { FaUser } from 'react-icons/fa';
// import { MdEvent } from 'react-icons/md';
// import { useNavigate } from 'react-router-dom';

// const Adddonation: React.FC = () => {
//   const [donationName, setDonationName] = useState('');
//   const [contactDetails, setContactDetails] = useState('');
//   const [billingAddress, setBillingAddress] = useState('');
//   const [amount, setAmount] = useState('');
//   const [description, setDescription] = useState('');
//   const [donationType, setDonationType] = useState('ONLINE');
//   const navigate = useNavigate();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission logic
//     console.log({
//       donationName,
//       contactDetails,
//       billingAddress,
//       amount,
//       description,
//       donationType,
//     });
//   };

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center relative"
//       style={{
//         backgroundImage: 'url("/src/img/alu7.jpg")',
//       }}
//     >
//       <nav className="bg-gray-800 bg-opacity-100 text-white p-4 flex justify-between items-center">
//         <div className="flex-1 flex items-center space-x-4">
//         </div>
//         <div className="flex-1 flex justify-center items-center space-x-4">
//           <MdEvent size={32} />
//           <span className="text-2xl font-bold">Add New Donation</span>
//         </div>
//         <div className="flex-1 flex justify-end">
          
//         </div>
//       </nav>

//       <div className="container mx-auto mt-5">
//         <h1 className="text-center text-3xl font-bold mb-5 mt-8 text-pink-500">Add Donation</h1>
//         <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg">
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="donationName">
//               Donation Name
//             </label>
//             <input
//               className="w-full px-3 py-2 border rounded-lg text-gray-700"
//               type="text"
//               id="donationName"
//               value={donationName}
//               onChange={(e) => setDonationName(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactDetails">
//               Contact Details
//             </label>
//             <input
//               className="w-full px-3 py-2 border rounded-lg text-gray-700"
//               type="text"
//               id="contactDetails"
//               value={contactDetails}
//               onChange={(e) => setContactDetails(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="billingAddress">
//               Billing Address
//             </label>
//             <input
//               className="w-full px-3 py-2 border rounded-lg text-gray-700"
//               type="text"
//               id="billingAddress"
//               value={billingAddress}
//               onChange={(e) => setBillingAddress(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
//               Donation Amount
//             </label>
//             <input
//               className="w-full px-3 py-2 border rounded-lg text-gray-700"
//               type="number"
//               id="amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
//               Description
//             </label>
//             <textarea
//               className="w-full px-3 py-2 border rounded-lg text-gray-700"
//               id="description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="donationType">
//               Donation Type
//             </label>
//             <select
//               className="w-full px-3 py-2 border rounded-lg text-gray-700"
//               id="donationType"
//               value={donationType}
//               onChange={(e) => setDonationType(e.target.value)}
//               required
//             >
//               <option value="ONLINE">Online</option>
//               <option value="MATERIAL">Material</option>
//               <option value="CASH">Cash</option>
//               <option value="CHECK">Check</option>
//             </select>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-amber-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-amber-600"
//           >
//             Submit Donation
//           </button>
//         </form>
//       </div>

//       <footer className="bg-gray-800 bg-opacity-100 text-white p-4 text-center absolute bottom-0 w-full">
//         <p>&copy; {new Date().getFullYear()} Alumni Management with Event Management.</p>
//       </footer>
//     </div>
//   );
// };

// export default Adddonation;


// import React, { useState } from 'react';
// import { FaUser } from 'react-icons/fa';
// import { MdEvent } from 'react-icons/md';
// import { useNavigate } from 'react-router-dom';

// const Adddonation: React.FC = () => {
//   const [donationName, setDonationName] = useState('');
//   const [contactDetails, setContactDetails] = useState('');
//   const [billingAddress, setBillingAddress] = useState('');
//   const [amount, setAmount] = useState('');
//   const [description, setDescription] = useState('');
//   const [donationType, setDonationType] = useState('ONLINE');
//   const navigate = useNavigate();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission logic
//     console.log({
//       donationName,
//       contactDetails,
//       billingAddress,
//       amount,
//       description,
//       donationType,
//     });
//     // Optionally navigate back to the home page or clear the form here
//     // navigate('/'); // Uncomment if you want to navigate after submit
//   };

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center relative"
//       style={{
//         backgroundImage: 'url("/src/img/alu7.jpg")',
//       }}
//     >
//       <nav className="bg-gray-800 bg-opacity-100 text-white p-4 flex justify-between items-center">
//         <div className="flex-1 flex items-center space-x-4"></div>
//         <div className="flex-1 flex justify-center items-center space-x-4">
//           <MdEvent size={32} />
//           <span className="text-2xl font-bold">Add New Donation</span>
//         </div>
//         <div className="flex-1 flex justify-end"></div>
//       </nav>

//       <div className="container mx-auto mt-5">
//         <h1 className="text-center text-3xl font-bold mb-5 mt-8 text-pink-500">Add Donation</h1>

//         <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg">
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="donationName">
//               Donation Name
//             </label>
//             <input
//               className="w-full px-3 py-2 border rounded-lg text-gray-700"
//               type="text"
//               id="donationName"
//               value={donationName}
//               onChange={(e) => setDonationName(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactDetails">
//               Contact Details
//             </label>
//             <input
//               className="w-full px-3 py-2 border rounded-lg text-gray-700"
//               type="text"
//               id="contactDetails"
//               value={contactDetails}
//               onChange={(e) => setContactDetails(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="billingAddress">
//               Billing Address
//             </label>
//             <input
//               className="w-full px-3 py-2 border rounded-lg text-gray-700"
//               type="text"
//               id="billingAddress"
//               value={billingAddress}
//               onChange={(e) => setBillingAddress(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
//               Donation Amount
//             </label>
//             <input
//               className="w-full px-3 py-2 border rounded-lg text-gray-700"
//               type="number"
//               id="amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
//               Description
//             </label>
//             <textarea
//               className="w-full px-3 py-2 border rounded-lg text-gray-700"
//               id="description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="donationType">
//               Donation Type
//             </label>
//             <select
//               className="w-full px-3 py-2 border rounded-lg text-gray-700"
//               id="donationType"
//               value={donationType}
//               onChange={(e) => setDonationType(e.target.value)}
//               required
//             >
//               <option value="ONLINE">Online</option>
//               <option value="MATERIAL">Material</option>
//               <option value="CASH">Cash</option>
//               <option value="CHECK">Check</option>
//             </select>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-amber-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-amber-600"
//           >
//             Submit Donation
//           </button>
//         </form>

//         {/* Back to Home Button at the bottom */}
//         <button
//           onClick={() => navigate('/Donationadmin')} // Adjust the path based on your routing
//           className="mt-2 items-center bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
//         >
//           Back to Home Page
//         </button>
//       </div>

//       <footer className="bg-gray-800 bg-opacity-100 text-white p-4 text-center absolute bottom-0 w-full">
//         <p>&copy; {new Date().getFullYear()} Alumni Management with Event Management.</p>
//       </footer>
//     </div>
//   );
// };

// export default Adddonation;


import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdEvent } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Adddonation: React.FC = () => {
  const [donationName, setDonationName] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [donationType, setDonationType] = useState('ONLINE');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({
      donationName,
      contactDetails,
      billingAddress,
      amount,
      description,
      donationType,
    });
    // Optionally navigate back to the home page or clear the form here
    // navigate('/'); // Uncomment if you want to navigate after submit
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: 'url("/src/img/alu7.jpg")',
      }}
    >
      <nav className="bg-gray-800 bg-opacity-100 text-white p-4 flex justify-between items-center">
        <div className="flex-1 flex items-center space-x-4"></div>
        <div className="flex-1 flex justify-center items-center space-x-4">
          <MdEvent size={32} />
          <span className="text-2xl font-bold">Add New Donation</span>
        </div>
        <div className="flex-1 flex justify-end"></div>
      </nav>

      <div className="container mx-auto mt-5">
        <h1 className="text-center text-3xl font-bold mb-5 mt-8 text-pink-500">Add Donation</h1>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="donationName">
              Donation Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg text-gray-700"
              type="text"
              id="donationName"
              value={donationName}
              onChange={(e) => setDonationName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactDetails">
              Contact Details
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg text-gray-700"
              type="text"
              id="contactDetails"
              value={contactDetails}
              onChange={(e) => setContactDetails(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="billingAddress">
              Billing Address
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg text-gray-700"
              type="text"
              id="billingAddress"
              value={billingAddress}
              onChange={(e) => setBillingAddress(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
              Donation Amount
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg text-gray-700"
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-lg text-gray-700"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="donationType">
              Donation Type
            </label>
            <select
              className="w-full px-3 py-2 border rounded-lg text-gray-700"
              id="donationType"
              value={donationType}
              onChange={(e) => setDonationType(e.target.value)}
              required
            >
              <option value="ONLINE">Online</option>
              <option value="MATERIAL">Material</option>
              <option value="CASH">Cash</option>
              <option value="CHECK">Check</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-amber-600"
          >
            Submit Donation
          </button>
        </form>

        {/* Centering the Back to Home Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate('/Donationadmin')} // Adjust the path based on your routing
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Previous Page
          </button>
        </div>
      </div>
</div>
  );
};

export default Adddonation;
