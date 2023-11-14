import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'

const items = [
  { value: 'Servicios', page: '/services' },
  { value: 'Proyectos', page: '/proyects' },
  { value: 'Nosotros', page: '/about' },
  { value: 'Contacto', page: '/contact' }
]

export const Footer = () => {
  return (
    <div>
      <div className='pt-10 pb-10 bg-stone-600'>
        <div className='grid grid-cols-2 gap-2'>
          {items.map((item) => (
            <NavLink key={item.value} to={item.page} className="text-white text-center text-xl">{item.value}
            </NavLink>))}
        </div>
        <div className='flex justify-center'>
          <a href='https://wa.me/50376765329' target='_blank'><FontAwesomeIcon size='2xl' color='white' icon={faWhatsapp} /></a>
          <a href='https://www.linkedin.com/company/global-electric-services-s-a-de-c-v/' target='_blank'>
            <FontAwesomeIcon className='pl-5' size='2xl' color='white' icon={faLinkedinIn} />
          </a>
          <FontAwesomeIcon className='pl-5' size='2xl' color='white' icon={faInstagram} />
          <FontAwesomeIcon className='pl-5' size='2xl' color='white' icon={faTiktok} />
        </div>
      </div>
      <div className='bg-black'>
        <p className='text-white text-sm text-center font-thin'>© 2023 Global Electric Services. All rights reserved.</p>
      </div>
    </div>
  )
}
