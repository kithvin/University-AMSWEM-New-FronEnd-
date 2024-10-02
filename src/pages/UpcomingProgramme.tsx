import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Define the Event interface
interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
}

// Define the UpcomingEventPage component
const UpcomingEventPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: 'Programme 1',
      description: 'This is Programme 1',
      date: '2024-08-01',
      time: '10:00 AM',
      location: 'New York',
    },
    {
      id: 2,
      title: 'Programme 2',
      description: 'This is Programme 2',
      date: '2024-08-15',
      time: '2:00 PM',
      location: 'Los Angeles',
    },
    {
      id: 3,
      title: 'Programme 3',
      description: 'This is Programme 3',
      date: '2024-09-01',
      time: '6:00 PM',
      location: 'Chicago',
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleEventSelect = (event: Event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Centered Heading */}
      <div className="flex justify-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Upcoming Programme</h1>
      </div>
      
      {/* Events List */}
      <div className="flex flex-wrap -mx-4">
        {events.map((event) => (
          <div key={event.id} className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md p-4 border-2 border-green-500"> {/* Added thicker border */}
              <h2 className="text-lg font-bold text-gray-900">{event.title}</h2>
              <p className="text-gray-600">{event.description}</p>
              <p className="text-gray-600">
                Date: {event.date} | Time: {event.time} | Location: {event.location}
              </p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={() => handleEventSelect(event)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {selectedEvent && (
        <div className="mt-8 text-center">
          <h2 className="text-lg font-bold text-gray-900">
            {selectedEvent.title} Details
          </h2>
          <p className="text-gray-600">{selectedEvent.description}</p>
          <p className="text-gray-600">
            Date: {selectedEvent.date} | Time: {selectedEvent.time} | Location: {selectedEvent.location}
          </p>
        </div>
      )}
    </div>
  );
};

// Define the UpcomingProgramme component
const UpcomingProgramme: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="bg-cover bg-center min-h-screen flex flex-col">
      {/* Navbar with centered title */}
      <nav className="bg-gray-800 bg-opacity-100 p-4 flex justify-center items-center">
        <div className="text-white text-2xl font-bold flex items-center">
          <FaCalendarAlt className="mr-2" /> {/* Calendar icon */}
          Monitor Programme {/* Centered title */}
        </div>
      </nav>

      {/* Main container for the form */}
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <UpcomingEventPage />

        {/* Back to Home Page button */}
        <div className="flex justify-center mt-4 mb-4">
          <button 
            className="bg-gray-500 text-white p-3 rounded-lg font-bold hover:bg-gray-600 transition-colors"
            onClick={() => navigate('/')} // Redirect to home page
          >
            Back to Home Page
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 bg-opacity-100 p-4 text-center text-white mt-8">
        <p>&copy; 2024 Alumni Management with Event Management.</p>
      </footer>
    </div>
  );
};

export default UpcomingProgramme;

