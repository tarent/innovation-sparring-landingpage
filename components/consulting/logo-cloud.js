const logos = [
  {
    "src": "https://www.tarent.de/wp-content/uploads/telekom.jpg",
    "alt": "Telekom",
  },
  {
    "src": "https://www.tarent.de/wp-content/uploads/deutschepost.jpg",
    "alt": "Deutsche Post",
  },
  {
    "src": "https://www.tarent.de/wp-content/uploads/vodafone.jpg",
    "alt": "Vodafone",
  },
  {
    "src": "https://www.tarent.de/wp-content/uploads/bosch.jpg",
    "alt": "Bosch",
  },
  {
    "src": "https://www.tarent.de/wp-content/uploads/rewe.jpg",
    "alt": "REWE",
  },
  {
    "src": "https://www.tarent.de/wp-content/uploads/fairtrade_logo_hell.jpg",
    "alt": "Fairtrade",
  },
  {
    "src": "https://www.tarent.de/wp-content/uploads/toom.jpg",
    "alt": "toom",
  },
  {
    "src": "https://www.tarent.de/wp-content/uploads/henkel.jpg",
    "alt": "Henkel",
  },
  {
    "src": "https://www.tarent.de/wp-content/uploads/logo_stabilo.jpg",
    "alt": "STABILO",
  },
];

/* This example requires Tailwind CSS v2.0+ */
export default function LogoCloud() {
  return (
    <div className="bg-logo-gray">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="max-w-md mx-auto text-2xl tracking-tight font-bold text-gray-600 text-center">
            Mit uns schon durchgestartet:
          </h2>
          <div className="flow-root self-center mt-8">
            <div className="-mt-4 -ml-8 flex flex-wrap justify-between">
              {logos.map((logo) => (
                <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center">
                  <img
                    className="h-12" src={logo.src} alt={logo.alt}
                  />
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  )
}
