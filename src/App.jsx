import { useEffect, useState } from "react";
import { Routes, Route ,Link } from "react-router-dom";
import './main.css'
import User from "./User";
import UserDetails from "./UserDetails";




const  App = () => {
  
  return (
    <>
      <Routes>
            <Route path="/user" element={<User/>} />
            <Route path="/detail/:id" element={<UserDetails/>} />
      </Routes>
    </>
  )
}


export default App; 
