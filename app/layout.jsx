import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

export const metadata = {
  title: "OCG — Owl Creative Group",
  description: "Premium creative advertising agency website for Owl Creative Group.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
