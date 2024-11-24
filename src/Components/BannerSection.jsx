import React from 'react'
import styles from './BannerSection.module.css'
import BannerCard from './BannerCard';

function BannerSection({ banner }) {
    return (
        <div className={`w-full h-full relative snap-center overflow-hidden inline-block rounded-2xl`}>
            <div className='w-full h-full flex'>
                <div className={`${styles.SectionText} w-[80%] text-wrap absolute top-10 left-10`}>
                    <h2 className={` font-bold`}>{banner.MainTitle}</h2>
                    <p className='text-3xl font-semibold text-neutral-600'>{banner.MainDesc}</p>
                </div>
                <div>
                    <img src={banner.img} alt="" className={`${styles.mainImgCont}`} />
                </div>
                <BannerCard banner={banner} />
            </div>
        </div>
    )
}

export default BannerSection
