import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface PersonalIdEntryProps {
  onSubmit: (userId: string) => void;
}

export function PersonalIdEntry({ onSubmit }: PersonalIdEntryProps) {
  const [idNumber, setIdNumber] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!idNumber.trim()) {
      setError("Vui lòng nhập mã YD của bạn");
      return;
    }
    onSubmit(`${idNumber.trim()}`);
  };

  return (
    <motion.div
      key="id-entry"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center text-center gap-5"
    >
      {/* Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4, type: "spring" }}
        className="w-18 h-18 rounded-full flex items-center justify-center text-4xl"
        style={{
          background: "linear-gradient(135deg, #dbeafe, #ede9fe)",
          boxShadow: "0 8px 24px rgba(99,102,241,0.15)",
          width: "72px",
          height: "72px",
        }}
      >
        🪪
      </motion.div>

      {/* Heading */}
      <div>
        <h2
          className="text-gray-800 mb-1"
          style={{ fontSize: "1.15rem", fontWeight: 800 }}
        >
          Nhập mã YD của bạn
        </h2>
        <p className="text-gray-400 text-sm leading-snug">
        </p>
      </div>

      {/* Input row */}
      <div className="w-full">
        <div
          className="flex items-stretch rounded-xl overflow-hidden"
          style={{
            border: error ? "1.5px solid #f87171" : "1.5px solid #bfdbfe",
            background: "rgba(255,255,255,0.95)",
            boxShadow: "0 2px 12px rgba(99,102,241,0.08)",
            transition: "border-color 0.2s",
          }}
        >
          {/* Number input */}
          <input
            type="text"
            value={idNumber}
            onChange={(e) => {
              setIdNumber(e.target.value);
              setError("");
            }}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="Nhập mã YD của bạn…"
            className="flex-1 px-4 py-3.5 outline-none bg-transparent text-gray-700 placeholder-gray-300"
            style={{ fontSize: "1rem", fontWeight: 600 }}
            autoFocus
          />
        </div>

        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-xs mt-1.5 text-left"
          >
            {error}
          </motion.p>
        )}
      </div>

      {/* Preview badge */}
      {idNumber.trim() && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full"
          style={{
            background: "linear-gradient(135deg, #fef3c7, #fffbeb)",
            border: "1px solid #fde68a",
          }}
        >
          <span className="text-xs text-amber-500" style={{ fontWeight: 600 }}>
            Mã của bạn:
          </span>
          <span
            className="text-amber-600"
            style={{ fontWeight: 800, fontSize: "0.95rem" }}
          >
          {idNumber.trim()}
          </span>
        </motion.div>
      )}

      {/* Submit button */}
      <button
        onClick={handleSubmit}
        className="w-full py-4 rounded-xl transition-all duration-200 hover:opacity-90 active:scale-[0.98] flex items-center justify-center gap-2"
        style={{
          background: "linear-gradient(135deg, #f59e0b, #fb923c)",
          color: "white",
          fontWeight: 700,
          fontSize: "1rem",
          boxShadow: "0 4px 20px rgba(245,158,11,0.4)",
        }}
      >
        Bắt đầu tìm hiểu thôiii!!
        <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
}
