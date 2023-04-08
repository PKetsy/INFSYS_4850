import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Notes from './components/Notes';
import notesStore from './stores/notesStore';
import UpdateForm from './components/UpdateForm';
import CreateForm from './components/CreateForm';
import authStore from './stores/authStore';

const AdminHome = () => {
  const store = notesStore();
  const storeAuth = authStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await storeAuth.logout();
    navigate('/admin/logout');
  };

  // Use Effect
  useEffect(() => {
    store.fetchNotes();
  }, []);

  return (
    <div className="section">
      <div className="container">
        <br></br>
        <h2 className="admin_home">Welcome to the Admin Dashboard</h2>
        <Notes />
        <UpdateForm />
        <CreateForm />
        <br />
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default AdminHome;
