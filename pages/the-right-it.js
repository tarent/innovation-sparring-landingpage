import Head from 'next/head';
import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/solid';

import Header from '../components/the-right-it/header';
import CTA from '../components/the-right-it/cta';
import SuccessStories from '../components/the-right-it/success-stories';
import Footer from '../components/footer';

import step1 from '../public/imgs/step-1.png';
import step2 from '../public/imgs/step-2.png';
import step3 from '../public/imgs/step-3.png';
import step4 from '../public/imgs/step-3.png';
import vorgehen from '../public/imgs/vorgehen.png';

import stabilo from '../public/imgs/stabilo-white.svg';
import smive from '../public/imgs/smive-white.svg';
import itenos from '../public/imgs/itenos-white.svg';

export default function TheRightIt() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Build The Right It | tarent Innovation Consulting</title>
        <link rel="icon" sizes="32x32" href="/imgs/tarent-thumb-32x32.png" />
      </Head>
      <main>
        <Header />
        <Hero />
        <Brands />
        <Solution />
        <Process />
        <CTA />
        <SuccessStories />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section id="hero">
      <div className="relative bg-tarent-red h-screen-9/10 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="relative">
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block text-white">Zahlende Nutzer</span>
                <span className="block text-red-200">Von Tag 1 an.</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-red-200 sm:max-w-3xl">
                Deine Idee verdient es, erfolgreich zu sein.
                <br /> Lass&apos; uns den Weg in Rekordzeit gehen.
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
                <a
                  href="https://meetings.hubspot.com/frederik-vosberg/innovation-sparring"
                  target="_blank"
                  rel="noreferrer"
                  id="hero-cta"
                  className="mb-2 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-red-700 bg-white hover:bg-red-50 sm:px-8"
                >
                  Jetzt Termin ausmachen
                </a>
                <a
                  href="#solution"
                  className="mb-2 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-50 sm:px-8"
                >
                  So geht&apos;s
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Brands() {
  return (
    <section id="brands" className="bg-red-600">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-red-700 tracking-wide">
          Ausgewählte Referenzen
        </p>
        <div className="mt-6 grid grid-cols-3 gap-8">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="w-40">
              <img src={stabilo.src} />
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="w-40">
              <img src={smive.src} />
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="w-40">
              <img src={itenos.src} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const challenges = [
  {
    title: 'Ideen finden',
    problem: 'Welche Ideen bringen unsere Strategie vorwärts?',
    solution:
      'Inspirierende Workshops fördern die besten Ideen deiner Organisation zutage.',
    imageUrl: step1,
    includedFeatures: [
      'In 2-Tagesworkshops Probleme verstehen, Ideen generieren und Geschäftsmodell festzurren.',
    ],
    buttonTitle: 'Ideen-Sprint',
    href: '/the-right-it/ideen-sprint',
  },
  {
    title: 'Validierung',
    problem:
      'Wir diskutieren seit Monaten über eine Idee und kommen nicht vorwärts.',
    solution:
      'Kleine schnelle Experimente bringen Markt-Feedback innerhalb von Stunden.',
    imageUrl: step2,
    includedFeatures: [
      'Drei Ein-Tages-Workshops für das Aufsetzen von 1-wöchigen Testreihen',
      'Aussagekräftige Daten zu den größten Risiken nach spätestens 3 Wochen',
    ],
    buttonTitle: 'Validation Sprint',
    href: '/the-right-it/validation-sprint',
  },
  {
    title: 'Umsetzung',
    problem: 'Wir brauchen 2 Jahre, um auf den Markt zu kommen.',
    solution:
      'Inkrementell und datengetrieben (weiter-)entwickelte Software bleibt eng an den Marktbedürfnissen.',
    imageUrl: step3,
    includedFeatures: [
      'In zwei 2-Wochen Sprints Dein MVP am Markt',
      'Aussagekräftiges Feedback nach nur 4 Wochen',
      'Unschlagbare Time-to-Market',
    ],
    buttonTitle: 'Build-Sprint',
    href: '/the-right-it/build-sprint',
  },
  {
    title: 'Skalierung',
    problem: 'Wie können wir die Anzahl der Nutzer verzehnfachen?',
    solution:
      'Analysen des Nutzungsverhaltens machen den Weg frei für 10x Growth.',
    imageUrl: step4,
    includedFeatures: [
      '3 Sparring-Sessions in 3 Monaten',
      'Analytics- & Funneloptimierung',
      'A/B-Tests',
    ],
    buttonTitle: '10x-Sprint',
    href: '/the-right-it/10x-sprint',
  },
];

function Solution() {
  return (
    <section className="bg-white" id="solution">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-red-600 tracking-wide uppercase">
            Was ist
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Deine Challenge?
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Monate oder Jahre an Software zu tüfteln, die am Ende niemanden
            interessiert, ist Zeitverschwendung. Deswegen ist dein erfolgreiches
            Produkt unsere Mission.
          </p>
        </div>
        <ul
          role="list"
          className="space-y-4 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:grid-cols-2 lg:gap-8"
        >
          {challenges.map((challenge) => (
            <div
              key={challenge.title}
              className="pt-8 border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
            >
              <div className="p-6 text-center">
                <h2 className="text-4xl leading-6 font-bold text-gray-900">
                  {challenge.title}
                </h2>
                <p className="mt-4 text-base italic text-gray-500">
                  &quot;{challenge.problem}&quot;
                </p>
                <div className="w-full px-8 lg:px-12">
                  <Image
                    className="object-contain w-full"
                    src={challenge.imageUrl}
                    alt={challenge.title}
                  />
                </div>
              </div>
              <div className="px-4 pb-4">
                <div className="text-center">
                  <h3 className="mt-8 text-4xl font-bold">Unsere Lösung</h3>
                  <p className="mt-4 px-20 text-base text-gray-500">
                    {challenge.solution}
                  </p>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <ul role="list" className="mt-6 space-y-4">
                    {challenge.includedFeatures.map((feature) => (
                      <li key={feature} className="flex space-x-3">
                        <CheckIcon
                          className="flex-shrink-0 h-5 w-5 text-green-500"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <a
                    href={challenge.href}
                    className="h-16 flex items-center justify-center mt-8 block w-full bg-tarent-red border border-transparent rounded-md py-2 text-lg font-semibold text-white text-center hover:bg-red-700"
                  >
                    Zum {challenge.buttonTitle}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-white" id="process">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-tarent-red tracking-wide uppercase">
            Vorgehen
          </h2>
          <h1 className="mt-1 text-4xl font-regular text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            <span className="block">
              Du <span className="font-extrabold">glaubst</span> daran,
            </span>
            <span className="block">
              Wir <span className="font-extrabold">beweisen</span> es!
            </span>
          </h1>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Unsere Sprints bauen sinnvoll aufeinander auf. <br />
            Gleichzeitig bringt Dich jedes Zwischenergebnis weiter für maximale
            Flexibilität.
          </p>
          <div className="w-full max-w-3xl mx-auto mt-12">
            <Image src={vorgehen} alt="So gehen wir vor" />
          </div>
        </div>
      </div>
    </section>
  );
}

const people = [
  {
    name: 'Timothy Krechel',
    role: 'MVP-Consultant',
    image: '/imgs/timothy-krechel-portrait.jpg',
    bio: 'Timothy hat als Ex-Startup-Gründer vor allem gelernt, wie wichtig das Hinterfragen der eigenen Idee ist. Deshalb liegt sein Fokus auf dem frühstmöglichen Validieren von Annahmen durch echtes Feedback am Markt mittels leichtgewichtiger Prototypen, die den Kernnutzen einer Idee herausstellen.',
    linkedinUrl: '#',
  },
  {
    name: 'Andrea Lüthje',
    role: 'Innovation Consultant',
    image: '/imgs/andrea-lüthje-portrait.jpg',
    bio: 'Kundenorientierung, Best Practices und erprobte Methoden helfen bei neuen Ideen und Anwendungen in kurzer Zeit einen messbaren Mehrwert zu schaffen.',
    linkedinUrl: '#',
  },
  {
    name: 'Frederik Vosberg',
    role: 'Consultant für Lean Innovation',
    image: '/imgs/frederik-vosberg-portrait.jpg',
    bio: 'Frederiks Ziel ist es, Geschäftsmodelle im Anfang so sehr zu spitzen, dass sie schnell validierbar sind mit Produkten, die so attraktiv sind, dass sie sich selbst verkaufen.',
    linkedinUrl: '#',
  },
  {
    name: 'Corinna Voß',
    role: 'Innovation Consultant & Agile Coach',
    image: '/imgs/corinna-voss-portrait.jpg',
    bio: 'Komplexe Vorhaben spornen Corinna an: Ob es um ambitionierte Ideen für akute Probleme, digitale Transformationen oder den Wandel der Unternehmenskultur geht - sie bringt den richtigen Methodenkoffer mit.',
    linkedinUrl: '#',
  },
  {
    name: 'Josua Waghubinger',
    role: 'Innovation Consultant',
    image: '/imgs/josua-waghubinger-portrait.jpg',
    bio: 'Unsere Welt ist komplex genug. Die richtige Methode und Kommunikation zu kennen, hilft, Ordnung zu schaffen - vor allem bei Innovation.',
    linkedinUrl: '#',
  },
];

function Team() {
  return (
    <section id="team" className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Über Uns
            </h2>
            <p className="text-xl text-gray-500">
              Schnell messbare Ergebnisse zu liefern, Intrapreneurship und
              Innovation zu treiben sowie ressourcenschonend zu Erkenntnissen zu
              kommen, treibt uns an.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
            >
              {people.map((person) => (
                <li key={person.name} className="sm:py-8">
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                      <img
                        className="object-cover shadow-lg rounded-lg"
                        src={person.image}
                        alt={person.name}
                      />
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
                        <ul role="list" className="flex space-x-5">
                          <li>
                            <a
                              href={person.linkedinUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">LinkedIn</span>
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
