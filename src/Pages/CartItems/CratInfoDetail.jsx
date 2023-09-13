import React, { useEffect, useState } from "react";
import { Button, InputComp, DefaultDate } from "../../Components";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartInfoList } from "../../Reducers/cartinfoSlice";
import { BaseUrl, keyChain } from "../../Reducers/Api";
import axios from "axios";
import CartItemDetails from "./CartItemDetails";
import { fetchActivityList } from "../../Reducers/activitySlice";
const CratInfoDetail = () => {
  const dispatch = useDispatch();
  const today = DefaultDate();
  const cartList = useSelector((state) => state.cartList.data);
  const activityList = useSelector((state) => state.allactivity.data);

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    bookCustomerEmail: "",
    country: "",
    bookMobileNumber: "",
  });
  const [bookingTotal, setbookingTotal] = useState();
  useEffect(() => {
    dispatch(
      fetchCartInfoList({
        userType: 1,
        b2bId: 1,
        b2bUserId: 0,
        b2cId: 0,
        secretKey: keyChain,
      })
    );
    dispatch(
      fetchActivityList({
        attractionId: 1,
        agencyId: 0,
        agencyUserId: 0,
        currencyCode: "AED",
        platformId: 1,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    const totalSum = cartList.reduce((sum, obj) => sum + obj.bookTotal, 0);
    setbookingTotal(totalSum);
  }, [cartList]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };
  const rowData = {
    tktNo: 108615,
    parkname: "Ferrari World",
    date: "20/7/2023",
  };
  const hConfig = {
    headers: {
      "access-Key": "xmlResponce",
    },
  };
  const paymentConfirmation = () => {
    //save-ticket-to-pdf
    //     private String bookCustomerName;
    // 	private String bookMobileNumber;
    // 	private String bookCustomerEmail;
    // private int bookPaymentMode;
    // private Date bookTravellDate;
    // private int bookTotal;
    // private int bookB2bId;
    // private List<CartInfoDto> cartList = new ArrayList<CartInfoDto>();

    const postObject = {
      bookCustomerName: formData.fName,
      bookMobileNumber: formData.bookMobileNumber,
      bookCustomerEmail: formData.bookCustomerEmail,
      bookPaymentMode: 2,
      bookTravellDate: today,
      cartList: cartList,
      bookB2bId: 1,
      bookTotal: bookingTotal,
    };

    console.log(`${JSON.stringify(postObject, null, 2)}`);
    axios
      .post(BaseUrl + "createCartBooking", postObject, hConfig)
      .then((res) => {
        printTicket(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const printTicket = (tktData) => {
    let tktObject = [];

    for (let i = 0; i < tktData.attractionList.length; i++) {
      const filterData = activityList.filter(
        (item) => item.attractionsId === tktData.attractionList[i].attractionsId
      );

      const ticket = {};

      tktObject.push({
        ...tktData.attractionList[i],
        bannerImage: filterData[0].attThumbnailImage,
        description: filterData[0].attDescription,
        attAddress: filterData[0].attAddress,
      });
    }

    const tempObjString = JSON.stringify(tktObject);
    const queryString = new URLSearchParams({
      data: tempObjString,
    }).toString();
    const url = `/save-ticket-to-pdf?${queryString}`;

    const a4WidthInPixels = 794; // Approximately 8.27in * 96dpi
    const a4HeightInPixels = 1123; // Approximately 11.69in * 96dpi

    const windowFeatures = `height=${a4HeightInPixels},width=${a4WidthInPixels},top=100,left=100`;
    window.open(url, "_blank", windowFeatures);
  };
  return (
    <div className="flex p-12 space-x-5">
      <div className="w-3/5 ">
        <div className="p-5 bg-white rounded-lg shadow-lg">
          <div className="text-xl font-bold text-gray-700">
            Lead Passenger Name
          </div>
          <div className="flex mt-5 space-x-5">
            <div className="w-1/5">
              <InputComp
                type="text"
                id="mrorms"
                placeholder="Mr/Ms"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="w-2/5">
              <InputComp
                type="text"
                id="fName"
                placeholder="First Name"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="w-2/5">
              <InputComp
                type="text"
                id="lName"
                placeholder="Last Name"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="flex mt-10 space-x-5">
            <div className="w-1/3">
              <InputComp
                type="email"
                id="bookCustomerEmail"
                placeholder="E-mail"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="w-1/3">
              <InputComp
                type="text"
                id="country"
                placeholder="Country"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="w-1/3">
              <InputComp
                type="text"
                id="bookMobileNumber"
                placeholder="Contact Number"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
        </div>
        <div className="p-5 mt-8 bg-white rounded-lg shadow-lg">
          <div className="flex">
            <div className="text-xl font-bold text-gray-700">
              Payment Options
            </div>
            <div className="flex">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="p-5 mt-8 bg-white rounded-lg shadow-lg">
          {cartList?.length && activityList?.length && (
            <Button
              name="Proceed To Book"
              onClick={() => paymentConfirmation()}
            />
          )}

          <div className="text-xl font-bold text-gray-700"></div>
        </div>
      </div>

      <div className="w-2/5 p-5 bg-white rounded-lg shadow-lg">
        <CartItemDetails cartList={cartList} />
      </div>
    </div>
  );
};

export default CratInfoDetail;
