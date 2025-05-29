import { FaPhoneAlt, FaWhatsapp, FaExternalLinkAlt } from "react-icons/fa";

export default function Footer() {
  const whatsappNumber = "918223078416"; // Country code + number
  const message = encodeURIComponent(
    "Hello, I’m interested in your garlic products!"
  );

  return (
    <footer className="bg-green-900 text-white pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Brand and Contact */}
        <div>
          <h3 className="text-2xl font-bold mb-3">G.N. Import & Export</h3>
          <p className="mb-2 text-sm">
            India’s Premium Garlic Processing Brand
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm">
            <FaPhoneAlt />
            <a
              href="tel:+918223078416"
              className="underline hover:text-yellow-300"
            >
              +91 8223078416
            </a>
          </p>
          <div className="mt-4 text-xs text-gray-300">
            Developed with ❤️ by{" "}
            <a
              href="https://www.hiddenleaftechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-yellow-300 inline-flex items-center gap-1"
            >
              Hidden Leaf Technologies <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:text-yellow-300 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-yellow-300 transition">
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Let’s Work Together</h4>
          <p className="mb-4 text-sm">
            Looking for premium garlic products in bulk?
            <br />
            We’d love to collaborate!
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 text-green-900 font-semibold py-2 px-4 rounded hover:bg-yellow-300 transition"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-green-700 mt-10 pt-4 text-xs text-center text-gray-300">
        &copy; {new Date().getFullYear()} G.N. Import & Export. All rights
        reserved.
      </div>
    </footer>
  );
}
