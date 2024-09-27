import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VolunteerOPadmin from './pages/VolunteerOPadmin';
import CreatedVO from './pages/CreatedVO';
import VolunteerOPuser from './pages/VolunteerOPuser';
import AdminNews from './pages/AdminNews';
import UserNews from './pages/UserNews';
import AlumniReport from './pages/AlumniReport';
import UpcomingProgramme from './pages/UpcomingProgramme';
import Userevent from './pages/Userevent';
import Adminevent from './pages/Adminevent';
import Addevent from './pages/Addevent';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes here */}
        <Route path="/" element={<HomePage />} />
        <Route path="/VolunteerOPadmin" element={<VolunteerOPadmin />} />
        <Route path="/created-volunteer-opportunities" element={<CreatedVO />} />
        <Route path="/createdvo" element={<CreatedVO />} />
        <Route path="/volunteeropuser" element={<VolunteerOPuser />} />
        <Route path="/AdminNews" element={<AdminNews />} />
        <Route path="/UserNews" element={<UserNews />} />
        <Route path="/AlumniReport" element={<AlumniReport />} />
        <Route path="/UpcomingProgramme" element={<UpcomingProgramme />} />
        <Route path="/Userevent" element={<Userevent />} />
        <Route path="/Adminevent" element={<Adminevent />} /> 
        <Route path="/Addevent" element={<Addevent />} /> 
      </Routes>
    </Router>
  );
}

export default App;
