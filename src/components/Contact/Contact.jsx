import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      form.current.reset();

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("EMAILJS ERROR:", error);

  alert(
    JSON.stringify(error, null, 2)
      );
    }

    setLoading(false);
  };

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
            Cuéntanos tu necesidad y te ayudaremos a construir la mejor
            solución.
          </p>
        </div>

        {success && (
          <div className="mb-6 bg-green-500/10 border border-green-500 rounded-2xl p-5">
            <p className="text-green-400 font-medium">
              🚀 Mensaje enviado correctamente.
            </p>

            <p className="text-slate-300 mt-2">
              Gracias por contactar a Novatech Digital. Te responderemos en
              menos de 24 horas hábiles.
            </p>
          </div>
        )}

        <form
          ref={form}
          onSubmit={sendEmail}
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
              name="name"
              required
              placeholder="Nombre Completo *"
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
                w-full
              "
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Correo Electrónico *"
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
                w-full
              "
            />
          </div>

          <input
            type="text"
            name="company"
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

          <input
            type="text"
            name="subject"
            required
            placeholder="Asunto *"
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

          <select
            name="service"
            required
            defaultValue=""
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
          >
            <option value="" disabled>
              Selecciona un servicio *
            </option>

            <option value="Desarrollo Web">
              Desarrollo Web
            </option>

            <option value="E-commerce">
              E-commerce
            </option>

            <option value="Automatización IA">
              Automatización IA
            </option>

            <option value="Aplicación Web">
              Aplicación Web
            </option>

            <option value="Otro">
              Otro
            </option>
          </select>

          <textarea
            rows="6"
            name="message"
            required
            minLength="20"
            placeholder="Describe tu proyecto *"
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

          <div className="space-y-4">
            <label className="flex items-start gap-3 text-slate-300 text-sm">
              <input
                type="checkbox"
                required
                className="mt-1 accent-cyan-500"
              />

              <span>
                Acepto los{" "}
                <a
                  href="/terminos-condiciones"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  Términos y Condiciones
                </a>
              </span>
            </label>

            <label className="flex items-start gap-3 text-slate-300 text-sm">
              <input
                type="checkbox"
                required
                className="mt-1 accent-cyan-500"
              />

              <span>
                Acepto la{" "}
                <a
                  href="/politica-privacidad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  Política de Privacidad
                </a>
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-cyan-500
              hover:bg-cyan-400
              disabled:opacity-60
              text-slate-950
              font-semibold
              py-4
              rounded-xl
              transition
            "
          >
            {loading ? "Enviando..." : "Solicitar Cotización"}
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
              hover:border-cyan-500
              transition
            "
          >
            <FaWhatsapp className="mx-auto text-cyan-400 text-3xl mb-4" />

            <p className="text-white font-medium">
              WhatsApp
            </p>
          </a>

          <a
            href="mailto:novatechdigital.dev@gmail.com"
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              p-6
              text-center
              hover:border-cyan-500
              transition
            "
          >
            <FaEnvelope className="mx-auto text-cyan-400 text-3xl mb-4" />

            <p className="text-white break-all">
              novatechdigital.dev@gmail.com
            </p>
          </a>

          <a
            href="tel:+573160976523"
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              p-6
              text-center
              hover:border-cyan-500
              transition
            "
          >
            <FaPhone className="mx-auto text-cyan-400 text-3xl mb-4" />

            <p className="text-white">
              +57 316 097 6523
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}