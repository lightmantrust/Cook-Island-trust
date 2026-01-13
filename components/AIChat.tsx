
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Loader2, Info } from 'lucide-react';
import { queryTrustAI } from '../services/geminiService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Greeting, Founder. I am the Lightman System AI Agent. I have full indexing of the Master Trust Deed and all operational Annexes. How may I assist with your fiduciary oversight today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await queryTrustAI(input);
    const assistantMsg: Message = { role: 'assistant', content: response || "I encountered an error parsing your request. Please check the system logs." };
    setMessages(prev => [...prev, assistantMsg]);
    setIsLoading(false);
  };

  return (
    <div className="h-[calc(100vh-160px)] flex flex-col gap-6 animate-in zoom-in duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-serif text-white mb-2">AI Fiduciary</h1>
          <p className="text-zinc-400">Direct interface with the air-gapped system corpus.</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-widest rounded-full border border-green-500/20">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          Secure Node Active
        </div>
      </div>

      <div className="flex-1 bg-[#111] border border-zinc-800 rounded-3xl flex flex-col overflow-hidden shadow-2xl relative">
        {/* Background visual detail */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.03),transparent)] pointer-events-none" />

        <div className="flex-1 overflow-y-auto p-6 space-y-6" ref={scrollRef}>
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-4 ${msg.role === 'assistant' ? 'max-w-[85%]' : 'max-w-[85%] ml-auto flex-row-reverse'}`}>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg ${
                msg.role === 'assistant' ? 'bg-red-600 text-white' : 'bg-zinc-800 text-zinc-400'
              }`}>
                {msg.role === 'assistant' ? <Bot size={18} /> : <User size={18} />}
              </div>
              <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.role === 'assistant' 
                  ? 'bg-zinc-900 border border-zinc-800 text-zinc-300' 
                  : 'bg-zinc-100 text-black font-medium'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-4 max-w-[85%]">
              <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center shadow-lg">
                <Loader2 size={18} className="animate-spin" />
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-500 text-sm">
                System indexing Trust Corpus...
              </div>
            </div>
          )}
        </div>

        <div className="p-6 bg-zinc-900/50 border-t border-zinc-800">
           <div className="mb-4 flex items-center gap-2 bg-blue-500/5 border border-blue-500/20 rounded-lg p-3">
              <Info size={14} className="text-blue-500 flex-shrink-0" />
              <p className="text-[10px] text-blue-400 uppercase tracking-widest font-bold">
                Privacy Notice: Queries are stored in the Immutable Archive for fiduciary auditing.
              </p>
           </div>
           <form onSubmit={handleSubmit} className="relative">
             <input 
               type="text"
               value={input}
               onChange={(e) => setInput(e.target.value)}
               placeholder="Inquire about Master Trust Articles or Annex provisions..."
               className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl py-4 pl-6 pr-14 text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500 transition-all shadow-inner"
             />
             <button 
               type="submit"
               disabled={isLoading || !input.trim()}
               className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-red-600 hover:bg-red-500 text-white rounded-xl flex items-center justify-center transition-colors disabled:opacity-50"
             >
               <Send size={18} />
             </button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
