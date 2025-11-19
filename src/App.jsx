import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Login from './pages/Login'
import DaftarPenyakit from './pages/DaftarPenyakit'
import Dashboard from './pages/Dashboard'
import MiniCex from './pages/MiniCex'
import DOPS from './pages/DOPS'
import { MiniCexProvider } from "./context/MiniCexContext";
import FormPenilaian from './pages/FormPenilaian';
import FormPenilaianDOPS from './pages/FormPenilaianDOPS';
import DashboardPenyakit from "./pages/DashboardPenyakit";
import CBD from './pages/CBD'
import Register from './pages/Register';
import Akun from './pages/Akun';
export default function App() {
return (
<Routes>
<Route path="/" element={<Navigate to="/login" replace />} />
<Route path="/login" element={<Login />} />
<Route path="/daftar-penyakit" element={<DaftarPenyakit />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/mini-cex" element={<MiniCex />} />
<Route path="/dops" element={<DOPS />} />
<Route path="/form-penilaian/:nama" element={<FormPenilaian />} />
<Route path="/mini-cex-context" element={<MiniCexProvider />} />
<Route path="/form-penilaian-dops/:nama" element={<FormPenilaianDOPS />} />
<Route path="/cbd" element={<CBD />} />
<Route path="/penyakit" element={<DashboardPenyakit />} />
<Route path="/register" element={<Register />} />
<Route path="/akun" element={<Akun />} />
{/* fallback */}
<Route path="*" element={<Navigate to="/login" replace />} />
</Routes>
)
}