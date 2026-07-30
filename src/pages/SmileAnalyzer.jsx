import heroSmile from "../assets/images/smile-analyzer/hero-smile.jpg";
import UploadSection from "../components/smile-analyzer/UploadSection";

function SmileAnalyzer() {
  return (
    <div>

      {/* ================= HERO ================= */}

      <section className="bg-slate-900 text-white py-20 px-6 lg:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="inline-block bg-cyan-500/20 text-cyan-400 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              AI POWERED SMILE ANALYSIS
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Discover Your
              <span className="block text-cyan-400">
                Perfect Smile
              </span>
              with AI
            </h1>

            <p className="text-gray-300 text-lg max-w-xl mb-10">
              Upload a photo of your smile and receive personalized dental
              insights powered by advanced AI technology.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">
                <h3 className="text-2xl font-bold text-cyan-400">5000+</h3>
                <p className="text-gray-300 text-sm">Happy Patients</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">
                <h3 className="text-2xl font-bold text-cyan-400">98%</h3>
                <p className="text-gray-300 text-sm">AI Accuracy</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">
                <h3 className="text-2xl font-bold text-cyan-400">15+</h3>
                <p className="text-gray-300 text-sm">Years Experience</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">
                <h3 className="text-2xl font-bold text-cyan-400">4.9</h3>
                <p className="text-gray-300 text-sm">Patient Rating</p>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="relative flex justify-center">

            <img
              src={heroSmile}
              alt="AI Smile Analysis"
              className="w-full max-w-xl rounded-3xl shadow-2xl"
            />

          </div>

        </div>
      </section>

      {/* ================= Upload Section ================= */}

      <UploadSection />

      {/* ================= Results ================= */}

      <section className="py-20 px-10 bg-gray-50">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Smile Analysis Preview
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold">Smile Score</h3>
              <p className="text-cyan-500 text-3xl mt-3">92%</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold">Alignment</h3>
              <p className="text-cyan-500 text-3xl mt-3">88%</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold">Whitening</h3>
              <p className="text-cyan-500 text-3xl mt-3">80%</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold">Oral Health</h3>
              <p className="text-cyan-500 text-3xl mt-3">95%</p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= Recommendations ================= */}

      <section className="py-20 px-10 bg-white">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-10">
            Recommended Treatments
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-gray-50 rounded-2xl shadow-lg p-6">
              <h3 className="font-bold mb-3">Professional Whitening</h3>
              <p>Improve smile brightness and appearance.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-lg p-6">
              <h3 className="font-bold mb-3">Aligners</h3>
              <p>Straighten teeth comfortably and effectively.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-lg p-6">
              <h3 className="font-bold mb-3">Smile Makeover</h3>
              <p>Create a complete smile transformation plan.</p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= Benefits ================= */}

      <section className="bg-slate-900 text-white py-20 px-10">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-10">
            Why Use Our AI Analyzer?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/10 rounded-2xl p-8">
              Instant Assessment
            </div>

            <div className="bg-white/10 rounded-2xl p-8">
              Personalized Suggestions
            </div>

            <div className="bg-white/10 rounded-2xl p-8">
              Modern Technology
            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="bg-cyan-50 py-20 px-10 text-center">

        <h2 className="text-4xl font-bold mb-5">
          Ready To Transform Your Smile?
        </h2>

        <p className="text-gray-600 mb-8">
          Book a consultation with our dental experts.
        </p>

        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-semibold">
          Book Consultation
        </button>

      </section>

    </div>
  );
}

export default SmileAnalyzer;