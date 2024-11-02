import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

export const ItemCard = ({ item, itemQuantity, addItem, removeItem }) => {
  const sidebarOpen = useSelector((state) => state.sidebar.sidebarOpen);

  return (
    <div
      className={`bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between ${sidebarOpen ? "w-[217.5px]" : "w-[235px]"} transition-all duration-300`}
      style={{ height: "300px" }} 
    >
      <div>
        <img
          alt="Menu Items"
          className="rounded-t-lg w-full"
          src="https://placehold.co/300x200"
        />
        <div className="p-4 flex-grow">
          <h2 className="text-lg font-semibold">{item.name}</h2>
        </div>
      </div>

      {/* Price and Quantity Controls */}
      <div className="flex justify-between items-center ">
        <span className="text-2xl font-bold">₹{item.price}</span>
        <div className="container shadow-2xl flex justify-evenly bg-white border-gray-400 border rounded-2xl w-[6rem] h-10 text-center">
          <div className="flex items-center justify-center">
            <MinusOutlined
              onClick={removeItem}
              className="text-red-500 w-6 h-6 hover:bg-blue-500 hover:rounded-full hover:w-8 hover:h-8 transition-all ease-in-out duration-200 flex items-center justify-center"
            />
          </div>
          <span className="text-2xl">{itemQuantity}</span>
          <div className="flex items-center justify-center">
            <PlusOutlined
              onClick={addItem}
              className="text-green-500 w-6 h-6 hover:bg-blue-500 hover:rounded-full hover:w-8 hover:h-8 transition-all ease-in-out duration-200 flex items-center justify-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
