// ContentRecommendations.ts
'use server';

/**
 * @fileOverview AI-powered content recommendation system based on user interests and browsing history.
 *
 * - recommendContent - A function that suggests relevant content to users.
 * - ContentRecommendationInput - The input type for the recommendContent function.
 * - ContentRecommendationOutput - The return type for the recommendContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContentRecommendationInputSchema = z.object({
  userInterests: z
    .string()
    .describe('A comma-separated list of the user\'s interests.'),
  browsingHistory: z
    .string()
    .describe('A comma-separated list of the user\'s browsing history.'),
  contentTitles: z
    .string()
    .describe('A comma-separated list of available content titles.'),
});

export type ContentRecommendationInput = z.infer<
  typeof ContentRecommendationInputSchema
>;

const ContentRecommendationOutputSchema = z.object({
  recommendedContent: z
    .string()
    .describe('A comma-separated list of recommended content titles.'),
});

export type ContentRecommendationOutput = z.infer<
  typeof ContentRecommendationOutputSchema
>;

export async function recommendContent(
  input: ContentRecommendationInput
): Promise<ContentRecommendationOutput> {
  return recommendContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contentRecommendationPrompt',
  input: {schema: ContentRecommendationInputSchema},
  output: {schema: ContentRecommendationOutputSchema},
  prompt: `You are an expert content recommendation system.

  Based on the user's interests and browsing history, recommend content titles from the available content. Only recommend content that aligns with the user interests and browsing history.

  User Interests: {{{userInterests}}}
  Browsing History: {{{browsingHistory}}}
  Available Content: {{{contentTitles}}}

  Recommended Content:`,
});

const recommendContentFlow = ai.defineFlow(
  {
    name: 'recommendContentFlow',
    inputSchema: ContentRecommendationInputSchema,
    outputSchema: ContentRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
