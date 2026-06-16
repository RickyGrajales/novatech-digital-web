import {
  FaRocket,
  FaCode,
  FaHeadset,
  FaChartLine,
  FaServer,
  FaBolt,
} from "react-icons/fa";

const benefits = [
  {
    title: "Desarrollo a Medida",
    icon: <FaCode />,
  },
  {
    title: "Tecnologías Modernas",
    icon: <FaRocket />,
  },
  {
    title: "Escalabilidad Empresarial",
    icon: <FaChartLine />,
  },
  {
    title: "Soporte Continuo",
    icon: <FaHeadset />,
  },
  {
    title: "Infraestructura Segura",
    icon: <FaServer />,
  },
  {
    title: "Automatización de Procesos",
    icon: <FaBolt />,
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      data-aos="fade-left"
      className="bg-slate-900 py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-semibold">
            Beneficios
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            ¿Por qué elegir NovaTech Digital?
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {benefits.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={(index + 1) * 100}
              className="
                bg-slate-950
                border
                border-slate-800
                rounded-3xl
                p-8
                text-center
                hover:border-cyan-500
                transition-all
                duration-500
              "
            >
              <div className="text-cyan-400 text-5xl mb-6 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-white text-xl font-semibold">
                {item.title}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}