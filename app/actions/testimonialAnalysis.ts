"use server"

import { generateText } from "ai"
import { groq } from '@ai-sdk/groq';

export interface SentimentAnalysis {
  text: string
  sentiment: "positive" | "neutral" | "negative"
  score: number // 0-100
}

export async function analyzeSentiment(text: string, rating: number): Promise<SentimentAnalysis> {
  try {
    const prompt = `
      Analyze the sentiment of this testimonial and provide:
      1. A brief, friendly analysis with an emoji
      2. The overall sentiment (positive, neutral, or negative)
      3. A sentiment score from 0-100 (0 being most negative, 100 being most positive)
      
      Format the response as JSON like this:
      {
        "text": "your analysis here",
        "sentiment": "positive/neutral/negative",
        "score": number
      }
        DON'T add any text other than the JSON response.
        Respond with the raw JSON, don't add any markdown format

      Here's the testimonial: "${text} - Rating: ${rating}/5"
    `
    
    const { text: analysis } = await generateText({
      model: groq('llama-3.1-8b-instant'),
      prompt: prompt,
      temperature: 0,
      maxRetries: 3,
    })
    console.log(analysis)
    const result = JSON.parse(analysis)
    return result as SentimentAnalysis
  } catch (error) {
    console.error("Error analyzing sentiment:", error)
    return {
      text: "Unable to analyze sentiment at this time",
      sentiment: "neutral",
      score: 50
    }
  }
}
