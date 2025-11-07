import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function FormPenilaianDOPS() {
  const navigate = useNavigate();
  const { nama } = useParams();

  const [formData, setFormData] = useState({
    nama: nama || "",
    nim: "",
    k1: 80,
    k2: 85,
    k3: 90,
  });

  const komponen = [
    {
      id: "k1",
      label: "Kemampuan Membangun Komunikasi",
      bobot: 5,
      poin: [
        "Menyapa dan memberi salam",
        "Memperkenalkan diri",
        "Menanyakan identitas pasien",
      ],
    },
    {
      id: "k2",
      label: "Kemampuan Anamnesa",
      bobot: 15,
      poin: [
        "Menanyakan Keluhan Utama",
        "Menanyakan RPS",
        "Menanyakan RPD",
        "Menanyakan Riwayat Kesehatan Keluarga",
        "Menanyakan Riwayat Sosial dan Ekonomi",
        "Mengaplikasikan The Sacred Seven",
      ],
    },
    {
      id: "k3",
      label: "Kemampuan Pemeriksaan Fisik",
      bobot: 15,
      poin: [
        "Melakukan informed consent sebelum pemeriksaan fisik dilakukan",
        "Mengikuti urutan logis dalam pemeriksaan (Head to toe examination)",
        "Memeriksa sesuai masalah dan efisien",
        "Memberikan keterangan hasil pemeriksaan kepada pasien",
      ],
    },
  ];

  const [totalNilai, setTotalNilai] = useState(0);
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    const total =
      komponen.reduce(
        (acc, item) => acc + (formData[item.id] * item.bobot) / 100,
        0
      ) /
      (komponen.reduce((a, b) => a + b.bobot, 0) / 100);
    setTotalNilai(total.toFixed(2));
  }, [formData]);

  const handleSliderChange = (id, value) => {
    setFormData((prev) => ({
      ...prev,
      [id]: parseInt(value),
    }));
  };

  const openPopup = (item) => setPopup(item);
  const closePopup = () => setPopup(null);

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-6 font-poppins">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Formulir Penilaian Sumatif
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* === Kolom Kiri (Form Input & Komponen) === */}
          <div className="lg:col-span-3 space-y-4">
            {/* === Identitas Dokter Muda, Pasien, Situasi === */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <div className="grid md:grid-cols-3 gap-6 text-sm">

                {/* Identitas Dokter Muda */}
                <div>
                  <h3 className="font-semibold text-gray-800 pb-1 border-b border-gray-200 mb-3">
                    Identitas Dokter Muda
                  </h3>
                  <label className="text-gray-700 text-sm font-medium">Dokter Muda</label>
                  <input type="text" className="w-full border border-gray-300 bg-gray-50 rounded-md p-2 mb-3 text-gray-800" value={formData.nama} readOnly />
                  <label className="text-gray-700 text-sm font-medium">NIM</label>
                  <input type="text" className="w-full border border-gray-300 bg-gray-50 rounded-md p-2 text-gray-800" value={formData.nim} readOnly />
                </div>

                {/* Data Pasien */}
                <div>
                  <h3 className="font-semibold text-gray-800 pb-1 border-b border-gray-200 mb-3">
                    Data Pasien
                  </h3>
                  <label className="text-gray-800 text-sm font-medium">Pasien</label>
                  <input type="text" placeholder="Nama Pasien" className="w-full border border-gray-300 bg-gray-50 rounded-md p-2 mb-3" />
                  <label className="text-gray-800 text-sm font-medium">Problem Pasien</label>
                  <input type="text" placeholder="Contoh: Nyeri Dada" className="w-full border border-gray-300 bg-gray-50 rounded-md p-2 mb-3" />
                  <label className="text-gray-700 text-sm font-medium">Umur</label>
                  <input type="number" placeholder="Umur" className="w-full border border-gray-300 bg-gray-50 rounded-md p-2 mb-3" />
                  <label className="text-gray-700 text-sm font-medium">Jenis Kelamin Pasien</label>
                  <div className="flex gap-4 mt-1">
                    <label className="flex items-center gap-1 text-gray-700">
                      <input type="radio" name="gender" /> Laki-laki
                    </label>
                    <label className="flex items-center gap-1 text-gray-700">
                      <input type="radio" name="gender" /> Perempuan
                    </label>
                  </div>
                </div>

                {/* Situasi Ujian */}
                <div>
                  <h3 className="font-semibold text-gray-800 pb-1 border-b border-gray-200 mb-3">
                    Situasi Ujian
                  </h3>
                  <label className="font-medium text-gray-700 text-sm block mb-1">Situasi Ruangan</label>
                  <div className="flex flex-col gap-1 mb-3">
                    {["Rawat Jalan", "IGD", "Rawat Inap", "Lain-lain"].map((opt) => (
                      <label key={opt} className="flex items-center gap-1 text-gray-700">
                        <input type="radio" name="situasi" /> {opt}
                      </label>
                    ))}
                  </div>
                  <label className="font-medium text-gray-700 text-sm block mb-1">Evaluasi ke</label>
                  <div className="flex gap-3">
                    {["E1", "E2", "E3"].map((opt) => (
                      <label key={opt} className="flex items-center gap-1 text-gray-700">
                        <input type="radio" name="evaluasi" /> {opt}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* === Daftar Komponen Penilaian === */}
            <div className="space-y-4">
              {komponen.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white border rounded-xl shadow-sm p-4 hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 flex items-center justify-center bg-blue-50 text-blue-600 font-bold rounded-full text-xs shadow-sm">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 flex items-center gap-1">
                          {item.label}
                          <button
                            onClick={() => openPopup(item)}
                            className="text-gray-400 text-xs hover:text-blue-500"
                            title="Lihat deskripsi"
                          >
                            ⓘ
                          </button>
                        </p>
                        <p className="text-xs text-gray-500">
                          Bobot: {item.bobot}%
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 mb-0.5">Nilai Akhir</p>
                      <p className="text-emerald-500 font-bold text-lg">
                        {((formData[item.id] * item.bobot) / 100).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-2">
                    <input
                      type="range"
                      min="10"
                      max="100"
                      step="1"
                      value={formData[item.id]}
                      onChange={(e) => handleSliderChange(item.id, e.target.value)}
                      className="w-full accent-blue-600"
                    />
                    <span className="w-10 text-right text-blue-600 font-bold text-sm">
                      {formData[item.id]}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* === UMPAN BALIK DOKTER MUDA === */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mt-6">
              <div className="text-center font-semibold text-gray-800 py-4 text-sm">
                Umpan Balik Terhadap Performance Dokter Muda
              </div>

              <div className="space-y-4 px-4 pb-6">
                {[
                  { id: 1, label: "Yang Sudah Baik" },
                  { id: 2, label: "Yang Masih Harus Diperbaiki" },
                  { id: 3, label: "Rencana Tindak Lanjut" },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-50 rounded-xl p-4 border border-gray-200"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                        {item.id}
                      </div>
                      <span className="font-semibold text-gray-800 text-sm">
                        {item.label}
                      </span>
                    </div>
                    <textarea
                      placeholder={`Tuliskan ${item.label.toLowerCase()}...`}
                      className="w-full border border-gray-200 rounded-lg p-2 text-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-400"
                      rows="2"
                    ></textarea>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-500 text-center py-3 rounded-b-2xl cursor-pointer hover:bg-emerald-600 transition-all">
                <button
                  onClick={() => navigate("/minicex")}
                  className="text-white text-xs font-semibold tracking-wide"
                >
                  KIRIM PENILAIAN
                </button>
              </div>
            </div>
          </div>

          {/* === Kolom Kanan (Sticky Total Nilai) === */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white border border-gray-100 rounded-2xl shadow-md p-6 text-center">
              <h3 className="text-gray-800 font-semibold text-lg mb-1">
                Mini-CEX
              </h3>
              <p className="text-gray-500 text-xs mb-3">
                (Mini Clinical Evaluation Exercise)
              </p>
              <p className="text-gray-500 text-sm">TOTAL NILAI AKHIR</p>
              <div className="text-emerald-500 font-extrabold text-5xl mt-2">
                {totalNilai}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === POPUP === */}
      {popup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-96 relative">
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            <h2 className="text-center font-bold text-gray-800 mb-4">
              Proficient Komponen Penilaian
            </h2>
            <div className="border border-blue-200 text-blue-600 bg-blue-50 rounded-lg px-3 py-2 text-center font-semibold mb-3">
              {popup.label}
            </div>
           <ul className="list-disc pl-6 pr-3 text-gray-700 text-sm space-y-2 bg-gray-50 p-4 rounded-lg text-justify leading-relaxed">
              {popup.poin && popup.poin.length > 0 ? (
                popup.poin.map((p, i) => (
                  <li key={i} className="text-justify indent-0">{p}</li>
                ))
              ) : (
                <li className="text-justify">Belum ada deskripsi penilaian.</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
