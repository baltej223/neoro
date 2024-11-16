import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.API_KEY || 'YOUR_API_KEY';

// Initialize the Gemini API
const generativeAI = new GoogleGenerativeAI({ apiKey });

export default async function sendRoute(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Only GET requests are allowed' });
  }

  const prompt = req.query.prompt as string;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    // Make the request to Gemini
    const response = await generativeAI.predict({
      model: 'text-bison-001', // Specify the correct model name
      prompt,
      temperature: 0.7,
      maxOutputTokens: 200,
    });

    // Extract the generated text
    const answer = response.candidates?.[0]?.output || 'No response from Gemini';

    return res.status(200).json({ answer });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return res.status(500).json({ error: 'Failed to fetch response from Gemini', details: error.message });
  }
}
