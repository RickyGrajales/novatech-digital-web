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

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      120;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  const menuItems = [
    {
      name: "Inicio",
      id: "inicio",
    },
    {
      name: "Servicios",
      id: "services",
    },
    {
      name: "Tecnologías",
      id: "technologies",
    },
    {
      name: "Casos de Éxito",
      id: "cases",
    },
    {
      name: "Contacto",
      id: "contact",
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
        <div className="flex items-center justify-between h-24 lg:h-28">

          {/* Logo */}
          <button
            onClick={() => scrollToSection("inicio")}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="NovaTech Digital"
              className="
                h-20
                md:h-24
                lg:h-28
                w-auto
                object-contain
                transition-all
                duration-300
                hover:scale-105
                drop-shadow-[0_0_15px_rgba(59,130,246,0.35)]
              "
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="
                  text-slate-300
                  hover:text-cyan-400
                  transition-all
                  duration-300
                  font-medium
                "
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
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
            className="
              md:hidden
              text-cyan-400
              text-3xl
              relative
              z-50
            "
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
              shadow-xl
            "
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="
                    text-left
                    text-slate-300
                    hover:text-cyan-400
                    transition
                  "
                >
                  {item.name}
                </button>
              ))}

              <button
                onClick={() => scrollToSection("contact")}
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