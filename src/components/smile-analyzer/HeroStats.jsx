function HeroStats() {
  const stats = [
    {
      number: "5000+",
      label: "Happy Patients",
    },
    {
      number: "98%",
      label: "AI Accuracy",
    },
    {
      number: "15+",
      label: "Years Experience",
    },
    {
      number: "4.9",
      label: "Patient Rating",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-slate-700/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-400 transition duration-300"
        >
          <h3 className="text-4xl font-bold text-cyan-400">
            {item.number}
          </h3>

          <p className="text-gray-300 mt-2">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default HeroStats;