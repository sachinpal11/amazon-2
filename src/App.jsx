import React, { useEffect } from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import EcommerceStoreProvider from './Store/Ecommerce-store'
import MainBanner from './Components/MainBanner'
import CategoryBanner from './Components/CategoryBanner'
import GeneralBanner from './Components/GeneralBanner'
import Home from './Home'
import { Outlet } from 'react-router-dom'


function App() {


  return (
    <div className='flex items-center flex-col font-[poppins]'>
      <EcommerceStoreProvider >
        <Header />
        <Navbar className='z-[100]' />
        <Outlet />

      </EcommerceStoreProvider>
    </div>
  )
}

export default App
