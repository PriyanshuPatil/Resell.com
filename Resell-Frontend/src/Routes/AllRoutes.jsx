import React from "react";
import { Routes, Route } from "react-router-dom";
import Mobiles from "../Pages/Mobiles/Mobiles";
import MobileDetails from "../Pages/MobileDetails/MobileDetails";
import PostAdForm from "../Components/PostAdForm/PostAdForm";
import PostAd from "../Components/PostAd/PostAd";
import Login from "../Pages/LoginB/Login";
import Home from "../Pages/HomeBB/Home";
import { Carddata, HomeData } from "../Components/CardData/CardData";
import Finalpage from "../Pages/FinalPage/Finalpage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeData/>} />
      <Route path="/all_products" element={<Mobiles />} />
      <Route path="/product_details" element={<MobileDetails />} />
      <Route path="/postad" element={<PostAd />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user_details" element={<Finalpage />} />
    </Routes>
  );
};

export default AllRoutes;
