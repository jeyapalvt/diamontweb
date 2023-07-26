import axios from "axios";
import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BaseUrl } from "../../Reducers/Api";
import Swal from "sweetalert2";
const CartItemDetails = ({ cartList }) => {
  const deleteItemFromCart = (cartId) => {
    console.log("cartId", cartId);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(BaseUrl + "deleteCartInfo", {
            cartInfoId: cartId,
            secretKey: "uZFEucIHAbqvgT7p87qC4Ms4tjqG34su",
          })
          .then((res) => {
            console.log(res.data);
            Swal.fire("Deleted!", "Your item has been deleted.", "success");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  return (
    <div>
      {cartList.map((item, index) => (
        <div key={index} className="py-2">
          <div
            className="relative flex justify-end -mb-2 -mr-2 cursor-pointer"
            onClick={() => deleteItemFromCart(item.cartInfoId)}
          >
            <AiFillCloseCircle />
          </div>
          <div className="p-2 bg-teal-300">{item.ticketName}</div>
        </div>
      ))}
    </div>
  );
};

export default CartItemDetails;
