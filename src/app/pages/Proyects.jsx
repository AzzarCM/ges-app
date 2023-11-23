import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserClock, faIdBadge, faHandHoldingDollar, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import './css/custom_home.css'
import { TestimonialCard } from '../components/TestimonialCard'
import { ProyectCarousel } from '../components/ProyectCarousel'
import { Footer } from '../components/Footer'
import HoverCarousel from 'hover-carousel';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import comap1 from '../assets/img/websupervisor.png'
import linea1 from '../assets/img/linea1.png'
import capacitor1 from '../assets/img/capacitor.png'
import capacitor2 from '../assets/img/capacitor2.png'
import alimentadores1 from '../assets/img/alimentadores1.png'

const links = [
  { name: 'Mantenimiento', href: '#' },
  { name: 'Automatización', href: '#' },
  { name: 'Instalaciones', href: '#' },
  { name: 'Ingeniería', href: '#' },
]
const stats = [
  { name: 'Precios accessibles', value: faHandHoldingDollar },
  { name: 'Autorizados y calificados', value: faIdBadge },
  { name: 'Tiempo de ejecuciones garatizadas', value: faUserClock },
  { name: 'Estimaciones detalladas', value: faPenToSquare },
]


const carousel1 = [
  {img: comap1, text: 'Interfaz ComAp'},
  {img: comap1, text: 'Interfaz ComAp'},
  {img: comap1, text: 'Interfaz ComAp'},
  {img: comap1, text: 'Interfaz ComAp'},
]

const carousel2 = [
  {img: linea1, text: 'Revision de linea'},
  {img: linea1, text: 'Revision de linea'},
  {img: linea1, text: 'Revision de linea'},
  {img: linea1, text: 'Revision de linea'},
]

const carousel3 = [
  {img: capacitor1, text: 'Banco de capacitores'},
  {img: capacitor2, text: 'Poste electrico'},
  {img: capacitor1, text: 'Banco de capacitores'},
  {img: capacitor2, text: 'Poste electrico'},
]

const carousel4 = [
  {img: alimentadores1, text: 'Diseño eléctrico'},
  {img: alimentadores1, text: 'Diseño eléctrico'},
  {img: alimentadores1, text: 'Diseño eléctrico'},
  {img: alimentadores1, text: 'Diseño eléctrico'},
]

const imgCar3 = [capacitor1, capacitor2, capacitor1, capacitor2, capacitor1]

const imgGallery2 = [
  {original: linea1, thumbnail: linea1},
  {original: linea1, thumbnail: linea1},
  {original: linea1, thumbnail: linea1},
  {original: linea1, thumbnail: linea1},
]

export const Proyects = () => {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 full-screen-banner-height">
        <img
          src="https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Casos de Éxito!</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Estableciendo estándares en servicios eléctricos comerciales e industriales
              a través de nuestras soluciones profesionales y confiables
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white"><FontAwesomeIcon icon={stat.value} /></dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <TestimonialCard />
      <section className='mt-10 mb-10 flex flex-col mx-auto max-w-7xl pl-3 pr-3'>
        <div className='flex flex-col text-center'>
          <h2 className='text-xl font-bold mb-10'>Monitoreo de Sistemas Eléctricos del Hospital más importante de El Salvador</h2>
          <p className='text-gray-600'>
          Uno de los proyectos más emblemáticos de nuestra compañía, ha sido la automatización de los sistemas primarios y de respaldo de uno de los hospitales 
          más importantes de El Salvador. El proyecto consistió en el suministro, instalación y puesta en marcha del monitoreo de las instalaciones eléctricas.
          <br/>
          <br/>
          Todo esto fue posible gracias a tecnología de Single Gen-set Controllers de ComAp, que nuestro personal altamente calificado utilizó para reemplazar 
          los controles de cada uno de los generadores eléctricos, para darle la capacidad de comunicarse a través de internet y GSM.
          </p>
        </div>
        <ProyectCarousel data={carousel1} dir='rtl'/>
      </section>

      <section className='mt-10 mb-10 flex flex-col mx-auto max-w-7xl items-center pl-3 pr-3'>
        <div className='flex flex-col text-center'>
          <h2 className='text-xl font-bold mb-10'>Repotenciación de Línea Primaria y Subestaciones en Morazán, El Salvador</h2>
          <p className='text-gray-600'>
          Como parte de nuestro amplio portafolio, una de nuestras especialidades es en los trabajos de media tensión. 
          Este proyecto emblema se llevó acabo en con el objetivo de suministrar energía eléctrica al sistema de bombeo del cliente. 
          Todo el diseño, suministro, instalación y puesta en marcha fue realizado por nuestros técnicos e ingenieros de proyectos de primera línea.
          <br/>
          <br/>
          Las instalaciones fueron diseñadas y construidas acorde a las regulaciones nacionales e internacionales vigentes. 
          El alcance fue construir una línea en media tensión de 1.2km, cinco subestaciones en configuración delta abierta compuesta de 2x37.5kVA cada una, 
          sistema de baja tensión y control de bombas en cada una de las subestaciones.
          </p>
        </div>
        {/* <ProyectCarousel data={carousel2} dir='ltr'/> */}
        <div className='mt-10 max-w-3xl'>
          <ImageGallery showFullscreenButton={false} showPlayButton={false} items={imgGallery2}/>
        </div>
      </section>

      <section className='mt-10 mb-10 flex flex-col mx-auto max-w-7xl pl-3 pr-3'>
        <div className='flex flex-col text-center'>
          <h2 className='text-xl font-bold mb-10'>Instalación de Subestación y Banco de Capacitores en La Paz, El Salvador</h2>
          <p className='text-gray-600'>
          El objetivo de este proyecto era suministrar energía a una bodega de un recinto fiscal, además de corregir el factor de potencia 
          por medio de un banco de capacitores e instalar extractores de aire para bajar las temperaturas internas.
          <br/>
          <br/>
          En esta bodega se almacenan medicamentos que deben estar en refrigeración, por lo que fue necesario realizar la 
          ingeniería para el dimensionamiento de la subestación, conductores y protecciones necesarias.
          </p>
        </div>
        {/* <ProyectCarousel data={carousel3} dir='rtl'/> */}
        <div className='pt-10'>
          <HoverCarousel images={imgCar3} />
        </div>
      </section>

      <section className='mt-10 mb-10 flex flex-col mx-auto max-w-7xl pl-3 pr-3'>
        <div className='flex flex-col text-center'>
          <h2 className='text-xl font-bold mb-10'>Ingeniería de Detalle para alimentadores de cuartos fríos en Aeropuerto San Pedro Sula, Honduras</h2>
          <p className='text-gray-600'>
          Uno de los rubros de gran importancia y crecimiento de nuestra compañía son los diseños de ingeniería. 
          En este proyecto se nos encomendó realizar la ingeniería de detalle para los alimentadores de recamaras 
          refrigerantes en el Aeropuerto de San Pedro Sula.

          <br/>
          <br/>
          Se presentaron memorias de cálculo eléctrico, cuadros de carga, diagramas unifilares y detalles constructivos 
          de cada una de las partes eléctricas involucradas. Esta necesidad del cliente nace luego de que nuestra compañía 
          fue la encargada de realizar un montaje similar en Aeropuerto Monseñor Romero en El Salvador.
          </p>
        </div>
        <ProyectCarousel data={carousel4} dir='ltr'/>
      </section>
      
      <Footer/>
    </div>
  )
}
