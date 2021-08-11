export default function CTA() {
  return (
      <div id="cta" className="bg-tarent-red text-white">
        <div className="max-w-3xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            You Got 99 Problems But Now Your Budget Ain&apos;t One
          </h2>
          <p className="mt-4 text-lg leading-6">
            In einem unverbindlichen Gespräch helfen wir Dir bei einem überzeugenden Pitch. Wir identifizieren die riskantesten Annahmen in deinem Plan, decken Lücken auf und stellen Dir einen konkreten Action Plan zur Verfügung.
          </p>
          <a
            href="https://meetings.hubspot.com/frederik-vosberg/prototyping"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md bg-white hover:bg-red-50 text-tarent-black"
          >
            Wir helfen Dir bei Deinem Pitch!
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
  )
}
