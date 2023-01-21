import React from "react";
import { Routes, Route } from "react-router-dom";
import Mobiles from "../Pages/Mobiles/Mobiles";
import MobileDetails from "../Pages/MobileDetails/MobileDetails";
import PostAdForm from "../Components/PostAdForm/PostAdForm";
import PostAd from "../Components/PostAd/PostAd";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/mobiles" element={<Mobiles />} />
      <Route path="/mobile_details" element={<MobileDetails />} />
      <Route path="/postad" element={<PostAd/>} />
    </Routes>
  );
};

export default AllRoutes;
