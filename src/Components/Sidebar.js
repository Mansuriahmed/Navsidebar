import React from 'react'
import './Sidebar.css';


const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#reports">Reports</a></li>
        <li><a href="#inbox">Inbox</a></li>
        <li><a href="#setting">Setting</a></li>
        <li><a href="#setting">About</a></li>
      </ul>
    </div>
    </div>
  )
}

export default Sidebar
