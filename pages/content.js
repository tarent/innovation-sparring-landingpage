import Head from 'next/head';

import Header from '../components/consulting/header';
import ContentTeaser from '../components/consulting/content-teaser';
import Footer from '../components/footer';

import og from '../public/imgs/og-image.png';
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
        <ContentTeaser posts={props.content} />
      </main>
      <Footer />
    </div>
  );
}
export const getStaticProps = async () => {
  return {
    props: {
      content: await getPosts(),
    }
  }
}
