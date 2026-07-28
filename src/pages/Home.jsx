import { Link } from "react-router-dom";

function Home() {
  const services = [
    "Dental Implants",
    "Invisalign",
    "Root Canal",
    "Smile Makeover",
    "Teeth Whitening",
    "Kids Dentistry",
  ];

  return (
    <div>
      {/* HERO */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-cyan-500 font-semibold mb-4">
              Welcome to JP Dental Clinic
            </p>

            <h1 className="text-5xl font-bold text-slate-900 leading-tight">
              EXPERIENCE SMART,
              <br />
              <span className="text-cyan-500">
                PAIN-FREE DENTISTRY
              </span>
            </h1>

            <p className="mt-6 text-gray-600 max-w-xl">
              Advanced technology, expert care and personalized
              treatment plans for your perfect smile.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <Link
                to="/appointment"
                className="bg-cyan-500 text-white px-6 py-3 rounded-lg"
              >
                Book Appointment
              </Link>

              <Link
                to="/contact"
                className="border border-gray-300 px-6 py-3 rounded-lg"
              >
                Virtual Consultation
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10">
              <div>
                <h3 className="text-3xl font-bold">5000+</h3>
                <p className="text-gray-600">Happy Patients</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">15+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">4.9</h3>
                <p className="text-gray-600">Google Rating</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 h-[450px] rounded-2xl flex items-center justify-center">
            Hero Image
          </div>
        </div>
      </section>

      {/* AI ANALYZER + SERVICES */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
          <div className="bg-slate-900 text-white p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">
              AI Smile Analyzer
            </h2>

            <p className="text-gray-300 mb-6">
              Upload your smile photo and get AI-powered
              analysis in seconds.
            </p>

            <Link
              to="/smile-analyzer"
              className="block text-center bg-cyan-500 py-3 rounded-lg"
            >
              Analyze My Smile
            </Link>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">
              Our Popular Treatments
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              {services.map((service) => (
                <div
                  key={service}
                  className="bg-white p-5 rounded-xl shadow"
                >
                  <h3 className="font-semibold mb-2">
                    {service}
                  </h3>

                  <Link
                    to="/services"
                    className="text-cyan-500 text-sm"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SMILE TRANSFORMATIONS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between mb-8">
            <h2 className="text-3xl font-bold">
              Smile Transformations
            </h2>

            <Link
              to="/gallery"
              className="text-cyan-500"
            >
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-gray-200 h-48 rounded-xl flex items-center justify-center"
              >
                Before / After
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">
            Advanced Dental Technology
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-xl">
              Digital X-Ray
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              AI Diagnostics
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              3D Smile Design
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Meet Our Experts
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-xl p-5">
              <div className="bg-gray-200 h-48 rounded mb-4">
              </div>

              <h3 className="font-bold">
                Dr. Jigna Thakkar
              </h3>

              <p className="text-gray-600">
                Orthodontics Specialist
              </p>
            </div>

            <div className="border rounded-xl p-5">
              <div className="bg-gray-200 h-48 rounded mb-4">
              </div>

              <h3 className="font-bold">
                Dr. Padmaja Vigy
              </h3>

              <p className="text-gray-600">
                Conservative Dentistry
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            What Our Patients Say
          </h2>

          <div className="bg-white p-8 rounded-xl shadow">
            <p className="text-gray-600">
              Excellent treatment experience. Very
              professional and friendly team. Highly
              recommended!
            </p>

            <h3 className="font-bold mt-4">
              - Patient Review
            </h3>
          </div>
        </div>
      </section>

      {/* APPOINTMENT CTA */}
      <section className="bg-cyan-50 py-20 text-center px-6">
        <h2 className="text-4xl font-bold mb-4">
          Ready To Transform Your Smile?
        </h2>

        <p className="text-gray-600 mb-8">
          Schedule your appointment today.
        </p>

        <Link
          to="/appointment"
          className="bg-cyan-500 text-white px-8 py-4 rounded-lg"
        >
          Book Appointment
        </Link>
      </section>
    </div>
  );
}

export default Home;