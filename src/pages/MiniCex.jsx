import React, { useState } from "react";
import {
  FaArrowLeft,
  FaBell,
  FaUsers,
  FaUser,
  FaCheckCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function MiniCex() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Sumatif");

  const dataKelompok = [
    { id: 1, nama: "Kelompok 1", dosen: "Dr. dr. Ing. M.Erg", periode: "25 - 2025", jumlah: 7, kode: "MBG999" },
    { id: 2, nama: "Kelompok 2", dosen: "Dr. dr. Ing. M.Erg", periode: "25 - 2025", jumlah: 7, kode: "MBG998" },
    { id: 3, nama: "Kelompok 3", dosen: "Dr. dr. Ing. M.Erg", periode: "25 - 2025", jumlah: 7, kode: "MBG997" },
    { id: 4, nama: "Kelompok 4", dosen: "Dr. dr. Ing. M.Erg", periode: "25 - 2025", jumlah: 7, kode: "MBG999" },
    { id: 5, nama: "Kelompok 5", dosen: "Dr. dr. Ing. M.Erg", periode: "25 - 2025", jumlah: 7, kode: "MBG998" },
    { id: 6, nama: "Kelompok 6", dosen: "Dr. dr. Ing. M.Erg", periode: "25 - 2025", jumlah: 7, kode: "MBG997" },
    { id: 7, nama: "Kelompok 7", dosen: "Dr. dr. Ing. M.Erg", periode: "25 - 2025", jumlah: 7, kode: "MBG999" },
  ];

  const students = [
    { nama: "Mister Aloy", nim: "021-037", nilai: 87 },
    { nama: "Joni Jono", nim: "021-038", nilai: 70 },
    { nama: "Mardiana", nim: "021-039", nilai: 80 },
    { nama: "Shusi Susanti", nim: "021-040", nilai: 90 },
    { nama: "Mister Alex", nim: "021-041", nilai: 80 },
    { nama: "Putri Kartika", nim: "021-042", nilai: 95 },
    { nama: "Icha Aksa", nim: "021-043", nilai: 80 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-poppins relative">
      {/* ✅ Navbar */}
      <header className="bg-emerald-500 text-white py-3 px-8 flex items-center justify-between rounded-2xl shadow-md m-4">
        <div className="flex-1 flex justify-center items-center space-x-3">
          <img src="src/assets/Logo Unizar.svg" alt="Logo Unizar" className="w-10 h-10" />
          <div className="text-center">
            <h1 className="text-sm font-semibold leading-tight">Learning Management System</h1>
            <h2 className="text-sm font-bold tracking-wide">Fakultas Kedokteran UNIZAR</h2>
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
            onClick={() => navigate("/dashboard")}
            className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-xl bg-white/10 hover:bg-white/20 transition"
          >
            <FaArrowLeft className="text-white text-xl" />
          </button>

          <img
            src="src/assets/Profil.png"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
          />
        </div>
      </header>

      {/* ✅ Tabs */}
      <div className="flex items-center gap-6 px-8 mt-4">
        {["Sumatif", "Absensi", "Penilaian"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-medium transition ${
              activeTab === tab
                ? "text-white bg-emerald-500 px-3 py-1.5 rounded-md"
                : "text-emerald-600 hover:text-emerald-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ✅ Konten berdasarkan tab */}
      <div className="p-8">
        {/* === SUMATIF === */}
        {activeTab === "Sumatif" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pb-24">
            {dataKelompok.map((k) => (
              <div
                key={k.id}
                className="group bg-white border rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src="src/assets/minicex.png"
                    alt={k.nama}
                    className="w-full h-32 object-cover rounded-t-xl"
                  />
                  <span className="absolute top-2 left-2 bg-emerald-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md shadow">
                    Periode {k.periode}
                  </span>
                  <span className="absolute bottom-2 right-2 bg-purple-600 text-white text-[10px] font-semibold px-3 py-1 rounded-md shadow">
                    {k.nama}
                  </span>
                </div>

                <div className="p-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-sm">MINI-CEX</h4>
                  </div>

                  <div className="flex items-center mt-2 text-xs text-gray-600">
                    <FaUser className="text-purple-600 mr-1" />
                    <span>{k.dosen}</span>
                  </div>

                  {/* Efek hover tampil detail */}
                  <div className="opacity-0 group-hover:opacity-100 mt-2 text-xs text-gray-700 transition-opacity duration-300">
                    <hr className="border-emerald-400 my-1" />
                    <p>Status Penilaian: -</p>
                    <p>Deadline: -</p>
                    <p>
                      Kode:{" "}
                      <span className="text-emerald-600 font-semibold">
                        ({k.kode})
                      </span>
                    </p>
                  </div>

                  <div className="flex justify-end mt-3">
                    <div className="flex items-center gap-1 text-purple-700 border border-purple-300 px-2 py-0.5 rounded-md text-xs font-semibold hover:bg-purple-50 transition">
                      <FaUsers className="text-purple-700" /> {k.jumlah}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* === PENILAIAN === */}
        {activeTab === "Penilaian" && (
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 bg-white rounded-xl shadow-md p-4">
              <h4 className="font-semibold mb-3 text-gray-800">Point Penilaian</h4>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="text-left p-2">Point</th>
                    <th className="text-left p-2">Keterangan</th>
                    <th className="text-center p-2">Bobot</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["K1", "Kemampuan membangun komunikasi", "5%"],
                    ["K2", "Kemampuan Anamnesa", "15%"],
                    ["K3", "Kemampuan Pemeriksaan Fisik", "15%"],
                    ["K4", "Keputusan Klinik/Diagnosis", "10%"],
                    ["K5", "Kemampuan Mengusulkan Pemeriksaan Penunjang", "5%"],
                    ["K6", "Kemampuan Merencanakan Pengelolaan Pasien", "10%"],
                    ["K7", "Kemampuan Konseling", "10%"],
                    ["K8", "Organisasi/Efisiensi", "10%"],
                    ["K9", "Kualitas Humanistik/Profesionalisme", "10%"],
                    ["K10", "Kompetensi Klinik Keseluruhan", "10%"],
                  ].map(([k, ket, bobot]) => (
                    <tr key={k} className="border-t border-gray-100">
                      <td className="p-2 font-semibold">{k}</td>
                      <td className="p-2">{ket}</td>
                      <td className="p-2 text-center">{bobot}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Nilai Mahasiswa */}
              <div className="mt-6">
                <div className="flex items-center justify-between bg-gray-100 border border-gray-200 rounded-t-xl p-3 font-semibold text-gray-700 text-sm">
                  <div className="flex items-center gap-2 w-1/4">
                    <span className="bg-emerald-500 text-white px-2 py-1 rounded-full text-xs">
                      1
                    </span>
                    <span>Mahasiswa</span>
                  </div>
                  <div className="w-1/6 text-right">Nilai Akhir</div>
                </div>

                <div className="flex flex-col">
                  {students.map((mhs, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between bg-white border-b border-gray-200 p-3 hover:bg-gray-50 cursor-pointer"
                    >
                      <div className="flex items-center gap-2 w-1/4">
                        <FaCheckCircle className="text-emerald-500" />
                        <button
                          onClick={() =>
                            navigate(`/form-penilaian/${encodeURIComponent(mhs.nama)}`)
                          }
                          className="text-left font-semibold text-sm text-emerald-700 hover:text-emerald-800 hover:underline cursor-pointer"
                        >
                          {mhs.nama}
                          <p className="text-xs text-gray-500 font-normal">
                            NIM: {mhs.nim}
                          </p>
                        </button>
                      </div>
                      <div className="w-1/6 text-right font-bold text-emerald-600 text-lg">
                        {mhs.nilai}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Info MINI-CEX */}
            <div className="w-full lg:w-72 bg-white rounded-xl shadow-md p-4">
              <h3 className="font-bold text-emerald-700 text-lg mb-1">MINI-CEX</h3>
              <p className="text-gray-600 text-sm mb-4">
                Mini Clinical Evaluation Exercise
              </p>

              <div className="border-t pt-2 text-sm">
                <p className="font-semibold text-gray-800 mb-1">DETAIL INFORMASI</p>
                <ul className="text-gray-600 space-y-1 text-xs">
                  <li>📘 Nama Formatif: <b>Mini-CEX</b></li>
                  <li>👨‍⚕️ Jenis Dosen: <b>Dosen Muda</b></li>
                  <li>🧾 Jumlah Komponen Penilaian: <b>10 Komponen</b></li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
