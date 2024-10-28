// import React from "react";

// function TableButton({ TotalTable, onTableClick, selectedTables }) {
//   // State to track the usage status of each table
//   const [selectedTables, setSelectedTables] = useState({});


//   const buttons = [];

//   for (let i = 0; i < TotalTable; i++) {
//     buttons.push(
//       <button
//         key={i}
//         onClick={() => onTableClick(i)}
//         className={`py-1 border-2 rounded-lg w-28 h-10 font-medium ${
//           selectedTables[i] ? "bg-red-500" : "bg-green-500"
//         }`}
//       >
//         TABLE {i + 1}
//       </button>
//     );
//   }

//   return <>{buttons}</>;
// }

// export default TableButton;





//   // ?For Changing colour from RED to GREEN on selecting a table
//   const onTableClick = (tableIndex) => {
//     // Toggle the selected state for the clicked table
//     setSelectedTables((prevSelectedTables) => ({
//       ...prevSelectedTables,
//       [tableIndex]: !prevSelectedTables[tableIndex],
//     }));
//     console.log(`Table ${tableIndex + 1} clicked!`);
//   };