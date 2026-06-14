import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phone = "573160976523";

  const message =
    "Hola, estoy interesado en los servicios de desarrollo de software de NovaTech Digital.";

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        justify-center
        w-16
        h-16
        rounded-full
        bg-green-500
        text-white
        shadow-2xl
        hover:scale-110
        transition-all
        duration-300
      "
    >
      <FaWhatsapp size={32} />
    </a>
  );
}

export default WhatsAppButton;