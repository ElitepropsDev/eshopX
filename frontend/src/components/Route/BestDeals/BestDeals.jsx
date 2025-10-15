import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const BestDeals = () => {
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);

  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
    const firstTen = sortedData && sortedData.slice(0, 10);
    setData(firstTen);
  }, [allProducts]);

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.section}`}>
          <div className="mt-0 md:mt-10 mb-0 md:mb-10">
            <div className="-mt-9 md:mt-0 -mb-3 md:mb-0">
              <div className={`${styles.heading} md:ml-[-65px]`}>
                <h1 className="text-[16px] md:text-[26px]">Best Deals</h1>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Desktop / Tablet View (unchanged grid) */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[20px] md:gap-[25px] lg:gap-[30px] mb-12 border-0">
          {data &&
            data.length !== 0 &&
            data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>

        {/* ✅ Mobile View (scrollable + smaller cards) */}

        <div className="md:hidden flex overflow-x-auto gap-[12px] scroll-smooth scrollbar-hide mb-4">
          {data &&
            data.length !== 0 &&
            data.map((i, index) => (
              <div key={index} className="min-w-[32%] snap-start">
                <ProductCard data={i} small />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
