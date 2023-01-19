import React from "react";
import { Routes, Route } from "react-router-dom";
import Mobiles from "../Pages/Mobiles/Mobiles";
import MobileDetails from "../Pages/MobileDetails/MobileDetails";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/mobiles" element={<Mobiles />} />
      <Route path="/mobile_details" element={<MobileDetails />} />
    </Routes>
  );
};

export default AllRoutes;
