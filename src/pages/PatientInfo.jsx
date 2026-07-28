function PatientInfo() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-sl*te-900 text-white py-20 px-10">
  *     <div className="max-w-6xl mx-*uto">
          <span className="t*xt-cyan-400 font-semibold">
      *     PATIENT INFORMATION
         *</span>

          <h1 className="*ext-5xl font-bold mt-4 mb-6">
    *       Everything You Need Before *our Visit
          </h1>

       *  <p className="text-gray-300 max-*-2xl">
            Find useful inf*rmation about appointments, insura*ce,
            payments, and what*to expect during your visit.
          </p>
        </div>
      </section>

      {/* Patient Resources */}
      <section className="py-20 px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Patient Resources
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">Appointments</h3>
              <p>Easy online booking and appointment management.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">Insurance</h3>
              <p>Information about accepted insurance plans.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">Payments</h3>
              <p>Flexible payment methods available.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="font-bold mb-3">Support</h3>
              <p>Helpful guidance before and after treatment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* First Visit */}
      <section className="py-20 px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Your First Visit
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-2">Step 1</h3>
              <p>Complete patient registration.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-2">Step 2</h3>
              <p>Dental examination and consultation.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-2">Step 3</h3>
              <p>Receive your personalized treatment plan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-bold">
                How do I book an appointment?
              </h3>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-bold">
                Do you accept insurance?
              </h3>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-bold">
                What payment methods do you accept?
              </h3>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-bold">
                What should I bring for my first visit?
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cyan-50 py-20 px-10 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready To Visit JP Dental Clinic?
        </h2>

        <p className="text-gray-600 mb-8">
          Schedule an appointment and let us take care of your smile.
        </p>

        <button className="bg-cyan-500 text-white px-8 py-4 rounded-lg">
          Book Appointment
        </button>
      </section>
    </div>
  );
}

export default PatientInfo;