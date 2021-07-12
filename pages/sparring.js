import Head from 'next/head';

import Header from '../components/header';

import Image from 'next/image';
import growth from '../public/imgs/growth.svg';

import AssessmentIcon from '../public/imgs/assessment.png';
import FocusIcon from '../public/imgs/focus.png';
import ValidationIcon from '../public/imgs/validation.png';

import HamperTestimonial from '../components/testimonials/hamper';
import Timorik from '../components/timorik';
import Footer from '../components/footer';

import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from '@heroicons/react/outline';

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


export default function Home() {
  return (
    <div>
      <div className="relative bg-gray-50">
        <Head>
          <title>Innovation Sparring | tarent</title>
          <link rel="icon" sizes="32x32" href="/imgs/tarent-thumb-32x32.png" />
        </Head>

        <Header title="Innovation Sparring" />

        <main className="lg:relative">
          <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">Dein Produkt</span>{' '}
                <span className="block text-tarent-red xl:inline">
                  erfolgreich am Markt.
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                Wochenlange Beratung wird schnell teuer. Deswegen helfen wir Dir
                in kurzen Sessions, deine internen Ressourcen viel
                effizienter zu nutzen - indem wir deine Innovation bewerten,
                ihren Fokus schärfen und dir helfen die riskantesten Annahmen zu
                validieren.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#cta"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-tarent-red hover:bg-tarent-red-700 md:py-4 md:text-lg md:px-10"
                  >
                    Vereinbare Dein Sparring
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden h-64 sm:h-72 md:h-96 lg:block lg:absolute lg:inset-y-12 lg:right-12 lg:w-1/2 lg:h-full">
            <img
              className="object-contain relative bottom-0 right-0"
              src={growth.src}
              alt="Dein Produkt erfolgreich am Markt"
              height={growth.height}
              width={growth.width}
            />
          </div>
        </main>
      </div>

      <div className="py-12 bg-tarent-red text-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl mb-12 text-center">
            In 3 Schritten zum erfolgreichen Produkt
          </h2>
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            {features.map((feature) => (
              <div key={feature.name} className="text-center">
                <dt className="flex justify-center flex-wrap">
                  <div className="w-full flex justify-center ">
                    <div className="w-24 h-24">
                      <Image
                        src={feature.icon}
                        aria-hidden="true"
                        alt={feature.description}
                      />
                    </div>
                  </div>
                  <h3 className="mt-5 text-2xl leading-6 font-medium">
                    {feature.name}
                  </h3>
                </dt>
                <dd className="mt-2 text-base">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <HamperTestimonial />
      <Timorik />

      <div id="cta" className="bg-tarent-red text-white">
        <div className="max-w-3xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Welche Idee verfolgst Du?
          </h2>
          <p className="mt-4 text-lg leading-6">
            In einem unverbindlichen Gespräch helfen wir dir beim nächsten Schritt deiner Idee. Egal, ob das Projekt schon im Gange ist, irgendwie nicht ins Laufen kommt oder bis jetzt nur in Deinem Kopf ist.
          </p>
          <a
            href="https://meetings.hubspot.com/frederik-vosberg/innovation-sparring"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md bg-white hover:bg-red-50 text-tarent-black"
          >
            Erzähle uns von Deiner Idee!
          </a>
          <p className="text-xs text-red-200 mt-5">
            Du hast die Möglichkeit, dir über diesen Weg einen freien
            Kontakttermin im Kalender eines tarent-Ansprechpartners zu buchen.
            Für diese Funktion nutzen wir den Service der Firma Hubspot. Die
            Datenschutzerklärung der Firma Hubspot findest Du{' '}
            <a
              href="https://legal.hubspot.com/de/privacy-policy"
              target="_blank"
              rel="noreferrer noopener"
              className="underline hover:text-gray-50"
            >
              hier
            </a>
            .
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
