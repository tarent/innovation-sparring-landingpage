import { useRouter } from 'next/router';
import HubspotForm from 'react-hubspot-form';

export default function CTA({ formId }) {
  const router = useRouter();

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
        <div className="mt-8">
          {formId ? (
            <HubspotForm
              portalId="2420272"
              formId={formId}
              loading={<div>Loading...</div>}
              onSubmit={()=> {
                console.log("submit - start");
                setTimeout(function() {
                  console.log("submit - async");
                }, 1000);
              }}
              onFormSubmit={()=>{
                console.log("formSubmit - start");
                setTimeout(function() {
                  console.log("formSubmit - async");
                }, 1000);
              }}
              onFormSubmitted={()=> {
                console.log("formSubmitted - start");
                setTimeout(function() {
                  console.log("formSubmitted - async");
                }, 1000);
              }}
            />
          ) : (
            <a
              id="cta-cta"
              href="mailto:innovation@tarent.de?subject=Mein%20Innovation%20Sparring&body=Hi%20Leute%2C%0D%0A%0D%0Aich%20fand%20eure%20Angebote%20sehr%20spannend!%20Gerne%20w%C3%BCrde%20ich%20mir%20ein%20Innovation%20Sparring%20bei%20Euch%20abholen.%20Macht%20mir%20doch%20einfach%20mal%203%20Terminvorschl%C3%A4ge%20in%20den%20n%C3%A4chsten%20paar%20Tagen.%0D%0A%0D%0AViele%20Gr%C3%BC%C3%9Fe!"
              target="_blank"
              rel="noreferrer"
              className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50 sm:w-auto"
            >
              Jetzt Termin ausmachen
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
