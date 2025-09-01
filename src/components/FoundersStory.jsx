// components/FoundersStory.jsx
export default function FoundersStory() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12">Founders' Story</h2>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Kiran Rajole */}
        <div className="p-6 rounded-xl bg-gray-50 shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-4 text-purple-700">
            Kiran Rajole
          </h3>
          <p className="text-gray-700">
            With deep roots in agriculture, Kiran envisioned a garlic brand
            rooted in purity and hygiene. She transformed her passion for
            farming into a mission-driven company.
          </p>
        </div>
      </div>
    </section>
  );
}
