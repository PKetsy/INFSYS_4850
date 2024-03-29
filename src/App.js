import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Delivery from './pages/Delivery/Delivery';
import EventHome from './pages/Events/EventHome';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

import AdminHome from './pages/Admin/AdminHome';
import AdminLogin from './pages/Admin/AdminLogin';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import RequireAuth from './pages/Admin/components/RequireAuth';
import AdminLogout from './pages/Admin/AdminLogout';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/events" element={<EventHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route exact path="/admin/login" element={<AdminLogin />} />
          <Route exact path="/admin/logout" element={<AdminLogout />} />
          <Route
            exact
            path="/admin"
            element={
              <RequireAuth>
                <AdminHome />
              </RequireAuth>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
