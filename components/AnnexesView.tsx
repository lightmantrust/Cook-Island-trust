
import React from 'react';
import { ANNEXES } from '../constants';
import { Globe, ArrowRight, Shield, FileText } from 'lucide-react';

const AnnexesView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 space-y-8">
      <div>
        <h1 className="text-4xl font-serif text-white mb-2">Regional Annexes</h1>
        <p className="text-zinc-400">Jurisdictional subsidiaries integrated into the Lightman System.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ANNEXES.map((annex, i) => (
          <div key={i} className="bg-[#111] border border-zinc-800 rounded-3xl p-8 flex flex-col hover:border-zinc-600 transition-all group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center group-hover:bg-zinc-100 group-hover:text-black transition-all">
                <Globe size={24} className="text-zinc-500 group-hover:text-black" />
              </div>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest px-2 py-1 border border-zinc-800 rounded">
                {annex.jurisdiction}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">{annex.name}</h3>
            <p className="text-sm text-zinc-500 mb-8 flex-1">{annex.purpose}</p>
            
            <div className="space-y-3 mb-8">
              {annex.details.map((detail, dIdx) => (
                <div key={dIdx} className="flex items-center gap-3 text-xs text-zinc-400">
                  <div className="w-1 h-1 rounded-full bg-red-500" />
                  {detail}
                </div>
              ))}
            </div>

            <button className="flex items-center justify-center gap-2 w-full py-3 bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-bold uppercase tracking-widest rounded-xl group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all">
              Inspect Operational Layer <ArrowRight size={14} />
            </button>
          </div>
        ))}

        <div className="bg-zinc-900/30 border-2 border-dashed border-zinc-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
           <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center mb-4">
              <Globe size={32} className="text-zinc-700" />
           </div>
           <h3 className="text-lg font-bold text-zinc-500 mb-2">Expansion Pending</h3>
           <p className="text-xs text-zinc-600 max-w-[200px] mb-6">Evaluating Swiss and Singaporean jurisdictional integration for Layer 40+.</p>
           <button className="text-xs font-bold text-red-500 uppercase tracking-widest hover:text-red-400">Request Feasibility Study</button>
        </div>
      </div>

      <div className="bg-[#111] border border-zinc-800 rounded-3xl p-8 mt-12 overflow-hidden relative">
         <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div className="flex-1 space-y-6">
               <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-blue-500 text-[10px] font-bold uppercase tracking-widest">
                  <Shield size={12} /> Strategic Alignment
               </div>
               <h2 className="text-3xl font-serif text-white">The Wyoming-CI Bridge</h2>
               <p className="text-zinc-400 leading-relaxed">
                  The Lightman System leverages the high privacy of the Cook Islands for the primary trust seat, while utilizing Wyoming LLCs for day-to-day US operational governance. This hybrid model ensures both high-level asset protection and domestic business functionality.
               </p>
               <button className="flex items-center gap-2 text-zinc-100 font-bold text-sm uppercase tracking-widest hover:text-red-500 transition-colors">
                  View Inter-Jurisdictional Agreements <FileText size={16} />
               </button>
            </div>
            <div className="w-full lg:w-1/3 aspect-square bg-zinc-900 rounded-3xl border border-zinc-800 p-8 flex items-center justify-center relative">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1),transparent)]" />
               <div className="w-full h-full border-2 border-dashed border-zinc-800 rounded-full animate-[spin_20s_linear_infinite] flex items-center justify-center">
                  <div className="w-4 h-4 bg-red-600 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)]" />
               </div>
               <div className="absolute text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-center">
                  Operational<br/>Equilibrium
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default AnnexesView;
