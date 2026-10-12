import React from "react";

export interface LogoProps {
  className?: string;
  size?: number;
}

export function GraphAlgorithmLogo({ className = "w-6 h-6", size }: LogoProps) {
  const style = size ? { width: size, height: size } : undefined;
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <defs>
        <linearGradient
          id="graph-edge-grad"
          x1="8"
          y1="6"
          x2="24"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#a855f7" />
          <stop offset="1" stopColor="#6366f1" />
        </linearGradient>
      </defs>

      {}
      <path
        d="M24 8L13 7L7 16L13 25L24 24"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-slate-300 dark:text-zinc-700"
      />
      {}
      <path
        d="M13 7L24 24"
        stroke="url(#graph-edge-grad)"
        strokeWidth="1.8"
        strokeDasharray="2.5 2.5"
        strokeOpacity="0.8"
      />

      {}
      <circle
        cx="24"
        cy="8"
        r="3"
        className="fill-slate-100 dark:fill-zinc-900 stroke-slate-400 dark:stroke-zinc-500"
        strokeWidth="2"
      />

      {}
      <circle
        cx="13"
        cy="7"
        r="2.8"
        className="fill-purple-100 dark:fill-purple-950 stroke-purple-400"
        strokeWidth="2"
      />
      <circle
        cx="7"
        cy="16"
        r="3.2"
        className="fill-purple-200 dark:fill-purple-900 stroke-purple-500"
        strokeWidth="2"
      />
      <circle
        cx="13"
        cy="25"
        r="2.8"
        className="fill-purple-100 dark:fill-purple-950 stroke-purple-400"
        strokeWidth="2"
      />

      {}
      <circle cx="24" cy="24" r="4.2" className="fill-purple-500 shadow-sm" />
      <circle cx="24" cy="24" r="2" fill="white" />
    </svg>
  );
}

export const Logo = GraphAlgorithmLogo;
