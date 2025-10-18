import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addTocart } from "../../../redux/actions/cart";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";

const ProductDetailsCard = ({ setOpen, data }) => {
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  //   const [select, setSelect] = useState(false);

  const handleMessageSubmit = () => {};

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < count) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: count };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist]);

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  return (
    <div className="bg-[#fff]">
  {data ? (
    <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center">
      <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75vh] bg-white rounded-md shadow-sm relative p-4 max-[800px]:p-2">
        <RxCross1
          size={30}
          className="absolute right-3 top-3 z-50"
          onClick={() => setOpen(false)}
        />

        <div className="block w-full 800px:flex max-[800px]:gap-2">
          {/* LEFT SIDE */}
          <div className="w-full 800px:w-[50%] max-[800px]:space-y-2">
            <img
  src={`${data.images && data.images[0]?.url}`}
  alt=""
  className="w-full max-[800px]:w-[50%] max-[800px]:mx-auto max-[800px]:rounded-md max-[800px]:-mb-10"
/>


            <div className="flex max-[800px]:items-center max-[800px]:gap-2">
              <Link to={`/shop/preview/${data.shop._id}`} className="flex max-[800px]:items-center">
                <img
                  src={`${data.images && data.images[0]?.url}`}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full mr-2 max-[800px]:w-[35px] max-[800px]:h-[35px]"
                />
                <div>
                  <h3 className={`${styles.shop_name} max-[800px]:text-[14px]`}>
                    {data.shop.name}
                  </h3>
                  <h5 className="pb-3 text-[15px] max-[800px]:text-[12px] max-[800px]:pb-1">
                    {data?.ratings} Ratings
                  </h5>
                </div>
              </Link>
            </div>

            <div
              className={`${styles.button} bg-[#000] mt-4 rounded-[4px] h-11 
              max-[800px]:h-8 max-[800px]:w-[35%] max-[800px]:text-[12px] max-[800px]:mt-2`}
              onClick={handleMessageSubmit}
            >
              <span className="text-[#fff] flex items-center justify-center">
                Send Message{" "}
                <AiOutlineMessage className="ml-1 max-[800px]:text-[12px]" />
              </span>
            </div>

            <h5 className="text-[16px] text-[red] mt-5 max-[800px]:text-[12px] max-[800px]:mt-2">
              (50) Sold out
            </h5>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full 800px:w-[50%] pt-5 pl-[5px] pr-[5px] max-[800px]:pt-2 max-[800px]:px-[2px]">
            <h1
              className={`${styles.productTitle} text-[20px] max-[800px]:text-[15px] max-[800px]:leading-tight`}
            >
              {data.name}
            </h1>
            <p className="max-[800px]:text-[13px] max-[800px]:leading-snug">
              {data.description}
            </p>

            <div className="flex pt-3 max-[800px]:pt-1">
              <h4 className={`${styles.productDiscountPrice} max-[800px]:text-[15px]`}>
                {data.discountPrice}$
              </h4>
              <h3 className={`${styles.price} max-[800px]:text-[13px]`}>
                {data.originalPrice ? data.originalPrice + "$" : null}
              </h3>
            </div>

            <div className="flex items-center mt-12 justify-between pr-3 max-[800px]:mt-3 max-[800px]:pr-1">
              <div>
                <button
                  className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out max-[800px]:px-2 max-[800px]:py-1 max-[800px]:text-[13px]"
                  onClick={decrementCount}
                >
                  -
                </button>
                <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px] max-[800px]:px-2 max-[800px]:py-[5px] max-[800px]:text-[13px]">
                  {count}
                </span>
                <button
                  className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out max-[800px]:px-2 max-[800px]:py-1 max-[800px]:text-[13px]"
                  onClick={incrementCount}
                >
                  +
                </button>
              </div>
              <div>
                {click ? (
                  <AiFillHeart
                    size={30}
                    className="cursor-pointer max-[800px]:size-[20px]"
                    onClick={() => removeFromWishlistHandler(data)}
                    color={click ? "red" : "#333"}
                    title="Remove from wishlist"
                  />
                ) : (
                  <AiOutlineHeart
                    size={30}
                    className="cursor-pointer max-[800px]:size-[20px]"
                    onClick={() => addToWishlistHandler(data)}
                    title="Add to wishlist"
                  />
                )}
              </div>
            </div>
<div
  className={`${styles.button} mt-6 rounded-[4px] flex items-center justify-center 
    h-9 sm:h-11 px-3 sm:px-5 text-sm sm:text-base w-[30%] sm:w-auto 
    800px:w-[30%] max-[800px]:h-8 max-[800px]:w-[30%] max-[800px]:text-[12px] max-[800px]:mt-3`}
  onClick={() => addToCartHandler(data._id)}
>
  <span className="text-[#fff] flex items-center">
    Add to cart <AiOutlineShoppingCart className="ml-1 text-sm sm:text-base max-[800px]:text-[12px]" />
  </span>
</div>

          </div>
        </div>
      </div>
    </div>
  ) : null}
</div>

  );
};

export default ProductDetailsCard;
