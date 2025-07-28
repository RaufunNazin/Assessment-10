"use client";

import type React from "react";

import { useEffect, useState } from "react";

interface AnimatedHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function AnimatedHeader({
  title,
  subtitle,
  icon,
  className = "",
}: AnimatedHeaderProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`text-center mb-8 ${className}`}>
      {/* Lottie Animation Placeholder */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center">
            <div className="w-10 h-10 bg-emerald-500 rounded-full animate-bounce"></div>
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
        </div>
      </div>

      <div
        className={`transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          {icon && <div className="text-emerald-600">{icon}</div>}
          <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
        </div>
        {subtitle && (
          <p
            className={`text-slate-600 transition-all duration-700 ease-out delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
