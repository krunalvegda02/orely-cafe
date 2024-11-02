import React, { useState } from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import { closebillsider } from "../redux/Slices/SidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import { resetOrder } from "../redux/Slices/TableSlices";
import ConfirmModal from "../components/confirmModel";

const BillSider = ({ isOpen, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const dispatch = useDispatch();
  const tableDetails = useSelector((state) => state.tables);
  const selectedTable = tableDetails[index];
  const orders = selectedTable ? selectedTable.orders : [];
  const totalAmount = orders.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const closeButtonClick = () => {
    dispatch(closebillsider());
  };

  // Show confirmation modal on charge button click
  const handleChargeCustomer = () => {
    setIsModalOpen(true);
  };

  const handleConfirmCharge = () => {
    dispatch(resetOrder({ tableIndex: index }));
    dispatch(closebillsider());
    printBill();
    setIsModalOpen(false); // Close the modal after confirming
  };

  const printBill = () => {
    // Example printing logic...
    console.log("BIll is Printing");
  };

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg duration-500 transition-transform transform ${
          !isOpen ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="p-3 flex justify-between items-center">
          <h2 className="text-3xl font-semibold font-sans">Your Order</h2>
        </div>
        <div className="px-1 pb-1">
          <hr className="border-[1px]" />
        </div>

        <div className="flex flex-col justify-between h-[calc(100%-72px)] px-2 pt-1 ">
          {selectedTable && (
            <div>
              <h2 className="font-semibold text-[21px]">Table {index + 1}:</h2>
              <h4 className="text-[20px]">{selectedTable.customerName}</h4>
              <h4>+91 {selectedTable.customerContact}</h4>
            </div>
          )}

          <div className="overflow-y-auto flex-grow scrollbar-hide space-y-2">
            <h2 className="text-2xl font-semibold mt-4 mb-2">Orders</h2>
            {orders.length === 0 ? (
              <p className="flex justify-center pt-14 text-2xl">
                No Order Placed...!
              </p>
            ) : (
              orders.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center justify-center border-2 rounded-full h-8 w-8">
                    x{item.quantity}
                  </div>
                  <div className="flex items-center flex-grow">
                    <img
                      src={item.image || "https://via.placeholder.com/50"}
                      alt="Food"
                      className="object-cover border border-gray-300 rounded-full h-12 w-12 mx-2"
                    />
                    <div className="text-lg mx-2">{item.name}</div>
                  </div>
                  <div className="price text-lg font-semibold">
                    ₹{item.price * item.quantity}
                  </div>
                </div>
              ))
            )}
          </div>

          {orders.length === 0 ? "" :<div>
            <div className="px-1 pb-1">
              <hr className="border-[1px]" />
            </div>
            <div className="flex justify-between font-semibold text-2xl">
              <div>Total:</div>
              <div> ₹ {totalAmount}</div>
            </div>
            <button
              onClick={handleChargeCustomer} // Show modal on button click
              className="container bg-blue-600 h-10 rounded-2xl text-white font-medium text-lg my-5"
            >
              Charge Customer ₹ {totalAmount}
            </button>
          </div>}
        </div>
      </div>

      {/* ConfirmModal with handlers */}
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmCharge}
      />
    </>
  );
};

export default BillSider;
