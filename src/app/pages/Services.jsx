import './css/custom_home.css'
import { Footer } from '../components/Footer'
import ingenieria1 from '../assets/img/ing1.jpg'
import ingenieria2 from '../assets/img/ing2.jpeg'
import ingenieria3 from '../assets/img/ing3.png'
import ingenieria4 from '../assets/img/ing4.jpeg'
import suministroGeneradores from '../assets/img/planta_1.jpg'
import suministroControladores from '../assets/img/websupervisor.png'
import suministroIluminacion from '../assets/img/poste_1.jpg'
import suministroMaterial from '../assets/img/tablero_1.jpg'
import mantenimiento1 from '../assets/img/mantenimiento1.jpeg'
import mantenimiento2 from '../assets/img/mantenimiento2.jpeg'
import mantenimiento3 from '../assets/img/mantenimiento3.jpeg'
import mediciones1 from '../assets/img/medidor_1.jpg'
import mediciones2 from '../assets/img/flir_1.jpg'
import mediciones3 from '../assets/img/medicion3.png'
import constru1 from '../assets/img/constru1.jpeg'
import constru2 from '../assets/img/constru2.jpeg'
import constru3 from '../assets/img/constru3.jpeg'
import constru4 from '../assets/img/constru4.png'

const ingenieria = [
  { name: 'Ingeniería', description: 'Aplicación de los conocimientos a la solución de los problemas y retos que enfrentan en las diferentes áreas.' },
  { name: 'Diseño', description: 'Creación de un plano convención para la construcción de un objeto o un sistema' },
  { name: 'Sistemas eléctricos en baja, media y alta tensión', description: 'La tensión es la diferencia de potencial eléctrico entre dos puntos' },
  { name: 'Automatización y Control', description: 'Puedes automatizar los procesos de disponibilidad eléctrica' },
]

const suministros = [
  { name: 'Generadores', description: 'Dispositivos o máquinas capaces de producir energía de manera propia.' },
  { name: 'Controladores', description: 'Herramientas de monitoreo y control en línea para dispositivos y accesorios' },
  { name: 'Iluminación', description: 'Luminarias, accesorios y soluciones de alumbrado para espacios industriales, comerciales y exteriores, con eficiencia energética y normativa vigente.' },
  { name: 'Material eléctrico', description: 'Tableros, protecciones, conductores y material eléctrico certificado para completar su instalación con calidad y trazabilidad.' },
]

const mantenimiento = [
  { name: 'Mantenimiento Preventivo', description: 'Revisiones y actividades programadas para reducir fallas, alargar la vida útil del equipo y mantener condiciones seguras de operación.' },
  { name: 'Mantenimiento Predictivo', description: 'Monitoreo de tendencias y mediciones (térmicas, eléctricas, vibración) para anticipar averías y planar intervenciones sin paradas innecesarias.' },
  { name: 'Mantenimiento Correctivo', description: 'Diagnóstico y reparación de fallas ya presentes, con restablecimiento de la operación y medidas para evitar recurrencia.' },
]

const mediciones = [
  { name: 'Analizar comportamientos de red', description: 'Registro y evaluación de parámetros de la red eléctrica para detectar desbalances, armónicos o condiciones anómalas.' },
  { name: 'Mediciones de transformadores', description: 'Ensayos eléctricos y de aislamiento en transformadores para verificar estado, relación de transformación y pérdidas.' },
  { name: 'Termografías', description: 'Inspección infrarroja de equipos y conexiones para localizar puntos calientes y riesgos térmicos sin contacto.' },
  { name: 'Aislamiento de conductores', description: 'Medición de resistencia de aislamiento en cables y bobinados para validar integridad dieléctrica.' },
  { name: 'Mediciones de red de polarización', description: 'Verificación de la red de tierra y polarización para cumplir criterios de seguridad y continuidad de conductores de protección.' },
  { name: 'Medición de banco de baterías', description: 'Pruebas de voltaje, resistencia interna o descarga controlada para asegurar respaldo de energía en sistemas críticos.' },
  { name: 'Resistencia de contactos', description: 'Medición de la resistencia en contactos de interruptores, seccionadores y empalmes para detectar degradación o sobrecalentamiento.' },
  { name: 'Mediciones de temperatura y humedad', description: 'Registro ambiental en salas eléctricas, baterías o equipos sensibles para correlacionar condiciones con el desempeño.' },
  { name: 'Medición de Aislamiento', description: 'Ensayo con megóhmetro u otro equipo homologado para cuantificar la resistencia de aislamiento de instalaciones y equipos.' },
  { name: 'Calidad y utilización eficiente de la energía', description: 'Estudios de factor de potencia, armónicos y perfiles de carga para mejorar la eficiencia y el cumplimiento normativo.' },
]

