// CustomerFormModal.js
import React, { useState, useEffect } from "react";
import { Button, Form, Input, Select } from "antd";
import { useDispatch } from "react-redux";
import { addCustomerDetails } from "../redux/Slices/TableSlices";
import { openSidebar } from "../redux/Slices/SidebarSlice";


function Modal({ isOpen, onClose }) {
  const [tableIndex, setTableIndex] = useState(0);

  const [form] = Form.useForm();

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("the table index in the app js is ", tableIndex);
  }, [tableIndex]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleTableClick = (index) => {
    // console.log("Setting table index to:", index); // Check index value
    setTableIndex(index);
    
    form.setFieldsValue({ tableIndex: index }); // Update form field as well
  };

  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-6 rounded-2xl shadow-md w-[45%]">
        <h2 className="text-xl font-bold mb-4">New Order</h2>

        <Form
          form={form}
          name="control-hooks"
          onFinish={(values) => {
            console.log(values);
            setTableIndex(values.tableIndex);
            dispatch(addCustomerDetails(values));
            // dispatch(setIndex(tableIndex)); 
            form.resetFields();
            onClose();
            dispatch(openSidebar());
          }}
          layout="vertical"
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            className="font-semibold"
            name="customerName"
            label="Customer Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="font-semibold"
            name="customerContact"
            label="Contact Details"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="font-semibold"
            name="tableIndex"
            label="Select Table"
            rules={[{ required: true }]}
          >
            {/* <Select placeholder="Select a Table" allowClear> */}
            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: 10 }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  value={i}
                  onClick={() => handleTableClick(i)}
                  className={`py-2 px-4 rounded-lg font-semibold transition-colors duration-300 ${
                    tableIndex === i
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  Table {i + 1}
                </button>
              ))}
            </div>
          </Form.Item>
          <Form.Item className="flex justify-end">
            <Button
              className=" bg-green-500  text-white font-normal text-xl  rounded-md px-6 py-5 mr-2"
              type="submit"
              htmlType="submit"
            >
              Submit
            </Button>
            <Button
              type="button"
              onClick={onClose}
              className="bg-gray-300 rounded-md text-xl font-normal px-6 py-5 mr-2"
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Modal;
