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
    question: "Công thức tính điểm thi đua tổng hợp của CGTV gồm những yếu tố nào?",
    options: [
      { key: "A", text: "A. Doanh số (50đ), Dịch vụ (25đ), Kiến thức & Tuân thủ (25đ)" },
      { key: "B", text: "B. Doanh số (60đ), Dịch vụ (20đ), Kiến thức (20đ)" },
      { key: "C", text: "C. Doanh số cửa hàng (50đ), CRM (30đ), Đào tạo (20đ)" },
      { key: "D", text: "D. Chỉ tính Doanh số cá nhân (100đ)" },
    ],
    correctAnswer: "A",
    explanation: "",
  },
  {
    id: 2,
    question: "Điểm dịch vụ cửa hàng của một CGTV là 9.2 điểm. Trong quý, cá nhân này có 01 phản hồi tiêu cực đã được xác minh thuộc lỗi cá nhân. Điểm dịch vụ cuối cùng của cá nhân là bao nhiêu?",
    options: [
      { key: "A", text: "A. Bị trừ 10 điểm trực tiếp" },
      { key: "B", text: "B. Không ảnh hưởng đến điểm" },
      { key: "C", text: "C. Bị tính 0 điểm dịch vụ" },
      { key: "D", text: "D. Bị trừ 50% điểm dịch vụ của quý đó" },
    ],
    correctAnswer: "D",
    explanation: "",
  },
  {
    id: 3,
    question: "Điều kiện để CGTV đạt hạng vinh danh \"Top 10%\" và nhận thưởng 1.5tr VNĐ?",
    options: [
      { key: "A", text: "A. Nằm trong Top 10% doanh số" },
      { key: "B", text: "B. Top 10% và tổng điểm thi đua >= 90 điểm" },
      { key: "C", text: "C. Top 10% và không vi phạm kỷ luật" },
      { key: "D", text: "D. Chỉ cần đạt tổng điểm 100/100" },
    ],
    correctAnswer: "B",
    explanation: "",
  },
  {
    id: 4,
    question: "Thời hạn sử dụng \"Ngày nghỉ có hưởng lương\" từ thưởng thi đua là bao lâu?",
    options: [
      { key: "A", text: "A. Trong tháng công bố kết quả" },
      { key: "B", text: "B. Có thể quy đổi thành tiền mặt" },
      { key: "C", text: "C. Trong vòng 06 tháng từ ngày công bố" },
      { key: "D", text: "D. Không giới hạn thời gian" },
    ],
    correctAnswer: "C",
    explanation: "",
  },
  {
    id: 5,
    question: "Khi số lượng nhân sự ở ngưỡng thưởng vượt mức % quy định, tiêu chí nào được dùng để ưu tiên xét từ cao xuống thấp?",
    options: [
      { key: "A", text: "A. Tính tại cửa hàng làm lâu nhất" },
      { key: "B", text: "B. Tính điểm trung bình theo thời gian thực tế" },
      { key: "C", text: "C. Lấy kết quả cửa hàng cuối cùng" },
      { key: "D", text: "D. Không được xét thi đua" },
    ],
    correctAnswer: "B",
    explanation: "",
  },
  {
    id: 6,
    question: "Thực hiện đánh giá vào thời điểm nào và lấy kết quả lần nộp nào?",
    options: [
      { key: "A", text: "A. Ngày đầu tháng và không tính kết quả" },
      { key: "B", text: "B. Ngày 1 - 15 của tháng giữa quý và lấy kết quả lần nộp cuối cùng" },
      { key: "C", text: "C. Ngày 15-25 của tháng cuối quý và lấy kết quả lần đầu nộp bài" },
      { key: "D", text: "D. Ngày 15-25 của tháng đầu quý và lấy kết quả lần cuối cùng nộp bài" },
    ],
    correctAnswer: "C",
    explanation: "",
  },
  {
    id: 7,
    question: "Một CGTV đạt >105% doanh thu cá nhân, điểm dịch vụ cửa hàng là 8.0, không có phản hồi tiêu cực, không vi phạm và điểm kiến thức đạt 95%. Tổng điểm thi đua của CGTV này là bao nhiêu?",
    options: [
      { key: "A", text: "A. 80 điểm" },
      { key: "B", text: "B. 90 điểm" },
      { key: "C", text: "C. 95 điểm" },
      { key: "D", text: "D. 100 điểm" },
    ],
    correctAnswer: "B",
    explanation: "",
  },
  {
    id: 8,
    question: "Điều kiện để CGTV đạt hạng vinh danh Top 20% (10% tiếp theo) và nhận thưởng 600.000 đồng là gì?",
    options: [
      { key: "A", text: "A. Nằm trong Top 20% và có tổng điểm thi đua từ 80 điểm trở lên" },
      { key: "B", text: "B. Nằm trong Top 20% và có tổng điểm thi đua từ 90 điểm trở lên." },
      { key: "C", text: "C. Nằm trong Top 20% và có tổng điểm thi đua từ 70 điểm trở lên." },
      { key: "D", text: "D. Chỉ cần nằm trong Top 20% có doanh số cao nhất, không xét tổng điểm." },
    ],
    correctAnswer: "A",
    explanation: "",
  },
  {
    id: 9,
    question: "Một CGTV không vi phạm quy định trong quý và có điểm bài test kiến thức đạt 88%. Tổng điểm của nhóm “Kiến thức, tuân thủ quy trình, quy định” là bao nhiêu?",
    options: [
      { key: "A", text: "A. 10 điểm" },
      { key: "B", text: "B. 15 điểm" },
      { key: "C", text: "C. 20 điểm" },
      { key: "D", text: "D. 25 điểm" },
    ],
    correctAnswer: "C",
    explanation: "",
  },
  {
    id: 10,
    question: "Một CGTV đạt 92% mục tiêu doanh thu cá nhân trong quý. Theo thang điểm thi đua, người này được bao nhiêu điểm doanh số?",
    options: [
      { key: "A", text: "A. 10 điểm" },
      { key: "B", text: "B. 20 điểm" },
      { key: "C", text: "C. 30 điểm" },
      { key: "D", text: "D. 40 điểm" },
    ],
    correctAnswer: "D",
    explanation: "",
  },
  {
    id: 11,
    question: "Doanh số cá nhân của CGTV để tính thi đua được ghi nhận từ những nguồn nào trên hệ thống?",
    options: [
      { key: "A", text: "A. Chỉ tính doanh thu thuần bán hàng trực tiếp tại cửa hàng" },
      { key: "B", text: "B. Doanh thu cá nhân tại cửa hàng và doanh thu bán hàng trên Tiktok, Shopee được ghi nhận qua mã nhân sự" },
      { key: "C", text: "C. Tổng doanh thu của toàn bộ cửa hàng chia đều cho các nhân sự" },
      { key: "D", text: "D. Chỉ tính doanh thu từ các đơn hàng livestream của công ty" },
    ],
    correctAnswer: "B",
    explanation: "",
  },
  {
    id: 12,
    question: "Thời hạn muộn nhất để Khối Vận hành bán lẻ phê duyệt mục tiêu doanh thu cá nhân tháng của CGTV là khi nào?",
    options: [
      { key: "A", text: "A. Trước ngày 05 của tháng áp dụng" },
      { key: "B", text: "B. Trước ngày 15 của tháng liền kề trước tháng áp dụng" },
      { key: "C", text: "C. Trước ngày cuối cùng của tháng liền kề trước tháng áp dụng" },
      { key: "D", text: "D. Ngay ngày đầu tiên của tháng áp dụng" },
    ],
    correctAnswer: "C",
    explanation: "",
  },
  {
    id: 13,
    question: "Bộ phận nào chịu trách nhiệm đo lường, tổng hợp và cung cấp số liệu điểm dịch vụ khách hàng cho kỳ xét hạng?",
    options: [
      { key: "A", text: "A. Bộ phận Đào tạo" },
      { key: "B", text: "B. Phòng QTRR" },
      { key: "C", text: "C. Admin khối Vận hành bán lẻ" },
      { key: "D", text: "D. Bộ phận CRM" },
    ],
    correctAnswer: "D",
    explanation: "",
  },
  {
    id: 14,
    question: "Khi CGTV có từ 02 phản hồi tiêu cực đã được xác minh trở lên trong cùng một quý, điểm dịch vụ khách hàng của cá nhân đó sẽ tính thế nào?",
    options: [
      { key: "A", text: "A. Bị trừ 50% số điểm" },
      { key: "B", text: "B. Bị trừ 10 điểm" },
      { key: "C", text: "C. Được tính là 0 điểm" },
      { key: "D", text: "D. Bị hủy kết quả thi đua của cả quý" },
    ],
    correctAnswer: "C",
    explanation: "",
  },
  {
    id: 15,
    question: "Kết quả xếp hạng thi đua quý của CGTV có được dùng làm căn cứ trực tiếp để điều chỉnh chức danh, cấp bậc hay lương cơ bản không?",
    options: [
      { key: "A", text: "A. Có, được điều chỉnh ngay tháng sau" },
      { key: "B", text: "B. Không, trừ trường hợp có quyết định nhân sự riêng của Công ty" },
      { key: "C", text: "C. Chỉ dùng để điều chỉnh cấp bậc, không tăng lương" },
      { key: "D", text: "D. Chỉ dùng để hạ bậc nếu nằm trong nhóm thấp" },
    ],
    correctAnswer: "B",
    explanation: "",
  },
  {
    id: 16,
    question: "Để sử dụng \"Ngày nghỉ có hưởng lương\" từ thưởng thi đua, CGTV phải làm đơn vắng mặt và ghi rõ lý do gì?",
    options: [
      { key: "A", text: "A. \"Nghỉ phép năm\"" },
      { key: "B", text: "B. \"Nghỉ việc riêng có lương\"" },
      { key: "C", text: "C. \"Thưởng thi đua Thưởng hiệu suất\"" },
      { key: "D", text: "D. \"Nghỉ bù chế độ\"" },
    ],
    correctAnswer: "C",
    explanation: "",
  },
  {
    id: 17,
    question: "Tình huống: Bạn An là CGTV đi làm rất chăm chỉ, doanh số và kiến thức đều đạt điểm tối đa. Nhưng đen đủi là tháng này An lại bị ghi nhận vi phạm lỗi diện mạo 1 lần. Theo quy định, An sẽ bị trừ mấy điểm tuân thủ?",
    options: [
      { key: "A", text: "A. Bị trừ 1 điểm" },
      { key: "B", text: "B. Bị trừ 2 điểm" },
      { key: "C", text: "C. Bị trừ 5 điểm" },
      { key: "D", text: "D. Không bị trừ điểm nào" },
    ],
    correctAnswer: "B",
    explanation: "",
  },
  {
    id: 18,
    question: "Tình huống: Bạn Bình bán hàng cực giỏi, giúp cửa hàng đạt điểm dịch vụ tuyệt đối (25 điểm). Nhưng trong quý, Bình lại để xảy ra 01 phản hồi tiêu cực (khách hàng phàn nàn) đúng lỗi của mình. Điểm dịch vụ của Bình sẽ bị phạt như thế nào?",
    options: [
      { key: "A", text: "A. Bị hủy luôn toàn bộ kết quả thi đua" },
      { key: "B", text: "B. Không bị phạt vì doanh số cao" },
      { key: "C", text: "C. Bị trừ hết sạch điểm dịch vụ (còn 0 điểm)" },
      { key: "D", text: "D. Bị trừ mất một nửa (50%) điểm dịch vụ" },
    ],
    correctAnswer: "D",
    explanation: "",
  },
  {
    id: 19,
    question: "Khi các bạn đạt giải thưởng thi đua và được tặng \"Ngày nghỉ có hưởng lương\", nếu các bạn không dùng đến hoặc quên không làm thủ tục nghỉ thì có được Công ty quy đổi thành tiền mặt không?",
    options: [
      { key: "A", text: "A. Có, được trả bằng tiền mặt vào cuối năm" },
      { key: "B", text: "B. Có, được cộng dồn vào tiền lương tháng sau" },
      { key: "C", text: "C. Không, ngày nghỉ này sẽ tự mất đi và không được đổi thành tiền mặt" },
      { key: "D", text: "D. Có, được đem tặng hoặc chuyển nhượng cho đồng nghiệp khác" },
    ],
    correctAnswer: "C",
    explanation: "",
  },
  {
    id: 20,
    question: "Sau khi triển khai PIP, nếu QLCH vẫn thuộc nhóm 10% thấp nhất sau 2 kỳ xếp hạng liền sau liên tiếp thì sẽ xử lý thế nào?",
    options: [
      { key: "A", text: "A. Buộc thôi việc (sa thải)" },
      { key: "B", text: "B. Điều chuyển về vị trí Quản lý cửa hàng Khởi đầu" },
      { key: "C", text: "C. Phạt trừ 50% mức lương cơ bản" },
      { key: "D", text: "D. Điều chuyển về vị trí Chuyên gia tư vấn" },
    ],
    correctAnswer: "D",
    explanation: "",
  }
],]
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
    range: "0-19",
    title: "CHÚT XÍU NỮA LÀ NẮM TRỌN CHÍNH SÁCH THƯỞNG TRONG TÂM TRÍ RỒI! 🕵️‍♂️",
    description:
      '<span style=\'display:block;text-align:center\'>Tiếc một xíu thôi! 🤏<br />Bạn đã rất gần với danh hiệu "Đại sứ thấu hiểu" rồi đó. Chỉ còn vài nút thắt nhỏ nữa thôi là bạn sẽ nắm trọn mọi điều về Y-Voice. Đừng ngần ngại thử lại lần nữa để "phá đảo" bài test này nhé! </span>',
    buttonText: "THEO DÕI THÔNG TIN CHI TIẾT CHÍNH SÁCH TẠI ĐÂY",
    emoji: "🚀",
  },
  {
    range: "20",
    title: "CHÚC MỪNG BẠN ĐÃ THUỘC LÒNG CHÍNH SÁCH THI ĐUA TRONG TÂM TRÍ RỒI ĐÓ! 🏆",
    description:
      '<span style=\'display:block;text-align:center\'>Bạn chính là một "mảnh ghép" hoàn hảo của Y-Voice khi hiểu rõ mọi giá trị mà chúng mình đang xây dựng. Đừng để kiến thức này ngủ quên, hãy tiếp tục lan tỏa tinh thần lắng nghe và đóng góp để cộng đồng chúng ta ngày càng vững mạnh nhé! 🚀 Cùng Y-Voice tạo nên thay đổi ngay hôm nay!',
    buttonText: "XEM LẠI THÔNG TIN CHI TIẾT CHÍNH SÁCH TẠI ĐÂY",
    emoji: "🏆",
  },
];

export function getScoreResult(score: number): ScoreResult {
  if (score <= 19) return scoreResults[0];
  if (score === 20) return scoreResults[1];
  return scoreResults[0];
}
