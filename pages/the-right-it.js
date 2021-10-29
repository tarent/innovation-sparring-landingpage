import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { CheckIcon } from '@heroicons/react/solid';

import Footer from '../components/footer';

import logo from '../public/imgs/logo.svg';
import logoWhite from '../public/imgs/logo-white.svg';
import step1 from '../public/imgs/step-1.png';
import step2 from '../public/imgs/step-2.png';
import step3 from '../public/imgs/step-3.png';
import step4 from '../public/imgs/step-3.png';
import vorgehen from '../public/imgs/vorgehen.png';

const navigation = [
  {
    name: "So geht's",
    href: '#solution',
  },
  {
    name: 'Expertengespräch buchen',
    href: '#cta',
  },
];

export default function TheRightIt() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Build The Right It | tarent Innovation Consulting</title>
        <link rel="icon" sizes="32x32" href="/imgs/tarent-thumb-32x32.png" />
      </Head>
      <main>
        <Header />
        <Hero />
        <Brands />
        <Solution />
        <Process />
        <CTA />
        <SuccessStories />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-24 z-10">
      <Popover className="relative bg-tarent-red">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start items-center lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">tarent Innovation Consulting</span>
              <div className="h-8 w-auto sm:h-10">
                <Image src={logoWhite} alt="" height={40} width={40} />
              </div>
            </a>
            <h1 className="text-lg ml-2 text-white">
              <span>tarent </span>
              <span className="text-lg font-medium">Innovation Consulting</span>
            </h1>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
              <span className="sr-only">Menü öffnen</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-red-300 hover:text-red-100"
              >
                {item.name}
              </a>
            ))}
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0"></div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <Image src={logo} alt="tarent" height={40} width={40} />
                  </div>
                  <h1 className="text-lg ml-2 text-gray-800">
                    <span>tarent </span>
                    <span className="text-lg font-medium">
                      Innovation Consulting
                    </span>
                  </h1>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero">
      <div className="relative bg-tarent-red h-screen-9/10 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="relative">
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block text-white">Zahlende Nutzer</span>
                <span className="block text-red-200">Von Tag 1 an.</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-red-200 sm:max-w-3xl">
                Deine Idee verdient es, erfolgreich zu sein.
                <br /> Lass&apos; uns darüber sprechen, wie wir schnell dorthin
                kommen!
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
                <a
                  href="https://meetings.hubspot.com/frederik-vosberg/innovation-sparring"
                  target="_blank"
                  rel="noreferrer"
                  id="hero-cta"
                  className="mb-2 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-red-700 bg-white hover:bg-red-50 sm:px-8"
                >
                  Jetzt Expertengespräch buchen
                </a>
                <a
                  href="#solution"
                  className="mb-2 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-50 sm:px-8"
                >
                  So geht&apos;s
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Brands() {
  return (
    <section id="brands" className="bg-red-600">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-red-700 tracking-wide">
          Ausgewählte Referenzen
        </p>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="w-40">
              <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 599.81 208.4"
              >
                <rect
                  width="599.81"
                  height="208.4"
                  fill="rgba(255,255,255,0.2)"
                />
                <path
                  fill="white"
                  d="M64.56,175.26c7.92,0,11.67-3.75,11.67-11.46v-42.1h.42L101.25,164c4.59,7.92,8.55,11.26,15.63,11.26h24.8c6,0,11-2.29,11-7.09q0-2.81-2.5-6.88l-30.43-45C139.39,109,147.93,95,147.93,78.34c0-28.14-16.67-44.81-60.44-44.81H44.76C37,33.52,33.3,37.28,33.3,45.2v118.6c0,7.71,3.75,11.46,11.46,11.46ZM76.23,95.64V66H85.4c12.3,0,17.51,5.21,17.51,14.8S97.7,95.64,85.4,95.64Zm180.92,79.62c7.92,0,11.67-3.75,11.67-11.46V153.58c0-7.92-3.75-11.67-11.67-11.67H210.46V120.65h34.18c7.92,0,11.67-3.75,11.67-11.46V99c0-7.92-3.75-11.67-11.67-11.67H210.46V66.87H250.9c7.92,0,11.67-3.75,11.67-11.46V45.2c0-7.92-3.75-11.67-11.67-11.67H178.16c-7.71,0-11.46,3.75-11.46,11.67v118.6c0,7.71,3.75,11.46,11.46,11.46ZM388,44.78c-1.67-7.92-5.63-11.26-14.38-11.26H355.95c-8.75,0-12.71,3.33-14.38,11.26L327.39,114.4H327L315.51,44.78c-1.25-7.92-5.21-11.26-14.38-11.26H284c-7.09,0-11,3.13-11,9.38a20,20,0,0,0,.63,4.58l27.3,116.3c1.88,7.71,5.63,11.46,15.42,11.46h17.09c8.75,0,12.71-3.34,14.38-11.26l15.63-76.08h.42L379.5,164c1.67,7.92,5.63,11.26,14.38,11.26H411c9.8,0,13.55-3.75,15.42-11.46l27.3-116.3a19.9,19.9,0,0,0,.63-4.58c0-6.25-4.17-9.38-11-9.38H428.69c-9.17,0-13.13,3.33-14.38,11.26L402.84,114.4h-.42L388,44.78ZM555.21,175.26c7.92,0,11.67-3.75,11.67-11.46V153.58c0-7.92-3.75-11.67-11.67-11.67H508.52V120.65H542.7c7.92,0,11.67-3.75,11.67-11.46V99c0-7.92-3.75-11.67-11.67-11.67H508.52V66.87H549c7.92,0,11.67-3.75,11.67-11.46V45.2c0-7.92-3.75-11.67-11.67-11.67H476.21c-7.71,0-11.46,3.75-11.46,11.67v118.6c0,7.71,3.75,11.46,11.46,11.46Z"
                />
              </svg>
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="w-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                viewBox="0 0 378 380"
                version="1.1"
              >
                <g id="surface1">
                  <path
                    fill="rgba(255,255,255,0.2)"
                    d="M 119.441406 14.328125 C 166.90625 -4.589844 222.195312 -3.28125 268.394531 18.691406 C 255.230469 16.691406 241.839844 18.199219 228.808594 20.402344 C 193.417969 27.085938 159.785156 43.738281 133.496094 68.476562 C 108.289062 93.253906 90.625 126.128906 85.636719 161.300781 C 82.335938 186.222656 85.394531 212.363281 96.578125 235.046875 C 108.101562 258.847656 128.386719 278.367188 152.835938 288.441406 C 176.394531 298.410156 203.722656 298.300781 227.585938 289.402344 C 263.390625 276.261719 289.117188 240.78125 292.058594 202.875 C 293.910156 178.03125 287.867188 151.601562 271.175781 132.546875 C 255.242188 113.894531 231.9375 103.621094 208.617188 97.773438 C 207.367188 74.773438 218.203125 52.050781 235.386719 37.09375 C 244.929688 28.488281 256.773438 23.003906 269.019531 19.492188 L 269.949219 19.171875 C 305.007812 35.984375 334.796875 63.710938 353.777344 97.75 C 370.039062 126.730469 378.519531 160.125 377.679688 193.390625 C 377.519531 236.40625 361.441406 278.996094 333.878906 311.886719 C 307.816406 343.253906 271.363281 365.816406 231.632812 374.851562 C 191.796875 384.042969 148.9375 380.078125 111.65625 363.148438 C 75.175781 346.855469 44.269531 318.53125 24.609375 283.691406 C 8.253906 254.738281 -0.398438 221.355469 0.320312 188.050781 C 0.398438 146.554688 15.132812 105.378906 40.859375 72.929688 C 61.410156 47.019531 88.671875 26.417969 119.441406 14.328125 Z M 119.441406 14.328125 "
                  />
                  <path
                    fill="white"
                    d="M 228.808594 20.402344 C 241.839844 18.199219 255.230469 16.691406 268.394531 18.691406 L 270.285156 19.011719 L 269.019531 19.492188 C 256.773438 23.003906 244.929688 28.488281 235.386719 37.09375 C 218.203125 52.050781 207.367188 74.773438 208.617188 97.773438 C 231.9375 103.621094 255.242188 113.894531 271.175781 132.546875 C 287.867188 151.601562 293.910156 178.03125 292.058594 202.875 C 289.117188 240.78125 263.390625 276.261719 227.585938 289.402344 C 203.722656 298.300781 176.394531 298.410156 152.835938 288.441406 C 128.386719 278.367188 108.101562 258.847656 96.578125 235.046875 C 85.394531 212.363281 82.335938 186.222656 85.636719 161.300781 C 90.625 126.128906 108.289062 93.253906 133.496094 68.476562 C 159.785156 43.738281 193.417969 27.085938 228.808594 20.402344 Z M 228.808594 20.402344 "
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="w-32">
              <svg
                version="1.1"
                className="h-full w-full"
                viewBox="0 0 288.90927 141.86414"
                id="svg3362"
              >
                <defs id="defs3364" />
                <g transform="translate(-449.88641,-505.46578)" id="layer1">
                  <path
                    d="m 709.97094,570.75354 28.82473,0 0,28.82473 -28.82473,0 z m -86.46935,0 28.8199,0 0,28.82473 -28.8199,0 z m -86.47418,0 28.82473,0 0,28.82473 -28.82473,0 z m -18.34804,46.24869 c 0,9.14413 1.33452,15.07963 4.0132,17.81612 2.26435,2.3318 6.12337,3.7675 11.53374,4.30227 1.60433,0.13497 4.35527,0.19734 8.2384,0.19734 l 0,8.01195 -69.453,0 0,-8.01195 c 5.57898,0 9.68853,-0.26479 12.34796,-0.79976 5.38143,-1.13217 8.77315,-4.26854 10.16548,-9.40909 0.72749,-2.66425 1.09846,-6.70153 1.09846,-12.10706 l 0,-104.72395 c -11.78427,0.33263 -21.00065,4.23482 -27.65401,11.71201 -6.32091,7.15437 -10.17513,18.10518 -11.5771,32.85719 l -7.50609,-1.29598 1.39715,-50.08554 112.90929,0 1.40196,50.08554 -7.51573,1.29598 C 556.68195,542.09529 552.794,531.14448 546.449,523.99011 539.76194,516.51292 530.50219,512.61054 518.67937,512.2781 l 0,104.72395 z m -68.6561,-46.24869 28.82473,0 0,28.82473 -28.82473,0 z"
                    id="path108"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
            <div className="w-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                viewBox="0 0 602.36218 136.77165"
                className="h-full w-full"
              >
                <defs id="defs4189" />
                <g id="layer1">
                  <g transform="translate(-48.81891,-463.9764)" id="g4197">
                    <path
                      d="M 127.73934,575.38573 C 124.61095,577.13081 122.57071,577.9968 118.65394,579.47329 C 111.62792,582.02164 106.48871,582.94857 99.083904,583.02617 C 84.431266,583.17711 74.652448,578.47302 72.742251,570.48215 C 71.772093,566.2688 72.078589,563.06176 74.593274,554.44373 L 81.396424,532.02239 L 66.53544,532.03798 L 69.439534,522.57168 L 132.2939,481.69467 L 122.43784,512.02113 L 146.18367,512.02184 L 140.55867,531.99971 L 116.30508,531.99759 L 111.75796,546.92483 C 110.16453,552.67172 108.68804,559.43943 117.8652,559.93656 C 122.0169,560.16298 128.2804,559.61589 133.4965,555.53896 L 127.73934,575.38573 z M 242.44859,544.10825 C 249.09512,523.70944 239.50693,505.58011 205.17902,505.58011 C 170.84898,505.58011 149.45024,523.70944 142.80477,544.10825 C 136.16001,564.50459 145.69859,582.77672 180.02933,582.77672 C 214.3576,582.77672 235.80453,564.50459 242.44859,544.10825 L 242.44859,544.10825 z M 207.58953,544.10825 C 205.05217,551.89751 198.78512,562.49554 186.67445,562.38003 C 173.47067,562.25636 175.12363,551.89751 177.66134,544.10825 C 180.20048,536.31652 185.33119,525.9768 198.53426,525.9768 C 211.73768,525.9768 210.1276,536.31652 207.58953,544.10825 L 207.58953,544.10825 z M 348.70457,544.10825 C 355.35004,523.70944 345.7615,505.58011 311.43394,505.58011 C 277.10355,505.58011 255.70551,523.70944 249.06004,544.10825 C 242.41528,564.50459 251.95386,582.77672 286.28425,582.77672 C 320.61252,582.77672 342.0598,564.50459 348.70421,544.10825 L 348.70457,544.10825 z M 313.8448,544.10825 C 311.30673,551.89751 306.13244,562.38003 292.92937,562.38003 C 279.72666,562.38003 281.37925,551.89751 283.91662,544.10825 C 286.45575,536.31652 291.58646,525.9768 304.78882,525.9768 C 317.99331,525.9768 316.38323,536.31652 313.84445,544.10825 L 313.8448,544.10825 z M 344.47776,581.13439 L 377.32776,581.13439 L 389.54827,541.22648 C 391.89606,533.55629 396.4113,528.01951 404.70405,528.01951 C 414.66075,528.01951 413.57472,534.26743 411.44413,541.22648 L 399.22504,581.13439 L 432.07256,581.13439 L 444.29236,541.22648 C 446.64051,533.55629 451.15823,528.01951 459.45098,528.01951 C 469.40484,528.01951 468.32271,534.26743 466.19177,541.22648 L 453.97197,581.13439 L 486.82019,581.13439 L 502.30055,530.57459 C 505.95299,518.6457 502.48799,505.58011 480.42488,505.58011 C 459.02437,505.58011 449.12578,516.23164 447.53838,517.08274 C 445.81846,509.69778 437.12496,505.58011 427.83476,505.58011 C 415.8885,505.58011 405.31031,508.70459 396.06653,517.22554 L 395.73417,517.22554 L 398.73535,507.42617 L 367.04685,507.42617 L 344.47776,581.13439 z M 593.63106,481.77369 L 633.46456,507.47365 L 610.93125,581.1514 L 563.23657,581.1514 L 593.63106,481.77369 L 593.63106,481.77369 z "
                      id="_90974784"
                      fill="white"
                    />
                    <polygon
                      points="15207300,502770 14349600,3306890 13003600,3306890 13640100,1225870 15207300,502770 "
                      transform="matrix(3.543307e-5,0,0,3.543307e-5,48.8189,463.9781)"
                      fill="white"
                      id="_91099376"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const challenges = [
  {
    title: 'Discovery',
    problem: 'Welche Ideen bringen unsere Strategie vorwärts?',
    solution: 'Die riskantesten Teile der Idee identifizieren',
    imageUrl: step1,
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc.',
      'Orci neque eget pellentesque.',
    ],
    buttonTitle: 'Ideen-Sprint',
  },
  {
    title: 'Validierung',
    problem:
      'Wir diskutieren seit Monaten über eine Idee und kommen nicht vorwärts.',
    solution: 'Kleine, schnelle Experimente durchführen',
    imageUrl: step2,
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc.',
      'Orci neque eget pellentesque.',
    ],
    buttonTitle: 'Validation Sprint',
  },
  {
    title: 'Umsetzung',
    problem: 'Wir brauchen 2 Jahre, um auf den Markt zu kommen.',
    solution: 'Inkrementell und datengetrieben Software (weiter-)entwickeln',
    imageUrl: step3,
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc.',
      'Orci neque eget pellentesque.',
    ],
    buttonTitle: 'MVP-Sprint',
  },
  {
    title: 'Skalierung',
    problem: 'Wie können wir die Anzahl der Nutzer verzehnfachen?',
    solution: 'Die riskantesten Teile der Idee identifizieren',
    imageUrl: step4,
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc.',
      'Orci neque eget pellentesque.',
    ],
    buttonTitle: '10x-Sprint',
  },
];

