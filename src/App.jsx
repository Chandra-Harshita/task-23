import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
import Dashboard from './Dashboard'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="sign-up" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
