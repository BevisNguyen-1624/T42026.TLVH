// ============================================================
//  📝 HƯỚNG DẪN CHỈNH SỬA CÂU HỎI
// ============================================================
//  1. Sửa nội dung câu hỏi : chỉnh trường "question"
//  2. Sửa đáp án            : chỉnh "text" trong mảng "options"
//  3. Sửa đáp án đúng       : chỉnh "correctAnswer" ("A"/"B"/"C"/"D")
//  4. Thêm ảnh cho câu hỏi  :
//     a. Import ảnh ở đầu file: import myImg from "../../imports/ten-anh.jpg"
//     b. Bỏ comment dòng "// image: ," rồi điền biến ảnh vào sau dấu :
//        Ví dụ:  image: myImg,
//     c. Nếu không muốn có ảnh: để nguyên dạng comment hoặc xoá dòng đó
// ============================================================

// ── Import ảnh câu hỏi tại đây ──────────────────────────────
import questionImage4  from "../../imports/image-5.jpeg";;

// Muốn thêm ảnh mới, thêm dòng như sau rồi dùng trong câu hỏi:
// import questionImageX from "../../imports/<ten-file>.jpg";
// ────────────────────────────────────────────────────────────

export interface Question {
  id: number;
  question: string;
  options: { key: string; text: string }[];
  correctAnswer: string;
  explanation: string;
  image?: string;
}

