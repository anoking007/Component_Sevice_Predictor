const DEFAULT_ROLE = "user";

export async function createChatCompletion(
  content: string 
) {
 
  const messages = [
    {
      role: DEFAULT_ROLE,
      content,
    },
  ];

  try {
    const response = await fetch('http://localhost:3001/gemini/chatCompletion', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
      
      
    });console.log(response);

    if (!response.ok) {
      const errorMessage = await response.text(); // Retrieve the error message from the response
      throw new Error(`Error: ${response.status} ${response.statusText}. ${errorMessage}`);
    }

    return response.text;
  } catch (error) {
    console.error('Error fetching chat completion:', error);
    throw error; // Rethrow the error to be handled by the calling function/component
  }
}

