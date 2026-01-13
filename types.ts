
export interface TrustArticle {
  id: string;
  title: string;
  content: string;
}

export interface Annex {
  name: string;
  jurisdiction: string;
  purpose: string;
  details: string[];
}

export interface BankPack {
  bank: string;
  jurisdictions: string[];
  documents: string[];
}

export interface SimulationResult {
  jurisdiction: string;
  resilience: number;
  status: 'passed' | 'warning' | 'critical';
  notes: string;
}

export enum AppSection {
  DASHBOARD = 'DASHBOARD',
  MASTER_DEED = 'MASTER_DEED',
  ANNEXES = 'ANNEXES',
  BANK_PACKS = 'BANK_PACKS',
  RED_FOLDER = 'RED_FOLDER',
  AI_AGENT = 'AI_AGENT',
  SIMULATIONS = 'SIMULATIONS',
  COMPLIANCE = 'COMPLIANCE'
}
