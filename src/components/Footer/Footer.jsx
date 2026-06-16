import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
     data-aos="fade-up"
    className="bg-black border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          <div>
            <h3 className="text-white text-2xl font-bold">
              NovaTech Digital
            </h3>

            <p className="text-slate-400 mt-4">
              Transformamos procesos empresariales mediante tecnología e innovación.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Servicios
            </h4>

            <ul className="space-y-2 text-slate-400">
              <li>Software a Medida</li>
              <li>ERP Empresarial</li>
              <li>CRM Empresarial</li>
              <li>Automatización</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Tecnologías
            </h4>

            <ul className="space-y-2 text-slate-400">
              <li>Laravel</li>
              <li>React</li>
              <li>MySQL</li>
              <li>Docker</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Redes Sociales
            </h4>

            <div className="flex gap-4 text-cyan-400 text-2xl">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <FaGithub />
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
          © {new Date().getFullYear()} NovaTech Digital.
          Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}