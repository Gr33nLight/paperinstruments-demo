import "dotenv/config";
import OpenAI from "openai";

const apiKey = process.env.PAPERINSTRUMENTS_API_KEY;

if (!apiKey) {
  throw new Error("Set PAPERINSTRUMENTS_API_KEY before running this example.");
}

const client = new OpenAI({
  baseURL: "https://api.paperinstruments.com/v1",
  apiKey,
});

const response = await client.chat.completions.create({
  model: "ultramarine-1-flash",
  messages: [{ role: "user", content: "Explain EBITDA in two sentences." }],
  reasoning_effort: "high",
});

console.log(response.choices[0].message.content);
