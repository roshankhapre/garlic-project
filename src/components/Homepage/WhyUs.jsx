const reasons = [
  "Hygiene",
  "Automation",
  "Skilled Workforce",
  "Quality Assurance",
  "Transparent Sourcing",
  "Flexible Packaging",
];

export default function WhyUs() {
  return (
    <section className="bg-gray-50 py-16 px-4" id="why-us">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">Why Choose Us</h2>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reasons.map((reason, idx) => (
          <div key={idx} className="bg-white p-6 rounded shadow text-center">
            <div className="text-3xl mb-2">🧄</div>
            <p>{reason}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
