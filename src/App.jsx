import React, { useEffect, useState } from "react";
import { Container, Footer, NavBar } from "./Frames";
import {
  Home,
  DashBoard,
  Activity,
  CratInfoDetail,
  SearchReport,
  MyBookings,
  BookingDash,
  AllBooking,
  HotelBooking,
  ActivityBooking,
  ToursBooking,
  TransportBooking,
  Invoice,
  BalanceSheet,
  WalletRecharge,
  Hotel,
  Visa,
  SignIn,
  BTwoBHome,
  ToursMaster,
  QueryDetails,
  QuatationDetailView,
  Transfer,
  Meals,
  TicketPdf,
  CPackQuotationList,
} from "./Pages";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { userData } from "./Store/userData";
function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  useEffect(() => {}, [isLoggedIn]);

  const roles = {
    admin: ["admin"],
    user: ["user"],
  };
  const RoleRoute = ({ component: Component, roles, ...rest }) => {
    const userRole = "admin";
    const authToken = "admin";
    const user = userData();
    console.log("ajbaibaixbax", user);
    const userType = "admin";

    if (!authToken) {
      return <Navigate to="/login" />;
    }

    if (!roles.includes(userType)) {
      return <Navigate to="/forbidden-error" />;
    }
    if (authToken) {
      return <Component {...rest} />;
    }
  };
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={<RoleRoute component={Container} roles={roles.admin} />}
        >
          <Route
            path="/"
            element={<RoleRoute component={Home} roles={roles.admin} />}
          />
          <Route
            path="/activity"
            element={<RoleRoute component={BTwoBHome} roles={roles.admin} />}
          />
          <Route
            path="/tours"
            element={<RoleRoute component={BTwoBHome} roles={roles.admin} />}
          />{" "}
          <Route
            path="/meal"
            element={<RoleRoute component={BTwoBHome} roles={roles.admin} />}
          />{" "}
          <Route
            path="/hotel"
            element={<RoleRoute component={BTwoBHome} roles={roles.admin} />}
          />{" "}
          <Route
            path="/transferlist"
            element={<RoleRoute component={Transfer} roles={roles.admin} />}
          />{" "}
          <Route
            path="/mealslist"
            element={<RoleRoute component={Meals} roles={roles.admin} />}
          />{" "}
          <Route
            path="/visa"
            element={<RoleRoute component={BTwoBHome} roles={roles.admin} />}
          />{" "}
          <Route
            path="/transport"
            element={<RoleRoute component={BTwoBHome} roles={roles.admin} />}
          />{" "}
          <Route
            path="/signin"
            element={<RoleRoute component={SignIn} roles={roles.admin} />}
          />
          <Route
            path="/dashboard"
            element={<RoleRoute component={DashBoard} roles={roles.admin} />}
          />
          <Route
            path="/activitylist"
            element={<RoleRoute component={Activity} roles={roles.admin} />}
          />
          <Route
            path="/cartinfo-details"
            element={
              <RoleRoute component={CratInfoDetail} roles={roles.admin} />
            }
          />
          <Route
            path="/tourslist"
            element={<RoleRoute component={SearchReport} roles={roles.admin} />}
          />
          <Route
            path="/toursmaster"
            element={<RoleRoute component={ToursMaster} roles={roles.admin} />}
          />
          <Route
            path="/querydetails/:id"
            element={<RoleRoute component={QueryDetails} roles={roles.admin} />}
          />
          <Route
            path="/qutationdetailview/:id"
            element={
              <RoleRoute component={QuatationDetailView} roles={roles.admin} />
            }
          />
          <Route
            path="/customepack-quotation"
            element={
              <RoleRoute component={CPackQuotationList} roles={roles.admin} />
            }
          />
          <Route
            path="/hotellist"
            element={<RoleRoute component={Hotel} roles={roles.admin} />}
          />
          <Route
            path="/visalist"
            element={<RoleRoute component={Visa} roles={roles.admin} />}
          />
          <Route
            path="/bookings"
            element={<RoleRoute component={MyBookings} roles={roles.admin} />}
          >
            <Route
              path="/bookings"
              element={
                <RoleRoute component={BookingDash} roles={roles.admin} />
              }
            />
            <Route
              path="/bookings/allbookings"
              element={<RoleRoute component={AllBooking} roles={roles.admin} />}
            />
            <Route
              path="/bookings/hotelbooking"
              element={
                <RoleRoute component={HotelBooking} roles={roles.admin} />
              }
            />
            <Route
              path="/bookings/activitybooking"
              element={
                <RoleRoute component={ActivityBooking} roles={roles.admin} />
              }
            />
            <Route
              path="/bookings/toursbooking"
              element={
                <RoleRoute component={ToursBooking} roles={roles.admin} />
              }
            />
            <Route
              path="/bookings/transferbooking"
              element={
                <RoleRoute component={TransportBooking} roles={roles.admin} />
              }
            />
            <Route
              path="/bookings/invoice"
              element={<RoleRoute component={Invoice} roles={roles.admin} />}
            />
            <Route
              path="/bookings/balancesheet"
              element={
                <RoleRoute component={BalanceSheet} roles={roles.admin} />
              }
            />
            <Route
              path="/bookings/walletrecharge"
              element={
                <RoleRoute component={WalletRecharge} roles={roles.admin} />
              }
            />
          </Route>
        </Route>
        <Route
          path="/save-ticket-to-pdf"
          element={<RoleRoute component={TicketPdf} roles={roles.admin} />}
        />
      </Routes>
      {/* Add your page content here */}
    </div>
  );
}

export default App;
