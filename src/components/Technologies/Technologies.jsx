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
      data-aos="fade-down"
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
                group
                relative
                overflow-hidden
                bg-slate-950
                border
                border-slate-800
                rounded-2xl
                p-8
                text-center
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-500
                hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-300
                  bg-gradient-to-br
                  from-cyan-500/5
                  via-transparent
                  to-blue-500/5
                "
              />

              {/* Icono */}
              <div
                className="
                  relative
                  flex
                  justify-center
                  mb-4
                  text-5xl
                  text-cyan-400
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:text-cyan-300
                  group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]
                "
              >
                {tech.icon}
              </div>

              {/* Nombre */}
              <h3
                className="
                  relative
                  text-white
                  font-medium
                  transition-colors
                  duration-300
                  group-hover:text-cyan-300
                "
              >
                {tech.name}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}