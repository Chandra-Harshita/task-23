import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <Link className="nav-link" to="/dashboard">
          Dashboard
        </Link>
      </div>
      <div className="center">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </div>
      <div className="right">
        <Link className="nav-link" to="/login">
          Login
        </Link>
        <Link className="nav-link" to="/sign-up">
          Sign-Up
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
