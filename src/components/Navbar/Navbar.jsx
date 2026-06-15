import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/LogoNova.webp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      name: "Inicio",
      href: "#inicio",
    },
    {
      name: "Servicios",
      href: "#services",
    },
    {
      name: "Tecnologías",
      href: "#technologies",
    },
    {
      name: "Casos de Éxito",
      href: "#cases",
    },
    {
      name: "Contacto",
      href: "#contact",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-36">

          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center"
          >
            <img
              src={logo}
              alt="NovaTech Digital"
              className="
                h-32
                md:h-32
                lg:-36
                w-auto
                object-contain
                transition-all
                duration-300
                hover:scale-105
                drop-shadow-[0_0_15px_rgba(59,130,246,0.35)]
              "
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  text-slate-300
                  hover:text-cyan-400
                  transition-all
                  duration-300
                  font-medium
                "
              >
                {item.name}
              </a>
            ))}

            <button
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
              Solicitar Cotización
            </button>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}

        {isOpen && (
          <div
            className="
              md:hidden
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              p-5
              mb-5
            "
          >
            <div className="flex flex-col gap-4">

              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    text-slate-300
                    hover:text-cyan-400
                    transition
                  "
                >
                  {item.name}
                </a>
              ))}

              <button
                className="
                  mt-4
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  py-3
                  rounded-xl
                  font-semibold
                "
              >
                Solicitar Cotización
              </button>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;