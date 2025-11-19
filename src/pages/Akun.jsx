import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBell,
  FaSignOutAlt,
  FaArrowLeft,
  FaUserEdit,
  FaPowerOff,
  FaTimes, // Tambahkan ikon FaTimes untuk tombol tutup
} from "react-icons/fa";

export default function Akun() {
  const navigate = useNavigate();
  // State untuk mengontrol tampilan Modal Profil (menggantikan 'dropdown')
  const [profileModal, setProfileModal] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);
  const [editProfileModal, setEditProfileModal] = useState(false);

  // Data dummy (ganti dengan data user sebenarnya)
  const userData = {
    namaLengkap: "Iing, Dr., dr., M.Erg",
    email: "iing@lms.com",
    fotoProfil: "src/assets/Profil.png", // Ganti dengan path foto profil yang benar
  };

  const [form, setForm] = useState({
    email: "",
    nama: "",
    password: "",
    ulangiPassword: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => alert("Data berhasil disimpan!");

  const doLogout = () => {
    setConfirmLogout(false);
    setProfileModal(false); // Tutup modal profil
    navigate("/");
  };

  // Fungsi untuk membuka modal edit profil
  const handleEditProfileClick = () => {
    setProfileModal(false); // Tutup modal ringkas
    setEditProfileModal(true); // Tampilkan modal edit
  };

  // ================= KOMPONEN MODAL PROFIL RINGKAS BARU =================
  const ProfilePopupModal = ({ closeModal }) => (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-xs text-center relative">
        {/* Tombol Close di Pojok Kanan Atas */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
        >
          <FaTimes />
        </button>

        {/* Info Profil */}
        <div className="flex flex-col items-center pt-3 pb-4">
          <img
            src={userData.fotoProfil}
            className="w-16 h-16 rounded-full mb-3 border-2 border-emerald-500"
            alt="Profil"
          />
          <p className="text-sm font-semibold text-gray-800 leading-tight">
            {userData.namaLengkap}
          </p>
          <p className="text-xs text-gray-500">{userData.email}</p>
        </div>

        {/* Garis Pemisah */}
        <div className="border-b border-dashed border-gray-300 mb-6"></div>

        {/* Tombol Aksi */}
        <div className="flex gap-3">
          <button
            onClick={handleEditProfileClick}
            className="flex-1 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition shadow-md"
          >
            Edit Profile
          </button>
          <button
            onClick={() => {
              closeModal();
              setConfirmLogout(true);
            }}
            className="flex-1 px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition shadow-md"
          >
            Keluar
          </button>
        </div>
      </div>
    </div>
  );
  // ================= AKHIR KOMPONEN MODAL PROFIL RINGKAS =================

  // Komponen Modal Edit Profil (Disarankan dipisah ke file lain)
  const EditProfileModal = ({ closeModal }) => {
    // Anda bisa tambahkan state form di sini jika ingin mengedit data
    const [editForm, setEditForm] = useState({
      email: userData.email, // Ambil data dari state utama
      nama: userData.namaLengkap,
      password: "",
      ulangiPassword: "",
    });

    const handleEditChange = (e) =>
      setEditForm({ ...editForm, [e.target.name]: e.target.value });

    const handleEditSubmit = (e) => {
      e.preventDefault();
      // Logic simpan data ke backend
      alert("Data profil berhasil diperbarui!");
      closeModal();
    };

    return (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4">
        <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg text-gray-800">
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h3 className="text-xl font-bold text-emerald-600">
              <FaUserEdit className="inline mr-2" /> Edit Profil
            </h3>
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-red-500"
            >
              <FaTimes className="text-2xl" />
            </button>
          </div>

          <form onSubmit={handleEditSubmit}>
            <div className="mb-4">
              <label className="text-sm font-medium block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={editForm.email}
                onChange={handleEditChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-gray-50"
                required
              />
            </div>

            <div className="mb-4">
              <label className="text-sm font-medium block mb-1">
                Nama Pengguna
              </label>
              <input
                type="text"
                name="nama"
                value={editForm.nama}
                onChange={handleEditChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-gray-50"
                required
              />
            </div>

            <h4 className="font-semibold text-gray-700 mt-6 mb-3">
              Ganti Password (Opsional)
            </h4>

            <div className="mb-4">
              <label className="text-sm font-medium block mb-1">
                Password Baru
              </label>
              <input
                type="password"
                name="password"
                value={editForm.password}
                onChange={handleEditChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-gray-50"
              />
            </div>

            <div className="mb-6">
              <label className="text-sm font-medium block mb-1">
                Ulangi Password Baru
              </label>
              <input
                type="password"
                name="ulangiPassword"
                value={editForm.ulangiPassword}
                onChange={handleEditChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-gray-50"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={closeModal}
                className="px-5 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition"
              >
                Simpan Perubahan
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* ================= NAVBAR ================= */}
      <header className="bg-emerald-500 text-white py-3 px-8 flex items-center justify-between rounded-2xl shadow-md m-4 relative">
        {/* Logo & Title (centered) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-3">
          <img src="src/assets/Logo Unizar.svg" className="w-10 h-10" />
          <div className="text-center leading-tight">
            <h1 className="text-sm font-semibold">
              Learning Management System
            </h1>
            <h2 className="text-sm font-bold">Fakultas Kedokteran UNIZAR</h2>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3 ml-auto">
          {/* Notification */}
          <div className="relative cursor-pointer">
            <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-xl bg-white/10 hover:bg-white/20 transition">
              <FaBell className="text-white text-xl" />
            </div>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
              1
            </span>
          </div>

          {/* Logout quick icon (dihilangkan karena sudah ada di modal profil) */}
          {/* <button
            onClick={() => setConfirmLogout(true)}
            className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-xl bg-white/10 hover:bg-white/20 transition"
          >
            <FaSignOutAlt className="text-white text-xl" />
          </button> */}

          {/* Profile Click Target */}
          <div className="relative">
            <img
              src={userData.fotoProfil} // Menggunakan data user
              className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
              // Mengubah onClick untuk menampilkan modal profil
              onClick={() => setProfileModal(true)}
              alt="Profile"
            />
            {/* DROPDOWN LAMA DIHAPUS */}
          </div>
        </div>
      </header>

      {/* ================= BACK BUTTON ================= */}
      <div className="w-full flex justify-end pr-8 -mt-4 mb-2">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-1.5 border rounded-lg text-gray-600 bg-white hover:bg-gray-100 transition shadow-sm"
        >
          <FaArrowLeft /> KEMBALI
        </button>
      </div>

      {/* ================= FORM UTAMA ================= */}
      <div className="bg-white p-8 rounded-2xl shadow-md m-4 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Username */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Username</h3>

            <label className="text-sm">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Masukkan email anda..."
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 mb-4 p-2 bg-gray-100 rounded-md focus:ring-2 focus:ring-emerald-400 outline-none"
            />

            <label className="text-sm">Nama Pengguna</label>
            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-gray-100 rounded-md focus:ring-2 focus:ring-emerald-400 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Password</h3>

            <label className="text-sm">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full mt-1 mb-4 p-2 bg-gray-100 rounded-md focus:ring-2 focus:ring-emerald-400 outline-none"
            />

            <label className="text-sm">Ulangi Password</label>
            <input
              type="password"
              name="ulangiPassword"
              value={form.ulangiPassword}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-gray-100 rounded-md focus:ring-2 focus:ring-emerald-400 outline-none"
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleSubmit}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md"
          >
            SIMPAN
          </button>
        </div>
      </div>

      {/* ================= MODAL PROFIL RINGKAS (POPUP BARU) ================= */}
      {profileModal && (
        <ProfilePopupModal closeModal={() => setProfileModal(false)} />
      )}

      {/* ================= MODAL EDIT PROFIL ================= */}
      {editProfileModal && (
        <EditProfileModal closeModal={() => setEditProfileModal(false)} />
      )}

      {/* ================= MODAL KONFIRMASI KELUAR ================= */}
      {confirmLogout && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-80 text-center">
            <h3 className="text-lg font-semibold mb-4">
              Apakah Anda ingin keluar?
            </h3>

            <div className="flex justify-center gap-3 mt-4">
              <button
                onClick={doLogout}
                className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Iya
              </button>
              <button
                onClick={() => setConfirmLogout(false)}
                className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                Tidak
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}