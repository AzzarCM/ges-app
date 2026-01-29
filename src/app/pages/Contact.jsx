import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faClockFour } from '@fortawesome/free-solid-svg-icons'
import { ContactForm } from '../components/ContactForm'
import { Footer } from '../components/Footer'

export const Contact = () => {
  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-global-main-color">Global Electric Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ¡Póngase en contacto con nuestros técnicos <span className='text-global-main-color'>expertos</span> ahora!
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              ¿Busca instalaciones o reparaciones eléctricas generales o busca un servicio eléctrico profesional?
              Los expertos de confianza de GES pueden ayudarle.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-global-main-color">
                    <FontAwesomeIcon icon={faLocationDot} className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Direccion
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Final Calle San Salvador Poniente lote #3
                  Colonia Quezaltepec, Santa Tecla</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-global-main-color">
                    <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  LLamanos
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  <a href="https://wa.me/50372973572" target="_blank" rel="noreferrer" className="text-global-main-color hover:text-global-main-color-dark">+503 7297-3572</a> <br />
                  <a href="https://wa.me/50376754943" target="_blank" rel="noreferrer" className="text-global-main-color hover:text-global-main-color-dark">+503 7675-4943</a> <br />
                  <a href="https://wa.me/50376765329" target="_blank" rel="noreferrer" className="text-global-main-color hover:text-global-main-color-dark">+503 7676-5329</a>
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-global-main-color">
                    <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Envia Correo
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  gerencia@globalelectricsv.com <br />
                  ventas@globalelectricsv.com<br />
                  proyectos@globalelectricsv.com<br />
                  admon@globalelectricsv.com
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-global-main-color">
                    <FontAwesomeIcon icon={faClockFour} className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Horas
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Nos econtramos disponibles 24/7</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <ContactForm/>
      <Footer/>
    </div>
  )
}
