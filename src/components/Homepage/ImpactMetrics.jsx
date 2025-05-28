const metrics = [
  { label: "Buyers", value: "500+", icon: "🤝" },
  { label: "Acres Sourced", value: "100+", icon: "🌾" },
  { label: "On-Time Dispatch", value: "98%", icon: "🚚" },
];

export default function ImpactMetrics() {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-10">Our Impact</h2>
      <div className="flex justify-center gap-12">
        {metrics.map((m, i) => (
          <div key={i} className="text-lg">
            <div className="text-4xl mb-2">{m.icon}</div>
            <div className="font-bold">{m.value}</div>
            <div>{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
