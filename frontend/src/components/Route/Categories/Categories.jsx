import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className={`${styles.section} mb-12`} id="categories">
  {/* Mobile view: 3 cards per row */}
  <div className="md:hidden grid grid-cols-3 gap-2 px-2">
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
              className="w-[40px] h-[40px] object-cover mb-1"
            />
            <h5 className="text-[10px] text-center">{i.title}</h5>
          </div>
        );
      })}
  </div>

  {/* Tablet/Desktop view: unchanged */}
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

  );
};

export default Categories;
