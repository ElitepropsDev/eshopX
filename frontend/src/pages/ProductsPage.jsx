import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const { allProducts, isLoading } = useSelector((state) => state.products);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (categoryData === null) {
      const d = allProducts;
      setData(d);
    } else {
      const d =
        allProducts && allProducts.filter((i) => i.category === categoryData);
      setData(d);
    }
    //    window.scrollTo(0,0);
  }, [allProducts]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={3} />
          <br />
          <br />
          <div className={`${styles.section}`}>
            {/* Desktop / Tablet View (unchanged) */}
            <div className="hidden md:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
              {data &&
                data.map((i, index) => <ProductCard data={i} key={index} />)}
            </div>

            {/* Mobile View: 3 cards per row, shrink size */}
            <div className="grid grid-cols-3 gap-[10px] md:hidden mb-12">
              {data &&
                data.map((i, index) => (
                  <ProductCard data={i} key={index} small />
                ))}
            </div>

            {/* No products found */}
            {data && data.length === 0 && (
              <h1 className="text-center w-full pb-[100px] text-[20px]">
                No products Found!
              </h1>
            )}
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default ProductsPage;
