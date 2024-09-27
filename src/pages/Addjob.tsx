import React, { useState } from 'react';
import { FaBriefcase } from 'react-icons/fa';

// Define the Jobadmin component
const Addjob: React.FC = () => {
  // State for managing the file upload (poster)
  const [poster, setPoster] = useState<File | null>(null);

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPoster(e.target.files[0]);
    }
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create FormData object to send the data including the file
    const formData = new FormData();
    formData.append('jobName', (e.target as any).jobName.value);
    formData.append('companyName', (e.target as any).companyName.value);
    formData.append('location', (e.target as any).location.value);
    formData.append('salaryDetails', (e.target as any).salaryDetails.value);
    formData.append('jobDescription', (e.target as any).jobDescription.value);
    formData.append('expireDate', (e.target as any).expireDate.value);
    formData.append('applyMethod', (e.target as any).applyMethod.value);

    // Append the file to the form data if a file is selected
    if (poster) {
      formData.append('poster', poster);
    }

    // Now you can submit the formData to the server using axios or fetch
    // Example: axios.post('/api/upload-job', formData);

    console.log("Form submitted");
  };

  return (
    <div className="bg-[url('/src/img/alu9.png')] bg-cover bg-center min-h-screen flex flex-col">
      {/* Navbar with centered title */}
      <nav className="bg-gray-800 bg-opacity-100 p-4 flex justify-center items-center">
        <div className="text-white text-2xl font-bold flex items-center">
          <FaBriefcase className="mr-2" /> {/* Briefcase icon */}
          Alumni Job Board {/* Centered title */}
        </div>
      </nav>

      {/* Main container for the form */}
      <div className="flex-grow container max-w-lg mx-auto p-2">
        
      <h2 className="text-center text-3xl font-bold mb-4 text-white"> Post a Job</h2> {/* Page title */}

        {/* Form container with a background color and shadow */}
        <div className="bg-amber-100 shadow-md rounded-lg p-6">
          <form onSubmit={handleSubmit}>
            {/* Job Name input field */}
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="jobName">
                Job Name
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="jobName"
                type="text"
                placeholder="Enter job name"
              />
            </div>

            {/* Company Name input field */}
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="companyName">
                Company Name
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="companyName"
                type="text"
                placeholder="Enter company name"
              />
            </div>

            {/* Location input field */}
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="location">
                Location
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="location"
                type="text"
                placeholder="Enter job location"
              />
            </div>

            {/* Salary Details input field */}
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="salaryDetails">
                Salary Details
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="salaryDetails"
                type="text"
                placeholder="Enter salary details"
              />
            </div>

            {/* Job Description textarea */}
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="jobDescription">
                Job Description
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="jobDescription"
                placeholder="Enter job description"
              ></textarea>
            </div>

            {/* Expire Date input field */}
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="expireDate">
                Expire Date
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="expireDate"
                type="date"
              />
            </div>

            {/* Job Apply Method combo box */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="applyMethod">
                Job Apply Method
              </label>
              <select
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="applyMethod"
              >
                <option value="">Select Apply Method</option>
                <option value="Email">Email</option>
                <option value="Phonecalls">Phonecalls</option>
                <option value="DirectContact">Direct Contact</option>
              </select>
            </div>

            {/* File upload for job poster */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="jobPoster">
                Upload Job Poster
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="jobPoster"
                type="file"
                onChange={handleFileChange}
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Post Job
            </button>
          </form>
        </div>
      </div>
</div>
  );
};

export default Addjob;
