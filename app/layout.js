import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./components/LanguageProvider";
import { Header } from "./components/Header";

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
            <Header />
            <main className="pt-16">
              {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
