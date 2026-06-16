import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="bg-slate-950 py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">

          <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-semibold">
            Contacto
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Hablemos de tu próximo proyecto
          </h2>

          <p className="text-slate-400 mt-6">
            Cuéntanos tu necesidad y te ayudaremos a construir la mejor solución.
          </p>

        </div>

        <form
          data-aos="fade-up"
          data-aos-delay="200"
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            p-10
            space-y-6
          "
        >
          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Nombre Completo"
              className="
                bg-slate-950
                border
                border-slate-700
                rounded-xl
                px-5
                py-4
                text-white
                outline-none
                focus:border-cyan-500
              "
            />

            <input
              type="email"
              placeholder="Correo Electrónico"
              className="
                bg-slate-950
                border
                border-slate-700
                rounded-xl
                px-5
                py-4
                text-white
                outline-none
                focus:border-cyan-500
              "
            />

          </div>

          <input
            type="text"
            placeholder="Empresa"
            className="
              w-full
              bg-slate-950
              border
              border-slate-700
              rounded-xl
              px-5
              py-4
              text-white
              outline-none
              focus:border-cyan-500
            "
          />

          <textarea
            rows="6"
            placeholder="Describe tu proyecto..."
            className="
              w-full
              bg-slate-950
              border
              border-slate-700
              rounded-xl
              px-5
              py-4
              text-white
              outline-none
              focus:border-cyan-500
            "
          />

          <button
            type="submit"
            className="
              w-full
              bg-cyan-500
              hover:bg-cyan-400
              text-slate-950
              font-semibold
              py-4
              rounded-xl
              transition
            "
          >
            Solicitar Cotización
          </button>
        </form>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <a
            href="https://wa.me/573160976523"
            target="_blank"
            rel="noreferrer"
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              p-6
              text-center
            "
          >
            <FaWhatsapp className="mx-auto text-cyan-400 text-3xl mb-4" />
            <p className="text-white">WhatsApp</p>
          </a>

          <div
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              p-6
              text-center
            "
          >
            <FaEnvelope className="mx-auto text-cyan-400 text-3xl mb-4" />
            <p className="text-white">
              luisgrajales713@gmail.com
            </p>
          </div>

          <div
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              p-6
              text-center
            "
          >
            <FaPhone className="mx-auto text-cyan-400 text-3xl mb-4" />
            <p className="text-white">
              +57 316 097 6523
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}