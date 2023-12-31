import React from 'react'
import { NavLink } from 'react-router-dom'

import image1 from '../assets/img/poste_1.jpg'
import image2 from '../assets/img/tablero_1.jpg'
import image3 from '../assets/img/flir_1.jpg'
import image4 from '../assets/img/planta_1.jpg'
import image5 from '../assets/img/subestacion_1.jpg'
import image6 from '../assets/img/planta_2.jpg'
import image7 from '../assets/img/medidor_1.jpg'

export const SucessStories = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-[48rem] pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Compromiso y <span className='text-global-main-color'>calidad</span> garantizados
            </h1>
            <p className="mt-4 text-xl text-gray-500">
            Global Electric Services se compromete a ofrecer los mejores servicios al cliente y al mismo tiempo garantizar que sus sistemas eléctricos estén actualizados, sean seguros y eficientes. Cuando se trata de nuestros servicios de instalación, 
            mantenimiento y reparación eléctricos, prometemos brindar soluciones de alta calidad a través de nuestro personal profesional y calificado.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src={image1}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={image2}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={image3}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={image4}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={image5}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={image6}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={image7}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <NavLink
                to="/contact"
                className="inline-block rounded-md border border-transparent bg-global-main-color px-8 py-3 text-center font-medium text-white hover:bg-global-main-color-dark"
              >
                Cotiza ya!
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
