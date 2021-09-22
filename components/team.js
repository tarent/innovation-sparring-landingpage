const people = [
  {
    name: 'Frederik Vosberg',
    role: 'Consultant für Lean Innovation',
    image: '/imgs/frederik-vosberg-portrait.jpg',
    bio: 'Frederiks Ziel ist es, Geschäftsmodelle im Anfang so sehr zu spitzen, dass sie schnell validierbar sind mit Produkten, die so attraktiv sind, dass sie sich selbst verkaufen.',
  },
  {
    name: 'Timothy Krechel',
    role: 'MVP-Consultant',
    image: '/imgs/timothy-krechel-portrait.jpg',
    bio: 'Timothy hat als Ex-Startup-Gründer vor allem gelernt, wie wichtig das Hinterfragen der eigenen Idee ist. Deshalb liegt sein Fokus auf dem frühstmöglichen Validieren von Annahmen durch echtes Feedback am Markt mittels leichtgewichtiger Prototypen, die den Kernnutzen einer Idee herausstellen.',
  },
  {
    name: 'Andrea Lüthje',
    role: 'Innovation Consultant',
    image: '/imgs/andrea-lüthje-portrait.jpg',
    bio: 'Kundenorientierung, Best Practices und erprobte Methoden helfen bei neuen Ideen und Anwendungen in kurzer Zeit einen messbaren Mehrwert zu schaffen.',
  },
  {
    name: 'Corinna Voß',
    role: 'Innovation Consultant & Agile Coach',
    image: '/imgs/corinna-voss-portrait.jpg',
    bio: 'Komplexe Vorhaben spornen Corinna an: Ob es um ambitionierte Ideen für akute Probleme, digitale Transformationen oder den Wandel der Unternehmenskultur geht - sie bringt den richtigen Methodenkoffer mit.',
  },
  {
    name: 'Josua Waghubinger',
    role: 'Innovation Consultant',
    image: '/imgs/josua-waghubinger-portrait.jpg',
    bio: 'Unsere Welt ist komplex genug. Die richtige Methode und Kommunikation zu kennen, hilft, Ordnung zu schaffen - vor allem bei Innovation.',
  },
];

export default function Team() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Wir machen Meilen
          </h2>
          <ul className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
            {people.map((person, i) => (
              <Person key={i} person={person} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const Person = ({ person }) => (
  <li key={person.name}>
    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
      <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
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
        </div>
      </div>
    </div>
  </li>
);
