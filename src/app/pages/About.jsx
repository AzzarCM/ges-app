import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faLock, faHand } from '@fortawesome/free-solid-svg-icons'
import { TeamSection } from '../components/TeamSection'
import banner3 from '../assets/img/banner-3.png'
import { Footer } from '../components/Footer'
import { NavLink } from 'react-router-dom'

export const About = () => {
  return (
    <div>
      <div className="relative px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#fcc26c] to-[#fcc26c] opacity-60 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Conoce a nuestro equipo{' '}
              <a href="/about/#team" className="font-semibold text-global-main-color">
                <span className="absolute inset-0" aria-hidden="true" />
                 Ver mas <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              ¿Quienes Somos?
            </h1>
            <p className="mt-6 text-lg font-thin leading-8 text-gray-600">
              Conoce mas sobre nuestra historia y el equipo de profesionales que conforman la empresa.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <NavLink
                to="/contact"
                className="rounded-md bg-global-main-color px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contacto
              </NavLink>
              <NavLink to="/proyects" className="text-sm font-semibold leading-6 text-gray-900">
                Proyectos <span aria-hidden="true">→</span>
              </NavLink>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#fcc26c] to-[#fcc26c] opacity-60 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-bold leading-7 text-global-main-color">Global Electric Services S.A de C.V</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Como empresa</h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Ofrecemos Soluciones Flexibles e Integrales de Ingeniería, Suministro, Construcción,
                  incluyendo servicio de mantenimiento en media y baja tensión.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={banner3}
              alt="banner-3"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  Aqui en GES somos un Grupo de Profesionales con más de 30 años de experiencia en el área y liderazgo en el respaldo de energía eléctrica.
                  Iniciamos operaciones en El Salvador de manera esbelta, hemos experimentado cambios constantes, adaptándonos a los requerimientos de los clientes,
                  a las exigencias del mercado y situaciones globales. Esto nos ha llevado a desarrollar proyectos de gran envergadura a nivel nacional y regional,
                  ejecutándolos en tiempo y presupuesto.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Nuestros Valores.</h2>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <FontAwesomeIcon className="mt-1 h-5 w-5 flex-none text-global-main-color" aria-hidden="true" icon={faCheck} />
                    <span>
                      <strong className="font-semibold text-gray-900">Flexibles</strong> Porque nos adaptamos al tamaño del proyecto
                      “No hay trabajo pequeño ni trabajo grande”,
                      y porque también nos adaptamos a las requerimientos del cliente, con soluciones rentables
                      siguiendo las normas de construcción locales e internacionales.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <FontAwesomeIcon className="mt-1 h-5 w-5 flex-none text-global-main-color" aria-hidden="true" icon={faLock} />
                    <span>
                      <strong className="font-semibold text-gray-900">Integrales</strong> Porque ejecutamos soluciones completas,
                      incluyendo las mejores practicas
                      de ingeniería, tomando en cuenta a nuestros clientes y personal técnico.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <FontAwesomeIcon className="mt-1 h-5 w-5 flex-none text-global-main-color" aria-hidden="true" icon={faHand} />
                    <span>
                      <strong className="font-semibold text-gray-900">Comprometidos</strong> Entendemos que su tiempo es valioso.
                      Es por eso que nuestros técnicos profesionales se aseguran
                      de que cualquier reparación o instalación se complete con prontitud.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                  fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                  adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TeamSection/>
      <Footer/>
    </div>

  )
}
