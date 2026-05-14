import { useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { quizQuestions } from "./data/quizData";
import { QuizQuestion } from "./components/QuizQuestion";
import { QuizResults } from "./components/QuizResults";
import { PersonalIdEntry } from "./components/PersonalIdEntry";
import type { CSSProperties } from "react";

// ── Import cấu hình giao diện (đổi background/tiêu đề tại siteConfig.ts) ──
import { backgroundImage, brandGradient, siteTitle, startButtonText } from "./config/siteConfig";

type Phase = "intro" | "id" | "quiz" | "results";

function FloatingOrb({
  size,
  color,
  style,
}: {
  size: number;
  color: string;
  style: CSSProperties;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background: color,
        filter: "blur(40px)",
        opacity: 0.35,
        ...style,
      }}
      animate={{
        y: [0, -18, 0],
        x: [0, 10, 0],
        scale: [1, 1.06, 1],
      }}
      transition={{
        duration: 6 + Math.random() * 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 3,
      }}
    />
  );
}

export default function App() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(quizQuestions);
  const [userId, setUserId] = useState("");
  const cardRef = useRef<HTMLDivElement>(null);

  const currentQuestion = questions[currentIndex];

  const handleStart = () => {
    setPhase("id");
  };

  const handleIdSubmit = (id: string) => {
    setUserId(id);
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setPhase("quiz");
    setCurrentIndex(0);
    setScore(0);
  };

  const handleNext = (isCorrect: boolean) => {
    const newScore = isCorrect ? score + 1 : score;
    if (currentIndex + 1 >= questions.length) {
      setScore(newScore);
      setPhase("results");

      fetch("/api/save-result", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, score: newScore }),
      }).catch((err) => console.error("Failed to save result to DB", err));
    } else {
      setScore(newScore);
      setCurrentIndex((i) => i + 1);
    }
  };

  const handleRestart = () => {
    setPhase("intro");
    setCurrentIndex(0);
    setScore(0);
    setUserId("");
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{
        // ── ĐỔI BACKGROUND: sửa trong src/app/config/siteConfig.ts ──
        backgroundImage: `url("${backgroundImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Main Card */}
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full mx-4"
        style={{ maxWidth: "850px" }}
      >
        {/* Glow ring behind card */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(147,197,253,0.6), rgba(196,181,253,0.4), rgba(253,230,138,0.3))",
            filter: "blur(18px)",
            transform: "scale(1.03)",
          }}
        />

        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.82)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow:
              "0 24px 64px rgba(99,102,241,0.12), 0 8px 24px rgba(59,130,246,0.1), inset 0 1px 0 rgba(255,255,255,0.9)",
            border: "1.5px solid rgba(255,255,255,0.7)",
          }}
        >
          {/* Top accent stripe */}
          <div
            className="h-1.5 w-full"
            style={{ background: brandGradient }}
          />
          <div className="p-6">
            <div className="mb-6">
              {/* ── TIÊU ĐỀ: sửa trong src/app/config/siteConfig.ts ── */}
              <motion.h1 className="text-2xl font-bold text-center w-full">
                {siteTitle.line1}
                <br />
                {siteTitle.line2}
              </motion.h1>
            </div>

            {/* Divider */}
            <div
              className="w-full h-px mb-6"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #bfdbfe 40%, #c4b5fd 60%, transparent)",
              }}
            />

            {/* Content Area */}
            <AnimatePresence mode="wait">
              {phase === "intro" && (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center text-center gap-6"
                >
                  <div className="max-w-3xl space-y-6">
                    <div className="space-y-4 text-left">
                      <p className="text-lg leading-8 text-slate-700">
                        Chào mừng bạn đến với minigame{" "}
                        <strong>TÌM HIỂU Y-VOICE</strong> 🔍 nằm trong khuôn khổ
                        Hành trình Tuần lễ văn hoá - một hoạt động để cùng hiểu rõ hơn về cơ chế vô cùng thiết thực.
                      </p>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 text-left shadow-sm">
                      <p className="font-semibold text-slate-900 mb-3">
                        Thể lệ tham gia:
                      </p>
                      <ul className="list-disc space-y-2 pl-5 text-slate-700 leading-7">
                        <li>
                          Chọn đáp án bạn cho là chính xác nhất với mỗi câu
                          hỏi, tổng cộng có 10 câu hỏi.
                        </li>
                        <li>
                          Nhân sự trả lời đúng 10/10 sẽ nhận 50 Y Point và
                          được ghi nhận hoàn thành thử thách.
                        </li>
                        <li>
                          Nhân sự có thể tham gia nhiều lần cho đến khi đạt
                          điểm tối đa.
                        </li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-slate-500 uppercase tracking-[0.18em] mb-2">
                        Chúng ta hãy cùng nhau
                      </p>
                      <h2 className="text-2xl text-orange-600 font-semibold text-slate-900">
                        TÌM HIỂU Y-VOICE NHÉEEE!!!
                      </h2>
                    </div>
                  </div>

                  <button
                    onClick={handleStart}
                    className="w-full max-w-md py-4 rounded-xl transition-all duration-200 hover:opacity-90 active:scale-[0.98] mt-1"
                    style={{
                      background: brandGradient,
                      color: "white",
                      fontWeight: 700,
                      fontSize: "1rem",
                      boxShadow: "0 4px 20px rgba(245,158,11,0.4)",
                    }}
                  >
                    {/* ── NÚT BẮT ĐẦU: sửa trong src/app/config/siteConfig.ts ── */}
                    {startButtonText}
                  </button>
                </motion.div>
              )}

              {phase === "id" && <PersonalIdEntry onSubmit={handleIdSubmit} />}

              {phase === "quiz" && currentQuestion && (
                <AnimatePresence mode="wait">
                  <QuizQuestion
                    key={currentQuestion.id}
                    question={currentQuestion}
                    questionNumber={currentIndex + 1}
                    totalQuestions={questions.length}
                    onNext={handleNext}
                  />
                </AnimatePresence>
              )}

              {phase === "results" && (
                <QuizResults
                  key="results"
                  score={score}
                  totalQuestions={questions.length}
                  userId={userId}
                  onRestart={handleRestart}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
