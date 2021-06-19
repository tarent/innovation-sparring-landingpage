import Head from 'next/head'
import { Fragment } from 'react'
import { Popover } from '@headlessui/react'

import Image from 'next/image'
import Logo from '../static/imgs/tarent-logo.png';
import InnovativeAppComponents from '../static/imgs/innovative-app-components.png';
import TorstenHamperImg from '../static/imgs/torsten-hamper.png';
import AssessmentIcon from '../static/imgs/assessment.png'
import FocusIcon from '../static/imgs/focus.png'
import ValidationIcon from '../static/imgs/validation.png'

import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Bewerten',
    description:
      'Wir challengen deine Idee und machen sie wasserdicht. So wird sie zu einem Konzept, das Stakeholder überzeugt.',
    icon: AssessmentIcon,
  },
  {
    name: 'Fokussieren',
    description:
      'Indem wir Dir helfen, Dich auf das wesentlichste Wertversprechen deiner Idee zu konzentrieren, verschlanken wir deine erste Version. Das bedeutet weniger Budget und eine schnellere Time To Market.',
    icon: FocusIcon,
  },
  {
    name: 'Validieren',
    description:
      'Hinter jedem Produkt und Geschäftsmodell stehen Annahmen, die in frühen Phasen validiert werden müssen. Wir helfen Dir, diese Annahmen klar herauszuarbeiten und erarbeiten einen Plan zur Überprüfung.',
    icon: ValidationIcon,
  },
];

const people = [
  {
    name: 'Frederik Vosberg',
    role: 'Consultant für Lean Innovation',
    imageUrl: '/static/imgs/frederik-vosberg-portrait.jpg',
    bio: 'Mein Ziel ist es, Geschäftsmodelle im Anfang so sehr zu spitzen, dass sie schnell validierbar sind mit Produkten, die so attraktiv sind, dass sie sich selbst verkaufen.',
  },
  {
    name: 'Timothy Krechel',
    role: 'MVP-Consultant',
    imageUrl: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Ich versetze Innovator*innen in die Lage, sich auf die wertschöpfendsten Aspekte ihrer Ideen zu fokussieren und sie schnellstmöglich am Markt zu verproben.',
  },
  // More people...
]

const footerNavigation = {
  main: [
    { name: 'Impressum', href: 'https://www.tarent.de/impressum' },
    { name: 'Datenschutz', href: 'https://www.tarent.de/datenschutz' },
  ],
};

export default function Home() {
  return (
    <div>
      <div className="relative bg-gray-50">
        <Head>
          <title>Innovation Sparring | tarent</title>
          <link rel="icon" sizes="32x32" href="/static/imgs/tarent-thumb-32x32.png" />
        </Head>
        <Popover className="relative bg-white shadow">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                  <div className="flex justify-start lg:w-0 lg:flex-1">
                    <a href="#">
                      <span className="sr-only">tarent</span>
                      <Image
                        className="h-8 w-auto sm:h-10"
                        src={Logo}
                        alt="tarent Logo"
                      />
                    </a>
                    <h2 className="text-2xl leading-7 text-gray-900 sm:text-3xl sm:truncate ml-3">Innovation Sparring</h2>
                  </div>
                </div>
              </div>
            </>
          )}
        </Popover>

        <main className="lg:relative">
          <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">Dein Produkt</span>{' '}
                <span className="block text-tarent-red xl:inline">erfolgreich am Markt.</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
  Wochenlange Beratung wird schnell teuer. Deswegen helfen wir Dir in nur 3 kurzen Sessions, deine internen Ressourcen viel effizienter zu nutzen - indem wir deine Innovation bewerten, ihren Fokus schärfen und dir helfen die riskantesten Annahmen zu validieren.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-tarent-red hover:bg-tarent-red-700 md:py-4 md:text-lg md:px-10"
                  >
                    Vereinbare Dein Sparring
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden h-64 sm:h-72 md:h-96 lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <Image
              className="object-contain relative bottom-0 right-0"
              src={InnovativeAppComponents}
              alt="Componentes of an innovative Idea"
            />
          </div>
        </main>
      </div>

      <div className="py-12 bg-tarent-red text-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl mb-12">In 3 Sessions zum erfolgreichen Produkt</h2>
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md">
                    <Image src={feature.icon} className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <blockquote className="mt-10">
              <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                <p>
                  &ldquo;tarent begleitet uns von Beginn an auf dem Weg, der beste Cross Channel DIY-Händler Deutschlands zu werden.&rdquo;
                </p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <Image
                      className="mx-auto h-10 w-10 rounded-full"
                      src={TorstenHamperImg}
                      alt="Torsten Hamper Portrait"
                      width="40"
                      height="40"
                    />
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-medium text-gray-900">Torsten Hamper</div>

                    <svg className="hidden md:block mx-1 h-5 w-5 text-tarent-red" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>

                    <div className="text-base font-medium text-gray-500">CTO Cross Channel, toom</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Wir beschleunigen Ideen</h2>

            <ul className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                    <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                      <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3>{person.name}</h3>
                          <p className="text-tarent-red">{person.role}</p>
                        </div>
                        <div className="text-lg">
                          <p className="text-gray-500">{person.bio}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-tarent-red text-white">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            <span className="block">Buche Deine 3 Sparring Sessions</span>
            <span className="block">für 999,-€.</span>
          </h2>
          <p className="mt-4 text-lg leading-6">
            Ganz ohne Risiko! Nach der ersten Session kannst du entscheiden, ob es weiter geht. Falls nicht, musst Du auch nichts zahlen.
          </p>
          <a
            href="#"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md bg-white hover:bg-indigo-50 sm:w-auto text-tarent-black"
          >
            Erzähle uns von Deiner Idee!
          </a>
        </div>
      </div>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            {footerNavigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">&copy; 2021 tarent solutions GmbH. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
