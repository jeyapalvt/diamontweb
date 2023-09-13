import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import b2b from "../assets/images/b2b.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../Reducers/authSlice";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { GiWallet } from "react-icons/gi";
import { BsMenuDown, BsCurrencyExchange } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

import { userData } from "../Store/userData";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);
  const authentication = useSelector((state) => state.authentication.data);
  const user = userData();
  useEffect(() => {}, [authentication, user]);

  const location = useLocation();
  const [pathName, setPathName] = useState();
  useEffect(() => {
    const pathname = location.pathname;
    const parts = pathname.split("/");
    const desiredPart = parts[1];

    setPathName(desiredPart);

    if (user && !desiredPart) {
      navigate("/activity");
    }
  }, [location.pathname]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const navMenu = [
    { name: "Activity", path: "/activity" },
    { name: "Tours", path: "/tours" },
    { name: "Hotels", path: "/hotels" },
    { name: "Visa", path: "/visa" },
  ];

  return (
    <div className="flex items-center justify-between p-5 bg-white shadow-md ">
      <img src={b2b} alt="logo" className="w-40" />
      <div className="flex items-center 5">
        {isLoggedIn ? (
          <ul className="z-10 flex items-center align-middle bg-white space-x-7">
            <li className="relative p-2 text-black border border-[#da251d] rounded-lg cursor-pointer group border-spacing-3">
              <div className="flex items-center space-x-1">
                Explore Services{" "}
                <BsMenuDown
                  style={{
                    color: "#da251d",
                    marginLeft: 5,
                  }}
                />
              </div>

              <ul className="absolute hidden  border border-[#da251d]  mt-2 duration-100 rounded-md w-52 group-hover:block bg-[#ffffff] -ml-2">
                <li>
                  <Link to="/activity">
                    <div className="p-1 hover:bg-[#da251d] hover:text-white">
                      Activities
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/tours">
                    <div className="p-1 hover:bg-[#da251d] hover:text-white">
                      Build Package
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/hotel">
                    <div className="p-1 hover:bg-[#da251d] hover:text-white">
                      Hotel
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/meal">
                    <div className="p-1 hover:bg-[#da251d] hover:text-white">
                      Meals
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/transport">
                    <div className="p-1 hover:bg-[#da251d] hover:text-white">
                      Transport
                    </div>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="relative p-2 text-black border border-[#da251d] rounded-lg cursor-pointer group border-spacing-3">
              <div className="flex items-center space-x-1">Operations</div>

              <ul className="absolute hidden  border border-[#da251d]  mt-2 duration-100 rounded-md w-52 group-hover:block bg-[#ffffff] -ml-2">
                <li>
                  <Link to="/tourslist">
                    <div className="p-1 hover:bg-[#da251d] hover:text-white">
                      Query
                    </div>
                  </Link>
                </li>
                {/* <li>
                  <Link to="/customepack-quotation">
                    <div className="p-1 hover:bg-[#da251d] hover:text-white">
                      Quotation
                    </div>
                  </Link>
                </li> */}
              </ul>
            </li>

            <li className="relative group">
              <BsCurrencyExchange size={30} color="#da251d" />
              <ul className="absolute hidden cursor-pointer group-hover:block">
                <div className="p-2 bg-white border border-[#da251d] w-52 right-0">
                  <li>
                    <Link to="#">
                      <div className="p-1 hover:bg-[#da251d] hover:text-white">
                        USD
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="p-1 hover:bg-[#da251d] hover:text-white">
                        AED
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="p-1 hover:bg-[#da251d] hover:text-white">
                        INR
                      </div>
                    </Link>
                  </li>
                </div>
              </ul>
            </li>

            <li className="relative group">
              <GiWallet size={30} color="#da251d" />
              <ul className="absolute hidden cursor-pointer group-hover:block">
                <div className="p-2 bg-white border border-[#da251d] w-52 right-0">
                  {" "}
                  Current Balance: 25,000
                </div>
              </ul>
            </li>
            <li
              className={`text-black p-2 cursor-pointer rounded-lg hover:bg-[#da251d] hover:text-white ${
                pathName === "bookings" ? "bg-[#da251d] text-white" : ""
              }`}
            >
              <Link to="/bookings">My Bookings</Link>
            </li>

            <li
              className={`text-black p-2 cursor-pointer rounded-lg hover:bg-[#da251d] hover:text-white ${
                pathName === "dashboard" ? "bg-[#da251d] text-white" : ""
              }`}
            >
              <Link to="/dashboard">DashBoard</Link>
            </li>

            <li className=" p-2 text-black border border-[#da251d] rounded-lg cursor-pointer group border-spacing-3">
              <div className="flex items-center space-x-1">
                <CgProfile
                  style={{
                    color: "#da251d",
                    marginRight: 5,
                  }}
                />
                Hello Guest
              </div>
              <ul className=" absolute hidden  border border-[#da251d]  mt-2 duration-100 rounded-md w-52 group-hover:block bg-[#ffffff] -ml-2">
                <li>
                  <Link to="/activity">
                    <div className="p-1 hover:bg-[#da251d] hover:text-white">
                      Profile
                    </div>
                  </Link>
                </li>
                <li onClick={() => handleLogout()}>
                  <div className="p-1 hover:bg-[#da251d] hover:text-white">
                    Logout
                  </div>
                </li>
              </ul>
            </li>

            {/* <li
              className={`text-black p-2 cursor-pointer rounded-lg hover:bg-[#da251d] hover:text-white ${
                pathName === "activity" ? "bg-[#da251d] text-white" : ""
              }`}
            >
              <Link to="/activity">Activity</Link>
            </li>
            <li
              className={`text-black p-2 cursor-pointer rounded-lg hover:bg-[#da251d] hover:text-white ${
                pathName === "tours" ? "bg-[#da251d] text-white" : ""
              }`}
            >
              <Link to="/tours">Tours</Link>
            </li>
            <li
              className={`text-black p-2 cursor-pointer rounded-lg hover:bg-[#da251d] hover:text-white ${
                pathName === "hotel" ? "bg-[#da251d] text-white" : ""
              }`}
            >
              <Link to="/hotel">Hotel</Link>
            </li>
            <li
              className={`text-black p-2 cursor-pointer rounded-lg hover:bg-[#da251d] hover:text-white ${
                pathName === "visa" ? "bg-[#da251d] text-white" : ""
              }`}
            >
              <Link to="/visa">Visa</Link>
            </li>
            <li
              className={`text-black p-2 cursor-pointer rounded-lg hover:bg-[#da251d] hover:text-white ${
                pathName === "bookings" ? "bg-[#da251d] text-white" : ""
              }`}
            >
              <Link to="/bookings">My Bookings</Link>
            </li> */}

            {/* {navMenu.map((menu) => (
              <li
                key={menu.name}
                className={`text-black p-2 cursor-pointer rounded-lg hover:bg-[#da251d] hover:text-white ${
                  pathName === menu.path.slice(1)
                    ? "bg-[#da251d] text-white"
                    : ""
                }`}
              >
                <Link to={menu.path}>{menu.name}</Link>
              </li>
            ))} */}
          </ul>
        ) : (
          <ul className="flex space-x-3">
            <li className="p-2 px-2 text-sm font-bold text-white rounded-md cursor-pointer bg-[#da251d]">
              For Enquiry : +971 4 355 9218
            </li>
            <li className="p-2 px-2 text-sm font-bold text-white rounded-md cursor-pointer bg-[#da251d]">
              info@diamondtoursdubai.com
            </li>
            <li className="p-2 px-2 text-sm font-bold text-black ">
              <Link to="/signin">
                <div className="flex items-center">
                  <AiOutlineLogin className="mr-2" />
                  Login
                </div>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
