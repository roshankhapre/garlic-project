const roadmap = [
  "R&D Lab",
  "B2B Branding",
  "Exports",
  "Cold Storage",
  "D2C Brand Launch",
];

export default function Roadmap() {
  return (
    <section className="py-16 px-4" id="roadmap">
      <h2 className="text-3xl text-center font-semibold mb-8">Our Roadmap</h2>
      <div className="flex flex-col items-center gap-6">
        {roadmap.map((step, index) => (
          <div
            key={index}
            className="relative pl-6 border-l-4 border-green-500"
          >
            <p className="text-lg">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
