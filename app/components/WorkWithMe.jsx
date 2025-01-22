'use client'

import { useLanguage } from './LanguageProvider';
import { translations } from '@/app/lib/translations';

export function WorkWithMe() {
  const { language } = useLanguage();
  const t = translations[language].workWithMe;

  const mailtoLink = `mailto:lnfernandobr@gmail.com?subject=${encodeURIComponent(t.emailSubject)}&body=${encodeURIComponent(t.emailBody)}`;

  return (
    <div className="space-y-8 text-center">
      <h2 className="text-[18px] font-medium text-zinc-900 dark:text-zinc-100 mb-6">
        {t.title}
      </h2>

      <div className="space-y-6 max-w-[540px] mx-auto">
        <p className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
          {t.description}
        </p>

        <a
          href={mailtoLink}
          className="inline-block px-6 py-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
        >
          lnfernandobr@gmail.com
        </a>

        <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
          <p className="text-[14px] text-zinc-500 dark:text-zinc-400">
            {t.linkedinText}{" "}
            <a
              href="https://www.linkedin.com/in/lnfernandobr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors duration-200"
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