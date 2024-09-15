import React from 'react';
import Dashboard from './Dashboard';

const SideNav = ({ children }) => {
  return (
    <div className="layout-container">
      <Dashboard /> {/* Sidebar/Navigation */}
      <div className="page-content">
        {children} {/* This will render the content of each page */}
      </div>
    </div>
  );
};

export default SideNav;