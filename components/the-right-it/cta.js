export default function CTA() {
  return (
    <section className="bg-tarent-red" id="cta">
      <div className="max-w-3xl mx-auto text-center py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Bezahlende Nutzer von Tag 1 an,</span>
          <span className="block">
            <span className="text-red-400">oder</span> früh wissen, wann ein
            Pivot ansteht.
          </span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-red-200">
          In einem 30-minütigen Gespräch erarbeiten wir mit dir
          <br /> Deine
          <span className="font-bold text-white">
            {' '}
            Roadmap zum Produkterfolg
          </span>
          .
        </p>
        <a
          id="cta-cta"
          href="https://meetings.hubspot.com/frederik-vosberg/innovation-sparring"
          target="_blank"
          rel="noreferrer"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-indigo-50 sm:w-auto"
        >
          Jetzt Termin ausmachen
        </a>
        <p className="text-xs text-red-200 mt-5">
          Du hast die Möglichkeit, dir über diesen Weg einen freien
          Kontakttermin im Kalender eines tarent-Ansprechpartners zu buchen. Für
          diese Funktion nutzen wir den Service der Firma Hubspot. Die
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
    </section>
  );
}
