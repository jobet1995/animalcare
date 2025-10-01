"use server";

/**
 * @fileOverview An AI-powered pet matching flow.
 *
 * - petMatch - A function that recommends animals based on user preferences.
 * - PetMatchInput - The input type for the petMatch function.
 * - PetMatchOutput - The return type for the petMatch function.
 */

import { ai } from "@/ai/genkit";
import { z } from "genkit";

const PetMatchInputSchema = z.object({
  lifestyle: z
    .string()
    .describe(
      "Description of your lifestyle, including activity level, living situation, and typical daily routine.",
    ),
  preferences: z
    .string()
    .describe(
      "Your preferences for a pet, including desired species, breed, age, size, and personality traits.",
    ),
  existingPets: z
    .string()
    .optional()
    .describe(
      "Description of any existing pets in your household, including their species, breed, age, size, and personality traits.",
    ),
});
export type PetMatchInput = z.infer<typeof PetMatchInputSchema>;

const PetMatchOutputSchema = z.object({
  recommendations: z
    .string()
    .describe(
      "A list of recommended animals, including their name, breed, age, and a brief description of why they are a good match.",
    ),
});
export type PetMatchOutput = z.infer<typeof PetMatchOutputSchema>;

const prompt = ai.definePrompt({
  name: "petMatchPrompt",
  input: { schema: PetMatchInputSchema },
  output: { schema: PetMatchOutputSchema },
  prompt: `You are an AI pet matching expert. A user will provide information about their lifestyle, preferences, and existing pets (if any). Based on this information, you will recommend animals that are a good fit for them.

Lifestyle: {{{lifestyle}}}
Preferences: {{{preferences}}}
Existing Pets: {{{existingPets}}}

Please provide a list of recommended animals, including their name, breed, age, and a brief description of why they are a good match.`,
});

const petMatchFlow = ai.defineFlow(
  {
    name: "petMatchFlow",
    inputSchema: PetMatchInputSchema,
    outputSchema: PetMatchOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  },
);

export async function petMatch(input: PetMatchInput): Promise<PetMatchOutput> {
  return petMatchFlow(input);
}
