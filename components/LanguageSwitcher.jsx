"use client";

import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <button
        onClick={() => setLang("en")}
        style={{
          padding: "8px 10px",
          borderRadius: "8px",
          border: "1px solid rgba(255,255,255,0.15)",
          background: lang === "en" ? "#fca311" : "transparent",
          color: "white",
          cursor: "pointer",
        }}
      >
        EN
      </button>

      <button
        onClick={() => setLang("ku")}
        style={{
          padding: "8px 10px",
          borderRadius: "8px",
          border: "1px solid rgba(255,255,255,0.15)",
          background: lang === "ku" ? "#fca311" : "transparent",
          color: "white",
          cursor: "pointer",
        }}
      >
        KU
      </button>

      <button
        onClick={() => setLang("ar")}
        style={{
          padding: "8px 10px",
          borderRadius: "8px",
          border: "1px solid rgba(255,255,255,0.15)",
          background: lang === "ar" ? "#fca311" : "transparent",
          color: "white",
          cursor: "pointer",
        }}
      >
        AR
      </button>
    </div>
  );
}
