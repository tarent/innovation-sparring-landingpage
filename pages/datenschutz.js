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
  <div id="thank-you">
    <section id="hero" className="bg-tarent-red text-white pt-12">
      <div className="relative bg-tarent-red h-screen-9/10 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="relative">
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block text-white">Datenschutz</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="uc-embed prose" uc-layout="privacySettings"></div>

      </div>
    </section>
  </div>
);
