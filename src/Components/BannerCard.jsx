import React from 'react'
import { IoIosStar } from "react-icons/io";
import styles from './BannerSection.module.css'
function BannerCard({ banner }) {
    return (

        <div className={`${styles.cardStore} flex flex-col justify-center scale-125  absolute w-[400px] h-[300px] p-5 bg-white rounded-[40px] right-[45%] bottom-[20%] z-0`}>
            <h2 className='text-2xl'>{banner.MainTitle}</h2>
            <h1 className='text-3xl font-bold text-wrap my-3'>{banner.ProductTitle}</h1>
            <div className='flex text-2xl text-yellow-500 font-semibold '>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <span className='mx-3 text-black'>{banner.reviews}</span>
            </div>
            <span className='text-3xl my-5 font-semibold'>INR {banner.price}</span>
            <div className='absolute top-[-10%] left-[-5%] w-[60px] h-[60px] text-2xl flex items-center justify-center bg-yellow-400 font-semibold rounded-full'>{banner.discount}</div>
        </div>

    )
}

export default BannerCard
