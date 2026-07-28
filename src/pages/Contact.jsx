function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-10">
        <div className="max-w-6xl mx-auto">
          <span className="text-cyan-400 font-semibold">
            CONTACT US
          </span>

          <h1 className="text-5xl font-bold mt-4 mb-6">
            We're Here To Help
          </h1>

          <p className="text-gray-300 max-w-2xl">
            Get in touch with our team for appointments,
            consultations, and dental care questions.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 px-10 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-3">Call Us</h3>
            <p>+91 98985 55580</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-3">Email</h3>
            <p>info@jpdentalclinic.com</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-3">Visit Us</h3>
            <p>JP Dental Clinic Location</p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-10 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Send Us A Message
          </h2>

          <form className="bg-white p-8 rounded-xl shadow-md">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded-lg mb-4"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded-lg mb-4"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border p-3 rounded-lg mb-4"
            />

            <textarea
              placeholder="Message"
              rows="5"
              className="w-full border p-3 rounded-lg mb-4"
            ></textarea>

            <button
              type="submit"
              className="bg-cyan-500 text-white px-6 py-3 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-20 px-10 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Working Hours
          </h2>

          <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
          <p>Saturday: 9:00 AM - 5:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cyan-50 py-20 px-10 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Book Your Dental Visit Today
        </h2>

        <p className="text-gray-600 mb-8">
          Our team is ready to help you achieve a healthier smile.
        </p>

        <button className="bg-cyan-500 text-white px-8 py-4 rounded-lg">
          Book Appointment
        </button>
      </section>
    </div>
  );
}

export default Contact;