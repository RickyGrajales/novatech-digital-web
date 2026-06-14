import {
  FaBolt,
  FaChartLine,
  FaShieldAlt,
  FaCog,
} from "react-icons/fa";

const benefits = [
  "Automatización de procesos",
  "Reducción de costos operativos",
  "Mayor productividad",
  "Escalabilidad empresarial",
  "Seguridad de la información",
  "Toma de decisiones basada en datos",
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="bg-slate-900 py-28 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-semibold">
            Beneficios
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Tecnología que impulsa el crecimiento
          </h2>

          <p className="text-slate-400 mt-6 text-lg">
            Implementamos soluciones enfocadas en mejorar la eficiencia
            operativa y fortalecer la competitividad empresarial.
          </p>

          <div className="mt-10 space-y-5">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <FaBolt />
                </div>

                <span className="text-white text-lg">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-950 rounded-3xl p-8 border border-slate-800">
            <FaChartLine className="text-cyan-400 text-4xl mb-4" />
            <h3 className="text-white font-semibold">
              Crecimiento
            </h3>
          </div>

          <div className="bg-slate-950 rounded-3xl p-8 border border-slate-800">
            <FaShieldAlt className="text-cyan-400 text-4xl mb-4" />
            <h3 className="text-white font-semibold">
              Seguridad
            </h3>
          </div>

          <div className="bg-slate-950 rounded-3xl p-8 border border-slate-800">
            <FaCog className="text-cyan-400 text-4xl mb-4" />
            <h3 className="text-white font-semibold">
              Automatización
            </h3>
          </div>

          <div className="bg-slate-950 rounded-3xl p-8 border border-slate-800">
            <FaBolt className="text-cyan-400 text-4xl mb-4" />
            <h3 className="text-white font-semibold">
              Eficiencia
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}