// utils/generateContent.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generateContent(prompt: string) {
    try {
        const genAI = new GoogleGenerativeAI(process.env.API_KEY as string);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error("Error generating content:", error);
        throw error;
    }
}
