import {
  FaLaptopCode,
  FaDatabase,
  FaUsers,
  FaRobot,
  FaGlobe,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    title: "Desarrollo de Software",
    description:
      "Creamos soluciones personalizadas adaptadas a los procesos y necesidades de cada empresa.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Sistemas ERP",
    description:
      "Centraliza la gestión de inventarios, compras, ventas, finanzas y operaciones empresariales.",
    icon: <FaDatabase />,
  },
  {
    title: "Sistemas CRM",
    description:
      "Administra clientes, oportunidades de negocio y procesos comerciales desde una sola plataforma.",
    icon: <FaUsers />,
  },
  {
    title: "Automatización de Procesos",
    description:
      "Reducimos tareas repetitivas mediante flujos automáticos que aumentan la productividad.",
    icon: <FaRobot />,
  },
  {
    title: "Aplicaciones Web",
    description:
      "Desarrollamos plataformas modernas, seguras y escalables accesibles desde cualquier dispositivo.",
    icon: <FaGlobe />,
  },
  {
    title: "Consultoría Tecnológica",
    description:
      "Acompañamos a las empresas en su transformación digital mediante estrategias tecnológicas.",
    icon: <FaChartLine />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      data-aos="fade-up"
      className="bg-slate-950 py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-20">
          <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-semibold">
            Nuestros Servicios
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Soluciones Tecnológicas para Empresas
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto">
            Diseñamos e implementamos software empresarial que optimiza
            procesos, mejora la productividad y acelera el crecimiento de las
            organizaciones.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={(index + 1) * 100}
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-8
                hover:border-cyan-500
                hover:-translate-y-2
                transition-all
                duration-500
                group
              "
            >
              <div
                className="
                  text-cyan-400
                  text-5xl
                  mb-6
                  group-hover:scale-110
                  transition
                "
              >
                {service.icon}
              </div>

              <h3 className="text-white text-2xl font-semibold mb-4">
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