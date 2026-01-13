
import React from 'react';
import { 
  Globe, 
  ShieldCheck, 
  Zap, 
  ChevronRight, 
  TrendingUp, 
  FileCheck,
  Server
} from 'lucide-react';
import { AppSection } from '../types';

interface DashboardProps {
  onNavigate: (section: AppSection) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h1 className="text-4xl font-serif text-white mb-2">Command Center</h1>
        <p className="text-zinc-400">Holistic oversight of the Lightman Trust System governance layers.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-500/10 rounded-xl">
              <Globe className="text-blue-500" />
            </div>
            <div className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded">ACTIVE</div>
          </div>
          <h3 className="text-lg font-bold text-white mb-1">Global Structure</h3>
          <p className="text-zinc-500 text-sm mb-6">4 Jurisdictions, 12 Entities</p>
          <button 
            onClick={() => onNavigate(AppSection.ANNEXES)}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-blue-400 transition-colors"
          >
            Manage Jurisdictions <ChevronRight size={14} />
          </button>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-red-500/10 rounded-xl">
              <ShieldCheck className="text-red-500" />
            </div>
            <div className="text-xs font-bold text-blue-500 bg-blue-500/10 px-2 py-1 rounded">SECURED</div>
          </div>
          <h3 className="text-lg font-bold text-white mb-1">Core Governance</h3>
          <p className="text-zinc-500 text-sm mb-6">Master Trust Deed & Protectorates</p>
          <button 
            onClick={() => onNavigate(AppSection.MASTER_DEED)}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-red-400 transition-colors"
          >
            Review Articles <ChevronRight size={14} />
          </button>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-yellow-500/10 rounded-xl">
              <Zap className="text-yellow-500" />
            </div>
            <div className="text-xs font-bold text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded">PENDING</div>
          </div>
          <h3 className="text-lg font-bold text-white mb-1">Risk Simulation</h3>
          <p className="text-zinc-500 text-sm mb-6">Last Stress Test: 48h ago</p>
          <button 
            onClick={() => onNavigate(AppSection.SIMULATIONS)}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-yellow-400 transition-colors"
          >
            Execute Test <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Activity Timeline */}
        <div className="bg-[#111] border border-zinc-800 rounded-2xl p-8">
           <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <TrendingUp size={20} className="text-zinc-500" />
            Recent Operations
           </h3>
           <div className="space-y-6">
             {[
               { time: '2h ago', action: 'Annex C Migration', status: 'Success', detail: 'CI -> Panama' },
               { time: '6h ago', action: 'Compliance Audit', status: 'Complete', detail: 'Wyoming LLC' },
               { time: '1d ago', action: 'Red Folder Check', status: 'Verified', detail: 'Founder PIN used' },
               { time: '3d ago', action: 'Bank Pack Submission', status: 'In Review', detail: 'UBS Global' },
             ].map((log, i) => (
               <div key={i} className="flex gap-4 items-start border-l-2 border-zinc-800 pl-4 relative">
                 <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-zinc-700" />
                 <div className="flex-1">
                   <div className="flex justify-between items-center mb-1">
                     <span className="text-white font-medium text-sm">{log.action}</span>
                     <span className="text-[10px] text-zinc-500 uppercase font-bold">{log.time}</span>
                   </div>
                   <p className="text-xs text-zinc-500">{log.detail} • <span className="text-zinc-400">{log.status}</span></p>
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* System Vitals */}
        <div className="bg-[#111] border border-zinc-800 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Server size={20} className="text-zinc-500" />
            System Vitals
          </h3>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                <span>Jurisdictional Latency</span>
                <span className="text-green-500">22ms</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[95%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                <span>AI Agent Accuracy</span>
                <span className="text-blue-500">99.8%</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[99%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                <span>Data Redundancy</span>
                <span className="text-purple-500">Triple Layer</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 w-[100%]" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                <FileCheck size={16} className="text-zinc-500 mb-2" />
                <div className="text-lg font-bold text-white">100%</div>
                <div className="text-[10px] text-zinc-500 uppercase font-bold">Document Health</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                <ShieldCheck size={16} className="text-zinc-500 mb-2" />
                <div className="text-lg font-bold text-white">Tier 4</div>
                <div className="text-[10px] text-zinc-500 uppercase font-bold">Security Level</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
