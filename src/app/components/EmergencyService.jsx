import React from 'react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
import cover247 from '../assets/img/cover247.jpg'

const features = [
  {
    name: 'Estimaciones',
    description:
      'Nuestros técnicos profesionales ofrecen presupuestos gratuitos donde escuchan sus requisitos y elaboran un plan de servicios que se alinea con su solicitud.',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Reparaciones',
    description: 'Brindamos reparaciones eléctricas realizadas las 24 horas del día, los 7 días de la semana por nuestros técnicos autorizados y certificados.',
    icon: LockClosedIcon,
  },
  {
    name: 'Mantenimiento',
    description: 'Nuestros profesionales experimentados realizan un mantenimiento oportuno para garantizar que sus equipos y sistemas eléctricos funcionen de manera óptima.',
    icon: ServerIcon,
  },
]

export const EmergencyService = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-2xl font-semibold leading-7 text-global-main-color">24/7</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Servicio de <span className='text-global-main-color'>Emergencia</span></p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Póngase en contacto con nuestros técnicos eléctricos de confianza para analizar las necesidades eléctricas 
              usted requiera y dejar que le ayuden a tomar las decisiones correctas. <br/> Llame para un presupuesto gratuito hoy.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-global-main-color" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={cover247}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
