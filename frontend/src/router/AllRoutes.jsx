import React from 'react'
import {  Routes, Route,} from "react-router-dom";
import { Home } from '../components/Home';
import { Login } from '../components/Login';


export const AllRoutes = () => {
  return (
    <div>  
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home/>} />
    </Routes>
    </div>
  )
}
