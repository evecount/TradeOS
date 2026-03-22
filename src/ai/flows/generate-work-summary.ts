'use server';
/**
 * @fileOverview The Veracity Agent: A multimodal AI assistant that verifies site work.
 * 
 * - generateWorkSummary - Generates a professional summary and verifies work via site evidence.
 * - GenerateWorkSummaryInput - Includes raw notes and optional multimodal evidence (photo/video frames).
 * - GenerateWorkSummaryOutput - Returns summary, verification labels, and duration estimates.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWorkSummaryInputSchema = z.object({
  rawNotes: z.string().describe("Raw notes from the field technician."),
  evidencePhotoUri: z.string().optional().describe("A photo of the completed work as a data URI (base64)."),
});
export type GenerateWorkSummaryInput = z.infer<typeof GenerateWorkSummaryInputSchema>;

const GenerateWorkSummaryOutputSchema = z.object({
  summary: z.string().describe("Professional work summary for the client."),
  verificationLabel: z.string().describe("Technical label of verified fix (e.g. 'Compression coupling seated')."),
  isVerified: z.boolean().describe("Whether the AI can visually confirm the work described in the notes."),
  estimatedDuration: z.string().describe("Estimated time spent based on complexity."),
});
export type GenerateWorkSummaryOutput = z.infer<typeof GenerateWorkSummaryOutputSchema>;

export async function generateWorkSummary(input: GenerateWorkSummaryInput): Promise<GenerateWorkSummaryOutput> {
  return generateWorkSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateWorkSummaryPrompt',
  input: {schema: GenerateWorkSummaryInputSchema},
  output: {schema: GenerateWorkSummaryOutputSchema},
  prompt: `You are the 'Veracity Agent' for TradeOS. Your mission is to provide high-veracity auditing of trade work.

TASK:
1. Transform raw field notes into a professional summary for an invoice.
2. IF a photo is provided: Analyze it to see if it confirms the technician's notes.
3. PROVIDE a specific 'verificationLabel' describing the technical component identified (e.g., 'New P-Trap installed', 'Breaker reset verified').
4. ESTIMATE the job duration based on industry standards for the task.

Technician's Raw Notes:
{{{rawNotes}}}

{{#if evidencePhotoUri}}
Site Evidence (Multimodal Input): {{media url=evidencePhotoUri}}
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