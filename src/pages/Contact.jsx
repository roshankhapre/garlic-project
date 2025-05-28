// pages/Contact.jsx
export default function Contact() {
  return (
    <section className="px-6 md:px-20 py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
      <form className="bg-white p-8 rounded-lg shadow-md max-w-xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border p-3 rounded-lg"
          rows="4"
        />
        <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
          Send Message
        </button>
        <div className="flex justify-center gap-6 pt-4">
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="text-green-500 hover:text-green-600 font-semibold"
            target="_blank"
          >
            WhatsApp
          </a>
          <a
            href="https://facebook.com/yourpage"
            className="text-blue-600 hover:text-blue-700 font-semibold"
            target="_blank"
          >
            Facebook
          </a>
        </div>
      </form>
    </section>
  );
}
