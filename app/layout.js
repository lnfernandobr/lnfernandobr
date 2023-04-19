import "./globals.css";

export const metadata = {
  title: "Fernando Lima - Personal developer site",
  description:
    "I'm Fernando Lima, and I live in a small town in Brazil. I work as a full stack developer on a daily basis, with experience in React, Tailwind CSS, Node.js, GraphQL, and more. In my spare time, I'm either working on my microsaas project or being an instructor at codeftw.dev. Every day becoming better! ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div
          className="flex h-full flex-col bg-zinc-50 dark:bg-black "
          style={{ height: "100vh" }}
        >
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-4xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
