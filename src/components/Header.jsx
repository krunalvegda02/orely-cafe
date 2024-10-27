import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openSidebar } from '../redux/SidebarSlice';
import Sidebar from './Sidebar';

function Header() {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.sidebar.sidebarOpen);
 
  return (
    <>
      <div className="flex justify-between mr-2 transition-all duration-300">
        <h1 className="text-start font-light font-sans ml-4 text-[40px]">
          Orely Cafe Menu
        </h1>
        <div className="mt-3">
          <button
            type="button"
            onClick={() => dispatch(openSidebar())}
            className="rounded-3xl p-2 px-4 bg-gray-900 text-white"
          >
            New Order
          </button>
        </div>
      </div>
      {/* Pass isOpen prop */}
      <Sidebar isOpen={sidebarOpen} />
    </>
  );
}

export default Header;
