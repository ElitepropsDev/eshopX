import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import Footer from "../components/Layout/Footer";

const BestSellingPage = () => {
  const [data, setData] = useState([]);
  const { allProducts, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out); 
    setData(sortedData);
  }, [allProducts]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={2} />
          <br />
          <br />

          <div className={`${styles.section}`}>
            {/* ✅ Mobile View (3 cards per row) */}
            <div className="grid grid-cols-3 gap-[8px] md:hidden mb-8">
              {data && data.map((i, index) => (
                <ProductCard data={i} key={index} small />
              ))}
            </div>

            {/* ✅ Tablet / Desktop View (unchanged) */}
            <div className="hidden md:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[20px] md:gap-[25px] lg:gap-[25px] xl:gap-[30px] mb-12">
              {data && data.map((i, index) => (
                <ProductCard data={i} key={index} />
              ))}
            </div>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default BestSellingPage;
