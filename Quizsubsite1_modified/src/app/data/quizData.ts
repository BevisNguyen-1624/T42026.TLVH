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
    question: "[QĐĐT] Quy định đào tạo 2026 áp dụng cho những đối tượng nào tại YODY?",
    options: [
      { key: "A", text: "A. Chỉ áp dụng cho khối văn phòng và nhân viên chính thức từ cấp L3 trở lên." },
      { key: "B", text: "B. 100% cán bộ nhân viên bao gồm cả chính thức, thử việc và hợp đồng thời vụ từ L1 đến L8." },
      { key: "C", text: "C. Chỉ áp dụng cho nhân sự khối vận hành bán lẻ (VHBL) trực tiếp tại cửa hàng." },
      { key: "D", text: "D. Nhân viên chính thức và không áp dụng cho nhân sự đang trong quá trình thử việc." }
    ],
    correctAnswer: "B",
    explanation: "Đây là toàn bộ các tiêu chí bắt buộc được nêu trong quy định nhằm đảm bảo chất lượng của đội ngũ giảng dạy nội bộ."
  },
  {
    id: 2,
    question: "[QĐĐT] Tiêu chuẩn nào dưới đây là BẮT BUỘC để một cán bộ nhân viên có thể trở thành Giảng viên nội bộ tại YODY?",
    options: [
      { key: "A", text: "A. Có cấp bậc từ L1 trở lên, có mong muốn chia sẻ và đã làm việc tại công ty tối thiểu 6 tháng." },
      { key: "B", text: "B. Phải đạt cấp bậc từ L3 trở lên, am hiểu chuyên môn sâu với kinh nghiệm thực tế từ 1 năm, có kỹ năng mềm tốt và giảng thử đạt yêu cầu." },
      { key: "C", text: "C. Chỉ cần thuộc cấp quản lý từ Giám đốc Khối (L7) trở lên thì mặc nhiên trở thành giảng viên mà không cần đánh giá." },
      { key: "D", text: "D. Bắt buộc phải có bằng đại học chuyên ngành sư phạm hoặc chứng chỉ đào tạo giảng viên do tổ chức quốc tế cấp." }
    ],
    correctAnswer: "B",
    explanation: "Đây là toàn bộ các tiêu chí bắt buộc được nêu trong quy định nhằm đảm bảo chất lượng của đội ngũ giảng dạy nội bộ."
  },
  {
    id: 3,
    question: "[QĐĐT] Theo khung quy định chung CẢ NĂM, cấp bậc L3 (Trưởng nhóm / Quản lý cửa hàng) cần hoàn thành tối thiểu bao nhiêu giờ đào tạo?",
    options: [
      { key: "A", text: "A. 12 giờ/năm" },
      { key: "B", text: "B. 18 giờ/năm" },
      { key: "C", text: "C. 24 giờ/năm" },
      { key: "D", text: "D. 36 giờ/năm" }
    ],
    correctAnswer: "C",
    explanation: "Theo bảng quy định chung, cấp L3 có định mức tối thiểu là 24 giờ đào tạo trong một năm tài chính."
  },
  {
    id: 4,
    question: "[QĐĐT] Hoạt động nào dưới đây KHÔNG được tính vào số giờ đào tạo tích lũy của cán bộ nhân viên?",
    options: [
      { key: "A", text: "A. Tham gia các cuộc họp giao ca hằng ngày và họp review KPI định kỳ." },
      { key: "B", text: "B. Học tập các khóa học e-learning và hoàn thành bài kiểm tra trên LMS." },
      { key: "C", text: "C. Tham gia chương trình On-the-Job Training (OJT) có biên bản xác nhận." },
      { key: "D", text: "D. Hoạt động Coaching/Mentoring có cấu trúc rõ ràng từ 60 phút trở lên." }
    ],
    correctAnswer: "A",
    explanation: "Các cuộc họp vận hành, giao ca hoặc đánh giá công việc thông thường không được cấu trúc như một hoạt động đào tạo nên không được tính giờ."
  },
  {
    id: 5,
    question: "[QĐĐT] Nhóm năng lực nào trong 5 nhóm năng lực chiến lược đến 2030 bắt buộc phải đào tạo cho 100% nhân sự toàn công ty?",
    options: [
      { key: "A", text: "A. Retail Excellence (Vận hành bán lẻ xuất sắc)" },
      { key: "B", text: "B. Culture & Leadership (Văn hoá & Lãnh đạo hiệu suất cao)" },
      { key: "C", text: "C. E-commerce Excellence (Kinh doanh Online xuất sắc)" },
      { key: "D", text: "D. Product Excellence (Sản phẩm xuất sắc)" }
    ],
    correctAnswer: "B",
    explanation: "Văn hóa và năng lực phối hợp, lãnh đạo hiệu suất cao là nền tảng chung bắt buộc cho toàn bộ 100% nhân sự công ty."
  },
  {
    id: 6,
    question: "[QĐĐT] Theo Quy định đào tạo, nội dung nào dưới đây KHÔNG PHẢI là một trong 5 nhóm năng lực trọng tâm trong định hướng chiến lược phát triển của YODY tầm nhìn đến năm 2030?",
    options: [
      { key: "A", text: "A. Culture & Leadership (Văn hoá & Lãnh đạo hiệu suất cao)." },
      { key: "B", text: "B. Financial Excellence (Quản trị tài chính và tối ưu hóa dòng vốn)." },
      { key: "C", text: "C. Retail Excellence (Vận hành bán lẻ xuất sắc)." },
      { key: "D", text: "D. Product Excellence (Sản phẩm xuất sắc)." },
      { key: "E", text: "E. Branding Excellence (Thương hiệu xuất sắc)" }
    ],
    correctAnswer: "B",
    explanation: "'Financial Excellence' không nằm trong danh mục đào tạo trọng tâm đến năm 2030 của YODY"
  },
  {
    id: 7,
    question: "[QĐĐT] Hạn mức hỗ trợ học phí đào tạo bên ngoài tối đa trong một năm dành cho cấp bậc L2 (Chuyên viên) là bao nhiêu?",
    options: [
      { key: "A", text: "A. 3.000.000đ / người" },
      { key: "B", text: "B. 5.000.000đ / người" },
      { key: "C", text: "C. 10.000.000đ / người" },
      { key: "D", text: "D. 20.000.000đ / người" }
    ],
    correctAnswer: "B",
    explanation: "Hạn mức hỗ trợ học phí đào tạo bên ngoài tối đa trong một năm dành cho cấp bậc L2 (Chuyên viên) là 5.000.000đ / người."
  },
  {
    id: 8,
    question: "[QĐĐT] Đối với các khóa học bên ngoài có chi phí từ 5.000.000đ/người trở lên, những cấp nào có thẩm quyền phê duyệt?",
    options: [
      { key: "A", text: "A. Chỉ cần Giám đốc Nhân sự (HRD) phê duyệt." },
      { key: "B", text: "B. Cần sự phê duyệt song song của cả Giám đốc Nhân sự (HRD) và Tổng Giám đốc (CEO)." },
      { key: "C", text: "C. Trưởng bộ phận và Giám đốc Khối trực tiếp phê duyệt là đủ." },
      { key: "D", text: "D. Phải thông qua biểu quyết của Hội đồng quản trị công ty." }
    ],
    correctAnswer: "B",
    explanation: "Từ ngưỡng 5.000.000đ trở lên, khóa học bắt buộc phải có sự đồng thuận phê duyệt của cả HRD và CEO."
  },
  {
    id: 9,
    question: "[QĐĐT] Một giờ đứng lớp giảng dạy trực tiếp của Giảng viên nội bộ được quy đổi tương đương với bao nhiêu giờ học tập trên LMS?",
    options: [
      { key: "A", text: "A. 1.0 giờ học tập" },
      { key: "B", text: "B. 1.5 giờ học tập" },
      { key: "C", text: "C. 2.0 giờ học tập" },
      { key: "D", text: "D. 3.0 giờ học tập" }
    ],
    correctAnswer: "B",
    explanation: "Để ghi nhận công sức chuẩn bị và đứng lớp, công ty quy đổi 1 giờ giảng bài bằng 1.5 giờ học tập tích lũy."
  },
  {
    id: 10,
    question: "[QĐĐT] Nếu một cán bộ công nhân viên (CBNV) tự nguyện nghỉ việc vào tháng thứ 5 kể từ sau khi hoàn thành khóa học được công ty tài trợ, nhân sự này phải hoàn trả bao nhiêu phần trăm chi phí đào tạo?",
    options: [
      { key: "A", text: "A. 100%" },
      { key: "B", text: "B. 75%" },
      { key: "C", text: "C. 50%" },
      { key: "D", text: "D. Được miễn hoàn trả hoàn toàn." }
    ],
    correctAnswer: "C",
    explanation: "CBNV nghỉ việc trong khoảng từ tháng thứ 4 đến tháng 12 sau khóa học sẽ phải hoàn trả 50% chi phí"
  },
  {
    id: 11,
    question: "[QĐĐT] Hành vi gian lận giờ học hoặc nhờ người khác làm bài kiểm tra hộ trên hệ thống LMS sẽ phải đối mặt với hình thức xử lý cao nhất nào?",
    options: [
      { key: "A", text: "A. Trừ 50% quỹ thưởng cuối năm và khiển trách bằng văn bản." },
      { key: "B", text: "B. Khóa tài khoản LMS trong vòng 6 tháng và bắt học lại từ đầu." },
      { key: "C", text: "C. Sa thải." },
      { key: "D", text: "D. Hạ một bậc lương và thuyên chuyển công tác sang bộ phận khác." }
    ],
    correctAnswer: "C",
    explanation: "Hành vi gian lận kết quả học tập/kiểm tra bị coi là vi phạm nghiêm trọng tính trung thực và có thể chịu mức kỷ luật cao nhất là sa thải."
  },
  {
    id: 12,
    question: "[QĐĐT] [Tình huống] Anh A thuộc cấp L3 (Trưởng nhóm văn phòng). Theo chính sách cuối năm, anh đạt hiệu suất công việc xuất sắc và có mức thưởng dự kiến là 15.000.000đ. Tuy nhiên, tỷ lệ hoàn thành số giờ đào tạo bắt buộc của anh trong năm chỉ đạt 80%. Số tiền thưởng cuối năm thực tế anh A nhận được là bao nhiêu?",
    options: [
      { key: "A", text: "A. 15.000.000đ" },
      { key: "B", text: "B. 12.000.000đ" },
      { key: "C", text: "C. 10.000.000đ" },
      { key: "D", text: "D. 0đ" }
    ],
    correctAnswer: "B",
    explanation: "Thưởng thực tế = Mức thưởng chính sách × Tỷ lệ hoàn thành giờ đào tạo = 15.000.000đ × 80% = 12.000.000đ."
  },
  {
    id: 13,
    question: "[QĐĐT] [Tình huống] Chị B là Chuyên viên tư vấn thuộc khối Vận hành bán lẻ (VHBL). Đến cuối năm, chị đạt 100% KPI doanh số cá nhân và tổng số giờ học tích lũy của chị trên LMS đạt 15 giờ (vượt mức 6 giờ tối thiểu của năm 2026). Tuy nhiên, chị chưa tham gia khóa học bắt buộc 'Kỹ năng tư vấn và bán hàng thời trang'. Chị B có đủ điều kiện nhận thưởng cuối năm không?",
    options: [
      { key: "A", text: "A. Có, vì chị đã vượt số giờ học tối thiểu và hoàn thành xuất sắc KPI doanh số." },
      { key: "B", text: "B. Không, vì 100% nhân sự VHBL (trừ một số đối tượng miễn trừ đặc biệt) bắt buộc phải hoàn thành khóa học chuyên môn này mới đủ điều kiện nhận thưởng cuối năm." },
      { key: "C", text: "C. Có, nhưng chị sẽ bị hoãn chi trả tiền thưởng sang quý 1 năm sau." },
      { key: "D", text: "D. Có, nhưng chị phải nộp tiền phạt học bù trị giá 1.000.000đ." }
    ],
    correctAnswer: "B",
    explanation: "Khóa học này là điều kiện bắt buộc riêng cho khối VHBL, nếu thiếu sẽ không đủ điều kiện xét thưởng cuối năm bất kể tổng số giờ đạt bao nhiêu."
  },
  {
    id: 14,
    question: "[QĐĐT] [Tình huống] Anh C (cấp L4) được công ty tài trợ 100% chi phí học một khóa học quản lý bên ngoài trị giá 10.000.000đ (đã phê duyệt đúng quy trình). Sau khi học xong được 2 tháng, vì lý do gia đình, anh C nộp đơn xin tự nguyện nghỉ việc hợp pháp. Anh C có trách nhiệm hoàn trả chi phí đào tạo cho công ty như thế nào?",
    options: [
      { key: "A", text: "A. Không phải hoàn trả vì anh C nghỉ việc đúng pháp luật và đã đi học đầy đủ." },
      { key: "B", text: "B. Phải hoàn trả 5.000.000đ (tương đương 50% chi phí khóa học)." },
      { key: "C", text: "C. Phải hoàn trả 10.000.000đ (tương đương 100% chi phí khóa học)." },
      { key: "D", text: "D. Phải hoàn trả theo tỷ lệ số ngày còn lại chưa cống hiến đủ 365 ngày." }
    ],
    correctAnswer: "C",
    explanation: "Vì anh C tự nguyện nghỉ việc trong vòng 3 tháng đầu tiên sau khi kết thúc khóa học, tỷ lệ hoàn bồi bắt buộc là 100%."
  },
  {
    id: 15,
    question: "[QĐĐT] [Tình huống] Chị Lan là Chuyên gia tư vấn mới vào làm việc tại YODY Hà Lam từ ngày 01/08/2026 với cấp bậc L1. Khung quy định chuẩn cả năm của L1 là 12 giờ học/năm. Số giờ học tối thiểu chị Lan cần đạt được để không bị ảnh hưởng đến thưởng cuối năm 2026 là bao nhiêu?",
    options: [
      { key: "A", text: "A. 12 giờ" },
      { key: "B", text: "B. 6 giờ" },
      { key: "C", text: "C. 3 giờ" },
      { key: "D", text: "D. 0 giờ (Vì chị Lan là nhân viên mới vào sau thời điểm quy định có hiệu lực)." }
    ],
    correctAnswer: "B",
    explanation: "Do quy định ban hành giữa năm và áp dụng giảm 50% khối lượng giờ học bắt buộc cho toàn bộ nhân sự trong năm 2026, cấp L1 chỉ cần đạt 6 giờ thực tế."
  },
  {
    id: 16,
    question: "[BHXH] Theo quy định của Pháp luật Bảo hiểm xã hội được điều chỉnh từ ngày 01/07/2026, nhân sự nữ tại YODY khi nghỉ việc để sinh con thứ 2 (trường hợp sinh đơn) thì được hưởng chế độ nghỉ thai sản trong thời gian bao lâu?",
    options: [
      { key: "A", text: "A. 5 tháng" },
      { key: "B", text: "B. 6 tháng" },
      { key: "C", text: "C. 7 tháng" },
      { key: "D", text: "D. 8 tháng" }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 17,
    question: "[BHXH] Với chế độ ốm đau dành cho nhân sự đóng bảo hiểm xã hội tại YODY, khi nghỉ bản thân ốm đau, nhân sự sẽ được nghỉ bao nhiêu ngày theo quy định?",
    options: [
      { key: "A", text: "A. Tối đa 30 ngày trong năm nếu đã đóng BHXH bắt buộc dưới 15 năm; Tối đa 40 ngày trong năm nếu đã đóng từ 15 đến dưới 30 năm; Tối đa 60 ngày trong năm nếu đã đóng từ đủ 30 năm trở lên" },
      { key: "B", text: "B. Tối đa 40 ngày trong năm nếu đã đóng BHXH bắt buộc dưới 15 năm; Tối đa 50 ngày trong năm nếu đã đóng từ 15 đến dưới 30 năm; Tối đa 60 ngày trong năm nếu đã đóng từ đủ 30 năm trở lên" },
      { key: "C", text: "C. Tối đa 30 ngày trong năm nếu đã đóng BHXH bắt buộc dưới 15 năm; Tối đa 60 ngày trong năm nếu đã đóng từ 15 đến dưới 30 năm; Tối đa 80 ngày trong năm nếu đã đóng từ đủ 30 năm trở lên" },
      { key: "D", text: "D. Tối đa 20 ngày trong năm nếu đã đóng BHXH bắt buộc dưới 15 năm; Tối đa 30 ngày trong năm nếu đã đóng từ 15 đến dưới 30 năm; Tối đa 50 ngày trong năm if đã đóng từ đủ 30 năm trở lên" }
    ],
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 18,
    question: "[BHXH] CBCNV nữ ngay sau thời gian hưởng chế độ thai sản, trong khoảng thời gian 30 ngày đầu làm việc mà sức khỏe chưa phục hồi thì sẽ được hưởng chế độ nghỉ dưỡng sức sau sinh như thế nào?",
    options: [
      { key: "A", text: "A. Không được hưởng chế độ này" },
      { key: "B", text: "B. Được nghỉ tối đa 10 ngày với sinh đôi trở lên; tối đa 7 ngày với lao động nữ sinh con phải phẫu thuật và tối đa 5 ngày đối với các trường hợp khác" },
      { key: "C", text: "C. Được nghỉ tối đa 10 ngày với sinh đôi trở lên; tối đa 7 ngày với lao động nữ sinh con phải phẫu thuật và tối đa 5 ngày đối với các trường hợp khác và hưởng tiền dưỡng sức sau sinh = Số ngày nghỉ dưỡng sức * 30% * Mức lương cơ sở" },
      { key: "D", text: "D. Hưởng tiền dưỡng sức sau sinh = Số ngày nghỉ dưỡng sức * 30% * Mức lương cơ sở " }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 19,
    question: "[BHXH] Khi vợ sinh con thứ 2, lao động nam sẽ được nghỉ tối đa bao nhiêu ngày làm việc?",
    options: [
      { key: "A", text: "A. 15 ngày làm việc" },
      { key: "B", text: "B. 10 ngày làm việc" },
      { key: "C", text: "C. 5 ngày làm việc" },
      { key: "D", text: "D. Không được nghỉ" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 20,
    question: "[BHXH] Quy trình thực hiện chế độ bao gồm bao nhiêu bước và đó là những bước nào?",
    options: [
      { key: "A", text: "A. 3 Bước - Tạo đơn xin nghỉ lý do Nghỉ không lương - Gửi giấy tờ về cơ quan BHXH - Cơ quan BHXH phê duyệt và thanh toán" },
      { key: "B", text: "B. 2 Bước - Tạo đơn xin nghỉ lý do Nghỉ không lương - Gửi giấy tờ về cơ quan BHXH" },
      { key: "C", text: "C. 4 Bước - Tạo đơn xin nghỉ lý do Nghỉ không lương - Gửi giấy tờ về Chuyên viên C&B - C&B lập danh sách đề nghị giải quyết - Cơ quan BHXH phê duyệt và thanh toán" },
      { key: "D", text: "D. Chỉ cần làm đơn trên phần mềm" }
    ],
    correctAnswer: "C",
    explanation: ""
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
    range: "0-19",
    title: "👏 Thiếu một chút nữa thôi!",
    description:
      '<span style=\'display:block;text-align:center\'><br />Bạn đã hiểu rõ hơn về các Quy định đào tạo và Chính sách BHXH 2026, nhưng vẫn còn một vài thông tin quan trọng đang chờ bạn khám phá.<br />Đừng ngần ngại thử lại để chinh phục trọn vẹn 20/20 câu hỏi, giúp bản thân tự tin nắm vững mọi quyền lợi chính đáng của mình tại Công ty.<br />Chúc bạn thành công trong lượt xem lại này nhé! 💙<br /></span>',
    buttonText: "THEO DÕI THÔNG TIN CHI TIẾT CHƯƠNG TRÌNH TẠI ĐÂY",
    emoji: "🚀",
  },
  {
    range: "20-20",
    title: "🏆 Quá xuất sắc! Bạn đã chinh phục trọn vẹn 20/20 câu hỏi!",
    description:
      '<span style=\'display:block;text-align:center\'>Tuyệt vời! Bạn đã hoàn toàn nắm vững các Quy định đào tạo và Chính sách Bảo hiểm xã hội 2026 của Công ty rồi đó!<br />Hy vọng những kiến thức thiết thực này sẽ giúp bạn luôn an tâm công tác, chủ động phát triển năng lực và vững bước trên hành trình sự nghiệp sắp tới.✨<br />Chúc bạn luôn gặt hái được nhiều thành công cùng đội ngũ của mình! 💙<br /></span>',
    emoji: "🏆",
  },
];

export function getScoreResult(score: number): ScoreResult {
  if (score <= 19) return scoreResults[0];
  if (score === 20) return scoreResults[1];
  return scoreResults[0];
}
