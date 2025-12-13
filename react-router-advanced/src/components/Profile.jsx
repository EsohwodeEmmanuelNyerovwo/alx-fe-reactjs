import React from 'react';
import { Link, Outlet, Routes, Route } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
    return (
        <div>
            <h1>Profile Page</h1>
            <nav>
                <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
            </nav>

            {/* Nested Routes */}
            <Routes>
                <Route path="details" element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
            </Routes>

            <Outlet />
        </div>
    );
};

export default Profile;