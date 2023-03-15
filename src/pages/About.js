const people = [
    {
      name: 'Thomas Tharakan',
      role: 'The Sidekick',
      imageUrl:
        './assets/TT.png',
    },
    {
        name: 'Wasseem Mohammad',
        role: 'The CSS Wizard',
        imageUrl:
          './assets/waseem.jpeg',
      },
      {
        name: 'Amar Malde',
        role: 'The API Guy',
        imageUrl:
          './assets/amar.png',
      },
  ]
  
  export default function About() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meet the Team behind Globetrotter
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-20 w-20 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  