import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/header';
import Footer from '../components/footer';
import Testimonial from '../components/testimonials/hamper';
import Team from '../components/team';

import goodies from '../public/imgs/goodies.png';

export default function Page() {
  return (
    <main>
      <Head>
        <title>Innovationskompass | tarent</title>
        <link rel="icon" sizes="32x32" href="/imgs/tarent-thumb-32x32.png" />
      </Head>

      <Header title="Innovationskompass" />
      <Hero />
      <CTA />
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
            <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
              PDF
            </h2>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Für den Druck optimiert.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="https://www.tarent.de/wp-content/uploads/tarent_innovationskompass_worksheet.pdf"
                  download={true}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-tarent-red hover:bg-tarent-red-700 md:py-4 md:text-lg md:px-10"
                >
                  Hier geht&apos;s zum PDF-Download
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
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                  miro-Template
                </h2>
                <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                  Ideal für Remote-Sessions oder zum Verlinken.
                </p>
                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-tarent-red hover:bg-tarent-red-700 md:py-4 md:text-lg md:px-10"
                    >
                      Hier geht&apos;s zum miro-Template
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
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