function Solution() {
  return (
    <section className="bg-white" id="solution">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-red-600 tracking-wide uppercase">
            Du glaubst Daran,
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Wir beweisen es!
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Software ohne Nutzer ist Zeitverschwendung. Da 90% aller
            Innovationen scheitern, ist eine Idee ein riskantes Vorhaben.
          </p>
          <h2 className="mt-4 text-base font-semibold text-red-600 tracking-wide uppercase">
            Lass&apos; uns die Chancen deiner Idee erhöhen, indem wir ...
          </h2>
        </div>
        <ul
          role="list"
          className="space-y-4 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:grid-cols-2 lg:gap-8"
        >
          {challenges.map((challenge) => (
            <div
              key={challenge.title}
              className="pt-8 border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
            >
              <div className="p-6 text-center">
                <h2 className="text-4xl leading-6 font-bold text-gray-900">
                  {challenge.title}
                </h2>
                <p className="mt-4 text-base italic text-gray-500">
                  &quot;{challenge.problem}&quot;
                </p>
                <div className="w-full px-8 lg:px-12">
                  <Image
                    className="object-contain w-full"
                    src={challenge.imageUrl}
                    alt={challenge.title}
                  />
                </div>
              </div>
              <div className="px-4 pb-4">
                <div className="text-center">
                  <h3 className="mt-8 text-4xl font-bold">Unsere Lösung</h3>
                  <p className="mt-4 text-base text-gray-500">
                    {challenge.solution}
                  </p>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <ul role="list" className="mt-6 space-y-4">
                    {challenge.includedFeatures.map((feature) => (
                      <li key={feature} className="flex space-x-3">
                        <CheckIcon
                          className="flex-shrink-0 h-5 w-5 text-green-500"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <a
                    href="#"
                    className="h-16 flex items-center justify-center mt-8 block w-full bg-tarent-red border border-transparent rounded-md py-2 text-lg font-semibold text-white text-center hover:bg-red-700"
                  >
                    Zum {challenge.buttonTitle}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-white" id="process">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-tarent-red tracking-wide uppercase">
            Vorgehen
          </h2>
          <h1 className="mt-1 text-4xl font-regular text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            <span className="block">
              Du <span className="font-extrabold">glaubst</span> daran,
            </span>
            <span className="block">
              Wir <span className="font-extrabold">beweisen</span> es!
            </span>
          </h1>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Ea dolor do amet ut tempor dolor deserunt non minim sint adipisicing
            aliquip irure.
          </p>
          <div className="w-full mt-12">
            <Image src={vorgehen} alt="So gehen wir vor" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
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
          In einem 30-minütigen Expertengespräch teilen wir unsere einzigartigen
          Erfahrungen als Ex-Startup-Gründer und erarbeiten mit dir Deine
          <span className="font-bold text-white"> Roadmap zu Kunde #1</span>.
        </p>
        <a
          id="cta-cta"
          href="https://meetings.hubspot.com/frederik-vosberg/innovation-sparring"
          target="_blank"
          rel="noreferrer"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-indigo-50 sm:w-auto"
        >
          Kostenloses Expertengespräch vereinbaren
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

function SuccessStories() {
  return (
    <section id="success-stories" className="bg-white py-12">
      <div className="text-center pt-8">
        <h2 className="text-base font-semibold text-tarent-red tracking-wide uppercase">
          referenzen
        </h2>
        <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Asugewählte Erfolgsgeschichten
        </h1>
        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          Ea dolor do amet ut tempor dolor deserunt non minim sint adipisicing
          aliquip irure.
        </p>
      </div>
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
        <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 lg:pr-16">
          <div className="md:flex-shrink-0">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg"
              alt="Tuple"
            />
          </div>
          <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
            <div className="relative text-lg font-medium text-black md:flex-grow">
              <svg
                className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-black">
                    Judith Black
                  </div>
                  <div className="text-base font-medium text-indigo-700">
                    CEO, Tuple
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
        <div className="py-12 px-4 border-t-2 border-gray-200 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-0 lg:pl-16">
          <div className="md:flex-shrink-0">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
              alt="Workcation"
            />
          </div>
          <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
            <div className="relative text-lg font-medium text-black md:flex-grow">
              <svg
                className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis. Nemo expedita
                voluptas culpa sapiente alias molestiae.
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-black">
                    Joseph Rodriguez
                  </div>
                  <div className="text-base font-medium text-indigo-700">
                    CEO, Workcation
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

const people = [
  {
    name: 'Timothy Krechel',
    role: 'MVP-Consultant',
    image: '/imgs/timothy-krechel-portrait.jpg',
    bio: 'Timothy hat als Ex-Startup-Gründer vor allem gelernt, wie wichtig das Hinterfragen der eigenen Idee ist. Deshalb liegt sein Fokus auf dem frühstmöglichen Validieren von Annahmen durch echtes Feedback am Markt mittels leichtgewichtiger Prototypen, die den Kernnutzen einer Idee herausstellen.',
    linkedinUrl: '#',
  },
  {
    name: 'Andrea Lüthje',
    role: 'Innovation Consultant',
    image: '/imgs/andrea-lüthje-portrait.jpg',
    bio: 'Kundenorientierung, Best Practices und erprobte Methoden helfen bei neuen Ideen und Anwendungen in kurzer Zeit einen messbaren Mehrwert zu schaffen.',
    linkedinUrl: '#',
  },
  {
    name: 'Frederik Vosberg',
    role: 'Consultant für Lean Innovation',
    image: '/imgs/frederik-vosberg-portrait.jpg',
    bio: 'Frederiks Ziel ist es, Geschäftsmodelle im Anfang so sehr zu spitzen, dass sie schnell validierbar sind mit Produkten, die so attraktiv sind, dass sie sich selbst verkaufen.',
    linkedinUrl: '#',
  },
  {
    name: 'Corinna Voß',
    role: 'Innovation Consultant & Agile Coach',
    image: '/imgs/corinna-voss-portrait.jpg',
    bio: 'Komplexe Vorhaben spornen Corinna an: Ob es um ambitionierte Ideen für akute Probleme, digitale Transformationen oder den Wandel der Unternehmenskultur geht - sie bringt den richtigen Methodenkoffer mit.',
    linkedinUrl: '#',
  },
  {
    name: 'Josua Waghubinger',
    role: 'Innovation Consultant',
    image: '/imgs/josua-waghubinger-portrait.jpg',
    bio: 'Unsere Welt ist komplex genug. Die richtige Methode und Kommunikation zu kennen, hilft, Ordnung zu schaffen - vor allem bei Innovation.',
    linkedinUrl: '#',
  },
];

function Team() {
  return (
    <section id="team" className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Über Uns
            </h2>
            <p className="text-xl text-gray-500">
              Schnell messbare Ergebnisse zu liefern, Intrapreneurship und
              Innovation zu treiben sowie ressourcenschonend zu Erkenntnissen zu
              kommen, treibt uns an.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
            >
              {people.map((person) => (
                <li key={person.name} className="sm:py-8">
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                      <img
                        className="object-cover shadow-lg rounded-lg"
                        src={person.image}
                        alt={person.name}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3>{person.name}</h3>
                          <p className="text-tarent-red">{person.role}</p>
                        </div>
                        <div className="text-lg">
                          <p className="text-gray-500">{person.bio}</p>
                        </div>
                        <ul role="list" className="flex space-x-5">
                          <li>
                            <a
                              href={person.linkedinUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">LinkedIn</span>
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
