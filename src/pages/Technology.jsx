function Technology() {
  const technologies = [
    {
      title: "Digital X-Ray",
      description:
        "High precision imaging with lower radiation exposure.",
    },
    {
      title: "AI Diagnostics",
      description:
        "Advanced analysis for faster and accurate diagnosis.",
    },
    {
      title: "3D Smile Design",
      description:
        "Preview your future smile before treatment begins.",
    },
    {
      title: "Intraoral Scanner",
      description:
        "Comfortable digital impressions with maximum accuracy.",
    },
    {
      title: "Laser Dentistry",
      description:
        "Minimally invasive procedures with faster healing.",
    },
    {
      title: "CAD/CAM Technology",
      description:
        "Same-day restorations with high precision.",
    },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="bg-slate-900 text-white py-20 px-10">
        <div className="max-w-6xl mx-auto">
          <span className="text-cyan-400 font-semibold">
            INNOVATION FOR BETTER SMILES
          </span>

          <h1 className="text-5xl font-bold mt-4 mb-6">
            Technology That Creates Better Smiles
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mb-10">
            Experience the future of dentistry through precision,
            innovation and patient comfort.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="text-2xl font-bold">5000+</h3>
              <p>Happy Patients</p>
            </div>

            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="text-2xl font-bold">15+</h3>
              <p>Years Experience</p>
            </div>

            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="text-2xl font-bold">10000+</h3>
              <p>Treatments</p>
            </div>

            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="text-2xl font-bold">4.9</h3>
              <p>Patient Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY CARDS */}
      <section className="py-20 px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Our Advanced Technology
          </h2>

          <p className="text-center text-gray-600 mb-12">
            Modern tools designed to improve precision and patient comfort.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {technologies.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            How Our Technology Works
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-cyan-500 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>

              <h3 className="font-bold mb-2">
                Digital Scan
              </h3>

              <p className="text-gray-600">
                Detailed imaging for diagnosis.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-cyan-500 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>

              <h3 className="font-bold mb-2">
                AI Analysis
              </h3>

              <p className="text-gray-600">
                Smart treatment recommendations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-cyan-500 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>

              <h3 className="font-bold mb-2">
                Treatment Plan
              </h3>

              <p className="text-gray-600">
                Personalized dental planning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-cyan-500 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>

              <h3 className="font-bold mb-2">
                Smile Transformation
              </h3>

              <p className="text-gray-600">
                Advanced treatment execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-slate-900 text-white py-20 px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Benefits of Modern Dentistry
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-bold mb-3">
                Higher Accuracy
              </h3>
              <p>More precise diagnoses and treatments.</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-bold mb-3">
                Faster Recovery
              </h3>
              <p>Less discomfort and quicker healing.</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-bold mb-3">
                Better Results
              </h3>
              <p>Improved patient outcomes and satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-10 text-center bg-cyan-50">
        <h2 className="text-4xl font-bold mb-4">
          Ready To Experience Advanced Dental Care?
        </h2>

        <p className="text-gray-600 mb-8">
          Book your visit and discover the difference.
        </p>

        <button className="bg-cyan-500 text-white px-8 py-4 rounded-lg">
          Book Appointment
        </button>
      </section>
    </div>
  );
}

export default Technology;