function Gallery() {
  const galleryItems = [
    {
      title: "Smile Makeover",
      description: "Complete cosmetic transformation.",
    },
    {
      title: "Teeth Whitening",
      description: "Brighter and healthier smile.",
    },
    {
      title: "Dental Implants",
      description: "Permanent tooth replacement.",
    },
    {
      title: "Orthodontics",
      description: "Aligned and confident smiles.",
    },
    {
      title: "Veneers",
      description: "Natural looking enhancement.",
    },
    {
      title: "Restorative Care",
      description: "Repair and strengthen teeth.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-10">
        <div className="max-w-6xl mx-auto">
          <span className="text-cyan-400 font-semibold">
            OUR GALLERY
          </span>

          <h1 className="text-5xl font-bold mt-4 mb-6">
            Real Smiles, Real Results
          </h1>

          <p className="text-gray-300 max-w-2xl">
            Explore smile transformations and treatment results
            from our patients.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-10 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h2 className="text-4xl font-bold text-cyan-500">500+</h2>
            <p>Smile Transformations</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-500">1000+</h2>
            <p>Gallery Photos</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-500">15+</h2>
            <p>Years Experience</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-500">4.9</h2>
            <p>Patient Rating</p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Patient Transformations
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-56 bg-gray-200"></div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-20 px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Before & After Results
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-xl">
              <div className="h-64 bg-gray-300 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold">Before Treatment</h3>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl">
              <div className="h-64 bg-gray-300 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold">After Treatment</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-900 text-white py-20 px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">
            Patient Success Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-xl">
              <p>
                "Amazing service and outstanding results!"
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              <p>
                "The team made my smile transformation easy."
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              <p>
                "Very professional and modern clinic."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cyan-50 py-20 px-10 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready To Start Your Smile Journey?
        </h2>

        <p className="text-gray-600 mb-8">
          Let us help create your perfect smile.
        </p>

        <button className="bg-cyan-500 text-white px-8 py-4 rounded-lg">
          Book Appointment
        </button>
      </section>
    </div>
  );
}

export default Gallery;