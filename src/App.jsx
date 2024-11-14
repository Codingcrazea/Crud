import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'

import Navigation from "./pages/navigation.jsx"
import LandingPage from './pages/Landing_page.jsx'
import UserDetails from "./pages/userTable.jsx"
import UserForm from "./pages/integrate_form.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/add-user" element={<UserForm />} />
        <Route path="/user-list" element={<UserDetails />} />
      </Routes>
    </>
  )
}

export default App
