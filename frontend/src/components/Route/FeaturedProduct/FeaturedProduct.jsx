import React from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProduct = () => {
  const { allProducts } = useSelector((state) => state.products);

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.section}`}>
          <div className="mt-5 md:mt-10 mb-0 md:mb-10">
            <div className="-mt-9 md:mt-0 -mb-3 md:mb-0">
              <div className={`${styles.heading} md:ml-[-65px]`}>
                <h1 className="text-[16px] md:text-[26px]">
                  Featured Products
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Mobile View (grid 4 cards per row, compact, no scroll) */}
        <div className="grid grid-cols-4 gap-[5px] md:hidden mb-3">
          {allProducts &&
            allProducts.length !== 0 &&
            allProducts.map((i, index) => (
              <ProductCard data={i} key={index} small />
            ))}
        </div>

        {/* ✅ Desktop / Tablet View (unchanged layout) */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[20px] md:gap-[25px] lg:gap-[30px] mb-12 border-0">
          {allProducts &&
            allProducts.length !== 0 &&
            allProducts.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
