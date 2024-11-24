import React from 'react'
import styles from './CategoryBanner.module.css'
function CategoryBannerCard({ product }) {
    return (
        <>
            <div className={`${styles.CategoryCard} 
         2xl: w - [20 %] overflow-hidden`}>
                <div>
                    <img src={product.img} alt="" />
                </div>
                <span className='absolute w-full flex items-center justify-center h-full bg-[rgba(255,255,255,0.548)]'>{product.Category}</span>
            </div>
        </>
    )
}

export default CategoryBannerCard
