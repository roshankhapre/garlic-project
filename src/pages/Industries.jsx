// pages/Industries.jsx
const industries = [
  "Restaurants & Hotels",
  "Packaged Food Industries",
  "Spices and Condiments Brands",
  "Ready-to-eat Meal Producers",
  "Online Grocery Stores",
  "FMCG Manufacturers",
  "International Exporters",
];

export default function Industries() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Industries We Serve
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {industries.map((industry, idx) => (
          <div
            key={idx}
            className="bg-gray-50 p-6 text-center rounded-lg shadow hover:shadow-lg transition"
          >
            <p className="text-lg font-medium text-gray-800">{industry}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
