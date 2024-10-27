import React from "react";
import { ItemCard } from "./Itemcard";
import CategoryCard from "./CategoryCard";
import menus from "../menu.json";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openSidebar, closeSidebar } from "../redux/SidebarSlice";
import Sidebar from './Sidebar';
import "../App.css";


function Hero({ }) {
  const isOpen= useSelector((state) => state.sidebar.sidebarOpen);

  const [selectedCategory, setSelectedCategory] = useState("All Menu");
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  //? Filtered items
  const filteredItems =
    selectedCategory === "All Menu"
      ? menus.menu.reduce(
          (allItems, category) => allItems.concat(category.items),
          []
        )
      : menus.menu.find((category) => category.category === selectedCategory)
          ?.items;

  return (
    <div
      className={`p-3 transition-all duration-300 ${
        isOpen ? "mr-[20.5rem]" : ""
      }`}
    >
      {/* Category Container */}
      <div className="container my-1">
        <CategoryCard
          onCategoryChange={handleCategoryChange}
          selectedCategory={setSelectedCategory}
        />
      </div>

      {/* Display items */}
      <div className="flex flex-wrap gap-4">
        {filteredItems.map((item, index ) => (
          <ItemCard 
          key={index} 
          item={item} 
          Quantity={0}
        />
        ))
        
        } 
      </div>
    </div>
  );
}

export default Hero;
