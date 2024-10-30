// MenuDisplay.js
import categoryData from "../menu.json";
import React, { useState } from "react";

const CategoryCard = ({onCategoryChange, selectedCategory  }) => {
  const categoryItems = categoryData.menu;

  return (
    <div className="flex flex-row gap-2 ml-0 mb-3 ">
      {/* //* Show All MENU Option */}
      <h3
        onClick={() => onCategoryChange("All Menu")}
        className={`rounded-3xl bg-white p-1 px-[15px] text-center text-lg font-semibold border-2 text-gray-800 ${
          selectedCategory === "All" ? "border-blue-900" : "hover:border-blue-900"
        } transition-all duration-100 cursor-pointer`}
      >
        All Menu
      </h3>

      {/* //* Desired categories */}
      {categoryItems.map((item, index) => (
        <div
          key={index}
          onClick={() => onCategoryChange(item.category)}
          className={`rounded-3xl bg-white p-1 px-[15px] text-center shadow-md text-lg font-semibold border-2 text-gray-800 ${
            selectedCategory === item.category ? "border-blue-900" : "hover:border-blue-900"
          } transition-all duration-100 cursor-pointer`}
        >
          <button className="text-lg font-semibold text-gray-800">
            {item.category}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;

// hover:border-blue-500 transition-shadow duration-300
