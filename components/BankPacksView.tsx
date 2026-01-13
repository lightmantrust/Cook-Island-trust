
import React from 'react';
import { BANK_PACKS } from '../constants';
import { Landmark, FileCheck, ExternalLink, Download, ShieldCheck } from 'lucide-react';

const BankPacksView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-serif text-white mb-2">Bank Packs</h1>
          <p className="text-zinc-400">Pre-approved documentation sets for global private banking institutions.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right mr-2 hidden md:block">
            <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-tighter">Last Recertification</div>
            <div className="text-xs text-white font-medium">Oct 12, 2024</div>
          </div>
          <button className="bg-zinc-100 hover:bg-white text-black px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all">
            Refresh All Packs
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {BANK_PACKS.map((pack, i) => (
          <div key={i} className="bg-[#111] border border-zinc-800 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 hover:border-zinc-600 transition-all">
            <div className="w-20 h-20 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-zinc-500 shadow-xl">
               <Landmark size={40} />
            </div>
            
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-3">
                <h3 className="text-2xl font-bold text-white">{pack.bank}</h3>
                <div className="flex gap-2 justify-center md:justify-start">
                   {pack.jurisdictions.map((j, ji) => (
                     <span key={ji} className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded border border-zinc-700 uppercase font-bold">{j}</span>
                   ))}
                </div>
              </div>
              <p className="text-sm text-zinc-500">
                Authorized documents for KYC and account maintenance. Validated for FATCA and CRS compliance standards.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
                 {pack.documents.map((doc, di) => (
                   <div key={di} className="flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 px-3 py-2 rounded-xl text-[10px] font-bold text-zinc-300 uppercase tracking-widest">
                      <FileCheck size={14} className="text-green-500" /> {doc}
                   </div>
                 ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-auto">
               <button className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-red-900/10">
                  <Download size={16} /> Download Pack
               </button>
               <button className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 text-xs font-bold uppercase tracking-widest rounded-xl border border-zinc-800 transition-colors">
                  <ExternalLink size={16} /> Secure Portal
               </button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        <div className="bg-[#111] border border-zinc-800 rounded-3xl p-8 border-l-4 border-l-blue-600">
          <div className="flex items-center gap-3 mb-4">
             <ShieldCheck className="text-blue-500" />
             <h4 className="text-xl font-bold text-white">FATCA/CRS Repository</h4>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed mb-6">
            All bank packs are automatically synchronized with our Global Tax Compliance engine. Changes in reporting standards are reflected instantly across all jurisdictional documents.
          </p>
          <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl">
             <div className="flex justify-between text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">
                <span>Compliance Score</span>
                <span className="text-green-500">OPTIMAL</span>
             </div>
             <div className="h-1.5 w-full bg-zinc-800 rounded-full">
                <div className="h-full bg-blue-600 w-full rounded-full" />
             </div>
          </div>
        </div>

        <div className="bg-[#111] border border-zinc-800 rounded-3xl p-8 border-l-4 border-l-zinc-700">
           <h4 className="text-xl font-bold text-white mb-4">Account Metadata</h4>
           <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-zinc-800">
                 <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Total Accounts</span>
                 <span className="text-xs text-white font-mono">14 Authorized</span>
              </div>
              <div className="flex justify-between py-2 border-b border-zinc-800">
                 <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">In-Person Audit Status</span>
                 <span className="text-xs text-green-500 font-bold">NOT REQUIRED</span>
              </div>
              <div className="flex justify-between py-2 border-b border-zinc-800">
                 <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">KYC Auto-Refresh</span>
                 <span className="text-xs text-white font-bold">ENABLE</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BankPacksView;
