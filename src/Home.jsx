import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <p>Explore our platform and make the most out of your experience.</p>
      <div className="home-actions">
        <button className="action-btn">Get Started</button>
        <button className="action-btn">Learn More</button>
      </div>
    </div>
  )
}

export default Home
