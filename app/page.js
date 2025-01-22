'use client'

import { Container } from "@/app/components/Container";
import { Projects } from "@/app/components/Projects";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Social } from "@/app/components/Social";
import { WorkWithMe } from "@/app/components/WorkWithMe";
import { useLanguage } from "./components/LanguageProvider";
import { translations } from "./lib/translations";
import { About } from "@/app/components/About";
import { SocialIcons } from "@/app/components/SocialIcons";

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');
  const { language } = useLanguage();
  const t = translations[language].nav;

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'social':
        return <Social />;
      case 'work':
        return <WorkWithMe />;
      default:
        return <About />;
    }
  };

  const tabs = [
    { id: 'about', label: t.about },
    { id: 'projects', label: t.projects },
    { id: 'social', label: t.social },
    { id: 'work', label: t.workWithMe }
  ];

  return (
    <main className="min-h-screen py-16">
      <Container>
        <nav>
          <ul className="flex justify-center gap-8">
            {tabs.map(tab => (
              <li key={tab.id}>
                <button 
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-[14px] ${
                    activeTab === tab.id 
                      ? 'text-zinc-900 dark:text-zinc-100' 
                      : 'text-zinc-500 dark:text-zinc-400'
                  } hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors duration-200`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="mt-24 max-w-[640px] mx-auto text-center">
          <h1 className="text-[28px] font-normal text-zinc-900 dark:text-zinc-100 mb-8">
            Fernando Lima
          </h1>

          <div className="flex flex-col items-center space-y-8">
            <Image
              src="/eu.png"
              alt="Fernando Lima"
              width={112}
              height={112}
              className="rounded-full ring-2 ring-zinc-100 dark:ring-zinc-800"
              priority
            />
            
            {renderContent()}

            {activeTab !== 'social' && <SocialIcons />}
          </div>
        </div>
      </Container>
    </main>
  );
}
