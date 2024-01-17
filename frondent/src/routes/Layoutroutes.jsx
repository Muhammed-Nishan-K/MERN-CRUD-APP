import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Userlogin from "../Components/Pages/Userlogin/Userlogin";
import Userregister from "../Components/Pages/Userregister/Userregister";
import Adminlogin from "../Components/Pages/Adminlogin/Adminlogin";
import Userhome from "../Components/Pages/Userhome/Userhome";
import Adminhome from "../Components/Pages/Adminhome/Adminhome";




export default function Layoutroutes() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route>
          <Route path="/" element={<Userlogin/>} />
          <Route path="/register" element={<Userregister/>}/>
          <Route path="/adminlogin" element={<Adminlogin/>}/>
          <Route path="/userhome" element={<Userhome/>}/>
          <Route path="/adminhome" element={<Adminhome/>}/>
        </Route>
      </Routes>
      <Footer/>
    </Router>
  );
}
