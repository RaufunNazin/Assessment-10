"use client";

import { Loader2 } from "lucide-react";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center flex flex-col items-center">
        <img
          src="/images/logo.svg"
          alt="Logo"
          className="h-6 mb-4 animate-pulse"
        />
        <div className="flex items-center gap-2 text-slate-600 justify-center">
          <Loader2 className="w-5 h-5 animate-spin text-emerald-600" />
          <span>Loading content...</span>
        </div>
      </div>
    </div>
  );
}
