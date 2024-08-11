"use client"

import { ChatCompletionMessage } from "./chat-completion-message.interface";
import { useState } from "react";
import { createChatCompletion } from "./createChatCompletion";

export default function Home() {
  const [messages, setMessages] = useState<ChatCompletionMessage[]>([]);
  const [message, setMessage] = useState("");

  const handleMessage = async () => {
    const userMessage: ChatCompletionMessage = {
      role: "user",
      content: message,
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setMessage("");

    try {
      const response = await createChatCompletion;
      console.log('Full API response:', response);

      const botMessage: ChatCompletionMessage = {
        role: "assistant",
        content: response.toString() || "No response",
      };

      setMessages([...updatedMessages, botMessage]);

    } catch (error) {
      console.error('Error fetching chat completion:', error);
      setMessages([...updatedMessages, {
        role: "assistant",
        content: "An error occurred while processing your request.",
      }]);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center flex-col gap-10 container mx-auto pl-4 pt-6 pr-4">
      <div className="flex flex-col gap-3 h-[75%] overflow-scroll w-full">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.role === "user" ? "chat chat-start" : "chat chat-end"
            }
          >
            <div className="chat-bubble">
              <p>{msg.content}</p>
            </div>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={async (event) => {
          if (event.key === "Enter") {
            await handleMessage();
          }
        }}
        className="input input-bordered w-full m-10"
      />
    </div>
  );
}
