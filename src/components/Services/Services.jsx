import {
  FaCode,
  FaChartLine,
  FaUsers,
  FaRobot,
  FaLaptopCode,
  FaLightbulb,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Desarrollo de Software",
    description:
      "Construimos soluciones personalizadas alineadas con los procesos y objetivos de su organización.",
  },
  {
    icon: <FaChartLine />,
    title: "ERP Empresarial",
    description:
      "Centralice operaciones, optimice recursos y obtenga control total sobre su empresa.",
  },
  {
    icon: <FaUsers />,
    title: "CRM Empresarial",
    description:
      "Gestione clientes, oportunidades comerciales y aumente sus conversiones.",
  },
  {
    icon: <FaRobot />,
    title: "Automatización de Procesos",
    description:
      "Elimine tareas repetitivas y aumente la eficiencia operativa mediante tecnología.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Aplicaciones Web",
    description:
      "Desarrollamos plataformas modernas, seguras y escalables para cualquier industria.",
  },
  {
    icon: <FaLightbulb />,
    title: "Consultoría Tecnológica",
    description:
      "Acompañamos la transformación digital de su organización con visión estratégica.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      data-aos="fade-up"
      className="relative bg-slate-950 py-28 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-semibold">
            Soluciones Empresariales
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Tecnología diseñada para impulsar
            <span className="text-cyan-400"> resultados reales</span>
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto text-lg">
            Ayudamos a organizaciones a optimizar procesos, reducir costos y
            acelerar su crecimiento mediante soluciones tecnológicas
            personalizadas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group
                bg-slate-900/70
                backdrop-blur-md
                border border-slate-800
                rounded-2xl
                p-8
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-cyan-500
                hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]
              "
            >
              <div
                className="
                  w-16 h-16
                  rounded-xl
                  flex items-center justify-center
                  bg-cyan-500/10
                  text-cyan-400
                  text-3xl
                  mb-6
                  transition-all
                  duration-500
                  group-hover:scale-110
                "
              >
                {service.icon}
              </div>

              <h3 className="text-white text-xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}