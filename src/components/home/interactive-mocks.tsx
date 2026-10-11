"use client";

import { useState } from "react";

/* ─────────────────── Interactive DP & Code Mockup ─────────────────── */

const cells = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1],
  [0, 1, 1, 2, 2, 2],
  [0, 1, 1, 2, 2, 3],
  [0, 1, 2, 2, 3, 3],
];

export function InteractiveHeroMockup() {
  const [activeCell, setActiveCell] = useState<{ i: number; j: number }>({
    i: 3,
    j: 5,
  });

  const getActiveLines = () => {
    if (activeCell.i === 0 || activeCell.j === 0) return [1, 2];
    const val = cells[activeCell.i][activeCell.j];
    const prev = cells[activeCell.i - 1][activeCell.j];
    if (val > prev) return [3, 4, 5, 6, 7];
    return [3, 8, 9];
  };

  const activeLines = getActiveLines();

  const codeLines = [
    { num: 1, code: "for i in range(1, n+1):" },
    { num: 2, code: "  for j in range(1, W+1):" },
    { num: 3, code: "    if w[i-1] <= j:" },
    { num: 4, code: "      dp[i][j] = max(" },
    { num: 5, code: "        dp[i-1][j]," },
    { num: 6, code: "        dp[i-1][j-w[i-1]] + v[i-1]" },
    { num: 7, code: "      )" },
    { num: 8, code: "    else:" },
    { num: 9, code: "      dp[i][j] = dp[i-1][j]" },
  ];

  const insight = (() => {
    const { i, j } = activeCell;
    if (i === 0 || j === 0)
      return `Base case: dp[${i}][${j}] is initialized to 0 since either capacity is 0 or no items are considered.`;
    const val = cells[i][j];
    const prev = cells[i - 1][j];
    if (val > prev) {
      return `At dp[${i}][${j}], we compare the previous best (${prev}) vs taking item ${i}. Taking it yields ${val}, which wins.`;
    }
    return `At dp[${i}][${j}], taking item ${i} is either not possible or doesn't improve the value, so we keep the previous best (${prev}).`;
  })();

  return (
    <div className="flex flex-col gap-6 w-full max-w-[500px] mx-auto md:mr-0 mt-8 md:mt-0">
      
      {/* Code Block Mockup (Top Left) */}
      <div className="rounded-xl overflow-hidden border border-slate-200/50 dark:border-slate-700/50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-black/50 z-10 transition-all duration-300">
        {/* macOS Header */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-zinc-950/50">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 text-[10px] font-medium text-slate-400">solve.cpp</span>
        </div>
        <div className="p-4 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-slate-800 dark:text-slate-200">
          {codeLines.map((line) => {
            const isHl = activeLines.includes(line.num);
            const isDim = !isHl && activeCell.i !== 0 && activeCell.j !== 0;

            return (
              <div
                key={line.num}
                className={`px-2 py-0.5 rounded-sm whitespace-pre transition-colors duration-200 ${
                  isHl
                    ? "bg-purple-500/10 dark:bg-purple-400/8 text-slate-900 dark:text-slate-100 border-l-2 border-purple-500"
                    : isDim
                      ? "text-slate-400 dark:text-slate-600 opacity-60 border-l-2 border-transparent"
                      : "text-slate-600 dark:text-slate-400 border-l-2 border-transparent"
                }`}
              >
                <span className="inline-block w-4 text-right mr-3 text-slate-300 dark:text-slate-600 font-mono select-none">
                  {line.num}
                </span>
                {line.code
                  .split(/(\bfor\b|\bin\b|\bif\b|\belse\b|\bmax\b|dp)/)
                  .map((part, idx) => {
                    if (["for", "in", "if", "else"].includes(part))
                      return <span key={idx} className="text-purple-600 font-semibold dark:text-purple-400">{part}</span>;
                    if (part === "max")
                      return <span key={idx} className="text-amber-600 dark:text-amber-500">{part}</span>;
                    if (part === "dp")
                      return <span key={idx} className="text-purple-600 dark:text-purple-400">{part}</span>;
                    return part;
                  })}
              </div>
            );
          })}
        </div>
      </div>

      {/* DP Grid Mockup (Bottom Right) */}
      <div className="rounded-xl overflow-hidden border border-slate-200/50 dark:border-slate-700/50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl shadow-xl shadow-purple-500/10 dark:shadow-purple-900/20 z-10 transition-all duration-300">
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-zinc-950/50">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
            <span className="ml-2 text-[10px] font-medium text-slate-400">Memory Inspector</span>
          </div>
        </div>
        
        <div className="p-4 overflow-x-auto">
          <table className="border-collapse w-full" onMouseLeave={() => setActiveCell({ i: 3, j: 5 })}>
            <thead>
              <tr className="bg-slate-50/50 dark:bg-zinc-950/50">
                <th className="w-9 h-6 border border-slate-200/50 dark:border-slate-800/50 font-medium text-slate-500 text-[10px]"></th>
                {["w=0", "w=1", "w=2", "w=3", "w=4", "w=5"].map((w, j) => (
                  <th key={j} className="w-9 h-6 border border-slate-200/50 dark:border-slate-800/50 font-medium text-slate-500 text-[10px]">
                    {w}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cells.map((row, i) => (
                <tr key={i}>
                  <td className="w-9 h-6 border border-slate-200/50 dark:border-slate-800/50 font-medium text-slate-500 text-[10px] text-center bg-slate-50/50 dark:bg-zinc-950/50">
                    i={i}
                  </td>
                  {row.map((val, j) => {
                    const isActive = i === activeCell.i && j === activeCell.j;
                    const isInPath = i <= activeCell.i && j <= activeCell.j && !isActive;
                    return (
                      <td key={j} onMouseEnter={() => setActiveCell({ i, j })} className="p-0 cursor-pointer">
                        <div className={`w-9 h-8 flex flex-col items-center justify-center border border-slate-200/50 dark:border-slate-800/50 transition-colors font-mono font-medium text-xs ${
                          isActive
                            ? "bg-purple-500/20 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 ring-1 ring-inset ring-purple-500 shadow-[inset_0_0_10px_rgba(124,111,189,0.2)]"
                            : isInPath
                            ? "text-slate-400 dark:text-slate-500 bg-slate-50/50 dark:bg-zinc-900/30"
                            : "text-slate-300 dark:text-slate-600 bg-transparent"
                        }`}>
                          {val}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="border-t border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-zinc-950/50 p-3 flex-1 transition-all duration-300">
          <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-relaxed">
            <span className="font-semibold text-slate-900 dark:text-slate-100">Insight:</span> {insight}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────── Interactive Graph Mockup ─────────────────── */

const BASE_NODES = [
  { id: "A", cx: 45, cy: 35, active: false },
  { id: "B", cx: 110, cy: 22, active: true },
  { id: "C", cx: 175, cy: 45, active: true },
  { id: "D", cx: 65, cy: 90, active: false },
  { id: "E", cx: 130, cy: 90, active: true },
  { id: "F", cx: 150, cy: 135, active: true },
];

const EDGES = [
  ["A", "B", false],
  ["A", "D", false],
  ["B", "C", true],
  ["B", "E", false],
  ["D", "E", false],
  ["E", "C", true],
  ["E", "F", false],
  ["C", "F", true],
];

export function InteractiveGraphMock() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <svg
      viewBox="0 0 220 160"
      className="w-full h-auto max-w-55 overflow-visible"
      aria-hidden
      onMouseLeave={() => setHoveredNode(null)}
    >
      {/* 1. Render Edges with Static Coordinates (Smooth Opacity Transitions) */}
      {EDGES.map(([n1, n2, isActive]) => {
        const p1 = BASE_NODES.find((n) => n.id === n1)!;
        const p2 = BASE_NODES.find((n) => n.id === n2)!;

        const isAffected = hoveredNode === n1 || hoveredNode === n2;
        const opacityClass = hoveredNode
          ? isAffected
            ? "opacity-100"
            : "opacity-20"
          : "opacity-100";

        return (
          <line
            key={`${n1}-${n2}`}
            x1={p1.cx}
            y1={p1.cy}
            x2={p2.cx}
            y2={p2.cy}
            className={`transition-all duration-500 ease-in-out ${
              isActive
                ? "stroke-purple-500/50"
                : "stroke-slate-200 dark:stroke-slate-700/50"
            } ${opacityClass}`}
            strokeWidth={isActive ? (isAffected ? 2.5 : 2) : 1.5}
          />
        );
      })}

      {/* 2. Render Nodes with Pure CSS Transforms */}
      {BASE_NODES.map((n) => {
        // Calculate dynamic transform state
        let transformStr = "translate(0px, 0px) scale(1)";
        let isHovered = hoveredNode === n.id;

        if (hoveredNode && !isHovered) {
          const hNode = BASE_NODES.find((hn) => hn.id === hoveredNode)!;
          const dx = n.cx - hNode.cx;
          const dy = n.cy - hNode.cy;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;

          // Move 3px away from hovered node
          const moveX = (dx / dist) * 3;
          const moveY = (dy / dist) * 3;
          transformStr = `translate(${moveX}px, ${moveY}px) scale(0.95)`;
        } else if (isHovered) {
          transformStr = `translate(0px, -2px) scale(1.15)`;
        }

        return (
          <g
            key={n.id}
            onMouseEnter={() => setHoveredNode(n.id)}
            className="transition-all duration-500 ease-out cursor-pointer"
            style={{
              transform: transformStr,
              transformOrigin: `${n.cx}px ${n.cy}px`,
            }}
          >
            <circle
              cx={n.cx}
              cy={n.cy}
              r="15"
              className={`transition-colors duration-300 ${
                n.active
                  ? "fill-purple-50 dark:fill-purple-500/20 stroke-purple-500 dark:stroke-purple-400"
                  : "fill-white dark:fill-zinc-900/50 stroke-slate-200 dark:stroke-slate-700"
              } ${isHovered ? "shadow-lg" : ""}`}
              strokeWidth={isHovered ? "2" : "1.5"}
            />
            <text
              x={n.cx}
              y={n.cy}
              textAnchor="middle"
              dominantBaseline="central"
              className={`text-[11px] font-semibold transition-colors duration-300 ${
                n.active ? "fill-purple-600 dark:fill-purple-300" : "fill-slate-400"
              }`}
            >
              {n.id}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
