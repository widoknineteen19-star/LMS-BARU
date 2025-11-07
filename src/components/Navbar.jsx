import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar({ theme, setTheme }){
  const navigate = useNavigate()
  return (
    <div className="header-banner text-white rounded-md p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="src/assets/Logo Unizar.svg" alt="logo" className="w-10 h-10 bg-white rounded-full p-1" />
        <div>
          <div className="font-semibold">Learning Management System</div>
          <div className="text-sm opacity-90">Fakultas Kedokteran UNIZAR</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Link to='/assessments' className="text-sm bg-white bg-opacity-10 px-3 py-1 rounded">Assessments</Link>
        <button onClick={()=> navigate('/login')} className="bg-white bg-opacity-10 px-3 py-1 rounded">Logout</button>
        <button
          aria-label="toggle theme"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="ml-2 p-2 rounded bg-white bg-opacity-10"
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>
    </div>
  )
}
