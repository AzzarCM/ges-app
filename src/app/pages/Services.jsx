import React from 'react'
import { Maitainance } from './Maintainance'
import './css/custom_home.css'
import { Footer } from '../components/Footer'

const ingenieria = [
  { name: 'Ingeniería', description: 'Aplicación de los conocimientos a la solución de los problemas y retos que enfrentan en las diferentes áreas.' },
  { name: 'Diseño', description: 'Creación de un plano convención para la construcción de un objeto o un sistema' },
  { name: 'Ejemplo 3', description: 'descripcion' },
  { name: 'Ejemplo 4', description: 'descripcion' },
]

const suministros = [
  { name: 'Generadores', description: 'Dispositivo o máquina capaz de producir energía de manera propia.' },
  { name: 'Controladores', description: 'Herramienta de monitoreo y control en línea para dispositivos y accesorios' },
  { name: 'Suministro 3', description: 'descripcion' },
  { name: 'Suministro 4', description: 'descripcion' },
]

const mantenimiento = [
  { name: 'Mantenimiento Preventivo', description: 'descripcion' },
  { name: 'Mantenimiento Predictivo', description: 'descripcions' },
  { name: 'Mantenimiento Correctivo 3', description: 'descripcion' }
]

const mediciones = [
  { name: 'Analizar comportamientos de red', description: '' },
  { name: 'Mediciones de transformadores', description: '' },
  { name: 'Termografías', description: '' },
  { name: 'Aislamiento de conductores', description: '' },
  { name: 'Mediciones de red de polarización', description: '' },
  { name: 'Medición de banco de baterías', description: '' },
  { name: 'Resistencia de contactos', description: '' },
  { name: 'Mediciones de temperatura y humedad', description: '' },
  { name: 'Medición de Aislamiento', description: '' },
  { name: 'Calidad y utilización eficiente de la energía', description: '' },
]

export const Services = () => {
  return (
    <div>
      <div className='backgroundServices bg-cover w-full full-screen-banner-height flex items-center justify-center'>
        <div className='flex flex-col items-center rounded-md bg-gradient-to-r from-custom-black-gray from-25% xl:p-20'>
          <h1 className='text-white text-6xl xl:text-8xl font-bold text-center mb-10'>Servicios</h1>
          <p className='text-white text-3xl max-w-2xl mb-10 font-thin text-center'>Creando asociaciones a
            largo plazo con nuestros servicios <span className='text-global-main-color font-bold'>eléctricos</span> de alta
            calidad para necesidades residenciales y comerciales.</p>
          {/* <p className='text-white text-2xl max-w-3xl p-2 text-center'>Profesionales experimentados ofreciendo instalaciones eléctricas, reparaciones, y servicios de mantenimiento en propiedades comerciales y privadas.</p> */}
        </div>
      </div>
      <div className="bg-white">
        <section datatype='section' id='ingenieria' className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl"><span className='text-global-main-color'>Ingeniería </span>y Diseño</h2>
            <p className="mt-4 text-gray-500">
              {`Proporcionamos servicios de ingeniería conceptual, básica y de detalle para todas sus áreas de negocios 
              (Energía, Industria, Infraestructura, Telecomunicaciones), en las siguientes disciplinas: Eléctrica, Mecánica, 
              Civil, Telecomunicaciones, Automatización y Control. Es por ello que se cuenta con profesionales 
              con un alto grado de formación y alianzas con empresas especializadas, con el fin de garantizar 
              la calidad de nuestros servicios, soluciones rentables y la satisfacción de los clientes utilizando 
              la tecnología de medición con las aplicaciones de nuestros equipos de medición.`}
            </p>
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {ingenieria.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </section>
        <section id='suministros' className="flex flex-wrap-reverse mx-auto lg:grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8 ">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-global-main-color sm:text-4xl">Suministros</h2>
            <p className="mt-4 text-gray-500">
              Tenemos alianzas tanto con fabricantes como con distribuidores de prestigiosas marcas de equipos y
              productos que además de excelentes precios, nos mantienen al día con las tecnologías disponibles en el mercado.
              Por otro lado, se dispone de un proceso de gestión de calidad, donde se controla y/o verifica: la calidad del bien o
              producto, tiempos de entrega, fiabilidad del proveedor, flexibilidad de pago, garantías, certificaciones origen, etc.
              con el principal objetivo de respaldar la inversión del cliente final.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {suministros.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
        <section id='mantenimiento' className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl"><span className='text-global-main-color'>Operación </span>y Mantenimiento</h2>
            <p className="mt-4 text-gray-500">
              GES S.A. de C.V. ofrece Servicios de Mantenimiento para todas sus áreas de negocios.
              Este servicio esta disponible bajo un esquema 24/7 los 365 días del año.
              <br />
              Nuestras áreas de cobertura son:
            </p>
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {mantenimiento.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </section>
        <section id='mediciones' className="flex flex-wrap-reverse mx-auto lg:grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8 ">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-global-main-color sm:text-4xl">Mediciones</h2>
            <p className="mt-4 text-gray-500">
              Realizamos mediciones de variables eléctricas con equipo certificado de primera categoría. 
              Todas las mediciones son realizadas bajo estándares internacionales. 
              Algunos de los servicios que ofrecemos son los siguientes:
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {mediciones.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
        <section datatype='section' id='construccion' className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Construcción</h2>
            <p className="mt-4 text-gray-500">
              Ofrecemos soluciones flexibles e integrales bajo una amplia modalidad de formas, incluyendo "Llave en Mano", 
              precios unitarios y otros, de acuerdo a la preferencia del cliente. Experiencia que se comparte con nuestros 
              clientes a través de la ingeniería de valor. Siendo nuestra fortaleza el área electromecánica, 
              cuando el proyecto lo demanda incorporamos a nuestro equipo, empresas y/o profesionales especialistas de reconocido 
              prestigio y honestidad y responsabilidad por la seguridad, calidad, costos y tiempo de entrega.
            </p>
            {/* <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {ingenieria.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl> */}
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </section>
      </div>
      <Footer/>
    </div>

  )
}
