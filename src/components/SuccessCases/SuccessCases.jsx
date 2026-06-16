import {
  FaDatabase,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";

const cases = [
  {
    title: "ERP Empresarial",
    problem:
      "Procesos administrativos dispersos y dependencia excesiva de hojas de cálculo.",
    solution:
      "Desarrollo de una plataforma ERP centralizada para inventarios, compras y proyectos.",
    result:
      "Mayor control operativo y reducción significativa de tareas manuales.",
    icon: <FaDatabase />,
  },
  {
    title: "CRM Comercial",
    problem:
      "Falta de seguimiento adecuado a clientes potenciales y oportunidades.",
    solution:
      "Implementación de un CRM personalizado para gestionar el ciclo comercial.",
    result:
      "Mejor organización de ventas y aumento de productividad comercial.",
    icon: <FaUsers />,
  },
  {
    title: "Portal Corporativo",
    problem:
      "Baja presencia digital y escasa captación de clientes por internet.",
    solution:
      "Desarrollo de un portal corporativo optimizado para SEO y conversión.",
    result:
      "Mayor visibilidad online y generación constante de oportunidades.",
    icon: <FaGlobe />,
  },
];

export default function SuccessCases() {
  return (
    <section
      id="cases"
      data-aos="fade-up"
      className="bg-slate-950 py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-semibold">
            Casos de Éxito
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Soluciones que generan resultados
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto">
            Diseñamos software enfocado en optimizar procesos,
            aumentar productividad y acelerar el crecimiento empresarial.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {cases.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
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
              <div className="text-cyan-400 text-5xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-white text-2xl font-semibold mb-6">
                {item.title}
              </h3>

              <div className="space-y-6">

                <div>
                  <h4 className="text-red-400 font-semibold mb-2">
                    Problema
                  </h4>

                  <p className="text-slate-400">
                    {item.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-yellow-400 font-semibold mb-2">
                    Solución
                  </h4>

                  <p className="text-slate-400">
                    {item.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-green-400 font-semibold mb-2">
                    Resultado
                  </h4>

                  <p className="text-white">
                    {item.result}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}