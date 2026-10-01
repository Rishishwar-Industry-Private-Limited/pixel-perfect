import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

export async function generateEnquiryChecklist(requirements: string) {
  const apiKey = process.env['LOVABLE_API_KEY'];
  if (!apiKey) throw new Error("AI service is not configured yet. Please email us directly.");

  const provider = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
  });

  try {
    const result = streamText({
      model: provider.responses("openai/gpt-6-astra"),
      system: "You help prospective industrial/FMCG customers prepare a first enquiry to Rishishwar Industry. Based ONLY on their own stated needs, write a concise, practical, personalized checklist of 5 to 7 questions/details to include when emailing the sales team. Do not invent company capabilities, prices, timelines, certifications, eligibility or commitments. Do not request sensitive personal information. Respond in the language the customer uses (Hindi or English). Use a short heading and a numbered list, plain text only. If details are missing, phrase them as questions, not assumptions. End with one short sentence saying they can copy the list into an email. Limit to about 180 words.",
      prompt: `Customer's industrial requirement:\n${requirements}`,
      providerOptions: {
        openai: {
          forceReasoning: true,
          reasoningEffort: "low",
          reasoningSummary: "auto",
          store: false,
          include: ["reasoning.encrypted_content"],
        },
      },
      maxRetries: 0,
    });
    const text = (await result.text).trim();
    if (!text) throw new Error("AI could not prepare a list for this request. Please email us directly.");
    return text;
  } catch (error) {
    const err = error as { statusCode?: number; message?: string; responseBody?: string };
    let message = err.message ?? "The checklist could not be prepared. Please try again later.";
    if (err.responseBody) {
      try {
        const body = JSON.parse(err.responseBody) as { message?: string; error?: { message?: string } };
        message = body.message ?? body.error?.message ?? message;
      } catch { /* Keep the safe message above. */ }
    }
    if (err.statusCode && err.statusCode >= 500) message = "The AI service is temporarily unavailable. Please try again later.";
    throw new Error(message);
  }
}