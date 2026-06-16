export default function CTA() {
  return (
    <section 
    data-aos="fade-up"
    className="py-28 px-6 bg-gradient-to-r from-cyan-600 to-blue-700">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          Transforme su empresa con tecnología
        </h2>

        <p className="text-white/80 text-xl mt-6 max-w-3xl mx-auto">
          Descubra cómo NovaTech Digital puede optimizar sus procesos,
          automatizar operaciones y acelerar el crecimiento de su organización.
        </p>

        <button
          className="
            mt-10
            bg-white
            text-slate-900
            px-8
            py-4
            rounded-xl
            font-semibold
            hover:scale-105
            transition
          "
        >
          Solicitar Diagnóstico Gratuito
        </button>
      </div>
    </section>
  );
}