export const quizQuestions: Question[] = [

  // ── Câu 1 ──────────────────────────────────────────────────
  {
    id: 1,
    question: "Y - VOICE được xây dựng trong bối cảnh “Năm nền tảng 2026”. Ý nghĩa sâu nhất của cơ chế này là gì?",
    // image: , // ← bỏ comment và gán biến ảnh nếu muốn thêm hình
    options: [
      { key: "A", text: "A. Tạo thêm một kênh khảo sát nội bộ định kỳ" },
      { key: "B", text: "B. Giúp tổ chức phát hiện và xử lý các điểm chưa trọn vẹn để vận hành bền vững hơn" },
      { key: "C", text: "C. Tăng số lượng hoạt động văn hóa doanh nghiệp" },
      { key: "D", text: "D. Đo lường mức độ hài lòng của nhân sự theo tháng" },
    ],
    correctAnswer: "B",
    explanation: "",
  },

  // ── Câu 2 ──────────────────────────────────────────────────
  {
    id: 2,
    question: "Là một Nhân sự của YODY, bạn nên gửi các đóng góp lên Y - VOICE theo tinh thần nào?",
    // image: , // ← bỏ comment và gán biến ảnh nếu muốn thêm hình
    options: [
      { key: "A", text: "A. Đẩy trách nhiệm cho các bộ phận liên quan để vấn đề được xử lý nhanh hơn" },
      { key: "B", text: "B. Tận dụng Y - VOICE để thể hiện sự bức xúc cá nhân hoặc công kích người khác" },
      { key: "C", text: "C. Mang tinh thần xây dựng, mong muốn tổ chức và môi trường làm việc tốt hơn mỗi ngày" },
      { key: "D", text: "D. Chỉ phản ánh để chứng minh bộ phận của mình không phải nguyên nhân vấn đề" },
    ],
    correctAnswer: "C",
    explanation: "",
  },

  // ── Câu 3 ──────────────────────────────────────────────────
  {
    id: 3,
    question: "Theo lịch triển khai Y - VOICE, nhân sự sẽ thực hiện vote và phản ánh thực trạng trong khoảng thời gian nào?",
    // image: , // ← bỏ comment và gán biến ảnh nếu muốn thêm hình
    options: [
      { key: "A", text: "A. Ngày 01 – 14 hằng tháng" },
      { key: "B", text: "B. Ngày 15 – 18 hằng tháng" },
      { key: "C", text: "C. Ngày 18 – 30 hằng tháng3" },
      { key: "D", text: "D. Ngày 10 tháng tiếp theo" },
    ],
    correctAnswer: "A",
    explanation: "",
  },

  // ── Câu 4 (có ảnh) ─────────────────────────────────────────
  {
    id: 4,
    question: "Một tổ chức có nhiều feedback nhưng không có cơ chế xử lý rõ ràng sẽ dễ dẫn đến điều gì?",
    image: questionImage4, // ← đổi thành biến ảnh khác nếu muốn thay hình
    options: [
      { key: "A", text: "A. Nhân sự phản hồi nhiều hơn" },
      { key: "B", text: "B. Văn hóa lắng nghe trở nên mạnh hơn" },
      { key: "C", text: "C. Feedback dần mất giá trị và nhân sự giảm niềm tin vào việc lên tiếng" },
      { key: "D", text: "D. Quy trình vận hành nhanh hơn" },
    ],
    correctAnswer: "C",
    explanation: "",
  },

  // ── Câu 5 ──────────────────────────────────────────────────
  {
    id: 5,
    question: "Nguyên tắc “Minh bạch – Công khai – Nhất quán” trong Y - VOICE nhằm mục tiêu quan trọng nhất nào dưới đây?",
    // image: , // ← bỏ comment và gán biến ảnh nếu muốn thêm hình
    options: [
      { key: "A", text: "A. Tăng mức độ nhận diện truyền thông nội bộ" },
      { key: "B", text: "B. Đảm bảo mọi vấn đề đều được xử lý giống nhau" },
      { key: "C", text: "C. Tạo niềm tin rằng feedback được ghi nhận và theo đuổi đến cùng" },
      { key: "D", text: "D. Hạn chế tranh luận nội bộ" },
    ],
    correctAnswer: "C",
    explanation: "",
  },

  // ── Câu 6 ──────────────────────────────────────────────────
  {
    id: 6,
    question: "Trong Y - VOICE, nhân sự có thể gửi phản hồi theo hình thức nào?",
    // image: , // ← bỏ comment và gán biến ảnh nếu muốn thêm hình
    options: [
      { key: "A", text: "A. Chỉ được công khai danh tính để đảm bảo minh bạch" },
      { key: "B", text: "B. Chỉ được phản hồi thông qua quản lý trực tiếp" },
      { key: "C", text: "C. Chỉ được phản hồi khi có sự đồng ý của leader" },
      { key: "D", text: "D. Có thể phản hồi công khai hoặc ẩn danh tùy tính chất vấn đề" },
    ],
    correctAnswer: "D",
    explanation: "",
  },

  // ── Câu 7 ─────────────────────────────────────────────────
  {
    id: 7,
    question: "Trong Y - VOICE, phản hồi hoặc vấn đề nào sẽ được ưu tiên xử lý trước?",
    // image: , // ← bỏ comment và gán biến ảnh nếu muốn thêm hình
    options: [
      { key: "A", text: "A. Phản hồi từ cấp quản lý trở lên" },
      { key: "B", text: "B. Phản hồi được gửi sớm nhất trong tháng" },
      { key: "C", text: "C. Phản hồi có số lượng vote cao nhất từ nhân sự toàn công ty" },
      { key: "D", text: "D. Phản hồi liên quan đến nhiều phòng ban" },
    ],
    correctAnswer: "C",
    explanation: "",
  },

  // ── Câu 8 ──────────────────────────────────────────────────
  {
    id: 8,
    question: "Nếu muốn theo dõi kết quả phản hồi và đưa ra những thảo luận trên Y - VOICE, nhân sự cần làm gì?",
    // image: , // ← bỏ comment và gán biến ảnh nếu muốn thêm hình
    options: [
      { key: "A", text: "A. Chờ quản lý trực tiếp gửi lại thông tin" },
      { key: "B", text: "B. Đợi đến buổi họp tháng để nghe cập nhật" },
      { key: "C", text: "C. Gửi Gapo riêng cho Ban Văn hóa" },
      { key: "D", text: "D. Đăng nhập bằng tài khoản Unicorn để theo dõi báo cáo và thảo luận" },
    ],
    correctAnswer: "D",
    explanation: "",
  },

  // ── Câu 9 ──────────────────────────────────────────────────
  {
    id: 9,
    question: "Đối với những vấn đề thầm kín, cá nhân như vi phạm Giá trị cốt lõi hay phản ánh về leader... sau khi nhân sự chọn gửi phản hồi hồi thầm kín thì ai sẽ là những người đọc được phản hồi và xử lý?",
    // image: , // ← bỏ comment và gán biến ảnh nếu muốn thêm hình
    options: [
      { key: "A", text: "A. Tất cả mọi người đọc được" },
      { key: "B", text: "B. CEO - Giám đốc Nhân sự - TBP văn hoá" },
      { key: "C", text: "C. Người được nhắc tới trong phản hồi" },
      { key: "D", text: "D. Không ai đọc được " },
    ],
    correctAnswer: "B",
    explanation: "",
  },

  // ── Câu 10 ─────────────────────────────────────────────────
  {
    id: 10,
    question: "Theo lịch triển khai Y - VOICE, Ban Điều hành cần công bố kết quả chính thức tới toàn bộ nhân sự chậm nhất vào thời điểm nào?",
    // image: , // ← bỏ comment và gán biến ảnh nếu muốn thêm hình
    options: [
      { key: "A", text: "A. Ngày 15 hằng tháng" },
      { key: "B", text: "B. Trong vòng 48 giờ sau voting" },
      { key: "C", text: "C. Ngày 10 của tháng tiếp theo" },
      { key: "D", text: "D. Cuối quý để tổng hợp đầy đủ dữ liệu" },
    ],
    correctAnswer: "C",
    explanation: "",
  },]
