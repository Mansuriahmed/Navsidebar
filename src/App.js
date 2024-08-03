import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';

const App = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="App">
      <div className={`sidebar-container ${isSidebarVisible ? '' : 'hidden'}`}>
        <Sidebar />
      </div>
      <div className={`main-content ${isSidebarVisible ? '' : 'expanded'}`}>
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="content">
     
        </div>
      </div>
    </div>
  );
};

export default App;
