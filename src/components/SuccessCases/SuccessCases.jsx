import { FaArrowUp, FaClock, FaDollarSign } from "react-icons/fa";

const cases = [
  {
    title: "ERP para Constructora",
    description:
      "Centralización de compras, inventario y control de proyectos.",
    result: "40% reducción de tiempos administrativos",
    icon: <FaClock />,
  },
  {
    title: "CRM Comercial",
    description:
      "Automatización del seguimiento de clientes y oportunidades.",
    result: "35% incremento en conversiones",
    icon: <FaArrowUp />,
  },
  {
    title: "Sistema de Inventarios",
    description:
      "Control de stock en tiempo real para múltiples sedes.",
    result: "25% reducción de pérdidas operativas",
    icon: <FaDollarSign />,
  },
];

export default function SuccessCases() {
  return (
    <section
      id="cases"
      data-aos="zoom-in"
      className="bg-slate-950 py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-semibold">
            Casos de Éxito
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Resultados que generan impacto
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto">
            Cada solución desarrollada busca generar eficiencia, crecimiento y
            ventajas competitivas medibles.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div
              key={index}
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-8
                hover:border-cyan-500
                transition-all
                duration-500
              "
            >
              <div className="text-cyan-400 text-3xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-white text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-slate-400 mb-6">
                {item.description}
              </p>

              <div className="border-t border-slate-800 pt-6">
                <span className="text-cyan-400 font-semibold">
                  Resultado:
                </span>

                <p className="text-white mt-2">
                  {item.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}