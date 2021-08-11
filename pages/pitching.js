import Head from 'next/head';

import Header from '../components/header';
import Hero from '../components/pitching/hero';
import ValuePropositions from '../components/pitching/value-propositions';
import PitchingSolutions from '../components/pitching/solutions';
import HamperTestimonial from '../components/testimonials/hamper';
import Timorik from '../components/timorik';
import CTA from '../components/pitching/cta';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <div className="relative bg-gray-50">
        <Head>
          <title>Pitching | tarent</title>
          <link rel="icon" sizes="32x32" href="/imgs/tarent-thumb-32x32.png" />
        </Head>

      </div>

      <Header title="Pitching Workshops" />

      <Hero />
      <ValuePropositions />
      <PitchingSolutions />
      <HamperTestimonial />
      <Timorik />
      <CTA />
      <Footer />

    </div>
  );
}
