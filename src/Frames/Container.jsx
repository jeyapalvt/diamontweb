import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import B2bNav from "./B2bNav";
import { useSelector } from "react-redux";
const Container = () => {
  const authentication = useSelector(
    (state) => state.authentication.isLoggedIn
  );
  useEffect(() => {}, []);
  return (
    <>
      <div className="bg-slate-100 ">
        <NavBar />

        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Container;
