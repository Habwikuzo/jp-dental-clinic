import drJigna from "../assets/images/doctors/dr-jigna.jpg";
import drPadmaja from "../assets/images/doctors/dr-padmaja.jpg";
function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-10">
        <div className="max-w-6xl mx-auto">
          <span className="text-cyan-400 font-semibold">
            ABOUT JP DENTAL CLINIC
          </span>

          <h1 className="text-5xl font-bold mt-4 mb-6">
            Creating Healthy & Beautiful Smiles
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl">
            We combine advanced technology, compassionate care,
            and experienced professionals to deliver exceptional
            dental treatment.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-10 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-cyan-500">5000+</h2>
            <p>Happy Patients</p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold text-cyan-500">15+</h2>
            <p>Years Experience</p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold text-cyan-500">10000+</h2>
            <p>Treatments Completed</p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold text-cyan-500">4.9</h2>
            <p>Patient Rating</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>

          <p className="text-gray-600 leading-8">
            JP Dental Clinic was founded with a vision of providing
            world-class dental care in a comfortable and welcoming
            environment. Over the years, our commitment to excellence,
            innovation, and patient satisfaction has helped us become
            a trusted destination for dental treatments.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-10 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-cyan-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>

            <p>
              To provide quality dental services through advanced
              technology and patient-centered care.
            </p>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>

            <p>
              To become the most trusted dental clinic known for
              excellence, innovation, and lasting smiles.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold mb-2">Integrity</h3>
              <p>Honest and transparent dental care.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold mb-2">Excellence</h3>
              <p>Delivering high-quality treatments.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold mb-2">Innovation</h3>
              <p>Using modern dental technologies.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold mb-2">Compassion</h3>
              <p>Making patients feel comfortable and valued.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Meet Our Experts
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl text-center shadow-md">
             <img
  src={drJigna}
  alt="Dr. Jigna"
  className="w-full h-64 object-cover rounded-xl"
/>
              <h3 className="text-xl font-bold">Dr. Jigna Thakkar</h3>
              <p className="text-gray-600">Orthodontics Specialist</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center shadow-md">
              <img
  src={drPadmaja}
  alt="Dr. Padmaja"
  className="w-full h-64 object-cover rounded-xl"
/>
              <h3 className="text-xl font-bold">Dr. Padmaja Vigy</h3>
              <p className="text-gray-600">Conservative Dentistry</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center shadow-md">
              <img
  src={drPadmaja}
  alt="Dr. Padmaja"
  className="w-full h-64 object-cover rounded-xl"
/>
              <h3 className="text-xl font-bold">Dental Specialist</h3>
              <p className="text-gray-600">General Dentistry</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cyan-50 py-20 px-10 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready For Your Perfect Smile?
        </h2>

        <p className="text-gray-600 mb-8">
          Book an appointment today and start your journey
          to better oral health.
        </p>

        <button className="bg-cyan-500 text-white px-8 py-4 rounded-lg">
          Book Appointment
        </button>
      </section>
    </div>
  );
}

export default About;