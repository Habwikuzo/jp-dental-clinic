import { useState, useRef } from "react";

function UploadSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);
  const [status, setStatus] = useState("");
  const [showReport, setShowReport] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [appointmentBooked, setAppointmentBooked] = useState(false);
  const fileInputRef = useRef(null);

  const results = {
    smileScore: 92,
    alignment: 88,
    whitening: 80,
    gumHealth: 95,
    confidence: 90
  };

  const resetUploadState = () => {
    setFinished(false);
    setAnalyzing(false);
    setProgress(0);
    setStatus("");
    setShowReport(false);
    setAppointmentBooked(false);
  };

  const loadFile = (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    setSelectedImage(URL.createObjectURL(file));
    resetUploadState();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    loadFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    loadFile(file);
  };

  const startAnalysis = () => {
    setAnalyzing(true);
    setFinished(false);
    setProgress(0);
    setShowReport(false);

    const messages = [
      "📸 Upload verified...",
      "🦷 Detecting teeth...",
      "📏 Measuring alignment...",
      "✨ Checking whitening...",
      "🩺 Evaluating gum health...",
      "🤖 Generating AI Report..."
    ];

    let index = 0;
    setStatus(messages[index]);
    let value = 0;

    const timer = setInterval(() => {
      value += 5;
      setProgress(value);

      if (value % 20 === 0 && index < messages.length - 1) {
        index++;
        setStatus(messages[index]);
      }

      if (value >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setAnalyzing(false);
          setFinished(true);
        }, 700);
      }
    }, 150);
  };

  const downloadReport = () => {
    const reportText = `AI SMILE ANALYSIS REPORT
=========================

Smile Score:     ${results.smileScore}%  (Excellent smile aesthetics)
Alignment:       ${results.alignment}%  (Minor correction recommended)
Whitening:       ${results.whitening}%  (Professional whitening suggested)
Gum Health:      ${results.gumHealth}%  (Healthy gums and teeth)
Confidence Score: ${results.confidence}%  (Great overall confidence)

AI Recommendations:
- Professional teeth whitening could improve brightness.
- Slight alignment improvement with clear aligners.
- Maintain brushing twice daily and floss regularly.
- Schedule a comprehensive dental check-up every six months.
`;

    const blob = new Blob([reportText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "smile-analysis-report.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const bookAppointment = () => {
    setAppointmentBooked(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">
          Upload Your Smile
        </h2>

        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-3xl p-12 text-center shadow-lg transition-all duration-300 ${
            isDragging
              ? "border-cyan-500 bg-cyan-50 shadow-[0_0_40px_rgba(34,211,238,0.5)]"
              : "border-cyan-400"
          }`}
        >
          {!selectedImage ? (
            <>
              <div
                className={`text-7xl mb-6 transition-transform duration-300 ${
                  isDragging ? "scale-125" : "animate-bounce"
                }`}
              >
                📷
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Drag & Drop Your Smile Photo
              </h3>
              <p className="text-gray-500 mb-8">
                Upload JPG, PNG or HEIC
              </p>
              <label className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-5 rounded-2xl cursor-pointer font-semibold text-xl shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition duration-300">
                📷 Choose Smile Photo
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </>
          ) : (
            <>
              <img
                src={selectedImage}
                alt="Smile Preview"
                className="mx-auto w-80 h-80 object-cover rounded-3xl shadow-2xl"
              />
              <p className="mt-6 text-green-600 font-semibold text-xl">
                ✅ Image Uploaded Successfully
              </p>

              {!analyzing && !finished && (
                <button
                  onClick={startAnalysis}
                  className="mt-8 bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition duration-300"
                >
                  Analyze Smile
                </button>
              )}

              {analyzing && (
                <div className="mt-10">
                  <div className="animate-pulse text-7xl mb-6">🤖</div>
                  <h3 className="text-3xl font-bold text-cyan-600">
                    AI is analyzing your smile...
                  </h3>
                  <p className="mt-5 text-lg text-gray-600">{status}</p>
                  <div className="w-full bg-gray-200 rounded-full h-5 mt-8 overflow-hidden">
                    <div
                      className="bg-cyan-500 h-5 transition-all duration-200"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="mt-4 text-3xl font-bold text-cyan-600">
                    {progress}%
                  </p>
                </div>
              )}

              {finished && (
                <div className="mt-10 bg-green-50 border border-green-200 rounded-2xl p-8">
                  <div className="text-7xl mb-4">✅</div>
                  <h3 className="text-4xl font-bold text-green-700">
                    Analysis Complete
                  </h3>
                  <p className="mt-4 text-gray-700 text-lg">
                    Your smile has been analyzed successfully.
                  </p>

                  <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
                    <button
                      onClick={() => setShowReport(true)}
                      className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition"
                    >
                      View AI Report
                    </button>
                    <button
                      onClick={() => {
                        setSelectedImage(null);
                        resetUploadState();
                      }}
                      className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-50 px-8 py-4 rounded-xl font-semibold transition"
                    >
                      Upload Another Photo
                    </button>
                  </div>

                  {showReport && (
                    <div className="mt-10">
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                          <h4 className="font-bold text-gray-700">Smile Score</h4>
                          <p className="text-4xl font-bold text-cyan-500 mt-3">
                            {results.smileScore}%
                          </p>
                          <p className="text-sm text-gray-500 mt-2">
                            Excellent smile aesthetics
                          </p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                          <h4 className="font-bold text-gray-700">Alignment</h4>
                          <p className="text-4xl font-bold text-cyan-500 mt-3">
                            {results.alignment}%
                          </p>
                          <p className="text-sm text-gray-500 mt-2">
                            Minor correction recommended
                          </p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                          <h4 className="font-bold text-gray-700">Whitening</h4>
                          <p className="text-4xl font-bold text-cyan-500 mt-3">
                            {results.whitening}%
                          </p>
                          <p className="text-sm text-gray-500 mt-2">
                            Professional whitening suggested
                          </p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                          <h4 className="font-bold text-gray-700">Gum Health</h4>
                          <p className="text-4xl font-bold text-cyan-500 mt-3">
                            {results.gumHealth}%
                          </p>
                          <p className="text-sm text-gray-500 mt-2">
                            Healthy gums and teeth
                          </p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                          <h4 className="font-bold text-gray-700">Confidence Score</h4>
                          <p className="text-4xl font-bold text-cyan-500 mt-3">
                            {results.confidence}%
                          </p>
                          <p className="text-sm text-gray-500 mt-2">
                            Great overall confidence
                          </p>
                        </div>
                      </div>

                      <div className="mt-10 bg-cyan-50 rounded-2xl p-8 text-left">
                        <h3 className="text-2xl font-bold mb-6">
                          🤖 AI Recommendations
                        </h3>
                        <ul className="space-y-4 text-gray-700">
                          <li>✅ Professional teeth whitening could improve brightness.</li>
                          <li>✅ Slight alignment improvement with clear aligners.</li>
                          <li>✅ Maintain brushing twice daily and floss regularly.</li>
                          <li>✅ Schedule a comprehensive dental check-up every six months.</li>
                        </ul>

                        <div className="flex flex-col md:flex-row gap-4 mt-8">
                          <button
                            onClick={downloadReport}
                            className="bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-4 rounded-xl font-semibold transition"
                          >
                            ⬇ Download Report
                          </button>
                          <button
                            onClick={bookAppointment}
                            className="bg-slate-900 hover:bg-black text-white px-8 py-4 rounded-xl font-semibold transition"
                          >
                            Book Appointment
                          </button>
                        </div>

                        {appointmentBooked && (
                          <p className="mt-5 text-green-600 font-semibold">
                            ✅ Appointment request sent! Our team will contact you shortly.
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default UploadSection;
