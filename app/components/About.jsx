'use client'

import { useLanguage } from "./LanguageProvider";
import { translations } from "@/app/lib/translations";

export function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <div className="space-y-10 max-w-2xl mx-auto">
      <div className="space-y-6">
        <h2 className="text-[24px] font-bold text-zinc-900 dark:text-zinc-100 text-center mb-8">
          Quem sou eu
        </h2>
        
        <div className="space-y-6 text-center">
          <div className="text-[16px] leading-relaxed text-zinc-600 dark:text-zinc-400 whitespace-pre-line">
            {t.intro}
          </div>
        </div>
      </div>

    </div>
  );
} 