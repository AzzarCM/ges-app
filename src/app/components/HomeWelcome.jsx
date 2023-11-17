import React from 'react'

import '../pages/css/custom_home.css'

export const HomeWelcome = ({backgroundPage}) => {
  return (
    <div className={`${backgroundPage} bg-cover w-full full-screen-banner-height flex items-center justify-center`}>
      <div className='flex flex-col items-center rounded-md bg-gradient-to-r from-custom-black-gray from-25% xl:p-20'>
        <h1 className='text-white text-6xl xl:text-8xl font-bold text-center mb-10'>Global Electric Services</h1>
        <p className='text-white text-3xl max-w-2xl mb-10 font-thin text-center'>Servicios Eléctricos <span className='text-global-main-color font-bold'>Profesionales</span> en toda el área de El Salvador</p>
        <p className='text-white text-2xl max-w-3xl p-2 text-center'>Profesionales experimentados ofreciendo instalaciones eléctricas, reparaciones, y servicios de mantenimiento en propiedades comerciales y privadas.</p>
      </div>
    </div>
  )
}
