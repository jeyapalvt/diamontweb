import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartInfoList } from "../../Reducers/cartinfoSlice";
import { keyChain } from "../../Reducers/Api";
const CartItems = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartList = useSelector((state) => state.cartList.data);
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
  }, [dispatch]);
  useEffect(() => {}, [cartList]);
  // {
  //   userType: uType,
  //   b2bId: b2b,
  //   b2bUserId: b2bu,
  //   b2cId: b2c,
  //   secretKey: requests.apiKey,
  // };
  return (
    <div className="flex flex-col w-full bg-white rounded-md shadow-md">
      <div className="flex flex-wrap items-center p-1 space-x-3 sm:px-14">
        <div>
          <MdOutlineShoppingCartCheckout
            className="icon"
            style={{
              color: "red",
            }}
            size="30px"
          />
        </div>
        <div className="text-sm text-xl font-bold text-gray-600">
          Cart Items
        </div>
      </div>
      <div className="p-2 ">
        <div className="p-2 px-1 text-sm shadow-md bg-slate-100">
          <div>
            {cartList?.map((item, index) => (
              <div key={index} className="flex justify-between ">
                <div className="font-semibold text-gray-800">
                  {item.ticketName}
                </div>
                <div className="font-semibold text-gray-800">
                  A-{item.nofAdult}
                </div>
                <div className="font-semibold text-gray-800">
                  C-{item.nofChild}
                </div>
                <div className="font-semibold text-gray-800">
                  AED-{item.bookTotal}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-2 ">
        <div className="p-2 px-1 shadow-md bg-slate-100">
          {" "}
          <button
            type="button"
            className="w-full text-sm inline-block rounded bg-amber-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            onClick={() => navigate("/cartinfo-details")}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
