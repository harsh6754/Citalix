import React, { useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa';
import { FaRegBell } from 'react-icons/fa6';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
const Search = () => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClear = () => {
    setSearchText('');
  };
  return (
    <div className='flex items-center w-full justify-evenly'>
      <nav className="bg-transparent p-4 flex items-center w-[950px]">
        {/* Left side */}
        <div className="relative flex items-center">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer" />
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={handleChange}
            className="text-black pl-10 pr-11 py-1 focus:outline-none focus:ring-2 focus:ring-white border border-solid rounded-md"
          />
          {searchText && (
            <FaTimes
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer"
              onClick={handleClear}
            />
          )}
        </div>
      </nav>

      {/* Right side */}
      <nav className='p-4 flex justify-between items-center'>
        <div className="flex items-center justify-evenly">
          <FaRegBell className="text-black mr-4 cursor-pointer border border-3 border-solid rounded-lg bg-white text-3xl" />
          <IoChatbubbleEllipsesOutline className="text-black mr-4 cursor-pointer border border-3 border-solid rounded-lg bg-white text-3xl" />
          <IoSettingsOutline className="text-black mr-4 cursor-pointer border border-3 border-solid rounded-lg bg-white text-3xl" />
          <RxAvatar className="text-black mr-4 cursor-pointer border border-3 border-solid rounded-full bg-white text-3xl" />
        </div>
      </nav>
    </div>

  )
}

export default Search
