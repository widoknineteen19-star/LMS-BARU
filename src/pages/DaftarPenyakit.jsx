import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBell, FaSignOutAlt } from "react-icons/fa";

export default function DaftarPenyakit() {
  const navigate = useNavigate();

  // ==================== 13 PENYAKIT (Sesuai Gambar) ====================
  const daftarPenyakit = [
    { id: 1,  nama: "SISTEM SARAF", gambar: "src/assets/Penyakit.png" },
    { id: 2,  nama: "PSIKIATRI", gambar: "src/assets/Penyakit.png" },
    { id: 3,  nama: "SISTEM INDRA", gambar: "src/assets/Penyakit.png" },
    { id: 4,  nama: "SISTEM RESPIRASI", gambar: "src/assets/Penyakit.png" },
    { id: 5,  nama: "SISTEM KARDIOVASKULAR", gambar: "src/assets/Penyakit.png" },
    { id: 6,  nama: "SISTEM GASTROINTESTINAL, HEPATOBILIER, & PANKREAS", gambar: "src/assets/Penyakit.png" },
    { id: 7,  nama: "SISTEM GINJAL DAN SALURAN KEMIH", gambar: "src/assets/Penyakit.png" },
    { id: 8,  nama: "SISTEM REPRODUKSI", gambar: "src/assets/Penyakit.png" },
    { id: 9,  nama: "SISTEM ENDOKRIN, METABOLIK, DAN NUTRISI", gambar: "src/assets/Penyakit.png" },
    { id: 10, nama: "SISTEM HEMATOLOGI DAN IMUNOLOGI", gambar: "src/assets/Penyakit.png" },
    { id: 11, nama: "SISTEM MUSKULOSKELETAL", gambar: "src/assets/Penyakit.png" },
    { id: 12, nama: "SISTEM INTEGUMEN", gambar: "src/assets/Penyakit.png" },
    { id: 13, nama: "ILMU KEDOKTERAN FORENSIK DAN MEDIKOLEGAL", gambar: "src/assets/Penyakit.png" },
  ];

  // ==================== DATA TAHUNAN (Sesuai Gambar) ====================
  const dataTahunan = [
    { id: 1, nama: "TAHUN 2022", gambar: "src/assets/Penilaian.png" },
    { id: 2, nama: "TAHUN 2023", gambar: "src/assets/Penilaian.png" },
    { id: 3, nama: "TAHUN 2024", gambar: "src/assets/tahun3.png" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">

      {/* ====================== NAVBAR ======================= */}
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
            alt="Profil"
            className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
          />
        </div>
      </header>

      {/* ====================== CONTENT ======================= */}
      <div className="mx-4 mt-6 mb-10">

        {/* ================== DAFTAR PENYAKIT ================== */}
        <h1 className="text-xl font-bold mb-4 ml-2">Daftar Penyakit</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {daftarPenyakit.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between hover:shadow-lg transition"
            >
              <div>
                <h2 className="text-lg font-semibold mb-2">{item.nama}</h2>
                <button
                  onClick={() => navigate("/dashboard")}
                  className="bg-emerald-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-emerald-600 transition"
                >
                  Lihat Ujian
                </button>
              </div>

              <div className="w-32 h-32 rounded-xl bg-gray-200 flex items-center justify-center overflow-hidden shadow-inner">
                <img src={item.gambar} alt={item.nama} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>

        {/* ================== BERKAS DATA TAHUNAN ================== */}
        <h1 className="text-xl font-bold mt-10 mb-4 ml-2">Berkas Data Tahunan</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {dataTahunan.map((data) => (
            <div
              key={data.id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition"
            >
              <div className="w-32 h-32 rounded-xl bg-gray-200 overflow-hidden shadow-inner mb-4">
                <img
                  src={data.gambar}
                  alt={data.nama}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-lg font-semibold mb-3">{data.nama}</h2>

              <button
                onClick={() => navigate("/berkas")}
                className="bg-indigo-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Lihat Berkas
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}