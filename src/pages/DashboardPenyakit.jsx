import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBookMedical } from "react-icons/fa";

export default function DashboardPenyakit() {
  const navigate = useNavigate();

  const penyakitList = [
    "Sistem Saraf",
    "Psikiatri",
    "Sistem Indra",
    "Sistem Respirasi",
    "Sistem Kardiovaskular",
    "Sistem Gastrointestinal Hepatobilier & Pankreas",
    "Sistem Ginjal dan Saluran Kemih",
    "Sistem Reproduksi",
    "Sistem Endokrin, Metabolik dan Nutrisi",
    "Sistem Hematologi dan Limfatik",
    "Sistem Muskuloskeletal",
    "Sistem Imunologi",
    "Ilmu Kedokteran Forensik dan Medikolegal",
  ];

  const goToPenyakit = (nama) => {
    navigate(`/penyakit/${encodeURIComponent(nama)}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* HEADER */}
      <div className="bg-white shadow-md rounded-xl p-4 mb-6">
        <h1 className="text-lg font-bold text-gray-700">
          DAFTAR PENYAKIT
        </h1>
        <input
          type="text"
          placeholder="Cari penyakit..."
          className="mt-3 w-full p-2 border rounded-lg bg-gray-50 focus:outline-none"
        />
      </div>

      {/* GRID PENYAKIT */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {penyakitList.map((nama, index) => (
          <div
            key={index}
            onClick={() => goToPenyakit(nama)}
            className="bg-white cursor-pointer border border-gray-200 shadow-sm hover:shadow-md 
                       transition rounded-lg p-4 flex items-center justify-between"
          >
            <div>
              <span className="text-gray-800 font-semibold text-sm">{nama}</span>
              <div className="mt-1 inline-block bg-emerald-100 text-emerald-600 text-xs font-medium 
                              px-2 py-0.5 rounded">
                Buka Modul
              </div>
            </div>

            <FaBookMedical className="text-emerald-600 text-3xl" />
          </div>
        ))}
      </div>
    </div>
  );
}
