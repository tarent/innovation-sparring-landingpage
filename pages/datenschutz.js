import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/the-right-it/header';
import Footer from '../components/footer';

export default function Page() {
  return (
    <main>
      <Head>
        <title>Anmeldung bestätigt | tarent</title>
        <link rel="icon" sizes="32x32" href="/imgs/tarent-thumb-32x32.png" />
      </Head>
      <Header />
      <CTA />
      <Footer />
    </main>
  );
}

const CTA = () => (
  <div id="thank-you" className="bg-tarent-red text-white pt-12">
    <section id="hero">
      <div className="relative bg-tarent-red h-screen-9/10 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="relative">
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block text-white">Daten</span>
                <span className="block text-red-200">schutz</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-red-200 sm:max-w-3xl">
                Schön, dass Du dabei bist.
              </p>
              <p className="max-w-lg mx-auto text-center text-xl text-red-200 sm:max-w-3xl">
                Du bekommst gleich noch eine Mail mit den wichtigsten Infos!
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
                <a
                  href="/#solution"
                  id="hero-cta"
                  className="mb-2 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-red-700 bg-white hover:bg-red-50 sm:px-8"
                >
                  Zu unseren Angeboten
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
