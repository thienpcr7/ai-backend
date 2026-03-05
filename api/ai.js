export default async function handler(req, res) {

  const { prompt } = req.body;

  const API_KEY = "AIzaSyCgv2AFy1E2EifB2fItXH3yOCFfinNuy0M";

  const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [{
        parts: [{
          text: prompt
        }]
      }]
    })
  })

  const data = await response.json()

  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text

  res.status(200).json({
    result: text || "AI không trả kết quả"
  })

}
