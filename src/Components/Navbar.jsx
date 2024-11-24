import React from 'react'
import { FaBorderAll, FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className='flex fixed text-4xl z-10 left-[2%] shadow-[rgba(50,50,93,0.25)_0px_13px_27px_-5px,rgba(0,0,0,0.3)_0px_8px_16px_-8px] w-[95%] h-20 justify-evenly bg-white rounded-full bottom-3 items-center p-3 2xl:hidden'>
            <Link to="/">
                <FaBorderAll />
            </Link>
            <LuUser2 />
            <FaRegHeart />
            <IoSearch className='flex sm:hidden' />
        </div>
    )
}

export default Navbar
