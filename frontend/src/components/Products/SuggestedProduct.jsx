import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { productData } from "../../static/data";
import styles from "../../styles/styles";
import ProductCard from "../Route/ProductCard/ProductCard";

const SuggestedProduct = ({ data }) => {
  const {allProducts} = useSelector((state) => state.products);
  const [productData,setProductData] = useState();

  useEffect(() => {
    const d =
    allProducts && allProducts.filter((i) => i.category === data.category);
    setProductData(d);
  }, []);

  return (
   <div>
  {data ? (
    <div className={`p-4 ${styles.section}`}>
      <h2
        className={`${styles.heading} text-[25px] font-[500] border-b mb-5`}
      >
        Related Product
      </h2>

      {/* ✅ Mobile View (3 compact cards per row) */}
      <div className="grid grid-cols-3 gap-[5px] md:hidden mb-3">
        {productData &&
          productData.map((i, index) => (
            <ProductCard data={i} key={index} small />
          ))}
      </div>

      {/* ✅ Desktop / Tablet View (unchanged) */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[25px] mb-12">
        {productData &&
          productData.map((i, index) => (
            <ProductCard data={i} key={index} />
          ))}
      </div>
    </div>
  ) : null}
</div>

  );
};

export default SuggestedProduct;
