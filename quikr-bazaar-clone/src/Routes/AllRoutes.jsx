import React from "react";
import { Routes, Route } from "react-router-dom";
import Mobiles from "../Pages/Mobiles/Mobiles";
import MobileDetails from "../Pages/MobileDetails/MobileDetails";
import PostAdForm from "../Components/PostAdForm/PostAdForm";
import PostAd from "../Components/PostAd/PostAd";
import Login from "../Pages/LoginB/Login";
import Home from "../Pages/HomeBB/Home";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all_products" element={<Mobiles />} />
      <Route path="/product_details" element={<MobileDetails />} />
      <Route path="/postad" element={<PostAd />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
