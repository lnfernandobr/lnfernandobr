'use client'

import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm z-50">
      <LanguageToggle />
      <ThemeToggle />
    </header>
  );
} 