export default function Hero() {
  return (
      <>
        <div className="relative bg-white overflow-hidden">
          <div className="hidden lg:block lg:absolute lg:inset-0">
            <svg className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8" width={640} height={784} fill="none" viewBox="0 0 640 784"><defs><pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x={118} y={0} width={20} height={20} patternUnits="userSpaceOnUse"><rect className="text-gray-200" x={0} y={0} width={4} height={4} fill="currentColor" /></pattern></defs><rect className="text-gray-50" y={72} width={640} height={640} fill="currentColor" /><rect x={118} width={404} height={784} fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" /></svg></div>
          <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">

            <main className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24"><div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                  <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                    <span className="mr-1">Durch Prototypen</span>
                    <br className="hidden md:inline" /><span className="text-tarent-red">Visionen erlebbar machen</span>
                  </h2>
                  <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                    Ab einem gewissen Zeitpunkt ergibt es keinen Sinn mehr immer nur über die Idee zu sprechen. Sobald sie erlebbar wird, ist der Austausch viel plastischer und die Idee kann verprobt und ausprobiert werden, ohne die Entwicklungskosten direkt investieren zu müssen.
                  </p>
                  <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="#cta"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-tarent-red hover:bg-tarent-red-700 md:py-4 md:text-lg md:px-10"
                      >
                        Was für einen Prototypen brauchst Du?
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                  <svg className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden" width={640} height={784} fill="none" viewBox="0 0 640 784"><defs><pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x={118} y={0} width={20} height={20} patternUnits="userSpaceOnUse"><rect className="text-gray-200" x={0} y={0} width={4} height={4} fill="currentColor" /></pattern></defs><rect className="text-gray-50" y={72} width={640} height={640} fill="currentColor" /><rect x={118} width={404} height={784} fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" /></svg><div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                      <img className="w-full relative block" src="imgs/robo.png" alt="Roboter Prototype" />
                  </div>
                </div>
              </div>
          </main>
        </div>
      </div>
    </>
  )
}
