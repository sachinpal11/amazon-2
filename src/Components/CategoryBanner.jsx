import React, { useContext } from 'react'
import { EcommerceStoreContext } from '../Store/Ecommerce-store'
import CategoryBannerCard from './CategoryBannerCard'

function CategoryBanner() {
    const { CategoryProductBanner } = useContext(EcommerceStoreContext)
    return (
        <>

            <div className='w-[95%] flex flex-col gap-5 '>
                <span className='text-4xl my-5 font-bold'>Products By Category</span>
                <div className='flex flex-row gap-4 w-full scrollbar-hide font-semibold overflow-x-auto text-3xl overflow-y-hidden 2xl:justify-center'>
                    {CategoryProductBanner.map((product, index) => (
                        <CategoryBannerCard product={product} key={index} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default CategoryBanner
