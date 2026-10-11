import React from "react";

export function Insight({ title = "Observation", children }: { title?: string, children: React.ReactNode }) {
  return (
    <div className="my-5 rounded-r-lg border-l-4 border-purple-500 border-y border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-zinc-900/50 p-4 shadow-sm">
      <h3 className="text-sm font-bold text-purple-700 dark:text-purple-400 mb-1.5">{title}</h3>
      <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        {children}
      </div>
    </div>
  )
}

export function Complexity({ time, space }: { time: string, space: string }) {
  return (
    <div className="my-8 flex flex-wrap gap-4">
      <div className="flex-1 min-w-[200px] rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-zinc-900 p-5 flex items-center justify-between shadow-sm">
        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Time Complexity</span>
        <span className="font-mono text-sm font-bold text-purple-700 dark:text-purple-200 bg-purple-50 dark:bg-purple-900/30 px-3 py-1.5 rounded-md border border-purple-100 dark:border-purple-800/50">{time}</span>
      </div>
      <div className="flex-1 min-w-[200px] rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-zinc-900 p-5 flex items-center justify-between shadow-sm">
        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Space Complexity</span>
        <span className="font-mono text-sm font-bold text-purple-700 dark:text-purple-200 bg-purple-50 dark:bg-purple-900/30 px-3 py-1.5 rounded-md border border-purple-100 dark:border-purple-800/50">{space}</span>
      </div>
    </div>
  )
}

export function Hint({ children }: { children: React.ReactNode }) {
  return (
    <details className="my-6 group rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-zinc-900/50 [&_summary::-webkit-details-marker]:hidden shadow-sm overflow-hidden">
      <summary className="flex cursor-pointer items-center justify-between p-4 font-semibold text-slate-900 dark:text-slate-100 bg-white dark:bg-zinc-900 transition-colors hover:bg-slate-50 dark:hover:bg-zinc-800">
        <span className="flex items-center gap-2">
          Reveal Hint
        </span>
        <span className="text-slate-400 transition-transform duration-200 group-open:rotate-180">▼</span>
      </summary>
      <div className="p-5 text-sm text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800 leading-relaxed bg-slate-50 dark:bg-zinc-900/50">
        {children}
      </div>
    </details>
  )
}

export function ArrayView({ data, activeIndices = [], highlightIndices = [] }: { data: any[], activeIndices?: number[], highlightIndices?: number[] }) {
  return (
    <div className="my-8 overflow-x-auto pb-4">
      <div className="flex gap-1.5 min-w-max">
        {data.map((item, i) => {
          const isActive = activeIndices.includes(i);
          const isHighlight = highlightIndices.includes(i);
          return (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <span className="text-[10px] text-slate-400 font-mono font-medium">{i}</span>
              <div className={`w-12 h-12 flex items-center justify-center rounded-md font-mono font-bold text-sm border-2 transition-all ${
                isActive ? 'border-purple-500 bg-purple-500/10 text-purple-700 dark:text-purple-300 shadow-sm shadow-purple-500/20' :
                isHighlight ? 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 shadow-sm shadow-emerald-500/20' :
                'border-slate-200 dark:border-slate-700 bg-white dark:bg-zinc-900 text-slate-700 dark:text-slate-300 shadow-sm'
              }`}>
                {item}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function DPGrid({ data, activeRow, activeCol, rowLabels, colLabels }: { data: any[][], activeRow?: number, activeCol?: number, rowLabels?: string[], colLabels?: string[] }) {
  return (
    <div className="my-8 overflow-x-auto pb-4">
      <table className="border-collapse font-mono text-sm">
        {colLabels && (
          <thead>
            <tr>
              <th className="p-2"></th>
              {colLabels.map((lbl, i) => (
                <th key={i} className="p-2 font-medium text-slate-400 text-xs">{lbl}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {data.map((row, r) => (
            <tr key={r}>
              {rowLabels && <th className="p-2 font-medium text-slate-400 text-xs pr-4">{rowLabels[r]}</th>}
              {row.map((cell, c) => {
                const isActive = r === activeRow && c === activeCol;
                return (
                  <td key={c} className="p-1">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-md border-2 transition-all ${
                      isActive ? 'border-purple-500 bg-purple-500/10 text-purple-700 dark:text-purple-300 shadow-sm shadow-purple-500/20 scale-105' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-zinc-900 text-slate-700 dark:text-slate-300 shadow-sm'
                    }`}>
                      {cell}
                    </div>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function AdjacencyList({ list }: { list: Record<string, string[]> }) {
  return (
    <div className="my-8 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-zinc-900/50 overflow-hidden font-mono text-sm shadow-sm">
      {Object.entries(list).map(([node, neighbors], i) => (
        <div key={node} className={`flex items-stretch ${i !== Object.keys(list).length - 1 ? 'border-b border-slate-200 dark:border-slate-800' : ''}`}>
          <div className="bg-white dark:bg-zinc-900 px-5 py-3 font-bold text-purple-700 dark:text-purple-400 border-r border-slate-200 dark:border-slate-800 min-w-[70px] flex items-center justify-center">
            {node}
          </div>
          <div className="flex flex-wrap items-center gap-2 p-3 px-4">
            {neighbors.map((n, idx) => (
              <span key={idx} className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded shadow-sm text-slate-700 dark:text-slate-300">
                {n}
              </span>
            ))}
            {neighbors.length === 0 && <span className="text-slate-400 italic text-xs ml-2">empty</span>}
          </div>
        </div>
      ))}
    </div>
  )
}

export function GraphBox({ children, caption }: { children: React.ReactNode, caption?: string }) {
  return (
    <div className="my-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-zinc-900/50 p-8 shadow-sm flex flex-col items-center justify-center min-h-[200px]">
      <div className="w-full flex justify-center">
        {children}
      </div>
      {caption && <p className="text-xs text-slate-500 mt-6 font-medium">{caption}</p>}
    </div>
  )
}
