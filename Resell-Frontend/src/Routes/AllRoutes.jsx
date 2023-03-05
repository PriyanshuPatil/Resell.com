import React from "react";
import { Routes, Route } from "react-router-dom";
import Mobiles from "../Pages/Mobiles/Mobiles";
import MobileDetails from "../Pages/MobileDetails/MobileDetails";
import PostAdForm from "../Components/PostAdForm/PostAdForm";
import PostAd from "../Components/PostAd/PostAd";
import Login from "../Pages/LoginB/Login";
import Finalpage from "../Pages/FinalPage/Finalpage";
import Signup from "../Pages/SignupB/Signup";
import HomePage from "../Pages/Home/HomePage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/all_products" element={<Mobiles />} />
      <Route path="/product_details" element={<MobileDetails />} />
      <Route path="/postad" element={<PostAd />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup/>} />
      <Route path="/user_details" element={<Finalpage />} />
    </Routes>
  );
};

export default AllRoutes;
