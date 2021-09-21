import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/header';
import Footer from '../components/footer';
import Testimonial from '../components/testimonials/hamper';
import Team from '../components/team';

import kompass from '../public/imgs/kompass.png';
import problemSolutionFit from '../public/imgs/assessment.png';
import businessModel from '../public/imgs/profit.png';
import productMarketFit from '../public/imgs/goal.png';
import goodies from '../public/imgs/goodies.png';

const features = [
  {
    name: 'Problem-Solution-Fit',
    description:
      'Um erfolgreich zu sein, muss deine Innovation ein reales Problem besser lösen als existierende Alternativen. Deswegen helfen wir Dir, ein faktenbasiertes Problemverständnis zu erarbeiten.',
    icon: problemSolutionFit,
  },
  {
    name: 'Geschäftsmodell',
    description:
      'Ein klares Zielbild dient als Messlatte für den Erfolg Deiner Innovation. Wir unterstützen Dich bei der Erarbeitung des passenden Geschäftsmodells.',
    icon: businessModel,
  },
  {
    name: 'Product-Market-Fit',
    description:
      'Wir helfen Dir dabei, Deine Idee langfristig erfolgreich am Markt zu platzieren, indem wir die Zielgruppe und technische Hürden unter die Lupe nehmen.',
    icon: productMarketFit,
  },
];

export default function Home() {
  return (
    <main>
      <Head>
        <title>Innovationskompass | tarent</title>
        <link rel="icon" sizes="32x32" href="/imgs/tarent-thumb-32x32.png" />
      </Head>

      <Header title="Innovationskompass" />
      <Hero />
      <Steps />
      <Testimonial />
      <CTA />
      <Signup />
      <Team />
      <Footer />
    </main>
  );
}

const Hero = () => (
  <div className="relative bg-white overflow-hidden">
    <div className="hidden lg:block lg:absolute lg:inset-0">
      <svg
        className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
        width={640}
        height={784}
        fill="none"
        viewBox="0 0 640 784"
      >
        <defs>
          <pattern
            id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
            x={118}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect
              className="text-gray-200"
              x={0}
              y={0}
              width={4}
              height={4}
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          className="text-gray-50"
          y={72}
          width={640}
          height={640}
          fill="currentColor"
        />
        <rect
          x={118}
          width={404}
          height={784}
          fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
        />
      </svg>
    </div>
    <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
      <main className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <p className="text-6xl">🧭</p>
            <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
              <span className="mr-1">Dein Kompass</span>
              <br className="hidden md:inline" />
              für<span className="text-tarent-red"> Innovationen</span>
            </h2>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Mit dem tarent Innovationskompass helfen wir Dir,
              Produktentscheidungen anhand von Fakten zu treffen und die
              wichtigsten nächsten Schritte zu identifizieren.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#cta"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-tarent-red hover:bg-tarent-red-700 md:py-4 md:text-lg md:px-10"
                >
                  Buche jetzt Dein kostenloses 30-minütiges Sparring
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <svg
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
              width={640}
              height={784}
              fill="none"
              viewBox="0 0 640 784"
            >
              <defs>
                <pattern
                  id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                  x={118}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    className="text-gray-200"
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                className="text-gray-50"
                y={72}
                width={640}
                height={640}
                fill="currentColor"
              />
              <rect
                x={118}
                width={404}
                height={784}
                fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
              />
            </svg>
            <div className="relative mx-auto w-full lg:max-w-md">
              <Image
                className="w-full relative block"
                src={kompass}
                alt="Dein Kompass für Innovationen"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

const Steps = () => (
  <div className="py-12 bg-tarent-red text-white py-24">
    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl mb-12 text-center">
        In 3 Schritten zum erfolgreichen Produkt
      </h2>
      <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
        {features.map((feature, i) => (
          <Feature key={i} {...feature} />
        ))}
      </dl>
    </div>
  </div>
);

const Feature = ({ icon, name, description }) => (
  <div key={name} className="text-center">
    <dt className="flex justify-center flex-wrap">
      <div className="w-full flex justify-center ">
        <div className="w-24 h-24">
          <Image src={icon} aria-hidden="true" alt={description} />
        </div>
      </div>
      <h3 className="mt-5 text-2xl leading-6 font-medium">{name}</h3>
    </dt>
    <dd className="mt-2 text-base">{description}</dd>
  </div>
);

const CTA = () => (
  <div id="cta" className="bg-tarent-red text-white">
    <div className="max-w-3xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <p className="text-6xl mb-8">👉</p>
      <h2 className="text-3xl font-extrabold sm:text-4xl">
        Dein Schritt in die richtige Richtung
      </h2>
      <p className="mt-4 text-lg leading-6">
        In einer 30-minütigen kostenlosen Session gehen wir gemeinsam durch dein
        Projekt und Du erhältst von uns im Nachgang kurze Handlungsempfehlungen
        für die nächsten Schritte &mdash; no strings attached!
      </p>
      <a
        href="https://meetings.hubspot.com/frederik-vosberg/innovation-sparring"
        className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md bg-white hover:bg-red-50 text-tarent-black"
      >
        Vereinbare Dein 30-minütiges Probe-Sparring
      </a>
      <p className="text-xs text-red-200 mt-5">
        Du hast die Möglichkeit, dir über diesen Weg einen freien Kontakttermin
        im Kalender eines tarent-Ansprechpartners zu buchen. Für diese Funktion
        nutzen wir den Service der Firma Hubspot. Die Datenschutzerklärung der
        Firma Hubspot findest Du{' '}
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
);

const Signup = () => (
  <div className="bg-gray-50 flex justify-center flex-wrap py-24">
    <div className="min-w-full lg:min-w-0 flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div className="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <p className="text-6xl">👟</p>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Du willst schon vorpreschen?
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Dann hol&apos; Dir Dein kostenloses Worksheet oder Miro-Template,
            indem Du dich für unseren Newsletter anmeldest.
          </p>
        </div>

        <div className="mt-8">
          <div className="mt-6">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Geschäftliche E-Mail-Adresse
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-tarent-red hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Anmelden und zum Worksheet
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-5">
                Du wirst im Anschluss zur Downloads-Seite weitergeleitet. Für
                diesen Newsletter nutzen wir den Service der Firma Hubspot. Die
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
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="flex max-w-lg flex-1 justify-center items-center">
      <Image src={goodies} alt="" height={200} width={200} />
    </div>
  </div>
);
