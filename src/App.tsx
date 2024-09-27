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
import Jobadmin from './pages/Jobadmin';
import Addjob from './pages/Addjob';
import JobUser from './pages/JobUser';
import DonationAdmin from './pages/Donationadmin';
import Adddonation from './pages/Adddonation';
import Donationuser from './pages/Donationuser';
import Profile from './pages/Profile';
import Login from './pages/Login';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/VolunteerOPadmin" element={<VolunteerOPadmin />} />
        <Route path="/created-volunteer-opportunities" element={<CreatedVO />} />
        {/* Consider removing this if duplicate path is not necessary */}
        <Route path="/createdvo" element={<CreatedVO />} />
        <Route path="/volunteeropuser" element={<VolunteerOPuser />} />
        <Route path="/AdminNews" element={<AdminNews />} />
        <Route path="/UserNews" element={<UserNews />} />
        <Route path="/AlumniReport" element={<AlumniReport />} />
        <Route path="/UpcomingProgramme" element={<UpcomingProgramme />} />
        <Route path="/Userevent" element={<Userevent />} />
        <Route path="/Adminevent" element={<Adminevent />} />
        <Route path="/Addevent" element={<Addevent />} />
        <Route path="/Jobadmin" element={<Jobadmin />} />
        <Route path="/Addjob" element={<Addjob />} />
        <Route path="/JobUser" element={<JobUser />} />
        <Route path="/DonationAdmin" element={<DonationAdmin />} />
        <Route path="/Adddonation" element={<Adddonation />} />
        <Route path="/Donationuser" element={<Donationuser />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
