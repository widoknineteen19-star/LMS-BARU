import React, { useState } from "react";
import { FaBell, FaSignOutAlt, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

const handleLihatNilai = (title) => {
  const routeMap = {
    "MINI-CEX": "/mini-cex",
    "DOPS": "/dops",
    "CBD": "/cbd",
    "Journal Reading": "/journal-reading",
    "Penyuluhan & Edukasi": "/penyuluhan",
    "Ujian Lisan": "/ujian-lisan",
    "Ujian Tulis MCQ": "/ujian-tulis",
    "Kondite Klinis": "/kondite",
    "Logbook": "/logbook",
  };

  if (routeMap[title]) {
    navigate(routeMap[title]);
  } else {
    alert(`Halaman untuk ${title} belum tersedia`);
  }
};

  const sumatifFormatif = [
    { id: "1", title: "MINI-CEX", type: "Sumatif", weight: "-", img: "src/assets/book1.svg" },
    { id: "2", title: "DOPS", type: "Sumatif", weight: "-", img: "src/assets/book1.svg" },
    { id: "3", title: "CBD", type: "Sumatif", weight: "-", img: "src/assets/book1.svg" },
    { id: "4", title: "Journal Reading", type: "Sumatif", weight: "-", img: "src/assets/book1.svg" },
    { id: "5", title: "Penyuluhan & Edukasi", type: "Sumatif", weight: "-", img: "src/assets/book1.svg" },
    { id: "6", title: "Ujian Lisan", type: "Sumatif", weight: "-", img: "src/assets/book1.svg" },
    { id: "7", title: "Ujian Tulis MCQ", type: "Sumatif", weight: "-", img: "src/assets/book1.svg" },
    { id: "8", title: "Kondite Klinis", type: "Formatif", weight: "-", img: "src/assets/book1.svg" },
    { id: "9", title: "Logbook", type: "Formatif", weight: "-", img: "src/assets/book1.svg" },
  ];

  const penilaianAkhir = [
    { id: "101", title: "Hasil Akhir Penilaian", type: "Resume Hasil Akhir Penilaian", img: "src/assets/books1.svg" },
    { id: "102", title: "Lembar Pengesahan", type: "Lembar Pengesahan Dokter Muda", img: "src/assets/books1.svg" },
  ];

  const filtered = sumatifFormatif.filter((i) =>
    i.title.toLowerCase().includes(q.toLowerCase())
  );

  const filteredAkhir = penilaianAkhir.filter((i) =>
    i.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Navbar */}
      <header className="bg-emerald-500 text-white py-3 px-8 flex items-center justify-between rounded-2xl shadow-md m-4">
        <div className="flex-1 flex justify-center items-center space-x-3">
          <img src="src/assets/Logo Unizar.svg" alt="Logo Unizar" className="w-10 h-10" />
          <div className="text-center">
            <h1 className="text-sm font-semibold leading-tight">
              Learning Management System
            </h1>
            <h2 className="text-sm font-bold tracking-wide">
              Fakultas Kedokteran UNIZAR
            </h2>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="relative cursor-pointer">
            <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-xl bg-white/10 hover:bg-white/20 transition">
              <FaBell className="text-white text-xl" />
            </div>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              1
            </span>
          </div>

          <button
            onClick={() => navigate("/")}
            className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-xl bg-white/10 hover:bg-white/20 transition"
          >
            <FaSignOutAlt className="text-white text-xl" />
          </button>

          <img
            src="src/assets/Profil.png"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
          />
        </div>
      </header>

      {/* Search Bar */}
      <div className="px-4">
        <div className="flex justify-center w-full">
          <div className="flex w-full max-w-full bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200">
            <input
              type="text"
              placeholder="Ketik untuk mencari.."
              className="flex-grow px-5 py-3 text-sm focus:outline-none rounded-l-2xl"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 flex items-center justify-center rounded-r-2xl shadow-md transition">
              <FaSearch className="text-lg" />
            </button>
          </div>
        </div>
      </div>

      {/* Resume Penilaian */}
      <div className="px-8 mt-6">
        <h3 className="text-emerald-700 font-bold text-sm border-b border-dotted border-emerald-300 pb-1">
          RESUME <span className="text-blue-800">PENILAIAN SUMATIF & FORMATIF</span>
        </h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((i) => (
            <div
              key={i.id}
              className="bg-white shadow-sm border rounded-xl p-4 flex justify-between items-center"
            >
              <div>
                <p className="text-[11px] text-gray-600">
                  Jenis Penilaian <span className="font-semibold">{i.type}</span>
                </p>
                <p className="text-[11px] text-gray-600">Bobot : {i.weight}</p>
                <h4 className="text-lg font-bold mt-1">{i.title}</h4>
                <button
                  onClick={() => handleLihatNilai(i.title)}
                  className="mt-2 text-sm bg-emerald-50 text-emerald-700 px-4 py-1 rounded-full font-semibold hover:bg-emerald-100 transition"
                >
                  Lihat Nilai
                </button>
              </div>
              <img src={i.img} alt={i.title} className="w-20 h-20 object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Penilaian Akhir */}
      <div className="px-8 mt-8 mb-8">
        <h3 className="text-emerald-700 font-bold text-sm border-b border-dotted border-emerald-300 pb-1">
          LEMBAR <span className="text-blue-800">PENILAIAN AKHIR</span>
        </h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-6xl">
          {filteredAkhir.map((i) => (
            <div
              key={i.id}
              className="bg-white shadow-sm border rounded-xl p-4 flex justify-between items-center"
            >
              <div>
                <p className="text-[11px] text-gray-600">
                  {i.type} <br />
                  Bobot : -
                </p>
                <h4 className="text-lg font-bold mt-1">{i.title}</h4>
                <button className="mt-2 text-sm bg-emerald-50 text-emerald-700 px-4 py-1 rounded-full font-semibold hover:bg-emerald-100 transition">
                  Lihat Nilai
                </button>
              </div>
              <img src={i.img} alt={i.title} className="w-20 h-20 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
