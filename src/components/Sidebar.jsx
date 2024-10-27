import React, { useState } from "react";
import { CloseCircleOutlined } from "@ant-design/icons"
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../redux/SidebarSlice";

const Sidebar = ({ isOpen }) => {
  const dispatch = useDispatch();

  // State to track the usage status of each table
  const [selectedTables, setSelectedTables] = useState({});

  // ?For Changing colour from RED to GREEN on selecting a table
  const onTableClick = (tableIndex) => {
    // Toggle the selected state for the clicked table
    setSelectedTables((prevSelectedTables) => ({
      ...prevSelectedTables,
      [tableIndex]: !prevSelectedTables[tableIndex],
    }));
    console.log(`Table ${tableIndex + 1} clicked!`);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-between items-center">

        <h2 
        className="text-3xl font-semibold font-sans">
          Tables..
        </h2>

        <button
          onClick={() => dispatch(closeSidebar())}
          className="text-red-500 text-4xl mt-0"
        >
          <CloseCircleOutlined /> 
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3 ml-6">
        <Btn
          TotalTable={10}
          onTableClick={onTableClick}
          selectedTables={selectedTables}
        />
      </div>
    </div>
  );
};

const Btn = ({ TotalTable, onTableClick, selectedTables }) => {
  const buttons = [];

  for (let i = 0; i < TotalTable; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => onTableClick(i)}
        className={`py-1 border-2 rounded-lg w-28 h-10 font-medium ${
          selectedTables[i] ? "bg-red-500" : "bg-green-500"
        }`}
      >
        TABLE {i + 1}
      </button>
    );
  }

  return <>{buttons}</>;
};

export default Sidebar;
