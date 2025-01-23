'use client'

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import { translations } from '@/app/lib/translations';

export function Projects() {
  const { language } = useLanguage();
  const t = translations[language].projects;

  const projects = [
    {
      ...t.mapMoments,
      link: 'https://lp.mapmoments.pro/',
      tech: ['MeteorJS', 'Node.js', 'Quave Cloud', 'AI Integration']
    },
    {
      ...t.estudeDev,
      link: 'https://www.youtube.com/@estudedev',
      tech: ['React', 'Next.js', 'Node.js', 'Teaching']
    },
    {
      ...t.diySmartHome,
      tech: ['IoT', 'Arduino', 'Node.js']
    }
  ];

  return (
    <div className="space-y-8 text-center">
      <h2 className="text-[18px] font-medium text-zinc-900 dark:text-zinc-100 mb-6">
        {t.title}
      </h2>

      <div className="space-y-6">
        {projects.map((project) => (
          <div 
            key={project.name}
            className="border border-zinc-100 dark:border-zinc-800 rounded-lg p-6 text-center"
          >
            <div className="flex justify-center items-center gap-2 mb-2 flex-wrap">
              <h3 className="text-[16px] font-medium text-zinc-900 dark:text-zinc-100">
                {project.name}
              </h3>
              {project.status && (
                <span className={`text-[12px] px-2 py-1 rounded-full ${
                  project.status === t.mapMoments.status
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20'
                    : 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                }`}>
                  {project.status}
                </span>
              )}
            </div>
            <p className="text-[14px] text-zinc-600 dark:text-zinc-400 mb-4 max-w-[540px] mx-auto">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {project.tech.map((tech) => (
                <span 
                  key={tech}
                  className="text-[12px] text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors duration-200 inline-flex items-center justify-center"
              >
                {t.visitProject} <span className="ml-1">→</span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 