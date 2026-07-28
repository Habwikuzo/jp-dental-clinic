import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
  <img
    src={logo}
    alt="JP Dental Clinic Logo"
    className="h-12 w-auto"
  />
</Link>

        {/* Menu */}
        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/technology">Technology</Link>
          <Link to="/patient-info">Patient Info</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Appointment Button */}
        <Link
          to="/appointment"
          className="bg-cyan-500 text-white px-4 py-2 rounded-lg"
        >
          Book Appointment
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;