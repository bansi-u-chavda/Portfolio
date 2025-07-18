import { useState } from "react";
import { cn } from "@/lib/utils";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiGraphql, SiFigma, SiVercel } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillIcons = {
    "HTML/CSS": <span className="flex gap-1 text-2xl text-orange-500"><FaHtml5 /><FaCss3Alt /></span>,
    "JavaScript": <FaJs className="text-yellow-400 text-2xl" />,
    "React": <FaReact className="text-cyan-400 text-2xl" />,
    "TypeScript": <SiTypescript className="text-blue-500 text-2xl" />,
    "Tailwind CSS": <SiTailwindcss className="text-sky-400 text-2xl" />,
    "Next.js": <SiNextdotjs className="text-black dark:text-white text-2xl" />,
    "Node.js": <FaNodeJs className="text-green-600 text-2xl" />,
    "Express": <SiExpress className="text-gray-700 dark:text-white text-2xl" />,
    "MongoDB": <SiMongodb className="text-green-700 text-2xl" />,
    "PostgreSQL": <SiPostgresql className="text-blue-700 text-2xl" />,
    "GraphQL": <SiGraphql className="text-pink-500 text-2xl" />,
    "Git/GitHub": <FaGitAlt className="text-orange-600 text-2xl" />,
    "Docker": <FaDocker className="text-blue-400 text-2xl" />,
    "Figma": <SiFigma className="text-pink-500 text-2xl" />,
    "VS Code": <VscVscode className="text-blue-500 text-2xl" />,
};


const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-primary/10 group relative overflow-hidden"
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/20 to-secondary/10 pointer-events-none blur-sm z-0" />
              <div className="flex items-center gap-2 text-left mb-4 relative z-10">
                {skillIcons[skill.name]}
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};