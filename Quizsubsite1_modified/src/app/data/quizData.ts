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
<<<<<<< HEAD
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
=======
    question: "Công thức tính điểm thi đua tổng hợp của CGTV gồm những yếu tố nào?",
    options: [
      { key: "A", text: "A. Doanh số (50đ), Dịch vụ (25đ), Kiến thức & Tuân thủ (25đ)" },
      { key: "B", text: "B. Doanh số (60đ), Dịch vụ (20đ), Kiến thức (20đ)" },
      { key: "C", text: "C. Doanh số cửa hàng (50đ), CRM (30đ), Đào tạo (20đ)" },
      { key: "D", text: "D. Chỉ tính Doanh số cá nhân (100đ)" },
>>>>>>> aa3691279cd44f82a5f4110112f5615e859522d8
    ],
    correctAnswer: "A",
    explanation: "",
  },
<<<<<<< HEAD
  {
    id: 7,
    question: "Khi tham gia hoạt động gắn kết theo kế hoạch đã đăng ký, nhân sự được nghỉ bao nhiêu ngày nguyên lương?",
    options: [
      { key: "A", text: "A. 0.5 ngày." },
      { key: "B", text: "B. 01 ngày." },
      { key: "C", text: "C. 02 ngày." },
      { key: "D", text: "D. Không được nghỉ phép có lương." },
=======
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
    question: "Điều kiện để CGTV đạt hạng vinh danh \"Top 10%\" và nhận thưởng 1.500.000 đồng là gì?",
    options: [
      { key: "A", text: "A. Nằm trong Top 10% doanh số" },
      { key: "B", text: "B. Top 10% và tổng điểm thi đua >= 90 điểm" },
      { key: "C", text: "C. Top 10% và không vi phạm kỷ luật" },
      { key: "D", text: "D. Chỉ cần đạt tổng điểm 100/100" },
>>>>>>> aa3691279cd44f82a5f4110112f5615e859522d8
    ],
    correctAnswer: "B",
    explanation: "",
  },
  {
<<<<<<< HEAD
    id: 8,
    question: "Để được ghi nhận ngày nghỉ phép gắn kết, nhân sự phải chọn lý do nghỉ trên phần mềm là gì?",
    options: [
      { key: "A", text: "A. Nghỉ việc riêng." },
      { key: "B", text: "B. Nghỉ phép năm." },
      { key: "C", text: "C. \"Gắn kết đội nhóm\"." },
      { key: "D", text: "D. Teambuilding 2026." },
=======
    id: 4,
    question: "Thời hạn sử dụng \"Ngày nghỉ có hưởng lương\" từ thưởng thi đua là bao lâu?",
    options: [
      { key: "A", text: "A. Trong tháng công bố kết quả" },
      { key: "B", text: "B. Có thể quy đổi thành tiền mặt" },
      { key: "C", text: "C. Trong vòng 06 tháng từ ngày công bố" },
      { key: "D", text: "D. Không giới hạn thời gian" },
>>>>>>> aa3691279cd44f82a5f4110112f5615e859522d8
    ],
    correctAnswer: "C",
    explanation: "",
  },
  {
<<<<<<< HEAD
    id: 9,
    question: "Hệ thống phần mềm sẽ mở tính năng tạo đơn nghỉ \"Gắn kết đội nhóm\" trong khung thời gian nào?",
    options: [
      { key: "A", text: "A. Chỉ từ 01/07 đến 19/07/2026." },
      { key: "B", text: "B. Chỉ từ 24/06 đến 02/07/2026." },
      { key: "C", text: "C. Từ 01/07 đến 03/08/2026." },
      { key: "D", text: "D. Mở suốt năm 2026." },
=======
    id: 5,
    question: "Khi số lượng nhân sự ở ngưỡng thưởng vượt mức % quy định, tiêu chí nào được dùng để ưu tiên xét từ cao xuống thấp?",
    options: [
      { key: "A", text: "A. Tính tại cửa hàng làm lâu nhất" },
      { key: "B", text: "B. Tính theo tỉ lệ hoàn thành doanh thu từ cao xuống thấp" },
      { key: "C", text: "C. Lấy kết quả cửa hàng cuối cùng" },
      { key: "D", text: "D. Không được xét thi đua" },
    ],
    correctAnswer: "B",
    explanation: "",
  },
  {
    id: 6,
    question: "BP Đào tạo sẽ thực hiện đánh giá kiến thức, năng lực vào thời điểm nào và lấy kết quả lần nộp nào?",
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
>>>>>>> aa3691279cd44f82a5f4110112f5615e859522d8
    ],
    correctAnswer: "A",
    explanation: "",
  },
  {
<<<<<<< HEAD
    id: 10,
    question: "Khoản tiền hỗ trợ nào tính vào thu nhập chịu thuế TNCN của nhân sự chính thức?",
    options: [
      { key: "A", text: "A. 500.000 VNĐ từ ngân sách Công đoàn." },
      { key: "B", text: "B. Cả 1.500.000 VNĐ đều chịu thuế." },
      { key: "C", text: "C. Không có khoản nào phải chịu thuế TNCN." },
      { key: "D", text: "D. 1.000.000 VNĐ từ ngân sách Công ty (cộng vào thu nhập tháng 7)." },
=======
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
>>>>>>> aa3691279cd44f82a5f4110112f5615e859522d8
    ],
    correctAnswer: "D",
    explanation: "",
  },
  {
    id: 11,
<<<<<<< HEAD
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
=======
    question: "Doanh số cá nhân của CGTV để tính thi đua được ghi nhận từ những nguồn nào trên hệ thống?",
    options: [
      { key: "A", text: "A. Chỉ tính doanh thu thuần bán hàng trực tiếp tại cửa hàng" },
      { key: "B", text: "B. Doanh thu cá nhân tại cửa hàng và doanh thu bán hàng trên Tiktok, Shopee được ghi nhận qua mã nhân sự" },
      { key: "C", text: "C. Tổng doanh thu của toàn bộ cửa hàng chia đều cho các nhân sự" },
      { key: "D", text: "D. Chỉ tính doanh thu từ các đơn hàng livestream của công ty" },
>>>>>>> aa3691279cd44f82a5f4110112f5615e859522d8
    ],
    correctAnswer: "B",
    explanation: "",
  },
  {
<<<<<<< HEAD
    id: 13,
    question: "Một đội nhóm được ghi nhận là HOÀN TẤT chương trình khi đáp ứng đủ các điều kiện nào?",
    options: [
      { key: "A", text: "A. Tổ chức đúng ngày đăng ký." },
      { key: "B", text: "B. Tick hoàn tất tổ chức trên link theo dõi." },
      { key: "C", text: "C. Được công đoàn xác nhận hoàn tất giấy tờ (danh sách có chữ ký gửi trước ngày 03/08)." },
      { key: "D", text: "D. Bao gồm tất cả các điều kiện trên." },
=======
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
>>>>>>> aa3691279cd44f82a5f4110112f5615e859522d8
    ],
    correctAnswer: "D",
    explanation: "",
  },
  {
    id: 14,
<<<<<<< HEAD
    question: "Nhân sự không đi gắn kết (do trường hợp bất khả kháng) có được nhận tiền hỗ trợ và hưởng 1 ngày nghỉ có lương không?",
    options: [
      { key: "A", text: "A. Được nhận tiền và tính thuế TNCN theo quy định, đồng thời vẫn được nghỉ 1 ngày có lương (nếu làm đơn đúng hạn 01/07 - 19/07)." },
      { key: "B", text: "B. Không được nhận tiền, không được nghỉ." },
      { key: "C", text: "C. Được nhận tiền nhưng bị trừ ngày phép năm." },
      { key: "D", text: "D. Chỉ được nhận tiền, không được nghỉ." },
    ],
    correctAnswer: "A",
=======
    question: "Khi CGTV có từ 02 phản hồi tiêu cực đã được xác minh trở lên trong cùng một quý, điểm dịch vụ khách hàng của cá nhân đó sẽ tính thế nào?",
    options: [
      { key: "A", text: "A. Bị trừ 50% số điểm" },
      { key: "B", text: "B. Bị trừ 10 điểm" },
      { key: "C", text: "C. Được tính là 0 điểm" },
      { key: "D", text: "D. Bị hủy kết quả thi đua của cả quý" },
    ],
    correctAnswer: "C",
>>>>>>> aa3691279cd44f82a5f4110112f5615e859522d8
    explanation: "",
  },
  {
    id: 15,
<<<<<<< HEAD
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
=======
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
    question: "Tình huống: Bạn An là CGTV đi làm rất chăm chỉ, doanh số và kiến thức đều đạt điểm tối đa. Nhưng tháng này An lại bị ghi nhận vi phạm lỗi diện mạo 1 lần. Theo quy định, An sẽ còn lại mấy điểm tuân thủ?",
    options: [
      { key: "A", text: "A. Chỉ còn 7 điểm" },
      { key: "B", text: "B. Chỉ còn 5 điểm" },
      { key: "C", text: "C. Bị tính 0 điểm" },
      { key: "D", text: "D. Chỉ còn 3 điểm" },
    ],
    correctAnswer: "D",
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
]
;
>>>>>>> aa3691279cd44f82a5f4110112f5615e859522d8
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
<<<<<<< HEAD
    range: "0-14",
    title: "CHÚT XÍU NỮA LÀ NẮM TRỌN Y-VOICE TRONG TÂM TRÍ RỒI! 🕵️‍♂️",
=======
    range: "0-19",
    title: "BẠN ĐÃ RẤT GẦN ĐÍCH RỒI! 🚀",
>>>>>>> aa3691279cd44f82a5f4110112f5615e859522d8
    description:
      '<span style=\'display:block;text-align:center\'><br />Bạn đã đi được gần hết chặng đường và chỉ còn cách kết quả tuyệt đối một vài đáp án nữa thôi.<br />Biết đâu chỉ cần xem lại một chút và thử lại lần nữa, danh hiệu "cao thủ Chính sách thi đua" sẽ gọi tên bạn?<br />Thỏ Láu vẫn đang chờ một lá thư hoàn chỉnh với 20/20 câu trả lời chính xác đấy! 🚀<br />Thử lại ngay để chinh phục điểm số tuyệt đối nhé!</span>',
    buttonText: "THEO DÕI THÔNG TIN CHI TIẾT CHÍNH SÁCH TẠI ĐÂY",
    emoji: "🚀",
  },
  {
<<<<<<< HEAD
    range: "15",
    title: "CHÚC MỪNG BẠN ĐÃ SỞ HỮU 'CẨM NANG Y-VOICE' VỚI KẾT QUẢ TUYỆT ĐỐI! 🏆",
=======
    range: "20",
    title: "🏆 CHIẾN THẦN THI ĐUA KINH DOANH ĐÂY RỒIIII 🎉",
>>>>>>> aa3691279cd44f82a5f4110112f5615e859522d8
    description:
      '<span style=\'display:block;text-align:center\'>Xin chúc mừng bạn!<br />Bạn vừa hoàn thành thử thách với số điểm tuyệt đối! 🎉<br />Không chỉ nắm chắc kiến thức, bạn còn đang tiến thêm một bước trên đường đua săn những phần quà hấp dẫn của Tuần lễ Văn hoá tháng 6. ✨<br />100 Y-Point đã sẵn sàng về tài khoản của bạn rồi đây.<br />Hãy cùng tiếp tục chinh phục những hoạt động tiếp theo nhé!</span>',
    buttonText: "XEM LẠI THÔNG TIN CHI TIẾT CHÍNH SÁCH TẠI ĐÂY",
    emoji: "🏆",
  },
];

export function getScoreResult(score: number): ScoreResult {
<<<<<<< HEAD
  if (score <= 14) return scoreResults[0];
  if (score === 15) return scoreResults[1];
=======
  if (score <= 19) return scoreResults[0];
  if (score === 20) return scoreResults[1];
>>>>>>> aa3691279cd44f82a5f4110112f5615e859522d8
  return scoreResults[0];
}
