import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome to the Dashboard</h1>
      <p>This is your dashboard where you can manage your activities.</p>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Profile</h3>
          <p>View and edit your profile information.</p>
        </div>
        <div className="card">
          <h3>Settings</h3>
          <p>Adjust your preferences and account settings.</p>
        </div>
        <div className="card">
          <h3>Reports</h3>
          <p>Access detailed reports and analytics.</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
