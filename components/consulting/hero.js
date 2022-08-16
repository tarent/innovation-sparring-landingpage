export default function Hero() {
  return (
    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          <h1>
            <span className="mt-1 block text-4xl tracking-tight font-bold sm:text-5xl sm:tracking-tight xl:text-6xl xl:tracking-tight">
              <span className="block text-gray-900">Wir bringen <span className="text-red-600">Dein digitales</span></span>
              <span className="block text-gray-900"><span className="text-red-600">Produkt</span> zum Fliegen</span>
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Wir sind <span className="font-bold">Berater <span className="text-red-600 font-bold">und</span> Softwareentwickler</span>. Deswegen lassen wir Dich nicht hängen und begleiten Dich von der Idee bis zum skalierten Produkt.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
            <a
              href="#cta"
              id="hero-cta"
              className="mb-2 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 sm:px-8"
            >
              Erzähl&apos; uns von Deiner Idee
            </a>
          </div>
        </div>
        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <svg
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
            width={640}
            height={784}
            fill="none"
            viewBox="0 0 640 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                x={118}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect y={72} width={640} height={640} className="text-gray-50" fill="currentColor" />
            <rect x={118} width={404} height={784} fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
          </svg>
          <div className="relative mx-auto w-full rounded-lg overflow-hidden shadow-lg lg:max-w-md">
              <img
                className="w-full"
                src="/imgs/hero.jpg"
                alt=""
              />
          </div>
        </div>
      </div>
    </main>
  )
};
