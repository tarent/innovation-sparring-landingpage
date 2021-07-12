const people = [
  {
    name: 'Frederik Vosberg',
    role: 'Consultant für Lean Innovation',
    imageUrl: '/imgs/frederik-vosberg-portrait.jpg',
    bio: 'Frederiks Ziel ist es, Geschäftsmodelle im Anfang so sehr zu spitzen, dass sie schnell validierbar sind mit Produkten, die so attraktiv sind, dass sie sich selbst verkaufen.',
  },
  {
    name: 'Timothy Krechel',
    role: 'MVP-Consultant',
    imageUrl: '/imgs/timothy-krechel-portrait.jpg',
    bio: 'Timothy hat als Ex-Startup-Gründer vor allem gelernt, wie wichtig das Hinterfragen der eigenen Idee ist. Deshalb liegt sein Fokus auf dem frühstmöglichen Validieren von Annahmen durch echtes Feedback am Markt mittels leichtgewichtiger Prototypen, die den Kernnutzen einer Idee herausstellen.',
  },
];

export default function Timorik() {
  return (
      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Wir beschleunigen Ideen
            </h2>

            <ul className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                    <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                      <img
                        className="object-cover shadow-lg rounded-lg"
                        src={person.imageUrl}
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
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  )
}
