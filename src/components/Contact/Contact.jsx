import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-semibold">
            Contacto
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Hablemos de su próximo proyecto
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Estamos listos para ayudarle a transformar procesos empresariales mediante tecnología e innovación.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          <div className="space-y-8">

            <div className="flex gap-5">
              <FaEnvelope className="text-cyan-400 text-2xl mt-1" />
              <div>
                <h3 className="text-white font-semibold">
                  Correo Electrónico
                </h3>

                <p className="text-slate-400">
                  contacto@novatechdigital.com
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <FaPhoneAlt className="text-cyan-400 text-2xl mt-1" />
              <div>
                <h3 className="text-white font-semibold">
                  Teléfono
                </h3>

                <p className="text-slate-400">
                  +57 300 000 0000
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <FaMapMarkerAlt className="text-cyan-400 text-2xl mt-1" />
              <div>
                <h3 className="text-white font-semibold">
                  Ubicación
                </h3>

                <p className="text-slate-400">
                  Colombia
                </p>
              </div>
            </div>

          </div>

          <form
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-3xl
              p-8
              space-y-6
            "
          >
            <input
              type="text"
              placeholder="Nombre Completo"
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white"
            />

            <input
              type="text"
              placeholder="Empresa"
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white"
            />

            <input
              type="email"
              placeholder="Correo Electrónico"
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white"
            />

            <input
              type="tel"
              placeholder="Teléfono"
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white"
            />

            <textarea
              rows="5"
              placeholder="Cuéntenos sobre su proyecto"
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white"
            />

            <button
              type="submit"
              className="
                w-full
                bg-cyan-500
                hover:bg-cyan-600
                text-white
                font-semibold
                py-4
                rounded-xl
                transition
              "
            >
              Solicitar Diagnóstico
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}