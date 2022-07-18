import React from 'react'
import App from './App'
import NavBar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Des from './components/Description/Description'
import Foot from './components/Footer/Footer'
import Form1 from './forms/Form1';
import SignUp from '../src/components/signup.component';
import Login from '../src/components/login.component'
import Page from '../src/components/page/Home'
import AddD from './components/Navbar/addD/AddD';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Form3 from './forms/Form3'
import Form4 from './forms/Form4'
import Home2 from './components/page/Home2'
import Search from './components/page/Search'



function App1() {

  return (
    <Router>
    <NavBar/>
    
      <Routes>
      
      <Route path="/search" element={<Search />} />
    <Route path="/home" exact element={<Home2 />} />
    <Route path="/form-3" element={<Form3 />} />
    <Route path="/form-4" element={<Form4/> } />
     <Route path="/sign-in" element={<Login />} />
    <Route path="/sign-up" element={<SignUp />} />
   <Route path="/form-1" element={<Form1 />} />
   <Route path="/add-details" element={<AddD />} />
      </Routes>

       </Router>
     
      
  )
}

export default App1