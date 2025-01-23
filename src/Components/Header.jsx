import React from 'react'
import { FaBorderAll, FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
function Header() {

    return (
        <div className='w-[95%] justify-between  px-4 flex items-center font-[poppins] sticky top-0 z-[1000] bg-white'>
            <div className='flex items-center '>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-amazon-logo-icon-download-in-svg-png-gif-file-formats--brand-social-media-card-pack-logos-icons-1583154.png" alt="Amazon_logo" className='w-[100px] sm:w-[120px]' />
                <ul className={`${styles.oneCont} flex gap-10 text-[16px] cursor-pointer font-[poppins] items-center ml-[50px] font-semibold 2xl:flex md:hidden sm:hidden`}>
                    <Link to="/" className='flex items-center gap-2' ><FaBorderAll /> All</Link>
                    <li>Today's Deals</li>
                    <li>Gift Cards</li>
                    <li>Registry & Gifting</li>
                </ul>
            </div>
            <div className='flex items-center gap-4'>
                <ul className='flex text-xl items-center gap-8 cursor-pointer sm:text-2xl'>
                    <li
                        className='flex text-xl font-semibold items-center gap-4 cursor-pointer'>
                        <IoSearch className={`${styles.secCont} font-bold sm:text-2xl`} />
                        <span className={`${styles.secCont} sm:hidden 2xl:flex md:flex`} >Search</span>
                    </li>
                    <li className={`${styles.secCont} sm:hidden 2xl:flex `} ><LuUser2 /></li>
                    <li className={`${styles.secCont} sm:hidden 2xl:flex `}><FaRegHeart /></li>
                    <Link to="/UserCart"><MdOutlineShoppingCart className='text-2xl sm:2xl' /></Link >
                </ul>

            </div>
        </div >
    )
}

export default Header
