import OpenAi from 'openai';

export const xai = new OpenAi({
    baseURL:"https://api.x.ai/v1",
    apiKey: process.env.XAI_API_KEY!,
})