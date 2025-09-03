// api/chat.js
export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    const { message } = req.body;
  
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`, // stored in env
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-mini", // or "gpt-4.1"
          messages: [{ role: "user", content: message }],
        }),
      });
  
      const data = await response.json();
      res.status(200).json({ reply: data.choices[0].message.content });
    } catch (err) {
      res.status(500).json({ error: "Server error" });
    }
  }
  