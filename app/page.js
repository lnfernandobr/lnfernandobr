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
    <main className="min-h-screen py-20 bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <Container>
        <nav className="mb-16">
          <ul className="flex justify-center gap-10">
            {tabs.map(tab => (
              <li key={tab.id}>
                <button 
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative text-[15px] font-medium transition-all duration-300 ${
                    activeTab === tab.id 
                      ? 'text-zinc-900 dark:text-zinc-100' 
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-zinc-900 dark:bg-zinc-100 rounded-full"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="max-w-[680px] mx-auto text-center">
          <div className="mb-12">
            <h1 className="text-[32px] font-semibold text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight">
              Fernando Lima
            </h1>
            <p className="text-[16px] text-zinc-600 dark:text-zinc-400 max-w-[480px] mx-auto leading-relaxed">
              Full Stack Software Engineer & Creator
            </p>
          </div>

          <div className="flex flex-col items-center space-y-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
              <Image
                src="/eu.png"
                alt="Fernando Lima"
                width={128}
                height={128}
                className="relative rounded-full ring-4 ring-zinc-100 dark:ring-zinc-800 shadow-lg hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            
            <div className="w-full">
              {renderContent()}
            </div>

            {activeTab !== 'social' && (
              <div className="pt-8 border-t border-zinc-200 dark:border-zinc-700">
                <SocialIcons />
              </div>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}
