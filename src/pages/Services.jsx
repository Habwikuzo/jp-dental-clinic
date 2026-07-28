function Services() {
  const services = [
    {
      title: "Dental Implants",
      description: "Permanent solutions for missing teeth.",
    },
    {
      title: "Teeth Whitening",
      description: "Professional whitening for a brighter smile.",
    },
    {
      title: "Root Canal",
      description: "Pain-free treatment to save damaged teeth.",
    },
    {
      title: "Braces & Aligners",
      description: "Straighten teeth with modern orthodontics.",
    },
    {
      title: "Dental Crowns",
      description: "Restore strength and appearance.",
    },
    {
      title: "Smile Makeover",
      description: "Complete smile transformation treatments.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-10">
        <div className="max-w-6xl mx-auto">
          <span className="text-cyan-400 font-semibold">
            OUR SERVICES
          </span>

          <h1 className="text-5xl font-bold mt-4 mb-6">
            Comprehensive Dental Care
          </h1>

          <p className="text-gray-300 max-w-2xl">
            From preventive care to advanced cosmetic treatments,
            we offer complete dental solutions for every patient.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-10 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h2 className="text-4xl font-bold text-cyan-500">5000+</h2>
            <p>Happy Patients</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-500">15+</h2>
            <p>Years Experience</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-500">25+</h2>
            <p>Service Types</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-500">4.9</h2>
            <p>Patient Rating</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Popular Treatments
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Treatment Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="font-bold mb-2">1. Consultation</h3>
              <p>Initial dental assessment.</p>
            </div>

            <div className="text-center">
              <h3 className="font-bold mb-2">2. Diagnosis</h3>
              <p>Advanced evaluation and planning.</p>
            </div>

            <div className="text-center">
              <h3 className="font-bold mb-2">3. Treatment</h3>
              <p>Personalized dental care.</p>
            </div>

            <div className="text-center">
              <h3 className="font-bold mb-2">4. Follow-Up</h3>
              <p>Ongoing support and monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-900 text-white py-20 px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Why Choose JP Dental Clinic
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-bold mb-2">
                Expert Team
              </h3>
              <p>Experienced dental professionals.</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-bold mb-2">
                Modern Technology
              </h3>
              <p>Advanced equipment and techniques.</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-bold mb-2">
                Patient Focused
              </h3>
              <p>Comfortable and personalized care.</p>
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
          Schedule your appointment with our experts today.
        </p>

        <button className="bg-cyan-500 text-white px-8 py-4 rounded-lg">
          Book Appointment
        </button>
      </section>
    </div>
  );
}

export default Services;