// ============================================================
//  📊 KẾT QUẢ ĐIỂM SỐ
// ============================================================
export interface ScoreResult {
  range: string;
  title: string;
  description: string;
  buttonText: string;
  emoji: string;
}

export const scoreResults: ScoreResult[] = [
  {
    range: "0-9",
    title: "CHÚT XÍU NỮA LÀ NẮM TRỌN Y-VOICE TRONG TÂM TRÍ RỒI! 🕵️‍♂️",
    description:
      '<span style=\'display:block;text-align:center\'>Tiếc một xíu thôi! 🤏<br />Bạn đã rất gần với danh hiệu "Đại sứ thấu hiểu" rồi đó. Chỉ còn vài nút thắt nhỏ nữa thôi là bạn sẽ nắm trọn mọi điều về Y-Voice. Đừng ngần ngại thử lại lần nữa để "phá đảo" bài test này nhé! </span>',
    buttonText: "TRUY CẬP Y-VOICE NGAY TẠI ĐÂY",
    emoji: "🚀",
  },
  {
    range: "10",
    title: "CHÚC MỪNG BẠN ĐÃ SỞ HỮU 'CẨM NANG Y-VOICE' VỚI KẾT QUẢ TUYỆT ĐỐI! 🏆",
    description:
      '<span style=\'display:block;text-align:center\'>Bạn chính là một "mảnh ghép" hoàn hảo của Y-Voice khi hiểu rõ mọi giá trị mà chúng mình đang xây dựng. Đừng để kiến thức này ngủ quên, hãy tiếp tục lan tỏa tinh thần lắng nghe và đóng góp để cộng đồng chúng ta ngày càng vững mạnh nhé! 🚀 Cùng Y-Voice tạo nên thay đổi ngay hôm nay!
',
    buttonText: "TRUY CẬP Y-VOICE NGAY TẠI ĐÂY",
    emoji: "🏆",
  },
];

export function getScoreResult(score: number): ScoreResult {
  if (score <= 9) return scoreResults[0];
  if (score === 10) return scoreResults[1];
  return scoreResults[0];
}
