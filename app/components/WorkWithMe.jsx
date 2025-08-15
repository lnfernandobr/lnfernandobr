'use client'

import { useLanguage } from './LanguageProvider';
import { translations } from '@/app/lib/translations';

export function WorkWithMe() {
  const { language } = useLanguage();
  const t = translations[language].workWithMe;

  return (
    <div className="space-y-8 text-center">
      <h2 className="text-[18px] font-semibold text-zinc-900 dark:text-zinc-100 mb-8">
        {t.title}
      </h2>

      <div className="space-y-8 max-w-2xl mx-auto">
        <p className="text-[16px] leading-relaxed text-zinc-600 dark:text-zinc-400">
          {t.description}
        </p>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-700">
          <p className="text-[15px] text-zinc-500 dark:text-zinc-400">
            {t.linkedinText}{" "}
            <a
              href="https://www.linkedin.com/in/lnfernandobr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors duration-200 font-medium underline decoration-zinc-300 dark:decoration-zinc-600 underline-offset-2 hover:decoration-zinc-500 dark:hover:decoration-zinc-400"
            >
              LinkedIn
            </a>
            {" "}{t.forInquiries}
          </p>
        </div>
      </div>
    </div>
  );
} 