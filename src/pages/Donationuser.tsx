// // import React, { useState } from 'react';
// // import { FaDonate } from 'react-icons/fa'; // Import the donation icon

// // // Define the Donation interface
// // interface Donation {
// //   id: number;
// //   donationName: string;
// //   contactDetails: string;
// //   billingAddress: string;
// //   amount: number;
// //   description: string;
// //   donationType: string;
// // }

// // // Define the DonationList component
// // const DonationList: React.FC = () => {
// //   const [donations, setDonations] = useState<Donation[]>([
// //     {
// //       id: 1,
// //       donationName: 'Donation 1',
// //       contactDetails: 'John Doe',
// //       billingAddress: '123 Street, New York',
// //       amount: 100,
// //       description: 'Donation for alumni fund',
// //       donationType: 'Online',
// //     },
// //     {
// //       id: 2,
// //       donationName: 'Donation 2',
// //       contactDetails: 'Jane Smith',
// //       billingAddress: '456 Avenue, Los Angeles',
// //       amount: 200,
// //       description: 'Support for alumni scholarship',
// //       donationType: 'Cash',
// //     },
// //     {
// //       id: 3,
// //       donationName: 'Donation 3',
// //       contactDetails: 'Mike Johnson',
// //       billingAddress: '789 Blvd, Chicago',
// //       amount: 150,
// //       description: 'Fundraising event donation',
// //       donationType: 'Check',
// //     },
// //   ]);

// //   const [selectedDonation, setSelectedDonation] = useState<Donation | null>(null);

// //   const handleDonationSelect = (donation: Donation) => {
// //     setSelectedDonation(donation);
// //   };

// //   const handlePayment = (donation: Donation) => {
// //     console.log(`Initiating payment for ${donation.donationName}`);
// //   };

// //   return (
// //     <div className="p-4 sm:p-6 md:p-8">
// //       {/* Centered Heading */}
// //       <div className="flex justify-center mb-8">
// //         <h1 className="text-3xl font-bold text-gray-900">Alumni Donations</h1>
// //       </div>
      
// //       {/* Donations List */}
// //       <div className="flex flex-wrap -mx-4">
// //         {donations.map((donation) => (
// //           <div key={donation.id} className="w-full md:w-1/2 xl:w-1/3 p-4">
// //             <div className="bg-white rounded-lg shadow-md p-4">
// //               <h2 className="text-lg font-bold text-gray-900">{donation.donationName}</h2>
// //               <p className="text-gray-600">Contact: {donation.contactDetails}</p>
// //               <p className="text-gray-600">Billing Address: {donation.billingAddress}</p>
// //               <p className="text-gray-600">Amount: ${donation.amount}</p>
// //               <p className="text-gray-600">Type: {donation.donationType}</p>
// //               <p className="text-gray-600">{donation.description}</p>
// //               <div className="mt-4 flex space-x-4">
// //                 <button
// //                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
// //                   onClick={() => handleDonationSelect(donation)}
// //                 >
// //                   View Details
// //                 </button>
// //                 <button
// //                   className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
// //                   onClick={() => handlePayment(donation)}
// //                 >
// //                   Pay
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
      
// //       {selectedDonation && (
// //         <div className="mt-8 text-center">
// //           <h2 className="text-lg font-bold text-gray-900">
// //             {selectedDonation.donationName} Details
// //           </h2>
// //           <p className="text-gray-600">Contact: {selectedDonation.contactDetails}</p>
// //           <p className="text-gray-600">Billing Address: {selectedDonation.billingAddress}</p>
// //           <p className="text-gray-600">Amount: ${selectedDonation.amount}</p>
// //           <p className="text-gray-600">Description: {selectedDonation.description}</p>
// //           <p className="text-gray-600">Donation Type: {selectedDonation.donationType}</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // // Define the Donationuser component
// // const Donationuser: React.FC = () => {
// //   return (
// //     <div className="min-h-screen flex flex-col">
// //       {/* Navbar with centered title */}
// //       <nav className="bg-gray-800 bg-opacity-100 p-4 flex justify-center items-center">
// //         <div className="text-white text-2xl font-bold flex items-center">
// //           <FaDonate className="mr-2" /> {/* Donation icon */}
// //           Alumni Donations {/* Centered title */}
// //         </div>
// //       </nav>

