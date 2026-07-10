import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { getScoreResult } from "../data/quizData";
import { ExternalLink, RotateCcw, Download } from "lucide-react";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  userId: string;
  onRestart: () => void;
}

export function QuizResults({ score, totalQuestions, userId, onRestart }: QuizResultsProps) {
  const result = getScoreResult(score);
  const isPerfect = score === totalQuestions;
  const confettiFired = useRef(false);

  useEffect(() => {
    if (isPerfect && !confettiFired.current) {
      confettiFired.current = true;
      const duration = 3000;
      const end = Date.now() + duration;
      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ["#f59e0b", "#fb923c", "#60a5fa", "#34d399"],
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ["#f59e0b", "#fb923c", "#60a5fa", "#34d399"],
        });
        if (Date.now() < end) requestAnimationFrame(frame);
      };
      frame();
    }
  }, [isPerfect]);

  const scorePercentage = (score / totalQuestions) * 100;

  const getScoreColor = () => {
    if (score <= 3) return { stroke: "#f87171", text: "#ef4444" };
    if (score <= 6) return { stroke: "#fb923c", text: "#f97316" };
    if (score <= 9) return { stroke: "#60a5fa", text: "#3b82f6" };
    return { stroke: "#f59e0b", text: "#f59e0b" };
  };

  const colors = getScoreColor();
  const circumference = 2 * Math.PI * 52;
  const dashOffset = circumference - (scorePercentage / 100) * circumference;
  // ──────────────────────────────────────────────────────────────────────────
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full flex flex-col items-center"
    >
      {/* Score Circle */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6, type: "spring", stiffness: 200 }}
        className="relative mb-6"
      >
        <svg width="130" height="130" viewBox="0 0 130 130">
          <circle cx="65" cy="65" r="52" fill="none" stroke="#dbeafe" strokeWidth="10" />
          <motion.circle
            cx="65"
            cy="65"
            r="52"
            fill="none"
            stroke={colors.stroke}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: dashOffset }}
            transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
            transform="rotate(-90 65 65)"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span style={{ fontSize: "2rem", fontWeight: 800, color: colors.text, lineHeight: 1 }}>
            {score}
          </span>
          <span style={{ fontSize: "0.85rem", color: "#94a3b8", fontWeight: 600 }}>
            /{totalQuestions}
          </span>
        </div>
      </motion.div>

      {/* User ID badge */}
      {userId && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full mb-4"
          style={{
            background: "linear-gradient(135deg, #fef3c7, #fffbeb)",
            border: "1px solid #fde68a",
          }}
        >
          <span className="text-xs text-amber-400" style={{ fontWeight: 500 }}>Học viên:</span>
          <span className="text-amber-600" style={{ fontWeight: 800, fontSize: "0.9rem" }}>
            {userId}
          </span>
        </motion.div>
      )}

      {/* Emoji + Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.45 }}
        className="text-center mb-4"
      >
        <div style={{ fontSize: "2.2rem", marginBottom: "8px" }}>{result.emoji}</div>
        <h2 className="text-gray-800" style={{ fontSize: "1.2rem", fontWeight: 800, lineHeight: 1.3 }}>
          {result.title}
        </h2>
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="w-full h-px mb-5"
        style={{ background: "linear-gradient(90deg, transparent, #bfdbfe, transparent)" }}
      />

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.45 }}
        className="mb-7 w-full"
      >
        {result.description.split("\n\n").map((para, i) => (
          <p
            key={i}
            className="text-gray-600 leading-relaxed text-sm mb-3 last:mb-0 text-justify"
            dangerouslySetInnerHTML={{
              __html: para
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/"([^"]+)"/g, "<em>&ldquo;$1&rdquo;</em>"),
            }}
          />
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        className="w-full mb-3"
      >
        <a
          href="https://www.gapowork.vn/posts/671612519801342976"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, #f59e0b, #fb923c)",
            color: "white",
            fontWeight: 700,
            fontSize: "1rem",
            boxShadow: "0 4px 20px rgba(245, s158, 11, 0.4)",
            display: "flex",
            textDecoration: "none",
          }}
        >
          {result.buttonText}
          <ExternalLink className="w-4 h-4" />
        </a>
      </motion.div>

      {/* Restart */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.95, duration: 0.4 }}
        onClick={onRestart}
        className="flex items-center gap-1.5 text-blue-400 hover:text-blue-600 transition-colors text-sm"
        style={{ fontWeight: 500 }}
      >
        <RotateCcw className="w-3.5 h-3.5" />
        Làm lại bài kiểm tra
      </motion.button>
    </motion.div>
  );
}
