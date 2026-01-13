
import React from 'react';
import { CheckCircle2, AlertCircle, Calendar, ShieldCheck, ClipboardCheck, BarChart3 } from 'lucide-react';

const ComplianceView: React.FC = () => {
  const complianceItems = [
    { title: 'AML/KYC Alignment', status: 'Certified', date: 'Oct 2024', color: 'text-green-500' },
    { title: 'CRS/FATCA Reporting', status: 'In Progress', date: 'Due Dec 2024', color: 'text-blue-500' },
    { title: 'Annual Trust Audit', status: 'Scheduled', date: 'Jan 2025', color: 'text-yellow-500' },
    { title: 'Entity Renewal (WY)', status: 'Certified', date: 'Aug 2024', color: 'text-green-500' },
  ];

  return (
    <div className="animate-in fade-in duration-500 space-y-8">
      <div>
        <h1 className="text-4xl font-serif text-white mb-2">Compliance Framework</h1>
        <p className="text-zinc-400">Ironclad regulatory alignment and systematic record retention.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {complianceItems.map((item, i) => (
          <div key={i} className="bg-[#111] border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between h-40">
            <div className="flex justify-between items-start">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest leading-tight w-2/3">{item.title}</h3>
              <CheckCircle2 size={18} className={item.color} />
            </div>
            <div>
              <div className={`text-xs font-bold ${item.color} mb-1 uppercase`}>{item.status}</div>
              <div className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest flex items-center gap-1">
                 <Calendar size={10} /> {item.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#111] border border-zinc-800 rounded-3xl p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <ShieldCheck size={20} className="text-zinc-500" />
            Regulator-Safe Narratives
          </h3>
          <p className="text-sm text-zinc-500 leading-relaxed mb-6">
            The Lightman System maintains a dual-layer reporting structure. All activities are synthesized into audit-ready narratives that focus on standard fiduciary operations, ensuring transparency while protecting strategic confidentiality.
          </p>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-colors">
              <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest">Generate Annual Summary</span>
              <ClipboardCheck size={16} className="text-zinc-500" />
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-colors">
              <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest">Audit Trail Log</span>
              <BarChart3 size={16} className="text-zinc-500" />
            </button>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
          <div className="flex items-center gap-2 text-red-500 text-[10px] font-bold uppercase tracking-widest mb-4">
            <AlertCircle size={14} /> Security Disclosure
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Immutable Archive</h3>
          <p className="text-zinc-500 text-sm mb-8">
            Every operational layer, simulation result, and AI query is hashed and stored on a distributed immutable ledger. This provides an unbreakable chain of custody for all fiduciary decisions.
          </p>
          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 bg-[#111] border border-zinc-800 rounded-xl">
                <div className="text-2xl font-serif text-white">4.2 TB</div>
                <div className="text-[10px] text-zinc-600 uppercase font-bold tracking-tighter">Encrypted Volume</div>
             </div>
             <div className="p-4 bg-[#111] border border-zinc-800 rounded-xl">
                <div className="text-2xl font-serif text-white">0 Fail</div>
                <div className="text-[10px] text-zinc-600 uppercase font-bold tracking-tighter">Checksum Integrity</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceView;
