import Hero from "../components/smile-analyzer/Hero";
function Hero() {
  return (
    <section className="bg-slate-900 text-white py-24 px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <span className="inline-block bg-cyan-900/50 text-cyan-400 px-6 py-3 rounded-full font-semibold mb-8">
            AI POWERED SMILE ANALYSIS
          </span>

          <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
            Discover Your
            <br />
            <span className="text-cyan-400">
              Perfect Smile
            </span>
            <br />
            with AI
          </h1>

          <p className="text-gray-300 text-xl mt-8 max-w-xl leading-9">
            Upload a photo of your smile and receive personalized
            dental insights powered by advanced AI technology.
          </p>

          <HeroStats />

        </div>

        {/* Right Side */}
        <HeroImage />

      </div>
    </section>
  );
}

export default Hero;