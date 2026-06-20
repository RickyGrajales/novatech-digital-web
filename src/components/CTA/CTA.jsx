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
  onClick={() => {
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
  className="
    bg-blue-600
    hover:bg-blue-700
    text-white
    px-6
    py-3
    rounded-xl
    font-semibold
    transition-all
    duration-300
    hover:scale-105
    shadow-lg
  "
>
  Solicitar Diagnóstico
</button>
      </div>
    </section>
  );
}