const construccion = [
  { name: 'Llave en mano y otras modalidades', description: 'Ejecución integral o por partidas según el proyecto: contratos llave en mano, precios unitarios y esquemas a la medida del cliente.' },
  { name: 'Ingeniería de valor', description: 'Propuestas constructivas y optimización de soluciones para alinear alcance técnico, presupuesto y plazos sin sacrificar seguridad ni normativa.' },
  { name: 'Fortaleza electromecánica', description: 'Enfoque principal en obras y montajes eléctricos y mecánicos asociados, con criterios de diseño, instalación y puesta en servicio coordinados.' },
  { name: 'Red de especialistas aliados', description: 'Cuando el alcance lo exige, integramos empresas y profesionales de otras disciplinas con trayectoria comprobada para cubrir el proyecto de forma conjunta.' },
]

export const Services = () => {
  return (
    <div>
      <div className='backgroundServices w-full full-screen-banner-height flex items-center justify-center'>
        <div className='flex flex-col items-center rounded-md bg-gradient-to-r from-custom-black-gray from-25% xl:p-20'>
          <h1 className='text-white text-6xl xl:text-8xl font-bold text-center mb-10'>Nuestros <span className='text-global-main-color'>Servicios</span></h1>
          <p className='text-white text-3xl max-w-2xl mb-10 font-thin text-center'>Creando asociaciones a
            largo plazo con nuestros servicios <span className='text-global-main-color font-bold'>eléctricos</span> de alta
            calidad para necesidades residenciales y comerciales.</p>
          {/* <p className='text-white text-2xl max-w-3xl p-2 text-center'>Profesionales experimentados ofreciendo instalaciones eléctricas, reparaciones, y servicios de mantenimiento en propiedades comerciales y privadas.</p> */}
        </div>
      </div>
      <div className="bg-white">
        <section id='ingenieria' className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
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
              src={ingenieria1}
              alt="Ingenieria y Diseño"
              className="rounded-lg bg-gray-100 w-full h-full object-cover"
            />
            <img
              src={ingenieria2}
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100 w-full h-full object-cover"
            />
            <img
              src={ingenieria3}
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100 w-full h-full object-cover"
            />
            <img
              src={ingenieria4}
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100 w-full h-full object-cover"
            />
          </div>
        </section>
        <section id='suministros' className="flex flex-wrap-reverse mx-auto lg:grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8 ">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src={suministroGeneradores}
              alt="Instalación y equipos asociados a generación y respaldo de energía"
              className="rounded-lg bg-gray-100 w-full h-full object-cover"
            />
            <img
              src={suministroControladores}
              alt="Sistemas de monitoreo y control para equipos eléctricos"
              className="rounded-lg bg-gray-100 w-full h-full object-cover"
            />
            <img
              src={suministroIluminacion}
              alt="Infraestructura eléctrica e iluminación en instalaciones"
              className="rounded-lg bg-gray-100 w-full h-full object-cover"
            />
            <img
              src={suministroMaterial}
              alt="Tableros y material eléctrico para instalaciones"
              className="rounded-lg bg-gray-100 w-full h-full object-cover"
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
              src="https://cuervaenergia.com/static/ed402570faa685476e42b6ae0b7a6c87/c0a1e/mantenimiento-electrico-industrial.webp"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100 w-full h-full object-cover"
            />
            <img
              src={mantenimiento1}
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100 w-full h-full object-cover"
            />
            <img
              src={mantenimiento2}
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100 w-full h-full object-cover"
            />
            <img
              src={mantenimiento3}
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100 w-full h-full object-cover"
            />
          </div>
        </section>
        <section id='mediciones' className="flex flex-wrap-reverse mx-auto lg:grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8 ">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src={mediciones1}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100 w-full h-full object-cover"
            />
            <img
              src={mediciones2}
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100 w-full h-full object-cover"
            />
            <img
              src={mediciones3}
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100 w-full h-full object-cover"
            />
            <img
              src="https://www.comercializadorainvertek.cl/wp-content/uploads/2024/07/Medicion-de-Aislacion-1.jpeg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100 w-full h-full object-cover"
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
        <section id='construccion' className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Construcción</h2>
            <p className="mt-4 text-gray-500">
              Ofrecemos soluciones flexibles e integrales bajo una amplia modalidad de formas, incluyendo &quot;Llave en Mano&quot;, 
              precios unitarios y otros, de acuerdo a la preferencia del cliente. Experiencia que se comparte con nuestros 
              clientes a través de la ingeniería de valor. Siendo nuestra fortaleza el área electromecánica, 
              cuando el proyecto lo demanda incorporamos a nuestro equipo, empresas y/o profesionales especialistas de reconocido 
              prestigio y honestidad y responsabilidad por la seguridad, calidad, costos y tiempo de entrega.
            </p>
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {construccion.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src={constru1}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100 w-full h-full object-cover"
            />
            <img
              src={constru2}
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100 w-full h-full object-cover"
            />
            <img
              src={constru3}
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100 w-full h-full object-cover"
            />
            <img
              src={constru4}
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100 w-full h-full object-cover"
            />
          </div>
        </section>
      </div>
      <Footer/>
    </div>

  )
}