// //       {/* Main container for the form */}
// //       <main className="flex-1 p-4 sm:p-6 md:p-8">
// //         <DonationList />
// //       </main>

// //       {/* Footer */}
// //       <footer className="bg-gray-800 bg-opacity-100 p-4 text-center text-white mt-8">
// //         <p>&copy; 2024 Alumni Management with Event Management.</p>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default Donationuser;

// import React, { useState } from 'react';
// import { FaDonate, FaUser } from 'react-icons/fa'; // Import the donation and user icons

// // Define the Donation interface
// interface Donation {
//   id: number;
//   donationName: string;
//   contactDetails: string;
//   billingAddress: string;
//   amount: number;
//   description: string;
//   donationType: string;
// }

// // Define the DonationList component
// const DonationList: React.FC = () => {
//   const [donations, setDonations] = useState<Donation[]>([
//     {
//       id: 1,
//       donationName: 'Donation 1',
//       contactDetails: 'John Doe',
//       billingAddress: '123 Street, New York',
//       amount: 100,
//       description: 'Donation for alumni fund',
//       donationType: 'Online',
//     },
//     {
//       id: 2,
//       donationName: 'Donation 2',
//       contactDetails: 'Jane Smith',
//       billingAddress: '456 Avenue, Los Angeles',
//       amount: 200,
//       description: 'Support for alumni scholarship',
//       donationType: 'Cash',
//     },
//     {
//       id: 3,
//       donationName: 'Donation 3',
//       contactDetails: 'Mike Johnson',
//       billingAddress: '789 Blvd, Chicago',
//       amount: 150,
//       description: 'Fundraising event donation',
//       donationType: 'Check',
//     },
//   ]);

//   const [selectedDonation, setSelectedDonation] = useState<Donation | null>(null);

//   const handleDonationSelect = (donation: Donation) => {
//     setSelectedDonation(donation);
//   };

//   const handlePayment = (donation: Donation) => {
//     console.log(`Initiating payment for ${donation.donationName}`);
//   };

//   return (
//     <div className="p-4 sm:p-6 md:p-8">
//       {/* Centered Heading */}
//       <div className="flex justify-center mb-8">
//         <h1 className="text-3xl font-bold text-gray-900">Alumni Donations</h1>
//       </div>
      
//       {/* Donations List */}
//       <div className="flex flex-wrap -mx-4">
//         {donations.map((donation) => (
//           <div key={donation.id} className="w-full md:w-1/2 xl:w-1/3 p-4">
//             <div className="bg-white rounded-lg shadow-md p-4">
//               <h2 className="text-lg font-bold text-gray-900">{donation.donationName}</h2>
//               <p className="text-gray-600">Contact: {donation.contactDetails}</p>
//               <p className="text-gray-600">Billing Address: {donation.billingAddress}</p>
//               <p className="text-gray-600">Amount: ${donation.amount}</p>
//               <p className="text-gray-600">Type: {donation.donationType}</p>
//               <p className="text-gray-600">{donation.description}</p>
//               <div className="mt-4 flex space-x-4">
//                 <button
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                   onClick={() => handleDonationSelect(donation)}
//                 >
//                   View Details
//                 </button>
//                 <button
//                   className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//                   onClick={() => handlePayment(donation)}
//                 >
//                   Pay
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
      
//       {selectedDonation && (
//         <div className="mt-8 text-center">
//           <h2 className="text-lg font-bold text-gray-900">
//             {selectedDonation.donationName} Details
//           </h2>
//           <p className="text-gray-600">Contact: {selectedDonation.contactDetails}</p>
//           <p className="text-gray-600">Billing Address: {selectedDonation.billingAddress}</p>
//           <p className="text-gray-600">Amount: ${selectedDonation.amount}</p>
//           <p className="text-gray-600">Description: {selectedDonation.description}</p>
//           <p className="text-gray-600">Donation Type: {selectedDonation.donationType}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// // Define the Donationuser component
// const Donationuser: React.FC = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Navbar with centered title and user info */}
//       <nav className="bg-gray-800 bg-opacity-100 p-4 flex items-center">
//         {/* User Info on the Left */}
//         <div className="flex items-center space-x-4">
//           {/* <FaUser className="text-white text-xl" />            User icon */}
//           {/* <span className="text-white text-lg">User</span>     User text */}
//         </div>
        
