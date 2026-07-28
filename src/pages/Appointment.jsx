function Appointment() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-10">
        <div className="max-w-6xl mx-auto">
          <span className="text-cyan-400 font-semibold">
            BOOK APPOINTMENT
          </span>

          <h1 className="text-5xl font-bold mt-4 mb-6">
            Schedule Your Dental Visit
          </h1>

          <p className="text-gray-300 max-w-2xl">
            Book an appointment with our experienced dental team
            and take the first step toward a healthier smile.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Appointment Request
          </h2>

          <form className="bg-gray-50 p-8 rounded-xl shadow-md">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded-lg mb-4"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-3 rounded-lg mb-4"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border p-3 rounded-lg mb-4"
            />

            <select className="w-full border p-3 rounded-lg mb-4">
              <option>Select Service</option>
              <option>Dental Implants</option>
              <option>Teeth Whitening</option>
              <option>Root Canal</option>
              <option>Braces & Aligners</option>
              <option>Smile Makeover</option>
            </select>

            <input
              type="date"
              className="w-full border p-3 rounded-lg mb-4"
            />

            <textarea
              rows="4"
              placeholder="Additional Notes"
              className="w-full border p-3 rounded-lg mb-4"
            ></textarea>

            <button
              type="submit"
              className="bg-cyan-500 text-white px-6 py-3 rounded-lg"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-20 px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold mb-2">Expert Dentists</h3>
              <p>Experienced professionals dedicated to your care.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold mb-2">Modern Technology</h3>
              <p>Advanced equipment for accurate dental treatments.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold mb-2">Comfort First</h3>
              <p>A friendly environment focused on patient comfort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cyan-50 py-20 px-10 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Your Smile Deserves The Best Care
        </h2>

        <p className="text-gray-600 mb-8">
          Book today and let our specialists help you.
        </p>

        <button className="bg-cyan-500 text-white px-8 py-4 rounded-lg">
          Get Started
        </button>
      </section>
    </div>
  );
}

export default Appointment;