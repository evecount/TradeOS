'use server';
/**
 * @fileOverview An AI assistant to generate professional and high-veracity summaries of work performed.
 *
 * - generateWorkSummary - A function that generates a professional work summary from raw notes and optional site evidence.
 * - GenerateWorkSummaryInput - The input type for the generateWorkSummary function.
 * - GenerateWorkSummaryOutput - The return type for the generateWorkSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWorkSummaryInputSchema = z.object({
  rawNotes: z.string().describe("Raw notes from a technician about work performed or issues found."),
  evidencePhotoUri: z.string().optional().describe("A photo of the completed work as a data URI (base64). Used for 'Veracity' audits."),
});
export type GenerateWorkSummaryInput = z.infer<typeof GenerateWorkSummaryInputSchema>;

const GenerateWorkSummaryOutputSchema = z.object({
  summary: z.string().describe("A concise, professional summary of the work performed."),
  verificationLabel: z.string().describe("A short label describing what was visually verified in the evidence (e.g., 'New pipe fitting verified')."),
  estimatedDuration: z.string().describe("An AI-estimated time spent based on the complexity described."),
});
export type GenerateWorkSummaryOutput = z.infer<typeof GenerateWorkSummaryOutputSchema>;

export async function generateWorkSummary(input: GenerateWorkSummaryInput): Promise<GenerateWorkSummaryOutput> {
  return generateWorkSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateWorkSummaryPrompt',
  input: {schema: GenerateWorkSummaryInputSchema},
  output: {schema: GenerateWorkSummaryOutputSchema},
  prompt: `You are the 'Veracity Agent' for TradeOS. Your goal is to generate a professional summary and verify site evidence.

Guidelines:
- Transform raw notes into customer-friendly language.
- If a photo is provided, identify what was fixed or installed to ensure 'Veracity'.
- Estimate duration based on standard trade practices for the described task.

Technician's Raw Notes:
{{{rawNotes}}}

{{#if evidencePhotoUri}}
Site Evidence (Photo): {{media url=evidencePhotoUri}}
{{/if}}`,
});

const generateWorkSummaryFlow = ai.defineFlow(
  {
    name: 'generateWorkSummaryFlow',
    inputSchema: GenerateWorkSummaryInputSchema,
    outputSchema: GenerateWorkSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
