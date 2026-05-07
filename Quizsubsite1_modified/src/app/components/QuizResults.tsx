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

  // ─── Share / Download image ─────────────────────────────────────────────────
  const downloadShareImage = () => {
    const W = 720;
    const H = 1280;
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Helper: wrap text into lines
    const wrapLines = (text: string, maxWidth: number, font: string): string[] => {
      ctx.font = font;
      const words = text.split(" ");
      const lines: string[] = [];
      let line = "";
      for (const word of words) {
        const test = line + word + " ";
        if (ctx.measureText(test).width > maxWidth && line) {
          lines.push(line.trim());
          line = word + " ";
        } else {
          line = test;
        }
      }
      if (line.trim()) lines.push(line.trim());
      return lines;
    };

    // ── 1. Background ───────────────────────────────────────────────────────
    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, "#dbeafe");
    bg.addColorStop(0.38, "#e0f2fe");
    bg.addColorStop(0.7, "#ede9fe");
    bg.addColorStop(1, "#dbeafe");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // Decorative orbs
    const orb = (cx: number, cy: number, r: number, color: string) => {
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      g.addColorStop(0, color);
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
    };
    orb(60, 80, 310, "rgba(147,197,253,0.5)");
    orb(W, H, 360, "rgba(196,181,253,0.52)");
    orb(W - 60, 260, 210, "rgba(253,230,138,0.38)");
    orb(60, H - 210, 190, "rgba(110,231,183,0.38)");

    // ── 2. Card ─────────────────────────────────────────────────────────────
    const CX = W / 2;
    const CARD_X = 40, CARD_Y = 80, CARD_W = 640, RAD = 32;

    // ── 3. Content layout (measure pass) ───────────────────────────────────
    const scoreCol =
      score <= 3 ? "#f87171" : score <= 6 ? "#fb923c" : score <= 9 ? "#60a5fa" : "#f59e0b";

    const rawDesc = result.description
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<[^>]+>/g, "")
      .split("\n\n")[0]
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/"([^"]+)"/g, "\u201c$1\u201d");

    const descFont = "400 17px Montserrat";
    const descLines = wrapLines(rawDesc, 530, descFont);
    const showN = Math.min(descLines.length, 5);

    const titleFont = "800 26px Montserrat";
    const titleLines = wrapLines(result.title, 310, titleFont);

    // Calculate dynamic CARD_H
    const CONTENT_TOP = CARD_Y + 40;   // padding from card top
    let measuredH = 0;
    measuredH += 24;                    // brand tag
    measuredH += 46;                    // brand title
    measuredH += 50;                    // badge
    measuredH += 28;                    // "YODYer"
    measuredH += 60;                    // user ID
    measuredH += 40;                    // divider1 + gap
    // Score row: circle (200px diameter) vs title lines
    const SCORE_ROW_H = Math.max(200, titleLines.length * 40 + 80);
    measuredH += SCORE_ROW_H;
    measuredH += 32;                    // gap after score row
    measuredH += 24;                    // divider2 + gap
    // Desc box: padding 30 top + 30 bottom + lines
    measuredH += 30 + showN * 30 + (descLines.length > showN ? 30 : 0) + 30;
    measuredH += 24;                    // gap
    measuredH += 80;                    // CTA button
    measuredH += 100;                   // footer
    const CARD_H = measuredH + 20;

    // ── Draw card background ────────────────────────────────────────────────
    ctx.save();
    ctx.shadowColor = "rgba(99,102,241,0.22)";
    ctx.shadowBlur = 52;
    ctx.shadowOffsetY = 18;
    ctx.beginPath();
    (ctx as any).roundRect(CARD_X, CARD_Y, CARD_W, CARD_H, RAD);
    ctx.fillStyle = "rgba(255,255,255,0.92)";
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    (ctx as any).roundRect(CARD_X, CARD_Y, CARD_W, CARD_H, RAD);
    ctx.strokeStyle = "rgba(255,255,255,0.8)";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();

    // Top stripe (5px, matches new design)
    ctx.save();
    ctx.beginPath();
    (ctx as any).roundRect(CARD_X, CARD_Y, CARD_W, 8, [RAD, RAD, 0, 0]);
    const stripe = ctx.createLinearGradient(CARD_X, 0, CARD_X + CARD_W, 0);
    stripe.addColorStop(0, "#f59e0b");
    stripe.addColorStop(0.33, "#fb923c");
    stripe.addColorStop(0.66, "#60a5fa");
    stripe.addColorStop(1, "#c4b5fd");
    ctx.fillStyle = stripe;
    ctx.fill();
    ctx.restore();

    // ── 4. Draw content ─────────────────────────────────────────────────────
    ctx.textAlign = "center";
    let cy = CONTENT_TOP + 28;

    // Brand tag
    ctx.save();
    ctx.font = "700 13px Montserrat";
    ctx.fillStyle = "#328bb4";
    ctx.letterSpacing = "2px";
    ctx.fillText("HÀNH TRÌNH TUẦN LỄ VĂN HÓA", CX, cy);
    cy += 50;

    // Brand title gradient
    const brandGrad = ctx.createLinearGradient(CX - 160, 0, CX + 160, 0);
    brandGrad.addColorStop(0, "#f59e0b");
    brandGrad.addColorStop(1, "#fb923c");
    ctx.font = "700 30px Montserrat";
    ctx.fillStyle = brandGrad;
    ctx.fillText("SĂN DẤU YODY", CX, cy);
    cy += 30;
    ctx.restore();

    // Badge pill
    ctx.save();
    const BW = 420, BH = 38;
    const BX = CX - BW / 2;
    ctx.beginPath();
    (ctx as any).roundRect(BX, cy, BW, BH, 19);
    const bGrad = ctx.createLinearGradient(BX, 0, BX + BW, 0);
    bGrad.addColorStop(0, "#dbeafe");
    bGrad.addColorStop(1, "#ede9fe");
    ctx.fillStyle = bGrad;
    ctx.fill();
    ctx.font = "700 12px Montserrat";
    ctx.fillStyle = "#6366f1";
    ctx.fillText("KẾT QUẢ HÀNH TRÌNH SĂN DẤU YODY", CX, cy + 25);
    cy += 56;
    ctx.restore();

    // User label + ID
    ctx.save();
    ctx.font = "500 20px Montserrat";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("YODYer", CX, cy);
    cy += 35;

    const idGrad = ctx.createLinearGradient(CX - 120, 0, CX + 120, 0);
    idGrad.addColorStop(0, "#f59e0b");
    idGrad.addColorStop(1, "#fb923c");
    ctx.font = "900 40px Montserrat";
    ctx.fillStyle = idGrad;
    ctx.fillText(userId || "YD---", CX, cy + 48);
    cy += 72;
    ctx.restore();

    // Divider 1
    ctx.save();
    const dg1 = ctx.createLinearGradient(120, 0, 600, 0);
    dg1.addColorStop(0, "rgba(196,181,253,0)");
    dg1.addColorStop(0.5, "rgba(196,181,253,0.8)");
    dg1.addColorStop(1, "rgba(196,181,253,0)");
    ctx.strokeStyle = dg1;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(120, cy);
    ctx.lineTo(600, cy);
    ctx.stroke();
    cy += 28;
    ctx.restore();

    // ── Score row: circle LEFT + (emoji + title) RIGHT ──────────────────────
    const ROW_TOP = cy;
    const CR = 90;           // circle radius
    const CIRCLE_CX = CARD_X + 60 + CR;   // circle center x
    const CIRCLE_CY = ROW_TOP + CR + 8;

    // Background ring
    ctx.save();
    ctx.beginPath();
    ctx.arc(CIRCLE_CX, CIRCLE_CY, CR, 0, Math.PI * 2);
    ctx.strokeStyle = "#dbeafe";
    ctx.lineWidth = 14;
    ctx.stroke();

    // Score arc
    const pct = score / totalQuestions;
    ctx.beginPath();
    ctx.arc(CIRCLE_CX, CIRCLE_CY, CR, -Math.PI / 2, -Math.PI / 2 + pct * 2 * Math.PI);
    ctx.strokeStyle = scoreCol;
    ctx.lineWidth = 14;
    ctx.lineCap = "round";
    ctx.stroke();

    // Score number
    ctx.textAlign = "center";
    ctx.font = `700 54px Montserrat`;
    ctx.fillStyle = scoreCol;
    ctx.fillText(String(score), CIRCLE_CX, CIRCLE_CY + 15);

    // Total
    ctx.font = "600 22px Montserrat";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText(`/${totalQuestions}`, CIRCLE_CX, CIRCLE_CY + 40);
    ctx.restore();

    // Right side: score label + emoji + title
    const RIGHT_X = CIRCLE_CX + CR + 32;   // left edge of right column
    const RIGHT_CX = (RIGHT_X + CARD_X + CARD_W - 40) / 2;
    const RIGHT_MAX_W = CARD_X + CARD_W - 40 - RIGHT_X;

    ctx.save();
    ctx.textAlign = "center";

    // Result title (wrapped)
    ctx.font = titleFont;
    ctx.fillStyle = "#1e293b";
    let titleCY = ROW_TOP + 70;
    for (const line of wrapLines(result.title, RIGHT_MAX_W - 16, titleFont)) {
      ctx.fillText(line, RIGHT_CX, titleCY);
      titleCY += 38;
    }
    ctx.restore();

    cy = Math.max(CIRCLE_CY + CR + 28, titleCY + 12);

    // Divider 2
    ctx.save();
    const dg2 = ctx.createLinearGradient(120, 0, 600, 0);
    dg2.addColorStop(0, "rgba(191,219,254,0)");
    dg2.addColorStop(0.5, "rgba(191,219,254,0.8)");
    dg2.addColorStop(1, "rgba(191,219,254,0)");
    ctx.strokeStyle = dg2;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(120, cy);
    ctx.lineTo(600, cy);
    ctx.stroke();
    cy += 24;
    ctx.restore();

    // ── Description box (framed) ─────────────────────────────────────────────
    const DESC_PAD_X = 28;
    const DESC_X = CARD_X + DESC_PAD_X;
    const DESC_W = CARD_W - DESC_PAD_X * 2;
    const LINE_H = 30;
    const extraLine = descLines.length > showN ? 1 : 0;
    const DESC_H = 28 + showN * LINE_H + extraLine * LINE_H + 24;

    ctx.save();
    // Box fill
    ctx.beginPath();
    (ctx as any).roundRect(DESC_X, cy, DESC_W, DESC_H, 16);
    const descBg = ctx.createLinearGradient(DESC_X, cy, DESC_X + DESC_W, cy + DESC_H);
    descBg.addColorStop(0, "#f8faff");
    descBg.addColorStop(1, "#faf7ff");
    ctx.fillStyle = descBg;
    ctx.fill();
    // Box border
    ctx.beginPath();
    (ctx as any).roundRect(DESC_X, cy, DESC_W, DESC_H, 16);
    ctx.strokeStyle = "rgba(196,181,253,0.35)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Text inside box
    ctx.font = descFont;
    ctx.fillStyle = "#475569";
    ctx.textAlign = "center";
    let descCY = cy + 34;
    for (let i = 0; i < showN; i++) {
      ctx.fillText(descLines[i], CX, descCY);
      descCY += LINE_H;
    }
    if (descLines.length > showN) {
      ctx.fillStyle = "#94a3b8";
      ctx.fillText("…", CX, descCY);
    }
    cy += DESC_H + 24;
    ctx.restore();

    // ── CTA Button ───────────────────────────────────────────────────────────
    ctx.save();
    const BNW = 560, BNH = 74;
    const BNX = CX - BNW / 2;
    ctx.beginPath();
    (ctx as any).roundRect(BNX, cy, BNW, BNH, 18);
    const bnGrad = ctx.createLinearGradient(BNX, 0, BNX + BNW, 0);
    bnGrad.addColorStop(0, "#f59e0b");
    bnGrad.addColorStop(1, "#fb923c");
    ctx.fillStyle = bnGrad;
    ctx.fill();
    ctx.font = "800 17px Montserrat";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("🎉  " + result.buttonText, CX, cy + 46);
    cy += BNH + 28;
    ctx.restore();

    // ── Footer ───────────────────────────────────────────────────────────────
    ctx.save();
    const fg = ctx.createLinearGradient(120, 0, 600, 0);
    fg.addColorStop(0, "rgba(191,219,254,0)");
    fg.addColorStop(0.5, "rgba(191,219,254,0.7)");
    fg.addColorStop(1, "rgba(191,219,254,0)");
    ctx.strokeStyle = fg;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(120, cy);
    ctx.lineTo(600, cy);
    ctx.stroke();
    cy += 28;

    ctx.font = "600 15px Montserrat";
    ctx.fillStyle = "#94a3b8";
    ctx.textAlign = "center";
    ctx.fillText("Chúc mừng sinh nhật YODY tuổi 12!! 🎂", CX, cy);
    cy += 24;

    ctx.font = "400 12px Montserrat";
    ctx.fillStyle = "#cbd5e1";
    ctx.fillText(new Date().toLocaleDateString("vi-VN"), CX, cy);
    ctx.restore();

    // Trigger download
    const link = document.createElement("a");
    link.download = `ket-qua-${userId || "YD"}sandauyody.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };
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
          href="https://dongthoigian.yody.io"
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

      {/* Share / Download button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.82, duration: 0.4 }}
        className="w-full mb-5"
      >
        <button
          onClick={downloadShareImage}
          className="w-full py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          style={{
            background: "rgba(255,255,255,0.7)",
            border: "1.5px solid #bfdbfe",
            color: "#6366f1",
            fontWeight: 700,
            fontSize: "0.95rem",
            boxShadow: "0 2px 12px rgba(99,102,241,0.1)",
          }}
        >
          <Download className="w-4 h-4" />
          Tải ảnh kết quả (9:16)
        </button>
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
