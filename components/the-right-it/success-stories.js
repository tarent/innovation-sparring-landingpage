import smive from '../../public/imgs/smive.svg';
import stabilo from '../../public/imgs/stabilo.svg';
import autoabo from '../../public/imgs/smive.png';
import milu from '../../public/imgs/milu.jpeg';

export default function SuccessStories() {
  return (
    <section id="success-stories" className="bg-gray-50 py-12">
      <div className="text-center pt-8">
        <h2 className="text-base font-semibold text-tarent-red tracking-wide uppercase">
          ausgewählte
        </h2>
        <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Erfolgsgeschichten
        </h1>
      </div>
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
        <div className="py-12 px-4 border-t-2 border-gray-200 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-0 lg:pl-16">
          <div className="md:flex-shrink-0">
            <img className="h-12" src={smive.src} alt="smive" />
          </div>
          <div className="bg-white w-full h-64 mt-8 rounded-xl shadow-lg overflow-hidden flex">
            <div className="bg-green-500 w-3/5 h-full">
              <img
                src={autoabo.src}
                className="object-cover object-center h-full"
              />
            </div>
            <div className="py-8 px-4 w-2/5 flex flex-col">
              <div className="h-1/2 py-2 flex flex-col justify-end">
                <h3 className="text-2xl font-bold">smive</h3>
              </div>
              <div className="h-1/2 lex flex-col justify-end">
                <p>Das flexible Autoabo für Dich und Dein Leben!</p>
              </div>
            </div>
          </div>
          <blockquote className="mt-14 md:flex-grow md:flex md:flex-col">
            <div className="relative text-lg font-medium text-black md:flex-grow">
              <svg
                className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative">
                Die Kolleginnen und Kollegen von tarent haben sich im Projekt so
                sehr engagiert und mit unserem Produkt identifiziert als wäre es
                ihr eigenes.
              </p>
            </div>
            <div className="mt-8">
              <div className="flex items-start">
                <div className="ml-4">
                  <div className="text-base font-medium text-black">
                    Alexander Bühler
                  </div>
                  <div className="text-base font-medium text-gray-700">
                    Head of smive
                    <span className="text-tarent-red"> / </span>
                    <span className="text-black">Bank 11 GmbH</span>
                  </div>
                </div>
              </div>
            </div>
          </blockquote>
        </div>
        <div className="py-12 px-4 border-t-2 border-gray-200 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-0 lg:pl-16">
          <div className="md:flex-shrink-0">
            <img className="h-12" src={stabilo.src} alt="STABILO" />
          </div>
          <div className="bg-white w-full h-64 mt-8 rounded-xl shadow-lg overflow-hidden flex">
            <div className="bg-red-50 w-3/5 h-full">
              <img
                src={milu.src}
                className="object-cover object-center h-full"
              />
            </div>
            <div className="py-8 px-4 w-2/5 flex flex-col">
              <div className="h-1/2 py-2 flex flex-col justify-end">
                <h3 className="text-2xl font-bold">MILU-App</h3>
              </div>
              <div className="h-1/2 lex flex-col justify-end">
                <p>Spielerisch Schreiben lernen mit spannenden Geschichten.</p>
              </div>
            </div>
          </div>
          <blockquote className="mt-14 md:flex-grow md:flex md:flex-col">
            <div className="relative text-lg font-medium text-black md:flex-grow">
              <svg
                className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative">
                Um unser digitales Portfolio bei STABILO auszubauen, hat uns
                tarent bei unseren Trend &amp; Innovation Days und der
                entsprechenden Geschäftsmodell- und Prototypenentwicklung
                unterstützt. Die Zusammenarbeit war spannend und
                arbeitsintensiv, hat uns allen aber richtig Spaß gemacht.
              </p>
            </div>
            <div className="mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://www.tarent.de/wp-content/uploads/stabilo_steve_allert.png"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-black">
                    Steve Allert
                  </div>
                  <div className="text-base font-medium text-gray-700">
                    Manager Digital Innovation
                    <span className="text-tarent-red"> / </span>
                    <span className="text-black">
                      STABILO International GmbH
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
