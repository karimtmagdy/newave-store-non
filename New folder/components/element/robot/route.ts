import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = streamText({
    model: openai("gpt-4o"), // Using gpt-4o for better performance
    messages,
    prompt: `What is love? ${messages[messages.length - 1] }`,
  
  });

  return result.toDataStreamResponse();
}
