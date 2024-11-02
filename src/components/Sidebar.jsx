import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, openBillsider } from "../redux/Slices/SidebarSlice";
import BillSider from "../components/billSider";
import { setMenuIndex } from "../redux/Slices/MenuIndexSlice";

const Sidebar = ({ isOpen }) => {
  const dispatch = useDispatch();
  const tables = useSelector((state) => state.tables);
  const billSiderOpen = useSelector((state) => state.sidebar.billSiderOpen);
  const menuIndex = useSelector((state) => state.menuIndex);

  const closeButtonClick = () => {
    dispatch(closeSidebar());
  };

  const openBillSidebar = (index) => {
    //? Very important part to switch redux Menuindex for changing menu items
    dispatch(setMenuIndex(index));
    // console.log(setMenuIndex(index));
    dispatch(openBillsider());
  };

  return (
    <>
      <div
        className={`fixed top-0 right-0  h-full w-80 bg-white shadow-lg duration-500 transition-transform transform 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-3xl font-semibold font-sans">Tables</h2>
        </div>

        <div className="container ml-2 overflow-y-auto scrollbar-hide  h-[90%]">
          {tables.map((tables, index) =>
            tables.customerName ? (
              <div
                key={index}
                className={`card p-2 flex justify-between items-center mb-3 border-2 rounded-lg `}
              >
                <div>
                  <h1 className="font-semibold text-xl">Table {index + 1}:</h1>
                  <h2 className="text-xl">{tables.customerName}</h2>
                  <h2 className="text">+91 {tables.customerContact}</h2>
                </div>
                <button onClick={() => openBillSidebar(index)}>
                  <img
                    className="mr-2"
                    src="./src/assets/reciept.png"
                    alt="Open Bill Icon"
                    height={10}
                    width={43}
                  />
                </button>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>

      <BillSider isOpen={billSiderOpen} index={menuIndex} />
    </>
  );
};

export default Sidebar;
