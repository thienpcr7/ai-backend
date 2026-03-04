export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Chỉ cho phép POST" });
  }

  const input = req.body.input;

  // 🔒 PROMPT BÍ MẬT – KHÔNG AI THẤY
  const hiddenPrompt = `
  Bạn là trợ lý AI cao cấp của Thiện Master AI.
  Hãy phân tích nội dung sau một cách thông minh, rõ ràng:
  ${input}
  `;

  // 👉 DEMO KẾT QUẢ (sau này thay bằng AI thật)
  const result = "AI đã nhận nội dung: " + input;

  res.status(200).json({ result });
}
