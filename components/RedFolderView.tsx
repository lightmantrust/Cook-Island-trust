
import React, { useState } from 'react';
import { Lock, AlertOctagon, Terminal, Play, ShieldAlert, Key, HardDrive } from 'lucide-react';

const RedFolderView: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pin, setPin] = useState('');
  const [activationStep, setActivationStep] = useState(0);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '9999') { // Emergency override mock
      setIsUnlocked(true);
    } else {
      alert("Unauthorized Access Attempt Logged.");
    }
  };

  if (!isUnlocked) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 animate-in fade-in zoom-in duration-500">
        <div className="w-24 h-24 bg-red-900/20 border-2 border-red-500 rounded-full flex items-center justify-center animate-pulse">
          <Lock className="text-red-500 w-12 h-12" />
        </div>
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-serif text-white uppercase tracking-widest">Sealed Appendix X</h1>
          <p className="text-zinc-500 text-sm max-w-sm mx-auto uppercase tracking-tighter">Founder Emergency Activation Protocols and Reserved Powers</p>
        </div>
        
        <form onSubmit={handleUnlock} className="bg-[#111] border border-zinc-800 p-8 rounded-3xl w-full max-w-md shadow-2xl">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-yellow-500 text-[10px] font-bold uppercase tracking-widest bg-yellow-500/10 p-2 rounded border border-yellow-500/20">
               <AlertOctagon size={14} /> Warning: Access initiates Succession Script
            </div>
            <div>
              <label className="block text-[10px] uppercase font-bold text-zinc-500 mb-2">Emergency Override PIN</label>
              <input 
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center text-3xl tracking-[0.5em] text-red-500 focus:outline-none focus:border-red-500 font-mono"
                maxLength={4}
              />
            </div>
            <button className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-red-900/20">
              DECRYPT RED FOLDER
            </button>
          </div>
        </form>
      </div>
    );
  }

  const PROTOCOLS = [
    { name: 'Succession Script Alpha', trigger: 'Founder Incapacity', icon: Play },
    { name: 'Jurisdictional Blackout', trigger: 'Hostile Regulatory Shift', icon: ShieldAlert },
    { name: 'Asset Freeze Protocol', trigger: 'Unauthorized Trustee Change', icon: Key },
    { name: 'Archive Wipe / Migration', trigger: 'Physical Incursion', icon: HardDrive }
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-top-4 duration-700">
      <div className="flex items-center justify-between border-b border-red-900/50 pb-8">
        <div>
          <h1 className="text-4xl font-serif text-red-500 mb-2 uppercase tracking-widest">Red Folder Active</h1>
          <p className="text-zinc-400">Restricted access to final tier governance and crisis playbooks.</p>
        </div>
        <div className="text-right">
          <div className="text-xs font-bold text-red-500 animate-pulse">ENCRYPTION: SHATTERED</div>
          <div className="text-[10px] text-zinc-500 uppercase tracking-tighter">Session ID: 0x98A1...F2</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROTOCOLS.map((protocol, i) => (
          <div key={i} className="bg-[#111] border border-red-900/20 rounded-2xl p-6 hover:bg-red-950/20 transition-all cursor-pointer group border-l-4 border-l-red-600">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                <protocol.icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{protocol.name}</h3>
                <p className="text-[10px] text-red-500 uppercase tracking-widest font-bold">Trigger: {protocol.trigger}</p>
              </div>
            </div>
            <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
              Once activated, this script is immutable. The Protector and Trustee will be bypassed through cryptographic keys held in offline storage.
            </p>
            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 group-hover:text-red-500 transition-colors">
              VIEW STEP-BY-STEP <Play size={14} className="fill-current" />
            </button>
          </div>
        ))}
      </div>

      <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Terminal size={20} className="text-red-500" />
          Governance Log (Encrypted)
        </h3>
        <div className="font-mono text-xs space-y-2 text-zinc-500">
          <p className="text-zinc-600">[14:02:11] INITIALIZING DECRYPTION MODULE...</p>
          <p className="text-zinc-600">[14:02:12] VERIFYING FOUNDER SIGNATURE...</p>
          <p className="text-green-500">[14:02:12] FOUNDER SIGNATURE VERIFIED: "FOUNDER LIGHTMAN"</p>
          <p className="text-red-500">[14:02:13] ALERT: RED FOLDER ACCESSED VIA WEB INTERFACE PORTAL-01</p>
          <p className="text-zinc-600">[14:02:14] LOADING ARTICLE X: EMERGENCY ACTIVATION CODES...</p>
          <p className="animate-pulse text-zinc-400">_</p>
        </div>
      </div>
    </div>
  );
};

export default RedFolderView;
