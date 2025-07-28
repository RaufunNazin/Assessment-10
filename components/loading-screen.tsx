"use client"

import { Loader2 } from "lucide-react"

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">10</span>
          </div>
          <span className="text-xl font-bold text-slate-800">Minute School</span>
        </div>
        <div className="flex items-center gap-2 text-slate-600">
          <Loader2 className="w-5 h-5 animate-spin text-emerald-600" />
          <span>Loading content...</span>
        </div>
      </div>
    </div>
  )
}
