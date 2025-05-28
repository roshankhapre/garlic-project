// components/LeadershipTeam.jsx
const leaders = [
  {
    name: "Kiran Rajole",
    role: "Founder & Owner",
    color: "purple",
    description:
      "Rooted in agriculture, she leads with vision and passion for pure food production.",
  },
  {
    name: "Keshav Kalmodiya",
    role: "CEO",
    color: "green",
    description:
      "The strategic mind behind automation and scaling the business to new heights.",
  },
  {
    name: "Kunal Kalmodiya",
    role: "General Manager",
    color: "blue",
    description:
      "Handles operations with precision, ensuring consistent quality and delivery.",
  },
];

export default function LeadershipTeam() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12">Leadership Team</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {leaders.map((leader, i) => (
          <div
            key={i}
            className={`border-t-4 border-${leader.color}-500 bg-gray-50 p-6 rounded-xl shadow-md`}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {leader.name}
            </h3>
            <h4 className="text-sm text-gray-600 mb-4">{leader.role}</h4>
            <p className="text-gray-700">{leader.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
