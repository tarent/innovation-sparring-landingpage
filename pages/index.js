import Head from 'next/head'
import { Fragment } from 'react'
import { Popover } from '@headlessui/react'
import Logo from '../imgs/tarent-logo.png';
import InnovativeAppComponents from '../imgs/innovative-app-components.png';
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative bg-gray-50">
      <Head>
        <title>Innovation Sparring | tarent</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Popover className="relative bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <Image
                      className="h-8 w-auto sm:h-10"
                      src={Logo}
                      alt="tarent Logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </Popover>

      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Dein Produkt</span>{' '}
              <span className="block text-tarent-red xl:inline">erfolgreich am Markt.</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
Wochenlange Beratung wird schnell teuer. Deswegen helfen wir Dir in nur 3 kurzen Sessions, deine internen Ressourcen viel effizienter zu nutzen - indem wir deine Innovation bewerten, ihren Fokus schärfen und dir helfen die riskantesten Annahmen zu validieren.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-tarent-red hover:bg-tarent-red-700 md:py-4 md:text-lg md:px-10"
                >
                  Vereinbare Dein Sparring
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src={InnovativeAppComponents}
            alt="Componentes of an innovative Idea"
          />
        </div>
      </main>
    </div>
  )
}
