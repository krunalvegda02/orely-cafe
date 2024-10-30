import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import { closebillsider } from "../redux/Slices/SidebarSlice";
import { useDispatch } from "react-redux";

const BillSider = ({ isOpen }) => {
  const dispatch = useDispatch();
  const closeButtonClick = () => {
    dispatch(closebillsider());
  };

  return (
    <div
      className={`fixed top-0 right-0  h-full w-80 bg-white shadow-lg duration-500 transition-transform transform ${
        !isOpen ? "translate-x-full" : "translate-x-0"
      }`}
    >
      <div className="p-3 flex justify-between items-center">
        <h2 className="text-3xl font-semibold font-sans">Your Order</h2>
        <button
          onClick={closeButtonClick}
          className="text-red-500 text-4xl mt-0"
        >
          <CloseCircleOutlined />
        </button>
      </div>
      <div className="px-1 pb-1">
        {/* Horizontal line for dividing header and bill part */}
        <hr className="border-[1px]" />
      </div>

      {/* BILL Section */}

      {/* Header With Download Option*/}
      <div className="flex flex-col justify-between h-[calc(100%-72px)] px-2 pt-1 ">
        
          <div className="LEFT">
            <h2 className="font-semibold text-[21px]">Table 5:</h2>
            <h4 className="text-[20px] fon">Krunal D. Vegda</h4>
            <h4>+91 9427109237</h4>
          </div>
          
        

        {/* Middle section for bill items */}
        <div className="overflow-y-auto flex-grow space-y-1 ">
          <h2 className="text-2xl font-semibold mt-4 mb-2">Orders,</h2>

          {/* Individual order item card */}
          <div className="flex items-center justify-between">
            <div className="Itemcounter flex items-center justify-center  border-2 rounded-full h- w-8">
              x1
            </div>
            <div>
              <img
                src="https://cdn.tasteatlas.com//Images/Dishes/dec410f7acfa475bbf94668ba691d96f.jpg?mw=1300"
                alt="FOOD image"
                className="object-cover border border-gray-300 rounded-full h-12 w-12 mx-2"
              />
            </div>
            <div className="text-lg mx-2">Hazelnut Cappuccino</div>
            <div className="price text-lg font-semibold">$29.05</div>
          </div>

          {/* Individual order item card */}
          <div className="flex items-center justify-between">
            <div className="Itemcounter flex items-center justify-center  border-2 rounded-full h- w-8">
              x1
            </div>
            <div>
              <img
                src="https://cdn.tasteatlas.com//Images/Dishes/dec410f7acfa475bbf94668ba691d96f.jpg?mw=1300"
                alt="FOOD image"
                className="object-cover border border-gray-300 rounded-full h-12 w-12 mx-2"
              />
            </div>
            <div className="text-lg mx-2 ">Hazelnut Cappuccino</div>
            <div className="price text-lg font-semibold">$29.05</div>
          </div>

          {/* Individual order item card */}
          <div className="flex items-center justify-between">
            <div className="Itemcounter flex items-center justify-center  border-2 rounded-full h- w-8">
              x1
            </div>
            <div>
              <img
                src="https://cdn.tasteatlas.com//Images/Dishes/dec410f7acfa475bbf94668ba691d96f.jpg?mw=1300"
                alt="FOOD image"
                className="object-cover border border-gray-300 rounded-full h-12 w-12 mx-2"
              />
            </div>
            <div className="text-lg mx-2">Hazelnut Cappuccino</div>
            <div className="price text-lg font-semibold">$29.05</div>
          </div>
        </div>

        {/* BOttom Button */}
        <div>
          <div className="px-1 pb-1">
            {/* Horizontal line for dividing header and bill part */}
            <hr className="border-[1px]" />
          </div>
          <div className="flex justify-between font-semibold text-2xl mb-1">
            <div>Total:</div>
            <div>$300</div>
          </div>
          <button className="container bg-blue-600 h-10 rounded-2xl text-white font-medium my-5">
            Charge Customer
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillSider;
