'use server';
/**
 * @fileOverview A Genkit flow for generating detailed job descriptions from brief notes.
 *
 * - generateJobDescription - A function that handles the job description generation process.
 * - GenerateJobDescriptionInput - The input type for the generateJobDescription function.
 * - GenerateJobDescriptionOutput - The return type for the generateJobDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateJobDescriptionInputSchema = z.object({
  briefNotes: z
    .string()
    .describe(
      'Brief notes or a short summary of the customer issue or job request.'
    ),
});
export type GenerateJobDescriptionInput = z.infer<
  typeof GenerateJobDescriptionInputSchema
>;

const GenerateJobDescriptionOutputSchema = z.object({
  detailedDescription: z
    .string()
    .describe(
      'A detailed, professional, and clear job description for a technician.'
    ),
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
  prompt: `You are an AI assistant for a field service management platform called TradeOS. Your task is to expand brief customer notes or issues into clear, detailed, and professional job descriptions for technicians.

Ensure the generated description provides comprehensive information that a technician would need to understand the problem and prepare for the job, without being excessively verbose.

Brief Customer Notes: {{{briefNotes}}}

Expanded Job Description:`,
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
