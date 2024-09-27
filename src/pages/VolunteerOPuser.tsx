import { FaHandsHelping } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

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

const VolunteerOPuser = () => {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);

  useEffect(() => {
    loadVolunteers();
  }, []);

  const loadVolunteers = async () => {
    try {
      // Replace with actual API endpoint for fetching volunteer opportunities
      const response = await axios.get('http://127.0.0.1:8080/api/volunteers');
      setVolunteers(response.data);
    } catch (error) {
      console.error("Error loading volunteer opportunities:", error);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/src/img/test.jpg")' }}
    >
      {/* Navbar */}
      <nav className="bg-green-700 text-white p-4 flex justify-center items-center shadow-lg">
        <div className="flex items-center space-x-4">
          <FaHandsHelping size={32} />
          <h1 className="text-2xl font-bold">Volunteer Opportunities</h1>
        </div>
      </nav>

      {/* Volunteer Opportunities Section */}
      <div className="container mx-auto mt-10">
        <h2 className="text-center text-3xl font-bold mb-8 text-yellow-500">Available Volunteer Opportunities</h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {volunteers.length > 0 ? (
            volunteers.map((volunteer) => (
              <div
                key={volunteer.id}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800">{volunteer.volunteerName}</h3>
                <p className="mt-2 text-gray-600">
                  <span className="font-semibold">Date & Time:</span> {new Date(volunteer.dateTime).toLocaleString()}
                </p>
                <p className="mt-2 text-gray-600">
                  <span className="font-semibold">Location:</span> {volunteer.location}
                </p>
                <p className="mt-2 text-gray-600">
                  <span className="font-semibold">Duration:</span> {volunteer.timeDuration} hours
                </p>
                <p className="mt-2 text-gray-600">
                  <span className="font-semibold">Description:</span> {volunteer.description}
                </p>
                <p className="mt-2 text-gray-600">
                  <span className="font-semibold">Members:</span> {volunteer.members}
                </p>
                <p className="mt-2 text-gray-600">
                  <span className="font-semibold">Coordinator:</span> {volunteer.coordinator}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">No volunteer opportunities available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VolunteerOPuser;