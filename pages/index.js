import Head from 'next/head';
import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/solid';

import Header from '../components/consulting/header';
import ValueProposition from '../components/consulting/value-proposition';
import CTA from '../components/consulting/cta';
import ContentTeaser from '../components/consulting/content-teaser';
import SuccessStories from '../components/the-right-it/success-stories';
import LogoCloud from '../components/consulting/logo-cloud';
import Footer from '../components/footer';

import step1 from '../public/imgs/step-1.png';
import step2 from '../public/imgs/step-2.png';
import step3 from '../public/imgs/step-3.png';
import step4 from '../public/imgs/step-4.png';
import designSprint from '../public/imgs/design-sprint.png';
import vorgehen from '../public/imgs/vorgehen.png';

import og from '../public/imgs/og-image.png';
import stabilo from '../public/imgs/stabilo-white.svg';
import smive from '../public/imgs/smive-white.svg';
import itenos from '../public/imgs/itenos-white.svg';

import getPosts from '../lib/posts';

export default function Index(props) {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>tarent Innovation- & Product-Consulting</title>
        <link rel="icon" sizes="32x32" href="/imgs/tarent-thumb-32x32.png" />
        <meta property="og:image" content={og.src} />
      </Head>
      <main>
        <Header />
        <ValueProposition />
        <SuccessStories />
        <LogoCloud />
        <CTA formId="46eab778-a352-4747-87ca-d22f08496537" />
        <ContentTeaser posts={props.content} />
      </main>
      <Footer />
    </div>
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
    buttonTitle: 'Build Sprint',
    href: '/the-right-it/build-sprint',
  },
  {
    title: 'Skalierung',
    problem: 'Wie können wir die Anzahl der Nutzer verzehnfachen?',
    solution:
      'Analysen des Nutzungsverhaltens machen den Weg frei für 10x Growth.',
    imageUrl: step4,
    includedFeatures: [
      '12 Sparring-Sessions in 3 Monaten',
      'Analytics- & Funneloptimierung',
      'A/B-Tests',
    ],
    buttonTitle: '10x Sprint',
    href: '/the-right-it/10x-sprint',
  },
];


const people = [
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
  {
    name: 'Benjamin Kursatzky',
    role: 'Innovation Consultant',
    image: '/imgs/josua-waghubinger-portrait.jpg',
    bio: 'Benjamin ist ganz neu dabei :)',
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

export const getStaticProps = async () => {
  return {
    props: {
      content: await getPosts(3),
    }
  }
}
