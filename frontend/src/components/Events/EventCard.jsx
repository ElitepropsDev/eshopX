import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";

const EventCard = ({ active, data }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCartHandler = (data) => {
    const isItemExists = cart && cart.find((i) => i._id === data._id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };
  return (
    <div className={`w-full block bg-white rounded-lg mb-6 lg:flex p-2 lg:p-4`}>
      {/* Image Section */}
      <div className="w-full lg:w-1/2 m-auto">
        <img
          src={`${data.images[0]?.url}`}
          alt=""
          className="w-full max-w-[180px] sm:max-w-[300px] lg:max-w-[300px] h-auto object-cover rounded-md mx-auto"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center mt-3 lg:mt-0 px-2 lg:px-4">
        <h2
          className={`${styles.productTitle} text-sm sm:text-base lg:text-xl`}
        >
          {data.name}
        </h2>
        <p className="text-xs sm:text-sm lg:text-base line-clamp-3">
          {data.description}
        </p>

        <div className="flex py-2 justify-between items-center">
          <div className="flex items-center space-x-2">
            <h5 className="font-[500] text-[14px] sm:text-[16px] text-[#d55b45] line-through">
              {data.originalPrice}$
            </h5>
            <h5 className="font-bold text-[16px] sm:text-[18px] text-[#333]">
              {data.discountPrice}$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[12px] sm:text-[14px] text-[#44a55e]">
            {data.sold_out} sold
          </span>
        </div>

        <CountDown data={data} />



        <div className="flex flex-row flex-wrap justify-start items-center mt-3 gap-2">
          <Link to={`/product/${data._id}?isEvent=true`}>
            <div className="bg-black text-white text-sm sm:text-base px-3 py-1 rounded text-center whitespace-nowrap">
              See Details
            </div>
          </Link>
          <div
            className="bg-black text-white text-sm sm:text-base px-3 py-1 rounded text-center whitespace-nowrap"
            onClick={() => addToCartHandler(data)}
          >
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
