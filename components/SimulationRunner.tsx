
import React, { useState } from 'react';
import { Play, RotateCcw, ShieldAlert, CheckCircle2, CloudLightning, Landmark, Globe } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const SimulationRunner: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<any[]>([]);

  const runSimulation = () => {
    setIsRunning(true);
    setProgress(0);
    setResults([]);
    
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 5;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        setIsRunning(false);
        setResults([
          { name: 'Cook Is.', value: 98, status: 'Passed' },
          { name: 'Wyoming', value: 94, status: 'Passed' },
          { name: 'Panama', value: 82, status: 'Warning' },
          { name: 'Delaware', value: 91, status: 'Passed' },
          { name: 'Texas', value: 88, status: 'Passed' },
        ]);
      }
    }, 100);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-serif text-white mb-2">Stress Simulations</h1>
          <p className="text-zinc-400">Execute multi-jurisdictional failure walkthroughs and regulatory stress tests.</p>
        </div>
        <button 
          onClick={runSimulation}
          disabled={isRunning}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-xl font-bold uppercase tracking-widest transition-all disabled:opacity-50"
        >
          {isRunning ? (
             <><RotateCcw className="animate-spin" size={18} /> Simulating...</>
          ) : (
             <><Play size={18} fill="currentColor" /> Initialize Test Sequence</>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
           <div className="bg-[#111] border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Configuration</h3>
              <div className="space-y-4">
                 <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <CloudLightning className="text-blue-500" size={18} />
                       <span className="text-sm font-medium text-zinc-300">Market Volatility</span>
                    </div>
                    <div className="w-10 h-6 bg-blue-600 rounded-full flex items-center px-1">
                       <div className="w-4 h-4 bg-white rounded-full ml-auto" />
                    </div>
                 </div>
                 <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <Landmark className="text-red-500" size={18} />
                       <span className="text-sm font-medium text-zinc-300">Regulatory Audit</span>
                    </div>
                    <div className="w-10 h-6 bg-zinc-700 rounded-full flex items-center px-1">
                       <div className="w-4 h-4 bg-zinc-400 rounded-full" />
                    </div>
                 </div>
                 <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <Globe className="text-green-500" size={18} />
                       <span className="text-sm font-medium text-zinc-300">Cross-Border Freeze</span>
                    </div>
                    <div className="w-10 h-6 bg-green-600 rounded-full flex items-center px-1">
                       <div className="w-4 h-4 bg-white rounded-full ml-auto" />
                    </div>
                 </div>
              </div>
           </div>

           <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
              <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Simulation Engine</div>
              <div className="flex items-end gap-1 mb-2">
                 <span className="text-4xl font-serif text-white">{isRunning ? progress : results.length > 0 ? '100' : '0'}</span>
                 <span className="text-zinc-500 font-bold mb-1">%</span>
              </div>
              <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                 <div className="h-full bg-red-600 transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>
              <p className="text-[10px] text-zinc-500 mt-4 uppercase tracking-tighter">
                Running monte carlo iterations across Cook Islands, Panama, and US nodes.
              </p>
           </div>
        </div>

        <div className="lg:col-span-2 bg-[#111] border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
             <ShieldAlert size={120} className="text-red-500" />
          </div>

          <h3 className="text-xl font-bold text-white mb-8">Resilience Scoring</h3>
          
          {results.length > 0 ? (
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={results}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                  <XAxis dataKey="name" stroke="#555" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis hide domain={[0, 100]} />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px' }}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40}>
                    {results.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.value > 90 ? '#ef4444' : entry.value > 85 ? '#f59e0b' : '#3b82f6'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-5 mt-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-center">
                 {results.map((r, i) => (
                    <div key={i} className={r.value < 85 ? 'text-yellow-500' : ''}>{r.status}</div>
                 ))}
              </div>
            </div>
          ) : (
            <div className="h-[300px] flex flex-col items-center justify-center text-zinc-600 border-2 border-dashed border-zinc-800 rounded-2xl">
              <Play size={40} className="mb-4 opacity-20" />
              <p>Initialize simulation to generate resilience metrics</p>
            </div>
          )}

          <div className="mt-12 p-6 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-start gap-4">
             <div className="w-10 h-10 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-500 flex-shrink-0">
                <ShieldAlert size={20} />
             </div>
             <div>
                <h4 className="text-sm font-bold text-white mb-1">Observation: Panama PIF Vulnerability</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                   Simulation detected 18% degradation in asset recovery speed if Panama Registry experiences a tier-2 service outage. Mitigation: Activate Secondary Custodian in Delaware.
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulationRunner;
