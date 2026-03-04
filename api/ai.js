export default async function handler(req, res) {
  // Chỉ cho phép POST
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Only POST method is allowed"
    });
  }

  // Lấy prompt từ frontend gửi lên
  const { prompt } = req.body;

  // Kiểm tra dữ liệu
  if (!prompt) {
    return res.status(400).json({
      error: "Prompt is required"
    });
  }

  // TRẢ KẾT QUẢ TEST (CHƯA GẮN AI THẬT)
  return res.status(200).json({
    result: "✅ AI BACKEND ĐÃ NHẬN: " + prompt
  });
}
