import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import { closebillsider } from "../redux/Slices/SidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import jsPDF from "jspdf";
import { resetOrder } from "../redux/Slices/TableSlices";

const BillSider = ({ isOpen, index }) => {
  const dispatch = useDispatch();
  const tableDetails = useSelector((state) => state.tables);
  const selectedTable = tableDetails[index];
  //  console.log("Table Detakils: " + selectedTable );

  const closeButtonClick = () => {
    dispatch(closebillsider());
  };

  const PassBill = () => {
    dispatch(resetOrder({tableIndex:index}));
    dispatch(closebillsider());
    downloadBill();
    console.log("Download BIll");
   
    // TODO: Download Bill
    // TODO make total of orders  {It should be other function}
  };

  const downloadBill = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text(`Orely Cafe`, 14, 20);
    doc.setFontSize(20);
    doc.text(`Bill for Table ${index + 1}`, 14, 20);
    doc.setFontSize(12);
    doc.text(`Customer Name: ${selectedTable.customerName}`, 14, 30);
    doc.text(`Contact: +91 ${selectedTable.customerContact}`, 14, 40);
    doc.text("Orders:", 14, 50);

    let yPosition = 60; // Initial Y position for the order items
    orders.forEach((item) => {
      doc.text(`${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}`, 14, yPosition);
      yPosition += 10; // Increase Y position for next item
    });

    doc.text(`Total: ₹ ${totalAmount}`, 14, yPosition);
    doc.save(`bill_table_${index + 1}.pdf`);
  };


  const orders = selectedTable ? selectedTable.orders : [];
  const totalAmount = orders.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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
        {selectedTable && (
          <div className="LEFT">
            <h2 className="font-semibold text-[21px]">Table {index + 1}:</h2>
            <h4 className="text-[20px]">{selectedTable.customerName}</h4>
            <h4>+91 {selectedTable.customerContact} </h4>
          </div>
        )}

        {/* Middle section for bill items */}
        <div className="overflow-y-auto flex-grow scrollbar-hide space-y-2 ">
          <h2 className="text-2xl font-semibold mt-4 mb-2">Orders,</h2>

          {/* Individual order item card */}
          {orders.length === 0 ? (
            <p className="flex justify-center pt-14 text-2xl">
              No Order Placed...!
            </p>
          ) : (
            orders.map((item, index) => (
              <div key={index} className=" flex items-center justify-between">
                <div className="Itemcounter flex items-center justify-center border-2 rounded-full h-8 w-8">
                  x{item.quantity}
                </div>
                <div className="flex  items-center flex-grow">
                  <img
                    src={item.image || "https://via.placeholder.com/50"} // Placeholder if no image
                    alt="Food"
                    className="object-cover border border-gray-300 rounded-full h-12 w-12 mx-2"
                  />

                  <div className="text-lg mx-2">{item.name}</div>
                </div>
                <div className="price text-lg font-semibold ">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))
          )}
        </div>

        {/* BOttom Button */}
        <div>
          <div className="px-1 pb-1">
            {/* Horizontal line for dividing header and bill part */}
            <hr className="border-[1px]" />
          </div>
          <div className="flex justify-between font-semibold text-2xl ">
            <div>Total:</div>
            <div> ₹ {totalAmount}</div>
          </div>
          <button
            onClick={PassBill}
            className="container bg-blue-600 h-10 rounded-2xl text-white font-medium text-lg my-5"
          >
            Charge Customer {`₹ ${totalAmount}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillSider;