//         {/* Centered Title */}
//         <div className="flex-1 flex justify-center">
//           <div className="text-white text-2xl font-bold flex items-center">
//             <FaDonate className="mr-2" /> {/* Donation icon */}
//             Alumni Donations {/* Centered title */}
//           </div>
//         </div>
//       </nav>

//       {/* Main container for the form */}
//       <main className="flex-1 p-4 sm:p-6 md:p-8">
//         <DonationList />
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 bg-opacity-100 p-4 text-center text-white mt-8">
//         <p>&copy; 2024 Alumni Management with Event Management.</p>
//       </footer>
//     </div>
//   );
// };

// export default Donationuser;


import React, { useState } from 'react';
import { FaDonate } from 'react-icons/fa'; // Import the donation icon

// Define the Donation interface
interface Donation {
  id: number;
  donationName: string;
  contactDetails: string;
  billingAddress: string;
  amount: number;
  description: string;
  donationType: string;
}

// Define the DonationList component
const DonationList: React.FC = () => {
  const [donations, setDonations] = useState<Donation[]>([
    {
      id: 1,
      donationName: 'Donation 1',
      contactDetails: 'John Doe',
      billingAddress: '123 Street, New York',
      amount: 100,
      description: 'Donation for alumni fund',
      donationType: 'Online',
    },
    {
      id: 2,
      donationName: 'Donation 2',
      contactDetails: 'Jane Smith',
      billingAddress: '456 Avenue, Los Angeles',
      amount: 200,
      description: 'Support for alumni scholarship',
      donationType: 'Cash',
    },
    {
      id: 3,
      donationName: 'Donation 3',
      contactDetails: 'Mike Johnson',
      billingAddress: '789 Blvd, Chicago',
      amount: 150,
      description: 'Fundraising event donation',
      donationType: 'Check',
    },
  ]);

  const [selectedDonation, setSelectedDonation] = useState<Donation | null>(null);

  const handleDonationSelect = (donation: Donation) => {
    setSelectedDonation(donation);
  };

  const handlePayment = (donation: Donation) => {
    console.log(`Initiating payment for ${donation.donationName}`);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Centered Heading */}
      <div className="flex justify-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Alumni Donations</h1>
      </div>
      
      {/* Donations List */}
      <div className="flex flex-wrap -mx-4">
        {donations.map((donation) => (
          <div key={donation.id} className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md p-4 border border-gray-300">
              <h2 className="text-lg font-bold text-gray-900">{donation.donationName}</h2>
              <p className="text-gray-600">Contact: {donation.contactDetails}</p>
              <p className="text-gray-600">Billing Address: {donation.billingAddress}</p>
              <p className="text-gray-600">Amount: ${donation.amount}</p>
              <p className="text-gray-600">Type: {donation.donationType}</p>
              <p className="text-gray-600">{donation.description}</p>
              <div className="mt-4 flex space-x-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDonationSelect(donation)}
                >
                  View Details
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handlePayment(donation)}
                >
                  Pay
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {selectedDonation && (
        <div className="mt-8 text-center">
          <h2 className="text-lg font-bold text-gray-900">
            {selectedDonation.donationName} Details
          </h2>
          <p className="text-gray-600">Contact: {selectedDonation.contactDetails}</p>
          <p className="text-gray-600">Billing Address: {selectedDonation.billingAddress}</p>
          <p className="text-gray-600">Amount: ${selectedDonation.amount}</p>
          <p className="text-gray-600">Description: {selectedDonation.description}</p>
          <p className="text-gray-600">Donation Type: {selectedDonation.donationType}</p>
        </div>
      )}
    </div>
  );
};

// Define the Donationuser component
const Donationuser: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar with centered title */}
      <nav className="bg-gray-800 bg-opacity-100 p-4 flex justify-center items-center">
        <div className="text-white text-2xl font-bold flex items-center">
          <FaDonate className="mr-2" /> {/* Donation icon */}
          Alumni Donations {/* Centered title */}
        </div>
      </nav>

      {/* Main container for the form */}
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <DonationList />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 bg-opacity-100 p-4 text-center text-white mt-8">
        <p>&copy; 2024 Alumni Management with Event Management.</p>
      </footer>
    </div>
  );
};

export default Donationuser;




