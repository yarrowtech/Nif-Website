import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";

export default function AdminDashboard() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) navigate("/admin");
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarAdmin />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
