'use server';
/**
 * @fileOverview The Dispatcher Agent: A Genkit flow for processing messy intake data.
 *
 * - generateJobDescription - Transforms messy shorthand or messaging app notes into professional job descriptions.
 * - GenerateJobDescriptionInput - Shorthand notes (e.g. from WhatsApp/Telegram).
 * - GenerateJobDescriptionOutput - Professional title and expanded description.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateJobDescriptionInputSchema = z.object({
  briefNotes: z
    .string()
    .describe(
      'Messy notes, voice-to-text, or shorthand from a messaging app (WhatsApp/Telegram).'
    ),
});
export type GenerateJobDescriptionInput = z.infer<
  typeof GenerateJobDescriptionInputSchema
>;

const GenerateJobDescriptionOutputSchema = z.object({
  title: z.string().describe('A concise, professional title for the job.'),
  detailedDescription: z
    .string()
    .describe(
      'A detailed, professional job description expanded from the messy notes.'
    ),
  suggestedTags: z.array(z.string()).describe('Technical tags for indexing (e.g. "pipe-burst", "circuit-board").'),
});
export type GenerateJobDescriptionOutput = z.infer<
  typeof GenerateJobDescriptionOutputSchema
>;

export async function generateJobDescription(
  input: GenerateJobDescriptionInput
): Promise<GenerateJobDescriptionOutput> {
  return generateJobDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateJobDescriptionPrompt',
  input: {schema: GenerateJobDescriptionInputSchema},
  output: {schema: GenerateJobDescriptionOutputSchema},
  prompt: `You are the 'Dispatcher Agent' for TradeOS. Your job is to transform messy, unstructured incoming job requests—often sourced from WhatsApp Business API or Telegram Bots—into professional service tickets.

INPUT:
Shifting, messy notes from WhatsApp, Telegram, or shorthand dispatch.

TASK:
1. Create a professional Title (e.g. "Main Line Blockage Assessment").
2. Expand the notes into a clear, Technical Description for the field technician.
3. Identify relevant technical Tags for the Hive schema.

Input Shorthand:
{{{briefNotes}}}`,
});

const generateJobDescriptionFlow = ai.defineFlow(
  {
    name: 'generateJobDescriptionFlow',
    inputSchema: GenerateJobDescriptionInputSchema,
    outputSchema: GenerateJobDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
