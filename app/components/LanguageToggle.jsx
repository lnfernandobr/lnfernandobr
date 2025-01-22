'use client'

import { useLanguage } from './LanguageProvider';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-5 left-5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm transition-colors duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-700"
    >
      {language === 'en' ? '🇧🇷 PT' : '🇺🇸 EN'}
    </button>
  );
} 