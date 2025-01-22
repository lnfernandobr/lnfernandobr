import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import { LanguageProvider } from "./components/LanguageProvider";
import { LanguageToggle } from "./components/LanguageToggle";

export const metadata = {
  title: "Fernando Lima",
  description:
    "I'm Fernando Lima, a Full Stack Software Engineer with experience in React, Tailwind CSS, Node.js, GraphQL, and more. Currently working on micro-SaaS projects and teaching at codeftw.dev.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full dark" style={{ colorScheme: 'dark' }}>
      <body className="bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>
            <ThemeToggle />
            <LanguageToggle />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
