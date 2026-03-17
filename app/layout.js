import { Lora, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const lora = Lora({
  subsets: ['latin'],
  variable: '--serif',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--mono',
  display: 'swap',
});

export const metadata = {
  title: 'Fernando Lima',
  description: 'Fernando Lima — desenvolvedor fullstack e empreendedor. MS.',
};

export const viewport = {
  themeColor: '#141412',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${lora.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
