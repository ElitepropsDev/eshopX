import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`${styles.section} !px-0 !mx-0 w-screen overflow-hidden`}>
        <div
          className={`branding my-0 flex justify-between w-full shadow-sm bg-white p-3 sm:p-5 !mx-0 !rounded-none`}
        >
          {brandingData &&
            brandingData.map((i, index) => (
              <div
                className="flex items-center justify-center w-1/4 cursor-pointer gap-1 sm:gap-3 px-1"
                key={index}
              >
                {/* Icon wrapper with fixed width & height */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 mr-1 sm:mr-3 flex items-center justify-center">
                  {i.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[10px] sm:text-sm md:text-base">
                    {i.title}
                  </h3>
                  <p className="text-[8px] sm:text-xs md:text-sm">
                    {i.Description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Categories heading for all screens */}
      <div className="flex justify-center mt-2 mb-2 md:mt-10 md:mb-10 md:justify-start md:ml-[68px]">
        <h2 className="text-[16px] md:text-[26px] font-bold">Top Categories</h2>
      </div>

      <div className={`${styles.section} mb-12`} id="categories">
        {/* Mobile view: 4 cards per row */}
        <div className="md:hidden grid grid-cols-4 gap-2">
          {categoriesData &&
            categoriesData.map((i) => {
              const handleSubmit = () => {
                navigate(`/products?category=${i.title}`);
              };
              return (
                <div
                  key={i.id}
                  onClick={handleSubmit}
                  className="bg-white shadow-md p-2 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-all"
                >
                  <img
                    src={i.image_Url}
                    alt={i.title}
                    className="w-[50px] h-[50px] object-cover mb-1"
                  />
                  <h5 className="text-[10px] text-center">{i.title}</h5>
                </div>
              );
            })}
        </div>

        {/* Tablet/Desktop view: old grid, square edges */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[20px] mt-4">
          {categoriesData &&
            categoriesData.map((i) => {
              const handleSubmit = () => {
                navigate(`/products?category=${i.title}`);
              };
              return (
                <div
                  key={i.id}
                  onClick={handleSubmit}
                  className="bg-white shadow-md p-4 flex items-center justify-between cursor-pointer hover:shadow-lg transition-all"
                >
                  <h5 className="text-[18px]">{i.title}</h5>
                  <img
                    src={i.image_Url}
                    className="w-[120px] object-cover"
                    alt={i.title}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Categories;
