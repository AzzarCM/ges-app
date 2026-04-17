import './css/custom_home.css'
import { TestimonialCard } from '../components/TestimonialCard'
import { Footer } from '../components/Footer'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

import comap1 from '../assets/img/websupervisor.png'
import linea1 from '../assets/img/linea1.png'
import capacitor1 from '../assets/img/capacitor.png'
import capacitor2 from '../assets/img/capacitor2.png'
import alimentadores1 from '../assets/img/alimentadores1.png'

const projects = [
  {
    id: 'hospital',
    title: 'Monitoreo de sistemas eléctricos — hospital principal de El Salvador',
    paragraphs: [
      'Uno de los proyectos más emblemáticos de nuestra compañía ha sido la automatización de los sistemas primarios y de respaldo de uno de los hospitales más importantes de El Salvador: suministro, instalación y puesta en marcha del monitoreo de las instalaciones eléctricas.',
      'Se utilizó tecnología Single Gen-set Controllers de ComAp para sustituir los controles de los generadores y habilitar comunicación por internet y GSM.',
    ],
    images: [
      { src: comap1, alt: 'Interfaz ComAp' },
      { src: comap1, alt: 'Interfaz ComAp' },
      { src: comap1, alt: 'Interfaz ComAp' },
      { src: comap1, alt: 'Interfaz ComAp' },
    ],
  },
  {
    id: 'morazan',
    title: 'Repotenciación de línea primaria y subestaciones — Morazán, El Salvador',
    paragraphs: [
      'Especialistas en trabajos de media tensión: suministro de energía al sistema de bombeo del cliente. Diseño, suministro, instalación y puesta en marcha a cargo de nuestro equipo técnico e ingeniería.',
      'Instalaciones según normativa nacional e internacional: línea en media tensión de 1,2 km, cinco subestaciones en delta abierta (2×37,5 kVA cada una), baja tensión y control de bombas por subestación.',
    ],
    images: [
      { src: linea1, alt: 'Línea primaria' },
      { src: linea1, alt: 'Línea primaria' },
      { src: linea1, alt: 'Línea primaria' },
      { src: linea1, alt: 'Línea primaria' },
    ],
  },
  {
    id: 'lapaz',
    title: 'Subestación y banco de capacitores — La Paz, El Salvador',
    paragraphs: [
      'Suministro de energía a bodega en recinto fiscal, corrección del factor de potencia con banco de capacitores e instalación de extractores para control térmico.',
      'Ingeniería para dimensionar subestación, conductores y protecciones; la bodega almacena medicamentos que requieren refrigeración.',
    ],
    images: [
      { src: capacitor1, alt: 'Subestación y capacitores' },
      { src: capacitor2, alt: 'Instalación' },
      { src: capacitor1, alt: 'Subestación y capacitores' },
      { src: capacitor2, alt: 'Instalación' },
    ],
  },
  {
    id: 'honduras',
    title: 'Ingeniería de detalle — alimentadores de cuartos fríos, Aeropuerto San Pedro Sula, Honduras',
    paragraphs: [
      'Ingeniería de detalle para alimentadores de cámaras refrigerantes en el aeropuerto de San Pedro Sula.',
      'Se entregaron memorias de cálculo, cuadros de carga, diagramas unifilares y detalles constructivos. El cliente ya nos había encargado un montaje similar en el Aeropuerto Monseñor Romero, El Salvador.',
    ],
    images: [
      { src: alimentadores1, alt: 'Diseño eléctrico' },
      { src: alimentadores1, alt: 'Diseño eléctrico' },
      { src: alimentadores1, alt: 'Diseño eléctrico' },
      { src: alimentadores1, alt: 'Diseño eléctrico' },
    ],
  },
]

function ProjectCarousel({ images, className }) {
  return (
    <Carousel
      className={cn('w-full', className)}
      opts={{ align: 'start', loop: true }}
    >
      <CarouselContent className="-ml-0">
        {images.map(({ src, alt }, i) => (
          <CarouselItem key={`${alt}-${i}`} className="pl-0 basis-full">
            <div className="overflow-hidden rounded-xl border border-border/60 bg-muted/30 aspect-[4/3]">
              <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        variant="outline"
        className="left-2 border-border/80 bg-background/90 shadow-sm"
      />
      <CarouselNext
        variant="outline"
        className="right-2 border-border/80 bg-background/90 shadow-sm"
      />
    </Carousel>
  )
}

function ProjectSection({ title, paragraphs, images, reverse }) {
  return (
    <section
      className={cn(
        'border-b border-border/40 last:border-b-0',
        'py-16 sm:py-20 lg:py-24'
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div
            className={cn(
              'space-y-5',
              reverse ? 'lg:order-2' : 'lg:order-1'
            )}
          >
            <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {title}
            </h2>
            <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className={reverse ? 'lg:order-1' : 'lg:order-2'}>
            <ProjectCarousel images={images} />
          </div>
        </div>
      </div>
    </section>
  )
}

export const Proyects = () => {
  return (
    <div className="bg-background text-foreground">
      <header className="relative isolate overflow-hidden border-b border-border/40">
        <img
          src="https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Portafolio
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Casos de éxito
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Estándares en servicios eléctricos comerciales e industriales con
            soluciones profesionales y confiables.
          </p>
        </div>
      </header>

      <TestimonialCard />

      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
        <p className="border-b border-border/40 pb-6 text-sm text-muted-foreground">
          Proyectos recientes
        </p>
      </div>

      {projects.map((project, index) => (
        <ProjectSection
          key={project.id}
          title={project.title}
          paragraphs={project.paragraphs}
          images={project.images}
          reverse={index % 2 === 1}
        />
      ))}

      <Footer />
    </div>
  )
}
