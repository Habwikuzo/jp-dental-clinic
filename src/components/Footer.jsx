import logo from "../assets/images/logo.jpg";
function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-5 gap-8">
        {/* Logo */}
        <div>
          <img
  src={logo}
  alt="JP Dental Clinic Logo"
  className="h-20 w-auto"
/>

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
        {/* Contact */}
<div>
  <h3 className="font-bold mb-4">CONTACT US</h3>

  <ul className="space-y-3 text-gray-400">
    <li>📞 +91 97312 40612</li>
    <li>📞 +91 80959 39038</li>
    <li>☎ 080-41200625</li>
    <li>✉ jpdental21@gmail.com</li>
    <li>
      📍 1st Floor, SRIDS Arcade,
      46th Cross Road,
      8th Block, Jayanagar,
      Bengaluru, Karnataka 560070
    </li>

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