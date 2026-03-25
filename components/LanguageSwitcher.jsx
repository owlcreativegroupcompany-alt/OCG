"use client";

import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <button onClick={() => setLang("en")} style={{ padding: "8px 12px", cursor: "pointer" }}>
        EN
      </button>
      <button onClick={() => setLang("ku")} style={{ padding: "8px 12px", cursor: "pointer" }}>
        KU
      </button>
      <button onClick={() => setLang("ar")} style={{ padding: "8px 12px", cursor: "pointer" }}>
        AR
      </button>
    </div>
  );
}
