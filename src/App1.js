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
import Home3 from './components/page/Home3'
import Home4 from './components/page/Home4'
import Search from './components/page/Search'
import Data from './forms/Data'




/*Form1 = FDP
Form3 = Fee Reimbursement
Form4 = Event
AddD = Publications*/


function App1() {
   const user = localStorage.getItem("token");
   const role = localStorage.getItem("role");
   console.log("o yea "+localStorage.token)
  // localStorage.removeItem("token")
  return (
    <Router>
    <NavBar/>
    
      <Routes>
      
     <Route path="/search" element={<Search />} />
     {user && role==="A" && <Route path="/home" exact element={<Home2 />} />}
     {user && role==="F" && <Route path="/home" exact element={<Home4/>} />}
     {user && role ==="M"&& <Route path = "/home" exact element={<Home3/>}/>}
     <Route path="/home" exact element={<Login />} />
    <Route path="/form-3" element={<Form3 />} />
    <Route path="/form-4" element={<Form4/> } />
     <Route path="/sign-in" element={<Login />} />
    <Route path="/sign-up" element={<SignUp />} />
   <Route path="/form-1" element={<Form1 />} />
   <Route path="/add-details" element={<AddD />} />
   <Route path = "/Data" element = {<Data />} />
      </Routes>

       </Router>
     
      
  )
}

export default App1




// import React from 'react'
// import App from './App'
// import NavBar from './components/Navbar/Navbar'
// import Banner from './components/Banner/Banner'
// import Des from './components/Description/Description'
// import Foot from './components/Footer/Footer'
// import Form1 from './forms/Form1';
// import SignUp from '../src/components/signup.component';
// import Login from '../src/components/login.component'
// import Page from '../src/components/page/Home'
// import AddD from './components/Navbar/addD/AddD';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import Form3 from './forms/Form3'
// import Form4 from './forms/Form4'
// import Home2 from './components/page/Home2'
// import Search from './components/page/Search'
// import Data from './forms/Data'



// function App1() {

//   return (
//     <Router>
//     <NavBar/>
    
//       <Routes>
      
//       <Route path="/search" element={<Search />} />
//     <Route path="/home" exact element={<Home2 />} />
//     <Route path="/form-3" element={<Form3 />} />
//     <Route path="/form-4" element={<Form4/> } />
//      <Route path="/sign-in" element={<Login />} />
//     <Route path="/sign-up" element={<SignUp />} />
//    <Route path="/form-1" element={<Form1 />} />
//    <Route path="/add-details" element={<AddD />} />
//    <Route path = "/Data" element = {<Data />} />
//       </Routes>

//        </Router>
     
      
//   )
// }

// export default App1