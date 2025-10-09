import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavbarAdmin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin");
  };

  return (
    <nav className="bg-neutral-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">NIF Admin Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
      >
        Logout
      </button>
    </nav>
  );
}
