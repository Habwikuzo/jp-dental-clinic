function SmileScoreCard() {
  return (
    <div className="absolute bottom-8 right-4 bg-slate-800/90 backdrop-blur-xl rounded-2xl border border-cyan-500/30 p-6 w-56 shadow-2xl">
      <p className="text-sm text-cyan-400 font-semibold uppercase mb-4">
        Smile Score
      </p>

      <div className="flex justify-center">
        <div className="relative w-28 h-28 rounded-full border-[8px] border-cyan-400 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">92</h2>
            <p className="text-xs text-gray-400">/100</p>
          </div>
        </div>
      </div>

      <p className="text-center text-cyan-400 font-semibold mt-4">
        Excellent
      </p>
    </div>
  );
}

export default SmileScoreCard;