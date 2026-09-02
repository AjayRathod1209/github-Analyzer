import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const generateGithubAnalysis = async ({
  profile,
  repositories,
  contribution,
}) => {
  const prompt = `
You are an expert GitHub profile analyst.

Analyze this GitHub developer using ONLY the data provided below.

PROFILE:
${JSON.stringify(profile)}

REPOSITORIES:
${JSON.stringify(repositories)}

CONTRIBUTION DATA:
${JSON.stringify(contribution)}

Give practical and honest feedback about this developer.

Focus on:
- Project activity
- Repository quality indicators
- Programming languages
- GitHub contribution activity
- Stars and forks
- Strong areas
- Areas that could be improved
- Practical recommendations for improving the GitHub profile

Do not invent information that is not present in the data.
Do not assume technologies that are not visible in the provided data.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,

    config: {
      responseMimeType: "application/json",

      responseSchema: {
        type: "object",

        properties: {
          score: {
            type: "number",
            description: "Overall GitHub profile score from 0 to 10.",
          },

          summary: {
            type: "string",
            description: "A short professional summary of the GitHub profile.",
          },

          strengths: {
            type: "array",
            items: {
              type: "string",
            },
            description: "Three to five profile strengths.",
          },

          weaknesses: {
            type: "array",
            items: {
              type: "string",
            },
            description: "Two to four areas that could be improved.",
          },

          recommendations: {
            type: "array",
            items: {
              type: "string",
            },
            description: "Three to five practical recommendations.",
          },
        },

        required: [
          "score",
          "summary",
          "strengths",
          "weaknesses",
          "recommendations",
        ],
      },
    },
  });

  if (!response.text) {
    throw new Error("Gemini returned an empty response");
  }

  try {
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini JSON Parse Error:", response.text);

    throw new Error("Gemini returned invalid JSON");
  }
};
