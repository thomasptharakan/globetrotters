import TeamCard from "../components/TeamCard";
import AmarImg from "../assets/images/amar.png";
import TTImg from "../assets/images/TT.png";
import WaseemImg from "../assets/images/waseem.jpeg";

const people = [
  {
    name: "Thomas Tharakan",
    role: "The Sidekick",
    imageUrl: TTImg,
    github: "https://github.com/thomasptharakan",
    linkedin: "https://uk.linkedin.com/in/thomastharakan",
  },
  {
    name: "Wasseem Mohammad",
    role: "The CSS Wizard",
    imageUrl: WaseemImg,
    github: "https://github.com/wmohammad83",
    linkedin: "https://uk.linkedin.com/in/waseem-mohammad-a587061b2",
  },
  {
    name: "Amar Malde",
    role: "The API Guy",
    imageUrl: AmarImg,
    github: "https://github.com/AmarMalde",
    linkedin: "https://uk.linkedin.com/in/amar-malde-61a867150",
  },
];

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-18">
      <div className="">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Meet our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-secondary text-center">
            Meet the Team behind Globetrotter
          </p>
        </div>

      <div className="container mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {people.map((person) => (
          <TeamCard
            name={person.name}
            role={person.role}
            image={person.imageUrl}
            github={person.github}
            linkedin={person.linkedin}
          />
        ))}
      </div>
    </div>
  );
}
