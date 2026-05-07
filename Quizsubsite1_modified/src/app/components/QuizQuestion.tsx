import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, XCircle, Lightbulb, ChevronRight } from "lucide-react";
import { Question } from "../data/quizData";

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onNext: (isCorrect: boolean) => void;
}

export function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  onNext,
}: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    setSelectedAnswer(null);
    setIsRevealed(false);
  }, [question.id]);

  const handleSelect = (key: string) => {
    if (isRevealed) return;
    setSelectedAnswer(key);
    setIsRevealed(true);
  };

  const handleNext = () => {
    onNext(selectedAnswer === question.correctAnswer);
  };

  const getOptionStyle = (key: string) => {
    if (!isRevealed) {
      return selectedAnswer === key
        ? "border-blue-400 bg-blue-50 shadow-md"
        : "border-blue-100 bg-white hover:border-blue-300 hover:bg-blue-50/60 hover:shadow-md cursor-pointer";
    }
    if (key === question.correctAnswer) {
      return "border-emerald-400 bg-emerald-50 shadow-md";
    }
    if (key === selectedAnswer && key !== question.correctAnswer) {
      return "border-rose-400 bg-rose-50 shadow-md";
    }
    return "border-blue-100 bg-white/60 opacity-60";
  };

  const getLabelStyle = (key: string) => {
    if (!isRevealed) {
      return selectedAnswer === key
        ? "bg-blue-500 text-white"
        : "bg-blue-100 text-blue-600";
    }
    if (key === question.correctAnswer) return "bg-emerald-500 text-white";
    if (key === selectedAnswer && key !== question.correctAnswer)
      return "bg-rose-500 text-white";
    return "bg-blue-100 text-blue-400";
  };

  const progress = ((questionNumber - 1) / totalQuestions) * 100;

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="w-full"
    >
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "#f59e0b", fontWeight: 700 }}
          >
            Câu hỏi {questionNumber}/{totalQuestions}
          </span>
          <span className="text-xs text-blue-400 font-medium">
            {Math.round(progress)}% hoàn thành
          </span>
        </div>
        <div className="w-full bg-blue-100 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-2 rounded-full"
            style={{
              background: "linear-gradient(90deg, #f59e0b, #fb923c)",
            }}
            initial={{ width: `${progress}%` }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>

 {/* Question */}
<div className="mb-6">
  <h2 className="text-gray-800 leading-relaxed" style={{ fontSize: "1.08rem", fontWeight: 700 }}>
    {question.question}
  </h2>
</div>

{/* Question Image */}      
{question.image && (
  <div className="mb-6">
    <img
      src={question.image}
      alt="Question illustration"
      className="w-full h-auto rounded-xl"
      style={{
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
      }}
    />
  </div>
)}

{/* Options */}
      <div className="flex flex-col gap-3 mb-5">
        {question.options.map((option) => (
          <motion.button
            key={option.key}
            onClick={() => handleSelect(option.key)}
            disabled={isRevealed}
            whileHover={!isRevealed ? { scale: 1.012 } : {}}
            whileTap={!isRevealed ? { scale: 0.985 } : {}}
            className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all duration-200 ${getOptionStyle(option.key)}`}
          >
            <span
              className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-all duration-200 ${getLabelStyle(option.key)}`}
              style={{ fontWeight: 700 }}
            >
              {option.key}
            </span>
            <span className="text-gray-700 text-sm leading-relaxed flex-1">
              {option.text}
            </span>
            {isRevealed && option.key === question.correctAnswer && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              </motion.div>
            )}
            {isRevealed &&
              option.key === selectedAnswer &&
              option.key !== question.correctAnswer && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                </motion.div>
              )}
          </motion.button>
        ))}
      </div>

      {/* Explanation */}
      <AnimatePresence>
        {isRevealed && (
          <motion.div
            initial={{ opacity: 0, y: 12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-5 overflow-hidden"
          >
            <div
              className="rounded-xl p-4 border-l-4"
              style={{
                background:
                  "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
                borderLeftColor: "#f59e0b",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#f59e0b" }}
                />
                <span
                  className="text-sm"
                  style={{ color: "#f59e0b", fontWeight: 700 }}
                >
                  {selectedAnswer === question.correctAnswer
                    ? "Chính xác!"
                    : "Chưa chính xác!"}
                </span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {question.explanation}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Next Button */}
      <AnimatePresence>
        {isRevealed && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <button
              onClick={handleNext}
              className="w-full py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #fb923c)",
                color: "white",
                fontWeight: 700,
                fontSize: "1rem",
                boxShadow: "0 4px 20px rgba(245, 158, 11, 0.4)",
              }}
            >
              {questionNumber === totalQuestions ? "Xem kết quả" : "Tiếp theo"}
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
