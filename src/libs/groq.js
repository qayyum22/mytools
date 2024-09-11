import Groq from "groq-sdk";

const GROQ_API_KEY = "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"
const groq = new Groq({ apiKey: GROQ_API_KEY });

export async function main() {
  const chatCompletion = await getGroqChatCompletion();
  // Print the completion returned by the LLM.
  console.log(chatCompletion.choices[0]?.message?.content || "");
}

export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "Explain the importance of fast language models",
      },
    ],
    model: "llama3-8b-8192",
  });
}

main();