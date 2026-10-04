import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { createAiGatewayRunIdFetch } from "./ai-gateway-run-id.server";

export async function recommendService(idea: string) {
  const apiKey = process.env['LOVABLE_API_KEY'];
  if (!apiKey) throw new Error("AI service is not configured yet. Please email us directly.");
  const provider = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    fetch: createAiGatewayRunIdFetch(),
  });
  try {
    const result = streamText({
      model: provider.responses("openai/gpt-6-astra"),
      system: "You are Rishishwar Industry's service guide. Recommend only the most relevant options from: Retail Network Access, Distributor Partnerships, Domestic Expansion, Global Market Support, Business Funding Guidance, Retailer Partnership, and Shop Advertising. Use only the visitor's stated facts. Do not promise approval, sales, reach, pricing, timelines, funding, compliance, or results. Reply in the visitor's language. Give: Best fit, Why it fits, What to prepare (3 concise bullets), and Next step. Plain text, under 170 words.",
      prompt: `Visitor's business idea or support need:\n${idea}`,
      providerOptions: { openai: { forceReasoning: true, reasoningEffort: "low", reasoningSummary: "auto", store: false, include: ["reasoning.encrypted_content"] } },
      maxRetries: 0,
    });
    const text = (await result.text).trim();
    if (!text) throw new Error("AI could not recommend a service. Please email us directly.");
    return text;
  } catch (error) {
    const err = error as { statusCode?: number; message?: string; responseBody?: string };
    let message = err.message ?? "The service guide could not respond. Please try again later.";
    if (err.responseBody) {
      try {
        const body = JSON.parse(err.responseBody) as { message?: string; error?: { message?: string } };
        message = body.message ?? body.error?.message ?? message;
      } catch { /* Preserve safe message. */ }
    }
    if (err.statusCode && err.statusCode >= 500) message = "The AI service is temporarily unavailable. Please try again later.";
    throw new Error(message);
  }
}
