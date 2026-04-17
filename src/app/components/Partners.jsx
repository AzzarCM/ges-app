import asamblea from '../assets/img/partners/asamblea2.png'
import cuscatlan from '../assets/img/partners/cuscatlan.svg'
import hospitalElSalvador from '../assets/img/partners/hospital_el_salvador.png'
import insigne from '../assets/img/partners/insigne.jpg'
import kinetica from '../assets/img/partners/kinetica.jpg'
import lido from '../assets/img/partners/lido.jpg'
import mopt from '../assets/img/partners/mopt2.png'
import plazaMerliot from '../assets/img/partners/plaza-merliot.png'
import unicomer from '../assets/img/partners/unicomer2.jpg'

const partners = [
  { name: 'Asamblea Legislativa', src: asamblea },
  { name: 'Banco Cuscatlán', src: cuscatlan },
  { name: 'Hospital El Salvador', src: hospitalElSalvador },
  { name: 'Insigne', src: insigne },
  { name: 'Kinética', src: kinetica },
  { name: 'Lido', src: lido },
  { name: 'Ministerio de Obras Públicas', src: mopt },
  { name: 'Plaza Merliot', src: plazaMerliot },
  { name: 'Unicomer', src: unicomer },
]

export const Partners = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24" aria-labelledby="partners-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 id="partners-heading" className="text-center text-4xl font-semibold leading-7 text-global-main-color">
          Confianza
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Aliados que confían en nosotros
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg font-thin text-gray-600">
          Instituciones y empresas líderes que han elegido nuestros servicios eléctricos.
        </p>
      </div>
      <div className="relative mt-12 w-full overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-gray-50 to-transparent sm:w-20"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-gray-50 to-transparent sm:w-20"
          aria-hidden="true"
        />
        <div
          className="flex w-max motion-reduce:animate-none animate-partners-marquee hover:[animation-play-state:paused]"
          role="presentation"
        >
          <ul className="flex shrink-0 list-none items-center gap-x-14 sm:gap-x-20">
            {partners.map(({ name, src }) => (
              <li key={name} className="flex shrink-0 items-center justify-center">
                <img
                  src={src}
                  alt={`Logo ${name}`}
                  className="max-h-12 w-[140px] object-contain opacity-90 sm:max-h-14 sm:w-[160px]"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </li>
            ))}
          </ul>
          <ul className="flex shrink-0 list-none items-center gap-x-14 sm:gap-x-20" aria-hidden="true">
            {partners.map(({ name, src }) => (
              <li key={`dup-${name}`} className="flex shrink-0 items-center justify-center">
                <img
                  src={src}
                  alt=""
                  className="max-h-12 w-[140px] object-contain opacity-90 sm:max-h-14 sm:w-[160px]"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
