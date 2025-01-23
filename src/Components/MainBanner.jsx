import React, { useContext, useEffect, useRef } from 'react'
import { EcommerceStoreContext } from '../Store/Ecommerce-store'
import BannerSection from './BannerSection'
import styles from './BannerSection.module.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
function MainBanner() {
    const { AllProductData, BannerData } = useContext(EcommerceStoreContext);
    const screenWidth = window.innerWidth;
    const sliderref = useRef();
    const slideRight = (element) => {
        element.scrollLeft += screenWidth - 110
    }
    const slideLeft = (element) => {
        element.scrollLeft -= screenWidth - 110
    }

    useEffect(() => {
        const interval = setInterval(autoslider, 5000);
        return () => clearInterval(interval);
    }, []);

    const autoslider = () => {
        if (!sliderref.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = sliderref.current;
        if (scrollLeft + clientWidth >= scrollWidth - 1) {
            sliderref.current.scrollLeft = 0;
        } else {
            sliderref.current.scrollLeft += screenWidth - 110;
        }
    };
    return (
        <>
            <button type='button' className='absolute z-[99] text-3xl top-1/2 right-[5%] cursor-pointer p-5 bg-neutral-400 rounded-full' onClick={() => { slideRight(sliderref.current) }} ><IoIosArrowForward /></button>
            <button type='button' className='absolute z-[99] text-3xl top-1/2 left-[5%] cursor-pointer p-5 bg-neutral-400 rounded-full' onClick={() => { slideLeft(sliderref.current) }}><IoIosArrowBack /></button>
            <div className={`${styles.banner} w-[95%] relative h-[60vh] overflow-y-hidden overflow-x-auto scroll-smooth whitespace-nowrap bg-neutral-300 snap-x -webkit-scrollbar-none rounded-2xl sm:h-[80vh]`} id='slider' ref={sliderref} >
                {BannerData.map((banner, index) => (
                    <BannerSection banner={banner} key={index} />
                ))}
            </div>
        </>
    )
}

export default MainBanner
