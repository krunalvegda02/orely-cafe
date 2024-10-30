import React from "react";
import { ItemCard } from "./Itemcard";
import CategoryCard from "./CategoryCard";
import menus from "../menu.json";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToOrder, removeFromOrder } from "../redux/Slices/TableSlices";
import "../App.css";


function Hero({ tableIndex }) {
  const sidebarOpen = useSelector((state) => state.sidebar.sidebarOpen);
  const billSiderOpen = useSelector((state) => state.sidebar.billSiderOpen);
  const tables = useSelector((state) => state.tables);
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("All Menu");
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems =
    selectedCategory === "All Menu"
      ? menus.menu.reduce(
          (allItems, category) => allItems.concat(category.items),
          []
        )
      : menus.menu.find((category) => category.category === selectedCategory)
          ?.items;

  // Updated addToMenu function to take item as an argument
  const addTOMenu = (item) => {
    console.log("addMenu called");
    dispatch(addToOrder({ tableIndex, menuItem: item }));
  };

  const removeFromMenu = (item) => {
    console.log("removeMenu called");
    dispatch(removeFromOrder({ tableIndex, menuItem: item }));
  };

  return (
    <div
      className={`p-3 transition-all duration-300 ${
        sidebarOpen || billSiderOpen ? "mr-[20rem]" : ""
      }`}
    >
      {/* Category Container */}
      <div className="container scrollbar-hide overflow-x-auto w-full bg-slate-200 my-1">
        <CategoryCard
          onCategoryChange={handleCategoryChange}
          selectedCategory={selectedCategory}
        />
      </div>

      {/* Display items */}
      <div className="flex flex-wrap gap-4 ">
        {filteredItems.map((item, index) => {
          const table = tables[tableIndex]; // Get the current table
          if (!table) return null;

          const orderItem = table.orders.find((order) => order.name === item.name);
          const itemQuantity = orderItem ? orderItem.quantity : 0; // Get the item quantity for the current table

          return (
            <ItemCard
              key={index}
              item={item}
              itemQuantity={itemQuantity} // Pass the quantity to the ItemCard
              addItem={() => addTOMenu(item)} // Use the updated function
              removeItem={() => removeFromMenu(item)} // Use the updated function
            />
          );
        })}
      </div>
    </div>
  );
}


export default Hero;