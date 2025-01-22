'use client'

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/app/lib/translations";

export function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <>
      <div className="space-y-8">
        <div className="space-y-6 text-center">
          <p className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-[540px] mx-auto">
            {t.intro}
          </p>

          <div className="space-y-4">
            <h2 className="text-[18px] font-medium text-zinc-900 dark:text-zinc-100">
              {t.whatIDo.title}
            </h2>
            <p className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-[540px] mx-auto">
              {t.whatIDo.content}{" "}
              <Link
                href="https://www.youtube.com/@estudedev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors duration-200"
              >
                EstudeDev
              </Link>.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-[18px] font-medium text-zinc-900 dark:text-zinc-100">
              {t.techStack.title}
            </h2>
            <ul className="grid grid-cols-2 gap-2 text-[14px] text-zinc-600 dark:text-zinc-400 max-w-[400px] mx-auto">
              <li>• React & Next.js</li>
              <li>• Node.js</li>
              <li>• TypeScript</li>
              <li>• GraphQL</li>
              <li>• Tailwind CSS</li>
              <li>• PostgreSQL / MongoDB</li>
              <li>• AWS</li>
              <li>• Meteor</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-[18px] font-medium text-zinc-900 dark:text-zinc-100">
              {t.beyondCode.title}
            </h2>
            <p className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-[540px] mx-auto">
              {t.beyondCode.content}
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 