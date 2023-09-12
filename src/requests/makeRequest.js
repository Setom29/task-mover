import OpenAI from "openai";

const defaultRole = "You are a helpful assistant.";

const openai = new OpenAI({
  apiKey: "your-api-key", // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true,
});

export async function makeRequest(messages, setMessages) {
  const completion = await openai.chat.completions
    .create({
      messages: [{ role: "user", content: messages[messages.length - 1].text}],
      model: "gpt-3.5-turbo",
      max_tokens: 10,
      temperature: 0.7,
    })
    .catch((err) => console.log(err));
  console.log(completion);
  setMessages([
    ...messages,
    {
      id: new Date().getTime(),
      text: completion.choices[0].message.content,
      sender: "bot",
    },
  ]);
}
