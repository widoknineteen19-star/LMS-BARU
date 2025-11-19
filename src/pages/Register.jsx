import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Password tidak sama!");
      return;
    }

    alert("Registrasi berhasil!");
    navigate("/"); // kembali ke login
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('src/assets/rectangle-330.png')`,
      }}
    >
      <div className="bg-white/45 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-full max-w-md border border-white/90 text-gray-800">

        {/* Logo */}
        <div className="text-center mb-6">
          <img
            src="src/assets/Logo Unizar.png"
            alt="Logo Unizar"
            className="w-24 h-24 mx-auto mb-3"
          />
          <h2 className="text-3xl font-bold text-green-700 tracking-wide drop-shadow-sm">
            Registrasi
          </h2>
        </div>

        {/* FORM */}
        <form onSubmit={submit} className="space-y-5">

          {/* EMAIL → pakai icon USER sesuai contoh */}
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-12 flex items-center justify-center">
              <FaUser className="text-gray-400 text-[22px]" />
            </div>
            <div className="absolute left-12 top-1/2 -translate-y-1/2 h-7 w-px bg-gray-300"></div>

            <input
              type="email"
              name="email"
              placeholder="Masukkan email anda..."
              value={form.email}
              onChange={handleChange}
              className="w-full pl-16 pr-3 py-3 text-lg rounded-xl border border-gray-300
              bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* USERNAME → icon sama (sesuai gambar min) */}
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-12 flex items-center justify-center">
              <FaUser className="text-gray-400 text-[22px]" />
            </div>
            <div className="absolute left-12 top-1/2 -translate-y-1/2 h-7 w-px bg-gray-300"></div>

            <input
              type="text"
              name="username"
              placeholder="Username..."
              value={form.username}
              onChange={handleChange}
              className="w-full pl-16 pr-3 py-3 text-lg rounded-xl border border-gray-300
              bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-12 flex items-center justify-center">
              <FaLock className="text-gray-400 text-lg" />
            </div>
            <div className="absolute left-12 top-1/2 -translate-y-1/2 h-7 w-px bg-gray-300"></div>

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full pl-16 pr-3 py-3 text-lg rounded-xl border border-gray-300
              bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-12 flex items-center justify-center">
              <FaLock className="text-gray-400 text-lg" />
            </div>
            <div className="absolute left-12 top-1/2 -translate-y-1/2 h-7 w-px bg-gray-300"></div>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Ulangi Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full pl-16 pr-3 py-3 text-lg rounded-xl border border-gray-300
              bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* BUTTON */}
          <button
  onClick={() => {
    localStorage.setItem("user", JSON.stringify(form));
    navigate("/akun");
  }}
  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg mt-2 shadow-lg transition"
>
            Registrasi
          </button>
        </form>

      </div>
    </div>
  );
}
