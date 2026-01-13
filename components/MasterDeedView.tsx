
import React, { useState } from 'react';
import { MASTER_TRUST_ARTICLES } from '../constants';
import { Search, ChevronRight, Download } from 'lucide-react';

const MasterDeedView: React.FC = () => {
  const [selectedArticleId, setSelectedArticleId] = useState<string>(MASTER_TRUST_ARTICLES[0].id);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = MASTER_TRUST_ARTICLES.filter(a => 
    a.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    a.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeArticle = MASTER_TRUST_ARTICLES.find(a => a.id === selectedArticleId);

  return (
    <div className="animate-in fade-in duration-500 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-serif text-white mb-2">Master Trust Deed</h1>
          <p className="text-zinc-400">Governance articles for the primary Cook Islands trust instrument.</p>
        </div>
        <button className="flex items-center gap-2 bg-zinc-100 hover:bg-white text-black px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all">
          <Download size={14} /> Export full PDF
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
            <input 
              type="text"
              placeholder="Search Articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>
          <div className="bg-[#111] border border-zinc-800 rounded-2xl overflow-hidden divide-y divide-zinc-800">
            {filteredArticles.map((article) => (
              <button
                key={article.id}
                onClick={() => setSelectedArticleId(article.id)}
                className={`w-full flex items-center justify-between p-4 text-left transition-colors ${
                  selectedArticleId === article.id ? 'bg-zinc-800/50' : 'hover:bg-zinc-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 font-serif text-zinc-500">{article.id}</span>
                  <span className={`text-sm font-medium ${selectedArticleId === article.id ? 'text-white' : 'text-zinc-400'}`}>
                    {article.title}
                  </span>
                </div>
                <ChevronRight size={14} className={selectedArticleId === article.id ? 'text-red-500' : 'text-zinc-600'} />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-8">
          {activeArticle ? (
            <div className="bg-[#111] border border-zinc-800 rounded-3xl p-8 min-h-[500px] flex flex-col">
              <div className="mb-8 pb-8 border-b border-zinc-800">
                <div className="text-[10px] font-bold text-red-500 uppercase tracking-[0.3em] mb-2">Article {activeArticle.id}</div>
                <h2 className="text-3xl font-serif text-white">{activeArticle.title}</h2>
              </div>
              <div className="flex-1">
                <p className="text-zinc-400 leading-relaxed text-lg italic">
                  "{activeArticle.content}"
                </p>
                <div className="mt-12 space-y-4">
                  <div className="text-xs uppercase font-bold text-zinc-500 tracking-widest border-l-2 border-red-500 pl-4">Legal Precedence</div>
                  <p className="text-sm text-zinc-500">
                    This article is compliant with International Trust Act 1984 of the Cook Islands and maintains alignment with Wyoming LLC governance frameworks.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-zinc-800 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-500 rounded font-bold">v3.2.1</div>
                  <div className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-500 rounded font-bold uppercase">Cook Islands Law</div>
                </div>
                <span className="text-[10px] text-zinc-700 uppercase font-mono tracking-tighter">REF: LT-MD-0{activeArticle.id}</span>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center border-2 border-dashed border-zinc-800 rounded-3xl">
              <p className="text-zinc-600">Select an article to view legal content</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MasterDeedView;
