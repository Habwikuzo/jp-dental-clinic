import { Link } from "react-router-dom";

function FloatingButtons() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
      <Link
        to="/appointment"
        className="bg-blue-600 text-white p-3 rounded-xl shadow-lg text-center"
      >
        📅
      </Link>

      https://wa.me/250788123456

      tel:+250788123456>
    </div>
  );
}

export default FloatingButtons;