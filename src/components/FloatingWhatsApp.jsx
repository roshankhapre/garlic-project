import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Hello! I'm interested in your garlic products."
  );
  return (
    <a
      href={`https://wa.me/918223078416?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 z-50"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}
