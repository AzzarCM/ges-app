import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faEye } from '@fortawesome/free-solid-svg-icons'

const MISSION =
  'Brindar soluciones integrales de energía eléctrica que garanticen la continuidad operativa de la industria, la eficiencia del comercio y el bienestar de los hogares'

const VISION =
  'Ser el referente líder en soluciones de disponibilidad eléctrica a nivel nacional, distinguiéndonos por nuestra capacidad de respuesta inmediata y la implementación de sistemas energéticos sostenibles'

export const MissionVision = () => {
  return (
    <section className="bg-gray-50 px-6 py-16 sm:py-24 lg:px-8" aria-labelledby="mission-vision-heading">
      <div className="mx-auto max-w-7xl">
        <h2 id="mission-vision-heading" className="text-center text-base font-bold leading-7 text-global-main-color">
          Propósito
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Misión y visión
        </p>
        <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-12">
          <article className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm ring-1 ring-gray-900/5">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-global-main-color/10 text-global-main-color">
                <FontAwesomeIcon icon={faBullseye} className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold text-gray-900">Misión</h3>
            </div>
            <p className="mt-6 text-base leading-7 text-gray-700">{MISSION}</p>
          </article>
          <article className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm ring-1 ring-gray-900/5">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-global-main-color/10 text-global-main-color">
                <FontAwesomeIcon icon={faEye} className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold text-gray-900">Visión</h3>
            </div>
            <p className="mt-6 text-base leading-7 text-gray-700">{VISION}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
