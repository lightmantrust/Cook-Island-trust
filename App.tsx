
import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  FileText, 
  Layers, 
  Landmark, 
  Lock, 
  Bot, 
  Activity, 
  CheckCircle2, 
  Menu, 
  X,
  Globe,
  ChevronRight,
  AlertTriangle,
  Zap
} from 'lucide-react';
import { AppSection } from './types';
import Dashboard from './components/Dashboard';
import MasterDeedView from './components/MasterDeedView';
import AnnexesView from './components/AnnexesView';
import BankPacksView from './components/BankPacksView';
import RedFolderView from './components/RedFolderView';
import AIChat from './components/AIChat';
import SimulationRunner from './components/SimulationRunner';
import ComplianceView from './components/ComplianceView';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.DASHBOARD);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');

  // Simple "Login" simulation
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '2024') { // Mock PIN
      setIsAuthenticated(true);
    } else {
      alert("Invalid Access Code");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-[#111] border border-zinc-800 rounded-2xl p-8 shadow-2xl">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-red-900/20 border border-red-500/30 rounded-full flex items-center justify-center mb-4">
              <Shield className="text-red-500 w-8 h-8" />
            </div>
            <h1 className="text-2xl font-serif text-white tracking-widest uppercase">Lightman System</h1>
            <p className="text-zinc-500 text-sm mt-2">Secure Fiduciary Access Required</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Access PIN</label>
              <input 
                type="password" 
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="••••"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-center text-2xl tracking-[1em] text-white focus:outline-none focus:border-red-500 transition-colors"
                maxLength={4}
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-zinc-100 hover:bg-white text-black font-bold py-3 rounded-lg transition-all"
            >
              INITIALIZE SESSION
            </button>
          </form>
          <div className="mt-8 pt-8 border-t border-zinc-800 text-center">
            <p className="text-[10px] text-zinc-600 uppercase tracking-tighter">
              Authorized personnel only. All access is logged and audited.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const NavItem = ({ section, icon: Icon, label }: { section: AppSection, icon: any, label: string }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
        activeSection === section 
          ? 'bg-zinc-800 text-white shadow-lg' 
          : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900'
      }`}
    >
      <Icon size={20} className={activeSection === section ? 'text-red-500' : ''} />
      <span className="font-medium text-sm tracking-wide">{label}</span>
      {activeSection === section && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-red-500" />}
    </button>
  );

  return (
    <div className="flex h-screen bg-black overflow-hidden">
      {/* Sidebar */}
      <aside className={`
        ${sidebarOpen ? 'w-72' : 'w-20'} 
        transition-all duration-300 border-r border-zinc-800 bg-[#0a0a0b] flex flex-col z-50
      `}>
        <div className="p-6 flex items-center gap-3">
          <div className="min-w-[40px] w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-red-900/20">
            <Shield className="text-white w-6 h-6" />
          </div>
          {sidebarOpen && <h2 className="font-serif text-lg tracking-wider text-white">LIGHTMAN</h2>}
        </div>

        <nav className="flex-1 px-3 space-y-1 mt-4 overflow-y-auto">
          <NavItem section={AppSection.DASHBOARD} icon={Layers} label="Command Center" />
          <NavItem section={AppSection.MASTER_DEED} icon={FileText} label="Master Deed" />
          <NavItem section={AppSection.ANNEXES} icon={Globe} label="Annexes" />
          <NavItem section={AppSection.BANK_PACKS} icon={Landmark} label="Bank Packs" />
          <NavItem section={AppSection.AI_AGENT} icon={Bot} label="AI Fiduciary" />
          <NavItem section={AppSection.SIMULATIONS} icon={Activity} label="Risk Simulations" />
          <NavItem section={AppSection.COMPLIANCE} icon={CheckCircle2} label="Compliance" />
          
          <div className="pt-8 pb-4">
             <div className="px-4 mb-2 text-[10px] text-zinc-600 uppercase tracking-widest font-bold">Priority Layer</div>
             <NavItem section={AppSection.RED_FOLDER} icon={Lock} label="Red Folder" />
          </div>
        </nav>

        <div className="p-4 border-t border-zinc-800">
           <div className={`flex items-center gap-3 p-3 rounded-xl bg-zinc-900/50 ${!sidebarOpen && 'justify-center'}`}>
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                <span className="text-xs text-zinc-400">FL</span>
              </div>
              {sidebarOpen && (
                <div className="flex-1">
                  <p className="text-xs font-bold text-white">Founder Lightman</p>
                  <p className="text-[10px] text-zinc-500 uppercase">Master Admin</p>
                </div>
              )}
           </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#0a0a0b] relative">
        {/* Header */}
        <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-8 bg-[#0a0a0b]/80 backdrop-blur-md sticky top-0 z-40">
           <div className="flex items-center gap-4">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-zinc-500 hover:text-white"
              >
                {sidebarOpen ? <Menu size={20} /> : <X size={20} />}
              </button>
              <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold">
                System Status: <span className="text-green-500">OPERATIONAL</span>
              </h3>
           </div>
           
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Air-Gapped Connection
              </div>
              <button onClick={() => setIsAuthenticated(false)} className="text-zinc-500 hover:text-red-500 transition-colors">
                <Zap size={18} />
              </button>
           </div>
        </header>

        {/* Section Viewport */}
        <div className="flex-1 overflow-y-auto p-8 max-w-7xl mx-auto w-full">
          {activeSection === AppSection.DASHBOARD && <Dashboard onNavigate={setActiveSection} />}
          {activeSection === AppSection.MASTER_DEED && <MasterDeedView />}
          {activeSection === AppSection.ANNEXES && <AnnexesView />}
          {activeSection === AppSection.BANK_PACKS && <BankPacksView />}
          {activeSection === AppSection.AI_AGENT && <AIChat />}
          {activeSection === AppSection.SIMULATIONS && <SimulationRunner />}
          {activeSection === AppSection.COMPLIANCE && <ComplianceView />}
          {activeSection === AppSection.RED_FOLDER && <RedFolderView />}
        </div>
      </main>
    </div>
  );
};

export default App;
