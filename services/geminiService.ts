
import { GoogleGenAI } from "@google/genai";
import { MASTER_TRUST_ARTICLES, ANNEXES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the "Lightman System AI Agent," an internal, air-gapped governance assistant.
Your knowledge base consists of the Master Trust Deed (Jurisdiction: Cook Islands), 
Annexes (Wyoming Family Office, Panama PIF), and the Red Folder Governance protocols.

Context:
- Master Trust Articles: ${JSON.stringify(MASTER_TRUST_ARTICLES)}
- Annexes: ${JSON.stringify(ANNEXES)}

Guidelines:
1. Provide fiduciary-grade summaries and guidance.
2. Maintain strict confidentiality.
3. If asked about the "Red Folder", remind the user that access requires Founder or Protector authentication.
4. You are an assistant, not a trustee. Fiduciary powers are NOT delegated to you.
5. Use professional, precise, and secure language.
`;

export async function queryTrustAI(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.2,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Query Error:", error);
    return "The Trust AI agent is currently offline or encountering a processing error. Please retry or contact the System Administrator.";
  }
}
