import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VolunteerOPadmin from './pages/VolunteerOPadmin';
import CreatedVO from './pages/CreatedVO';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes here */}
        <Route path="/" element={<HomePage />} />
        <Route path="/VolunteerOPadmin" element={<VolunteerOPadmin />} />
        <Route path="/created-volunteer-opportunities" element={<CreatedVO />} /> {/* Corrected */}
        <Route path="/createdvo" element={<CreatedVO />} />
      </Routes>
    </Router>
  );
}

export default App;




