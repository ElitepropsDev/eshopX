import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-[tomato] rounded-full animate-spin"></div>

    </div>
  );
};

export default Loader;
