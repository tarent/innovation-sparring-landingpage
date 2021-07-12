import Head from 'next/head';

import Header from '../components/header';
import Hero from '../components/prototyping/hero';
import ValuePropositions from '../components/prototyping/value-propositions';
import TypesOfPrototypes from '../components/prototyping/types-of-prototypes';
import PrototypingSolutions from '../components/prototyping/solutions';
import HamperTestimonial from '../components/testimonials/hamper';
import Timorik from '../components/timorik';
import CTA from '../components/prototyping/cta';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <div className="relative bg-gray-50">
        <Head>
          <title>Prototyping | tarent</title>
          <link rel="icon" sizes="32x32" href="/imgs/tarent-thumb-32x32.png" />
        </Head>

      </div>

      <Header title="Prototyping Workshops" />

      <Hero />
      <ValuePropositions />
      <TypesOfPrototypes />
      <PrototypingSolutions />
      <HamperTestimonial />
      <Timorik />
      <CTA />
      <Footer />

    </div>
  );
}
