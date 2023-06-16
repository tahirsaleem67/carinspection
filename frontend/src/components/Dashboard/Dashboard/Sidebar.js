import React, { useState } from 'react';
import {
  FaTh,
  FaBars,
  FaUsers,
} from 'react-icons/fa';
import { FcInspection, FcKindle } from "react-icons/fc";
import { Dashboard } from "./Dashboard";
import { NewInspection } from './NewInspection';
import { TotalInspection } from './TotalInspection';

import "./sidebar.css"
import { Users } from './Users';
const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('dashboard');

  const toggle = () => setIsOpen(!isOpen);
  const handleMenuClick = (component) => {
    setActiveComponent(component);
  };

  
  return (
    <div className="container-fluid sidebarinfo">
      <div style={{ width: isOpen ? '300px' : '50px' }} className="sidebar">
        <div className="top_section py-5">

          <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">
            Tech Wheels
          </h1>
          <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        <div className={`link ${activeComponent === 'dashboard' ? 'active' : ''}`} onClick={() => handleMenuClick('dashboard')}>
          <div className="icon">
            <FaTh />
          </div>
          <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
            Dashboard
          </div>
        </div>
        <div className={`link ${activeComponent === 'new' ? 'active' : ''}`} onClick={() => handleMenuClick('new')}>
          <div className="icon">
            <FcKindle />
          </div>
          <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
            New Inspections
          </div>
        </div>
        <div className={`link ${activeComponent === 'total' ? 'active' : ''}`} onClick={() => handleMenuClick('total')}>
          <div className="icon">
            <FcInspection />
          </div>
          <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
            Total Inspections
          </div>
        </div>
        <div className={`link ${activeComponent === 'users' ? 'active' : ''}`} onClick={() => handleMenuClick('users')}>
          <div className="icon">
            <FaUsers />
          </div>
          <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
            Users
          </div>
        </div>


       
      </div>
      <div className="dashboard">
        {activeComponent === 'dashboard' && <Dashboard />}
        {activeComponent === 'new' && <NewInspection />}
        {activeComponent === 'total' && <TotalInspection />}
        {activeComponent === 'users' && <Users/>}

      </div>
    </div>
  );
};

export default Sidebar;
