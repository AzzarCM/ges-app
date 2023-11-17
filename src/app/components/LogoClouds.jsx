import React from 'react'

import cumminsLogo from '../assets/svg/cummins.svg'
import comap from '../assets/img/comap.png'
import kohler from '../assets/img/kohler.png'
import leroy from '../assets/img/leroy.png'
import flir from '../assets/svg/flir.svg'
export const LogoClouds = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-thin leading-8 text-gray-900">
          Trabajamos con las mejores marcas mundiales.
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:scale-150 ease-in duration-200"
            src={cumminsLogo}
            alt="Cummins"
            width={158}
            height={78}
          />
          <img
            className="col-span-2 w-full object-contain lg:col-span-1 hover:scale-150 ease-in duration-200"
            src={comap}
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:scale-150 ease-in duration-200"
            src={kohler}
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 hover:scale-150 ease-in duration-200"
            src={leroy}
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 w-full object-contain sm:col-start-auto lg:col-span-1 hover:scale-150 ease-in duration-200"
            src={flir}
            alt="Statamic"
            width={158}
            height={58}
          />
        </div>
      </div>
    </div>
  )
}
