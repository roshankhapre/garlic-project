import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const whatsappNumber = "918223078416";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Compose the WhatsApp message with line breaks encoded as %0A
    const whatsappText = `Hello, I’m interested in your garlic products.%0A%0AName: ${encodeURIComponent(
      name
    )}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(
      message
    )}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

    // Open WhatsApp chat with pre-filled message
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="px-6 md:px-20 py-20 bg-gradient-to-br from-gray-100 to-green-50">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-10">
        Contact Us
      </h2>

      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition"
          >
            Send via WhatsApp
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          Prefer direct message?{" "}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="text-green-600 font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp <FaWhatsapp className="inline ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
