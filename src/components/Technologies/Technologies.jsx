import {
  FaLaravel,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";

import {
  SiMysql,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";

const technologies = [
  { icon: <FaLaravel />, name: "Laravel" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaLinux />, name: "Linux" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
];

export default function Technologies() {
  return (
    <section
      id="technologies"
      data-aos="fade-right"
      className="bg-slate-900 py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-semibold">
            Tecnologías
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Construimos con herramientas de clase mundial
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="
                bg-slate-950
                border
                border-slate-800
                rounded-2xl
                p-8
                text-center
                hover:border-cyan-500
                transition-all
                duration-500
              "
            >
              <div className="text-5xl text-cyan-400 flex justify-center mb-4">
                {tech.icon}
              </div>

              <h3 className="text-white font-medium">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}