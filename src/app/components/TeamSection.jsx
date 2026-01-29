import cristian from '../assets/img/cristian.png'
import julian from '../assets/img/julian.png'
import henry from '../assets/img/henry.png'
import elisa from '../assets/img/elisa.png'

const people = [
  {
    name: 'Cristian Mundo',
    role: 'Gerencia General',
    imageUrl:
      cristian,
  },
  {
    name: 'Julián Montoya',
    role: 'Proyectos',
    imageUrl:
      julian,
  },
  {
    name: 'Henry Aguilar',
    role: 'Soluciones O&M',
    imageUrl:
      henry,
  },
  {
    name: 'Elizabeth de Lemus',
    role: 'Contabilidad y Administración',
    imageUrl:
      elisa,
  },
  // More people...
]

export const TeamSection = () => {
  return (
    <section id='team' className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestro equipo</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Somos un grupo dinámico de personas apasionadas por lo que hacemos y dedicadas a brindar
            los mejores resultados para nuestros clientes.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-20 w-20 rounded-full" src={person.imageUrl} alt="photo-team" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-global-main-color">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
