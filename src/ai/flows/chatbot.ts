"use server";

/**
 * @fileOverview A chatbot flow for the AnimalKind shelter.
 *
 * - chatbot - A function that responds to user queries.
 * - ChatbotInput - The input type for the chatbot function.
 * - ChatbotOutput - The return type for the chatbot function.
 */

import { ai } from "@/ai/genkit";
import { z } from "genkit";
import { getAnimals } from "@/ai/tools/get-animal";

const ChatbotInputSchema: z.ZodTypeAny = z.object({
  history: z.array(
    z.object({
      role: z.enum(["user", "model"]),
      content: z.string(),
    }),
  ),
});
export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

const ChatbotOutputSchema: z.ZodTypeAny = z.object({
  content: z.string(),
});
export type ChatbotOutput = z.infer<typeof ChatbotOutputSchema>;

const prompt = ai.definePrompt({
  name: "chatbotPrompt",
  input: { schema: ChatbotInputSchema },
  output: { schema: ChatbotOutputSchema },
  tools: [getAnimals],
  prompt: `You are a friendly and helpful chatbot for an animal shelter called "AnimalKind".
Your goal is to answer user questions about the shelter, adoption, volunteering, and the animals available.
Use the available tools to answer questions about specific animals.
Keep your answers concise and friendly.

Here is the conversation history:
{{#each history}}
- {{role}}: {{{content}}}
{{/each}}
`,
});

const chatbotFlow = ai.defineFlow(
  {
    name: "chatbotFlow",
    inputSchema: ChatbotInputSchema,
    outputSchema: ChatbotOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return {
      content:
        output?.content ??
        "I'm sorry, I'm having trouble thinking right now. Please try again in a moment.",
    };
  },
);

export async function chatbot(input: ChatbotInput): Promise<ChatbotOutput> {
  return chatbotFlow(input);
}
