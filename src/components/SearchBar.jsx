import React from 'react'
export default function SearchBar({onSearch}){
  return (
    <div className="mt-4">
      <div className="relative max-w-2xl mx-auto">
        <input onChange={(e)=>onSearch(e.target.value)} placeholder="Ketik untuk mencari..." className="w-full p-3 pl-12 rounded border border-gray-200 focus:ring-2 focus:ring-unizar" />
        <div className="absolute left-3 top-3 text-gray-400">🔍</div>
      </div>
    </div>
  )
}
