// CustomerFormModal.js
import React, { useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerDetails } from "../redux/Slices/TableSlices";
import { openBillsider, openSidebar } from "../redux/Slices/SidebarSlice";
import { setMenuIndex } from "../redux/Slices/MenuIndexSlice"; // Adjust the path if necessary

function Modal({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const menuIndex = useSelector((state) => state.menuIndex);

  const [tableIndex, setTableIndex] = useState(0);
  const [form] = Form.useForm();

  // *Automaticallly close the table on clicking outside of model
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // *For clicking on SELECITON item table
  const handleTableClick = (index) => {
    setTableIndex(index);
    form.setFieldsValue({ tableIndex: index });
    dispatch(setMenuIndex(index));
    // console.log("MENU INDEX:" +""+ index);
  };

  //? if model is not open return null
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
            form.resetFields();
            onClose();
            dispatch(openBillsider(menuIndex));
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
            <div className="w-[42%]">
              {
                <Select
                  placeholder="Select a Table"
                  onChange={handleTableClick}
                >
                  {Array.from({ length: 20 }, (_, i) => (
                    <Select.Option key={i} value={i}>
                      Table {i + 1}
                    </Select.Option>
                  ))}
                </Select>
              }
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
