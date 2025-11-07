import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Result({ theme, setTheme }){
  const { id } = useParams()
  const navigate = useNavigate()
  const data = JSON.parse(localStorage.getItem('lastResult')||'null')
  if(!data || data.id !== id) {
    return (
      <div className="min-h-screen p-6">
        <Navbar theme={theme} setTheme={setTheme} />
        <div className="mt-6 card">No result found. Fill form first.</div>
      </div>
    )
  }
  return (
    <div className="min-h-screen p-6">
      <Navbar theme={theme} setTheme={setTheme} />
      <div className="mt-6 max-w-3xl mx-auto card">
        <h3 className="font-semibold">Hasil Penilaian - ID {id}</h3>
        <div className="mt-4">
          <div className="text-3xl font-bold text-unizar">{data.avg}</div>
          <div className="text-sm text-gray-500 mt-2">Rangkuman penilaian</div>
          <ul className="mt-4">
            {data.items.map((it,idx)=>(<li key={idx} className="py-2 border-b">{it.label}: <strong>{it.value}</strong></li>))}
          </ul>
          <div className="mt-4 flex justify-end">
            <button onClick={()=>navigate('/dashboard')} className="px-4 py-2 bg-unizar text-white rounded">Kembali</button>
          </div>
        </div>
      </div>
    </div>
  )
}
