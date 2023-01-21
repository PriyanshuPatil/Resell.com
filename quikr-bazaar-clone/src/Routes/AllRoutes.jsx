import React from "react";
import { Routes, Route } from "react-router-dom";
import Mobiles from "../Pages/Mobiles/Mobiles";
import MobileDetails from "../Pages/MobileDetails/MobileDetails";
import Home from "../Pages/Home/Home";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/mobiles" element={<Mobiles />} />
      <Route path="/mobile_details" element={<MobileDetails />} />
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
};

export default AllRoutes;
