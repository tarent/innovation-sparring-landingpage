export default function TypesOfPrototypes() {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Verschiedene Arten von Prototypen
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">Je nach Situation bieten sich verschiedene Arten von Prototypen an. Grundsätzlich lässt sich aber sagen, dass die Prototypen mit steigender  Reife einer Idee auch langsam aufwändiger werden sollten.</p>
        </div>

        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src="imgs/sketch.png" alt="Sketch Prototyping" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm leading-5 font-medium text-tarent-red">Sketch-Prototyping</p>
                <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">Zeichnen &amp; Basteln</h3>
                <p className="mt-3 text-base leading-6 text-gray-500">Gerade in der ersten Phase einer Idee geht es darum sich zu sortieren und einen konsistenten Faden in der Geschichte zu finden. Hier geht es nicht um Gestaltung, sondern darum schnell seine Idee kommunizieren zu können.
                  Deshalb finden diese Arten von Prototypen gerne Anwendung in Workshops, aber auch um Sondierungstermine mit dem Team oder Stakeholdern vorzubereiten.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src="imgs/digital.png" alt="Digital Prototyping" /></div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm leading-5 font-medium text-tarent-red">Digital Prototyping</p>
                <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">Clickdummies mit Figma &amp; Co.</h3>
                <p className="mt-3 text-base leading-6 text-gray-500">Wenn es notwendig wird die Übergange zwischen den verschiedenen Zuständen einer App zu visualisieren, oder einen Prototypen das erste mal auf einem Smartphone auszuprobieren, müssen digitale Prototypen entwickelt werden. Diese erfordern aber keinerlei Programmierkenntnisse und können mit Programmen wie Figma sehr schnell entwickelt und angepasst werden.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src="imgs/nativ.png" alt="Native Prototyping" /></div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm leading-5 font-medium text-tarent-red">Native Prototyping</p>
                <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">Schnell programmierte Prototypen</h3>
                <p className="mt-3 text-base leading-6 text-gray-500">Wenn es relevant wird zu überprüfen, wie sich Prototypen in den Prozee der Nutzer einbetten, komplexere Logik vertestet werden soll, oder Funktionen von Endgeräten wie die Kamera notwendig sind, muss ein Prototyp entwickelt werden.
                  Der Fokus liegt aber hier auf der Benutzung und nicht auf der Wartbarkeit von Code oder dem Abdecken von Randfällen. Dadurch können sie deutlich schneller entwickelt werden.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
