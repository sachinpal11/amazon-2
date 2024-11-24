import React, { useContext, useEffect } from 'react'
import GeneralBannerCard from './GeneralBannerCard'
import { EcommerceStoreContext } from '../Store/Ecommerce-store'

function GeneralBanner() {
    const { GeneralCardData } = useContext(EcommerceStoreContext)

    return (

        <div className=' mt-20 p-3 w-full flex-col xl:flex md:flex-row sm:flex-row'>
            {GeneralCardData.map((card, index) => (
                <GeneralBannerCard key={index} card={card} />
            ))}
        </div>
    )
}

export default GeneralBanner
