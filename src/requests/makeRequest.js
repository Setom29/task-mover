import OpenAI from "openai";

export async function makeRequest(key, messages, setMessages) {
  const openai = new OpenAI({
    apiKey: key, // defaults to process.env["OPENAI_API_KEY"]
    dangerouslyAllowBrowser: true,
  });
  const completion = await openai.chat.completions
    .create({
      messages: [{ role: "user", content: messages[messages.length - 1].text }],
      model: "gpt-3.5-turbo",
      max_tokens: 10,
      temperature: 0.7,
    })
    .catch((err) => console.log(err));
  try {
    setMessages([
      ...messages,
      {
        id: new Date().getTime(),
        text: completion.choices[0].message.content,
        sender: "bot",
      },
    ]);
  } catch (err) {
    console.log(err);
    setMessages([
      ...messages,
      {
        id: new Date().getTime(),
        text: "Error",
        sender: "bot",
      },
    ]);
  }
}
