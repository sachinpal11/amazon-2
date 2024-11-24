import React from 'react'
import styles from './GeneralBannerCard.module.css'
import { HiArrowLongRight } from "react-icons/hi2";
function GeneralBannerCard({ card }) {
    return (
        <div className='w-full h-[25vh] overflow-hidden relative flex flex-col p-4 justify-between sm:p-10 bg-pink-100 md:w-full sm:w-1/2'>
            <div className='flex flex-col'>
                <h1 className='text-2xl sm:text-3xl w-[50%] sm:w-full font-bold'>{card.title}</h1>
                <p className=' text-sm sm:text-xl w-[40%] font-semibold sm:w-[100%]'>{card.desc}</p>
            </div>
            <img src={card.img} className='sm:h-[25vh] right-[-20%] top-[0] sm:right-[-10%] h-[20vh]  absolute' alt="" />
            <button type='button' className='flex items-center gap-5 text-2xl font-semibold'> See more  <HiArrowLongRight className='text-3xl' /></button>
        </div>
    )
}

export default GeneralBannerCard
