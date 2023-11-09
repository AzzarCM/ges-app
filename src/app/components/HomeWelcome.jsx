import React from 'react'

import '../pages/css/custom_home.css'

export const HomeWelcome = () => {
  return (
    <div className='backgroundHome full-screen-banner-height flex items-center justify-center'>
      <div className='flex flex-col items-center rounded-md bg-gradient-to-r from-custom-black-gray xl:p-20'>
        <h1 className='text-white text-8xl font-bold text-center mb-10'>Global Electric Services</h1>
        <p className='text-white text-3xl max-w-2xl mb-10 font-thin'>Licensed And Certified <span className='text-global-main-color font-bold'>Professional</span> Electrical Services In Nassau and Suffolk County</p>
        <p className='text-white text-2xl max-w-3xl'>Experienced professionals offering electrical installation, repair, and maintenance services to residential and commercial properties</p>
      </div>
    </div>
  )
}
