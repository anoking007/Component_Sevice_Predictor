import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { ChatCompletionMessageDto } from './dto/create-chat-completion.request';

@Injectable()
export class GeminiService {
  private readonly model;

  constructor() {
    // Initialize the Gemini model using the API key from the environment variable
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    this.model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  }

  async createChatCompletion(messages: ChatCompletionMessageDto[]) {
    // Combine messages into a single prompt
    const prompt = messages.map(msg => msg.content).join('\n'); 

    // Generate content using the prompt
    const result = await this.model.generateContent(prompt);

    // The response might need to be accessed differently depending on the structure
    const response = await result.response;

    // Check the structure of response and access the correct property
    const responseText = typeof response.text === 'function' 
      ? await response.text()  // If response.text is a function, call it
      : response.text;  // Otherwise, directly access the text property

    console.log(typeof(responseText));
    return responseText;
  }
}
