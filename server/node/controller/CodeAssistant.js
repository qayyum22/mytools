import Groq from "groq-sdk";

export const code = async (req, res) => {
  const GROQ_API_KEY = process.env.GROQ_API_KEY;
  const groq = new Groq({ apiKey: GROQ_API_KEY });
  const { prompt } = req.body;
  console.log('Received prompt:', prompt);
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt, // Changed from an array of objects to a string
        },
      ],
      model: "llama3-8b-8192",
    
    });

    const response = chatCompletion.choices?.[0]?.message?.content; // Added optional chaining
    if (!response) {
      throw new Error("No response from chat completion");
    }
    res.json({ response });

    
  } catch (error) {
    console.error("Error in chat function:", error);
    res.status(500).json({ error: error.message });
  }
};
