export default function CTA() {
  return (
      <div id="cta" className="bg-tarent-red text-white">
        <div className="max-w-3xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Welche Idee verfolgst Du?
          </h2>
          <p className="mt-4 text-lg leading-6">
            In einem unverbindlichen Gespräch helfen wir dir beim nächsten Schritt deiner Idee. Egal, ob das Projekt schon im Gange ist, irgendwie nicht ins Laufen kommt oder bis jetzt nur in Deinem Kopf ist.
          </p>
          <a
            href="https://meetings.hubspot.com/frederik-vosberg/prototyping"
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
  )
}
