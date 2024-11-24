import React from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import MainBanner from './Components/MainBanner'
import CategoryBanner from './Components/CategoryBanner'
import GeneralBanner from './Components/GeneralBanner'

function Home() {
    return (
        <div className='flex w-full h-full items-center flex-col font-[poppins] gap-4'>

            <MainBanner />
            <CategoryBanner />
            <GeneralBanner />
        </div>
    )
}

export default Home
