import React from 'react'
import { Link } from 'react-router-dom'
export default function AssessmentCard({item}){
  return (
    <div className="card w-64">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs text-gray-500">Jenis Penilaian</div>
          <div className="font-semibold text-lg">{item.title}</div>
          <div className="text-xs text-gray-400 mt-1">{item.type}</div>
        </div>
        <img src={item.img} alt="" className="w-12 h-12 rounded" />
      </div>
      <div className="mt-4 flex justify-between items-center">
        <Link to={`/assessments/${item.id}/edit`} className="px-3 py-1 bg-unizar text-white rounded">Isi Nilai</Link>
        <Link to={`/result/${item.id}`} className="text-sm text-unizar font-medium">Lihat Nilai</Link>
      </div>
    </div>
  )
}
