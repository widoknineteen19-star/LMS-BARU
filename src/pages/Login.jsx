import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

import "../index.css"; 

export default function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    // dummy auth
    navigate("/dashboard");
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('src/assets/rectangle-330.png')`,
      }}
    >
      <div className="bg-white/45 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-full max-w-md border border-white/90 text-gray-800">
        <div className="text-center mb-8">
          <img
            src="src/assets/Logo Unizar.png" 
            alt="Logo Unizar"
            className="w-24 h-24 mx-auto mb-3"
          />
          <h2 className="text-3xl font-bold text-green-700 tracking-wide drop-shadow-sm">
            Login
          </h2>
        </div>

        <form onSubmit={submit}>
          <div className="relative mb-6">
            <FaUser className="absolute left-3 top-3.5 text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="NIM / Email / Username"
              className="w-full pl-10 pr-3 py-3 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>

          <div className="relative mb-8">
            <FaLock className="absolute left-3 top-3.5 text-gray-500 text-lg" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-3 py-3 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

           {/* Tombol Masuk */}
          <button
            type="submit"
            className="w-full py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition-all shadow-md hover:shadow-lg text-lg font-semibold tracking-wide"
          >
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffffff, #a3e635, #ffffff)",
              }}
            >
              Masuk
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}