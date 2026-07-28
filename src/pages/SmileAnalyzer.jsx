function SmileAnalyzer() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-10">
        <div className="max-w-6xl mx-auto">
          <span className="text-cyan-400 font-semibold">
            AI SMILE ANALYZER
          </span>

          <h1 className="text-5xl font-bold mt-4 mb-6">
            Discover Your Best Smile
          </h1>

          <p className="text-gray-300 max-w-2xl">
            Upload a photo and explore how modern dental solutions
            can improve your smile.
          </p>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-20 px-10 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Upload Your Smile
          </h2>

          <div className="border-2 border-dashed border-cyan-400 p-16 rounded-xl">
            <p className="text-gray-600 mb-4">
              Drag and drop an image or click below
            </p>

            <input
              type="file"
              className="border p-3 rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Analysis Results */}
      <section className="py-20 px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Smile Analysis Preview
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold">Smile Score</h3>
              <p className="text-cyan-500 text-3xl mt-2">92%</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold">Alignment</h3>
              <p className="text-cyan-500 text-3xl mt-2">88%</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold">Whitening</h3>
              <p className="text-cyan-500 text-3xl mt-2">80%</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold">Oral Health</h3>
              <p className="text-cyan-500 text-3xl mt-2">95%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-20 px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Recommended Treatments
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="font-bold mb-2">
                Professional Whitening
              </h3>
              <p>Improve smile brightness and appearance.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="font-bold mb-2">
                Aligners
              </h3>
              <p>Straighten teeth comfortably and effectively.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="font-bold mb-2">
                Smile Makeover
              </h3>
              <p>Create a complete smile transformation plan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-900 text-white py-20 px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">
            Why Use Our AI Analyzer?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-xl">
              Instant Assessment
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              Personalized Suggestions
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              Modern Technology
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cyan-50 py-20 px-10 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready To Transform Your Smile?
        </h2>

        <p className="text-gray-600 mb-8">
          Book a consultation with our dental experts.
        </p>

        <button className="bg-cyan-500 text-white px-8 py-4 rounded-lg">
          Book Consultation
        </button>
      </section>
    </div>
  );
}

export default SmileAnalyzer;