function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-5 gap-8">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400">
            JP DENTAL
          </h2>

          <p className="text-gray-400 mt-4 text-sm">
            We are committed to providing painless,
            personalized and advanced dental care
            for your healthy smile.
          </p>

          <div className="flex gap-4 mt-6 text-xl">
            <span>📘</span>
            <span>📷</span>
            <span>▶️</span>
            <span>💼</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-4">QUICK LINKS</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Technology</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-4">OUR SERVICES</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Dental Implants</li>
            <li>Root Canal</li>
            <li>Invisalign</li>
            <li>Smile Makeover</li>
            <li>Teeth Whitening</li>
            <li>Kids Dentistry</li>
          </ul>
        </div>

        {/* Patient Info */}
        <div>
          <h3 className="font-bold mb-4">PATIENT INFO</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Book Appointment</li>
            <li>Patient Portal</li>
            <li>FAQs</li>
            <li>Dental Care Tips</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold mb-4">CONTACT US</h3>

          <ul className="space-y-3 text-gray-400">
            <li>📞 +91 98985 55580</li>
            <li>✉ info@jpdentalclinic.com</li>
            <li>📍 JP Dental Clinic</li>
            <li>🕒 Mon - Sat</li>
            <li>9:00 AM - 7:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © 2026 JP Dental Clinic. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;