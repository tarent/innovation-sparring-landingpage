/* This example requires Tailwind CSS v2.0+ */
import {
  LightBulbIcon,
  SparklesIcon,
  ChatAlt2Icon,
  CheckIcon,
} from '@heroicons/react/outline'

const features = [
  {
    name: 'Ideation & Business Modelling',
    description: 'Mit Ideation Methoden finden wir passende Produktideen für Euer Unternehmen. Durch Business Modelling stellen wir sicher, dass es sich finanziell für Euch lohnt.\n\nDiese können dann iterativ validiert und entwickelt werden, bis das Minimum Viable Product erreicht ist.',
    icon: LightBulbIcon,
  },
  {
    name: 'Product Strategy',
    description: 'Bei zu vielen Produkten geraten die Unternehmensziele aus dem Blick. Mit Vision und Strategie sorgen wir für Ziele, die dem ganzen Unternehmen Orientierung geben.\n\nSo stärken wir Teams, innerhalb der strategischen Leitplanken durch Kundenfokus richtige Entscheidungen zu treffen.',
    icon: SparklesIcon,
  },
  {
    name: 'Product Discovery',
    description: 'Eine gute Discovery stellt sicher, dass Ihr das Richtige entwickelt, bevor es richtig entwickelt wird.\n\nDie Teams erheben Nutzerbedürfnissen selbstständig. Dadurch werden sie zu Kundenexperten, die wertvolles Feedback in die Strategie zurückfließen lassen.',
    icon: ChatAlt2Icon,
  },
];

const principles = [
  {
    name: 'Agile Geschäftsmodell & Software Entwicklung',
    description: 'Agilität ist kein Selbstzweck. Nutzerbedürfnisse ändern sich schnell und der Wettbewerb entwickelt sich weiter. Deswegen müssen wir schnell veröffentlichen und immer wieder nachsteuern.',
  },
  {
    name: 'Datengetrieben',
    description: 'Was wirklich funktioniert, weiß nur der Markt. Deswegen basieren unsere Entscheidungen auf Daten, die wir erheben.',
  },
  {
    name: 'Lean',
    description: 'Wertstiftung ist unser größter Motivator.\n\nDeswegen wollen wir möglichst wenig für die Tonne programmieren. Dazu beziehen wir den Nutzer möglichst früh ein.',
  },
  {
    name: 'Pragmatisch',
    description: 'Wir sind keine Wissenschaftler sondern Entrepreneure.\n\nZiel ist es, ein ausgezeichnetes Produkt zu entwickeln und nicht, sich in Methodik zu verhaspeln oder 3 Jahre Research zu machen.',
  },
];

export default function ValueProposition() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
          Von erfolgreichen Produkten profitieren die Nutzer und das Unternehmen
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Dabei begleiten wir Dich von der Idee bis zum skalierten digitalen Produkt.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-red-500 p-3 shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500 whitespace-pre-line">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 text-left">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl tracking-tight font-bold text-gray-900">Unsere Prinzipien</h2>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
            {principles.map((principle) => (
              <div key={principle.name} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{principle.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500 whitespace-pre-line">{principle.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
