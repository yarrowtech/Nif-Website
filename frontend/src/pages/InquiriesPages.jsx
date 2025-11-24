import React, { useEffect, useState } from "react";
import InquiryTable from "../components/InquiryTable";

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchInquiries = async () => {
    setLoading(true);
    setError("");
    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        setError("Unauthorized. Please login again.");
        setLoading(false);
        return;
      }
      const res = await fetch(
     const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/inquiries?search=${search}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();

      if (res.status === 401 || res.status === 403) {
        setError("Unauthorized. Please login again.");
        setInquiries([]);
      } else if (data.success) {
        setInquiries(data.items);
      } else {
        setError(data.message || "Failed to fetch inquiries.");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch inquiries on mount & when search changes
  useEffect(() => {
    fetchInquiries();
  }, [search]);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-semibold mb-4 text-neutral-900">
          📋 All Inquiries
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2">
          <input
            type="text"
            placeholder="Search by name, email, or course..."
            className="border px-3 py-2 rounded w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-neutral-700"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={fetchInquiries}
            className="bg-neutral-900 text-white px-4 py-2 rounded hover:bg-neutral-800 transition"
          >
            Refresh
          </button>
        </div>

        {loading ? (
          <p className="text-neutral-700">Loading inquiries...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : inquiries.length === 0 ? (
          <p className="text-neutral-700">No inquiries found.</p>
        ) : (
          <InquiryTable data={inquiries} />
        )}
      </div>
    </div>
  );
}
