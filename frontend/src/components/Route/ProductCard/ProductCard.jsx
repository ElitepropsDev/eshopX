import React, { useState, useEffect } from "react";
import {
  AiFillHeart,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";
import { addTocart } from "../../../redux/actions/cart";
import { toast } from "react-toastify";
import Ratings from "../../Products/Ratings";

const ProductCard = ({ data, isEvent, small }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

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

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
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
    <>
      <div
  className={`${
    small
      ? "w-full h-[160px] p-1 border border-gray-200 shadow-sm hover:shadow-md rounded-none"
      : "w-full h-[320px] p-3 border border-gray-100 shadow-lg hover:shadow-2xl rounded-xl"
  } bg-white transition-all duration-300 relative cursor-pointer`}
>
  {/* Image */}
  <Link
    to={
      isEvent
        ? `/product/${data._id}?isEvent=true`
        : `/product/${data._id}`
    }
  >
    <img
      src={`${data.images && data.images[0]?.url}`}
      alt=""
      className={`${
        small ? "w-full h-[80px]" : "w-full h-[170px]"
      } object-contain`}
    />
  </Link>

  {/* Shop name */}
  <Link to={`/shop/preview/${data?.shop._id}`}>
    <h5
      className={`${styles.shop_name} ${
        small ? "text-[9px]" : "text-[15px]"
      } text-[tomato] leading-tight`}
    >
      {data.shop.name}
    </h5>
  </Link>

  {/* Product name */}
  <Link
    to={
      isEvent
        ? `/product/${data._id}?isEvent=true`
        : `/product/${data._id}`
    }
  >
    <h4
      className={`font-[500] truncate ${
        small
          ? "text-[9px] mt-[-4px]"
          : "text-[16px] mt-0"
      }`}
    >
      {data.name.length > (small ? 28 : 40)
        ? data.name.slice(0, small ? 28 : 40) + "..."
        : data.name}
    </h4>

    {/* Price & sold */}
    <div
      className={`flex items-center justify-between ${
        small ? "py-[1px]" : "py-2"
      }`}
    >
      <div className="flex items-center space-x-1">
        <h5
          className={`${styles.productDiscountPrice} ${
            small ? "text-[8.5px]" : ""
          }`}
        >
          {data.originalPrice === 0
            ? data.originalPrice
            : data.discountPrice}
          $
        </h5>
        <h4 className={`${styles.price} ${small ? "text-[8px]" : ""}`}>
          {data.originalPrice ? data.originalPrice + " $" : null}
        </h4>
      </div>
      <span
        className={`font-[400] ${
          small ? "text-[10px]" : "text-[17px]"
        } text-[#68d284]`}
      >
        {data.sold_out} sold
      </span>
    </div>
  </Link>

  {/* Icons */}
  <div>
    {click ? (
      <AiFillHeart
        size={small ? 14 : 22}
        className="cursor-pointer absolute right-1 top-1"
        onClick={() => removeFromWishlistHandler(data)}
        color={click ? "red" : "#333"}
        title="Remove from wishlist"
      />
    ) : (
      <AiOutlineHeart
        size={small ? 14 : 22}
        className="cursor-pointer absolute right-1 top-1"
        onClick={() => addToWishlistHandler(data)}
        color={click ? "red" : "#333"}
        title="Add to wishlist"
      />
    )}
    <AiOutlineEye
      size={small ? 14 : 22}
      className="cursor-pointer absolute right-1 top-6"
      onClick={() => setOpen(!open)}
      color="#333"
      title="Quick view"
    />
    <AiOutlineShoppingCart
      size={small ? 18 : 25}
      className="cursor-pointer absolute right-1 top-[46px]"
      onClick={() => addToCartHandler(data._id)}
      color="#444"
      title="Add to cart"
    />
    {open && <ProductDetailsCard setOpen={setOpen} data={data} />}
  </div>
</div>

    </>
  );
};

export default ProductCard;
