import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import MiniCex from './pages/MiniCex'
import DOPS from './pages/DOPS'
import { MiniCexProvider } from "./context/MiniCexContext";
import FormPenilaian from './pages/FormPenilaian';
export default function App() {
return (
<Routes>
<Route path="/" element={<Navigate to="/login" replace />} />
<Route path="/login" element={<Login />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/mini-cex" element={<MiniCex />} />
<Route path="/dops" element={<DOPS />} />
<Route path="/form-penilaian/:nama" element={<FormPenilaian />} />
{/* fallback */}
<Route path="*" element={<Navigate to="/login" replace />} />
</Routes>
)
}