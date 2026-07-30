function AIScanCard() {
  return (
    <div className="absolute top-8 right-4 bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-cyan-500/30 p-5 w-52 shadow-2xl">
      <p className="text-sm text-cyan-400 font-semibold uppercase mb-3">
        AI Smile Scan
      </p>

      <div className="bg-slate-700 rounded-xl h-28 flex items-center justify-center">
        <span className="text-5xl">🦷</span>
      </div>

      <p className="text-center text-gray-300 text-sm mt-3">
        Instant AI dental scan
      </p>
    </div>
  );
}

export default AIScanCard;