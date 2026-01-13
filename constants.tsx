
import { TrustArticle, Annex, BankPack } from './types';

export const MASTER_TRUST_ARTICLES: TrustArticle[] = [
  { id: 'I', title: 'Definitions and Interpretation', content: 'Standard interpretations for trust terms, cross-jurisdictional references, and operational nomenclature.' },
  { id: 'II', title: 'Establishment of Trust', content: 'Formally establishing the Lightman Trust under the laws of the Cook Islands.' },
  { id: 'III', title: 'Purpose and Intent', content: 'Preservation of multi-generational wealth, asset protection, and global strategic mobility.' },
  { id: 'IV', title: 'Trust Property', content: 'Schedule of initial and subsequent assets, including physical, digital, and intellectual property.' },
  { id: 'V', title: 'Beneficiaries', content: 'Tiered beneficiary structure with discretionary distribution mandates.' },
  { id: 'VI', title: 'Trustee Powers', content: 'Broad management powers limited only by the Protector\'s oversight and Founder instructions.' },
  { id: 'VII', title: 'Trustee Limitations', content: 'Specific prohibitions on high-risk leveraged positions without Protector approval.' },
  { id: 'VIII', title: 'Protector Powers', content: 'Veto rights over major distributions, trustee removal, and jurisdictional changes.' },
  { id: 'IX', title: 'Founder Reserved Powers', content: 'Lifetime powers reserved to the Founder for asset allocation strategy and governance modification.' },
  { id: 'X', title: 'Red Folder Governance', content: 'Activation protocols for the emergency governance layer upon specific trigger events.' },
  { id: 'XI', title: 'Succession and Incapacity', content: 'Automated succession scripts and incapacity determination procedures.' },
  { id: 'XII', title: 'Jurisdictional Annexes', content: 'Integration of Wyoming, Panama, and other operational subsidiaries.' },
  { id: 'XIII', title: 'Asset Protection', content: 'Cook Islands statute-specific protections against foreign judgments.' },
  { id: 'XIV', title: 'Compliance and Reporting', content: 'AML/KYC, CRS, and FATCA alignment protocols.' },
  { id: 'XV', title: 'Confidentiality', content: 'Ironclad non-disclosure requirements for all trust officers and advisors.' },
  { id: 'XVI', title: 'AI and System Governance', content: 'Framework for the operation of the air-gapped Trust AI agent.' },
  { id: 'XVII', title: 'Migration and Re-Domiciliation', content: 'Protocols for emergency relocation of the Trust seat.' },
  { id: 'XVIII', title: 'Termination', content: 'Conditions under which the Trust may be wound down or dissolved.' },
  { id: 'XIX', title: 'Miscellaneous', content: 'Notices, governing law, and severability clauses.' },
];

export const ANNEXES: Annex[] = [
  {
    name: 'Wyoming Family Office',
    jurisdiction: 'Wyoming, USA',
    purpose: 'Operational governance of family office entities.',
    details: ['Delegated Authorities', 'Asset Allocation Framework', 'Contingency Funds', 'CI Trust Linkage']
  },
  {
    name: 'Panama Holding PIF',
    jurisdiction: 'Panama',
    purpose: 'Investment and holding company governance.',
    details: ['PIF Registration', 'Intercompany Agreements', 'Legal Opinion Repository', 'CI Trust Linkage']
  },
  {
    name: 'Delaware Private Equity',
    jurisdiction: 'Delaware, USA',
    purpose: 'Venture capital and private equity holdings.',
    details: ['GP/LP Structures', 'Capital Call Workflows', 'Tax Optimization']
  }
];

export const BANK_PACKS: BankPack[] = [
  { bank: 'JPMorgan Chase', jurisdictions: ['Cook Islands', 'Wyoming'], documents: ['Trust Deed', 'KYC Narrative', 'Legal Opinions'] },
  { bank: 'UBS Global Wealth', jurisdictions: ['Cook Islands', 'Panama'], documents: ['Annex A', 'PIF Registration', 'FATCA Forms'] },
  { bank: 'HSBC Private Bank', jurisdictions: ['Cook Islands', 'UK'], documents: ['Global Custody Agreement', 'Trustee Resolution'] }
];
