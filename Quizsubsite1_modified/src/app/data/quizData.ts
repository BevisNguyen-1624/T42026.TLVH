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
  {
    id: 1,
    question: "Đối tượng nào sau đây ĐỦ ĐIỀU KIỆN tham gia chương trình Gắn kết đội nhóm YODY 2026?",
    options: [
      { key: "A", text: "A. Chỉ nhân sự chính thức." },
      { key: "B", text: "B. Chỉ nhân sự có thâm niên trên 1 năm." },
      { key: "C", text: "C. Toàn bộ nhân sự chính thức và thử việc ký HĐ trước ngày 01/07/2026 và còn làm việc tại thời điểm chi tiền (bao gồm cả NS nghỉ thai sản/nghỉ không lương theo quy định)." },
      { key: "D", text: "D. Toàn bộ nhân sự tính đến hết năm 2026." },
    ],
    correctAnswer: "C",
    explanation: "",
  },
  {
    id: 2,
    question: "Tổng mức hỗ trợ chi phí cho một Nhân sự chính thức (bao gồm cả NS đang thai sản) là bao nhiêu?",
    options: [
      { key: "A", text: "A. 1.000.000 VNĐ." },
      { key: "B", text: "B. 1.500.000 VNĐ." },
      { key: "C", text: "C. 500.000 VNĐ." },
      { key: "D", text: "D. 2.000.000 VNĐ." },
    ],
    correctAnswer: "B",
    explanation: "",
  },
  {
    id: 3,
    question: "Cơ cấu nguồn tiền hỗ trợ 1.500.000 VNĐ của Nhân sự chính thức gồm những nguồn nào?",
    options: [
      { key: "A", text: "A. 100% từ ngân sách Công ty." },
      { key: "B", text: "B. 100% từ quỹ Công đoàn." },
      { key: "C", text: "C. 1.000.000 VNĐ từ ngân sách Công ty + 500.000 VNĐ từ Công đoàn." },
      { key: "D", text: "D. 500.000 VNĐ từ ngân sách Công ty + 1.000.000 VNĐ từ Công đoàn." },
    ],
    correctAnswer: "C",
    explanation: "",
  },
  {
    id: 4,
    question: "Mức hỗ trợ chi phí đối với Nhân sự thử việc (ký HĐ trước 01/07/2026 và còn làm việc tại thời điểm chi tiền) là bao nhiêu?",
    options: [
      { key: "A", text: "A. 500.000 VNĐ." },
      { key: "B", text: "B. 1.000.000 VNĐ" },
      { key: "C", text: "C. 1.500.000 VNĐ." },
      { key: "D", text: "D. Không được hỗ trợ chi phí." },
    ],
    correctAnswer: "B",
    explanation: "",
  },
  {
    id: 5,
    question: "Theo quy định, chi phí gắn kết của các đội nhóm sẽ được Công ty chi trả cho ai để tổ chức hoạt động?",
    options: [
      { key: "A", text: "A. Chi trực tiếp vào tài khoản cá nhân của từng thành viên trong đội nhóm." },
      { key: "B", text: "B. Chi cho Kế toán của Phòng ban hoặc Cửa hàng giữ hộ." },
      { key: "C", text: "C. Khối Văn phòng - Omni: Chi cho Giám đốc/GĐ Khối/Trưởng phòng; Khối Cửa hàng/YOKIDs/NEVO: Chi cho Quản lý cửa hàng (hoặc OM nếu cửa hàng chưa có QLCH)." },
      { key: "D", text: "D. Chi cho Giám đốc vùng hoặc Giám đốc Nhân sự khối." },
    ],
    correctAnswer: "C",
    explanation: "",
  },
  {
    id: 6,
    question: "Thời gian dự kiến chi trả chi phí hỗ trợ gắn kết theo kế hoạch là khi nào?",
    options: [
      { key: "A", text: "A. 03/07/2026." },
      { key: "B", text: "B. 01/07/2026." },
      { key: "C", text: "C. 19/07/2026." },
      { key: "D", text: "D. 03/08/2026." },
    ],
    correctAnswer: "A",
    explanation: "",
  },
  {
    id: 7,
    question: "Khi tham gia hoạt động gắn kết theo kế hoạch đã đăng ký, nhân sự được nghỉ bao nhiêu ngày nguyên lương?",
    options: [
      { key: "A", text: "A. 0.5 ngày." },
      { key: "B", text: "B. 01 ngày." },
      { key: "C", text: "C. 02 ngày." },
      { key: "D", text: "D. Không được nghỉ phép có lương." },
    ],
    correctAnswer: "B",
    explanation: "",
  },
  {
    id: 8,
    question: "Để được ghi nhận ngày nghỉ phép gắn kết, nhân sự phải chọn lý do nghỉ trên phần mềm là gì?",
    options: [
      { key: "A", text: "A. Nghỉ việc riêng." },
      { key: "B", text: "B. Nghỉ phép năm." },
      { key: "C", text: "C. \"Gắn kết đội nhóm\"." },
      { key: "D", text: "D. Teambuilding 2026." },
    ],
    correctAnswer: "C",
    explanation: "",
  },
  {
    id: 9,
    question: "Hệ thống phần mềm sẽ mở tính năng tạo đơn nghỉ \"Gắn kết đội nhóm\" trong khung thời gian nào?",
    options: [
      { key: "A", text: "A. Chỉ từ 01/07 đến 19/07/2026." },
      { key: "B", text: "B. Chỉ từ 24/06 đến 02/07/2026." },
      { key: "C", text: "C. Từ 01/07 đến 03/08/2026." },
      { key: "D", text: "D. Mở suốt năm 2026." },
    ],
    correctAnswer: "A",
    explanation: "",
  },
  {
    id: 10,
    question: "Khoản tiền hỗ trợ nào tính vào thu nhập chịu thuế TNCN của nhân sự chính thức?",
    options: [
      { key: "A", text: "A. 500.000 VNĐ từ ngân sách Công đoàn." },
      { key: "B", text: "B. Cả 1.500.000 VNĐ đều chịu thuế." },
      { key: "C", text: "C. Không có khoản nào phải chịu thuế TNCN." },
      { key: "D", text: "D. 1.000.000 VNĐ từ ngân sách Công ty (cộng vào thu nhập tháng 7)." },
    ],
    correctAnswer: "D",
    explanation: "",
  },
  {
    id: 11,
    question: "Hạn chót để Trưởng phòng/Quản lý cửa hàng gửi danh sách nhận tiền có chữ ký về cho Kế toán là khi nào?",
    options: [
      { key: "A", text: "A. 02/07/2026." },
      { key: "B", text: "B. 19/07/2026." },
      { key: "C", text: "C. 03/08/2026." },
      { key: "D", text: "D. 10/08/2026." },
    ],
    correctAnswer: "C",
    explanation: "",
  },
  {
    id: 12,
    question: "Nếu không hoàn tất danh sách nhận tiền có chữ ký gửi về Công đoàn/Kế toán đúng hạn, điều gì sẽ xảy ra?",
    options: [
      { key: "A", text: "A. Sẽ bị phạt cảnh cáo toàn team." },
      { key: "B", text: "B. Công ty có quyền truy thu 500.000 VNĐ (khoản hỗ trợ từ Công đoàn) của từng nhân sự trong kỳ lương tháng 7." },
      { key: "C", text: "C. Sẽ không được tham gia các chương trình sau." },
      { key: "D", text: "D. Leader sẽ phải tự bỏ tiền túi ra đền." },
    ],
    correctAnswer: "B",
    explanation: "",
  },
  {
    id: 13,
    question: "Một đội nhóm được ghi nhận là HOÀN TẤT chương trình khi đáp ứng đủ các điều kiện nào?",
    options: [
      { key: "A", text: "A. Tổ chức đúng ngày đăng ký." },
      { key: "B", text: "B. Tick hoàn tất tổ chức trên link theo dõi." },
      { key: "C", text: "C. Được công đoàn xác nhận hoàn tất giấy tờ (danh sách có chữ ký gửi trước ngày 03/08)." },
      { key: "D", text: "D. Bao gồm tất cả các điều kiện trên." },
    ],
    correctAnswer: "D",
    explanation: "",
  },
  {
    id: 14,
    question: "Nhân sự không đi gắn kết (do trường hợp bất khả kháng) có được nhận tiền hỗ trợ và hưởng 1 ngày nghỉ có lương không?",
    options: [
      { key: "A", text: "A. Được nhận tiền và tính thuế TNCN theo quy định, đồng thời vẫn được nghỉ 1 ngày có lương (nếu làm đơn đúng hạn 01/07 - 19/07)." },
      { key: "B", text: "B. Không được nhận tiền, không được nghỉ." },
      { key: "C", text: "C. Được nhận tiền nhưng bị trừ ngày phép năm." },
      { key: "D", text: "D. Chỉ được nhận tiền, không được nghỉ." },
    ],
    correctAnswer: "A",
    explanation: "",
  },
  {
    id: 15,
    question: "Các Phòng ban/Bộ phận/Cửa hàng đi gắn kết có cần phải lấy hóa đơn, chứng từ chi tiêu về cho công ty không?",
    options: [
      { key: "A", text: "A. Bắt buộc phải lấy hóa đơn đỏ." },
      { key: "B", text: "B. Không cần lấy hóa đơn, chứng từ (chỉ cần hoàn tất danh sách ký nhận tiền đầy đủ gửi về đúng hạn)." },
      { key: "C", text: "C. Phải chụp lại tất cả biên lai bán lẻ." },
      { key: "D", text: "D. Chỉ khối cửa hàng mới cần lấy hóa đơn." },
    ],
    correctAnswer: "B",
    explanation: "",
  }
]
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
    range: "0-14",
    title: "CHÚT XÍU NỮA LÀ NẮM TRỌN Y-VOICE TRONG TÂM TRÍ RỒI! 🕵️‍♂️",
    description:
      '<span style=\'display:block;text-align:center\'>Tiếc một xíu thôi! 🤏<br />Bạn đã rất gần với danh hiệu "Đại sứ thấu hiểu" rồi đó. Chỉ còn vài nút thắt nhỏ nữa thôi là bạn sẽ nắm trọn mọi điều về Y-Voice. Đừng ngần ngại thử lại lần nữa để "phá đảo" bài test này nhé! </span>',
    buttonText: "TRUY CẬP Y-VOICE NGAY TẠI ĐÂY",
    emoji: "🚀",
  },
  {
    range: "15",
    title: "CHÚC MỪNG BẠN ĐÃ SỞ HỮU 'CẨM NANG Y-VOICE' VỚI KẾT QUẢ TUYỆT ĐỐI! 🏆",
    description:
      '<span style=\'display:block;text-align:center\'>Bạn chính là một "mảnh ghép" hoàn hảo của Y-Voice khi hiểu rõ mọi giá trị mà chúng mình đang xây dựng. Đừng để kiến thức này ngủ quên, hãy tiếp tục lan tỏa tinh thần lắng nghe và đóng góp để cộng đồng chúng ta ngày càng vững mạnh nhé! 🚀 Cùng Y-Voice tạo nên thay đổi ngay hôm nay!',
    buttonText: "TRUY CẬP Y-VOICE NGAY TẠI ĐÂY",
    emoji: "🏆",
  },
];

export function getScoreResult(score: number): ScoreResult {
  if (score <= 14) return scoreResults[0];
  if (score === 15) return scoreResults[1];
  return scoreResults[0];
}
