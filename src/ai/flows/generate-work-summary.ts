'use server';
/**
 * @fileOverview An AI assistant to generate professional and concise summaries of work performed.
 *
 * - generateWorkSummary - A function that generates a professional work summary from raw notes.
 * - GenerateWorkSummaryInput - The input type for the generateWorkSummary function.
 * - GenerateWorkSummaryOutput - The return type for the generateWorkSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWorkSummaryInputSchema = z.object({
  rawNotes: z.string().describe("Raw notes from a technician about work performed or issues found."),
});
export type GenerateWorkSummaryInput = z.infer<typeof GenerateWorkSummaryInputSchema>;

const GenerateWorkSummaryOutputSchema = z.object({
  summary: z.string().describe("A concise, professional summary of the work performed or issues found."),
});
export type GenerateWorkSummaryOutput = z.infer<typeof GenerateWorkSummaryOutputSchema>;

export async function generateWorkSummary(input: GenerateWorkSummaryInput): Promise<GenerateWorkSummaryOutput> {
  return generateWorkSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateWorkSummaryPrompt',
  input: {schema: GenerateWorkSummaryInputSchema},
  output: {schema: GenerateWorkSummaryOutputSchema},
  prompt: `You are an AI assistant that helps technicians create professional and concise summaries of work performed or issues found.

Your goal is to take the technician's raw notes and transform them into a clear, customer-friendly summary suitable for invoicing and communication.

Guidelines:
- Be concise and to the point.
- Use professional and easy-to-understand language.
- Focus on what was done, what was found, and any key outcomes.
- Avoid jargon where possible or explain it simply.

Technician's Raw Notes:
{{{rawNotes}}}`,
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
