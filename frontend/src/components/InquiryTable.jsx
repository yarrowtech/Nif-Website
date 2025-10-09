import React from "react";

export default function InquiryTable({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Course</th>
            <th className="px-4 py-2">Message</th>
          </tr>
        </thead>
        <tbody>
          {data.map((inq) => (
            <tr key={inq._id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{inq.name}</td>
              <td className="px-4 py-2">{inq.email}</td>
              <td className="px-4 py-2">{inq.number}</td>
              <td className="px-4 py-2">{inq.course}</td>
              <td className="px-4 py-2">{inq.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
