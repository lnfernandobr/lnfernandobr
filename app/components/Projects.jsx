'use client'

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import { translations } from '@/app/lib/translations';

export function Projects() {
  const { language } = useLanguage();
  const t = translations[language].projects;

  const projects = [
    {
      ...t.vocaliz,
      link: 'https://vocaliz.pro/',
      tech: ['AI/ML', 'React', 'Node.js', 'Audio Processing']
    },
    {
      ...t.mapMoments,
      link: 'https://lp.mapmoments.pro/',
      tech: ['MeteorJS', 'Node.js', 'Quave Cloud', 'AI Integration']
    },
    {
      ...t.fazedorismo,
      link: 'http://fazedorismo.com/',
      tech: ['Next.js', 'IoT', 'Arduino', 'DIY']
    },
    {
      ...t.estudeDev,
      link: 'https://www.youtube.com/@estudedev',
      tech: ['React', 'Next.js', 'Teaching', 'Content']
    },
    {
      ...t.diySmartHome,
      tech: ['IoT', 'Arduino', 'Node.js', 'Automation']
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case t.vocaliz.status:
        return 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20';
      case t.mapMoments.status:
        return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20';
      case t.fazedorismo.status:
        return 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20';
      case t.estudeDev.status:
        return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20';
      default:
        return 'text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900/20';
    }
  };

  return (
    <div className="space-y-6 text-center">
      <h2 className="text-[18px] font-medium text-zinc-900 dark:text-zinc-100 mb-8">
        {t.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div 
            key={project.name}
            className="group relative border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 text-left hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300 hover:shadow-md dark:hover:shadow-zinc-900/20 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-800"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start gap-2 mb-2">
                <h3 className="text-[15px] font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-200">
                  {project.name}
                </h3>
                {project.status && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                )}
              </div>
              
              <p className="text-[13px] text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tech.slice(0, 3).map((tech) => (
                  <span 
                    key={tech}
                    className="text-[10px] text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 px-2 py-0.5">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
              
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[12px] font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 transition-all duration-200 group/link"
                >
                  <span className="relative">
                    {t.visitProject}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-zinc-900 dark:bg-zinc-100 group-hover/link:w-full transition-all duration-200"></span>
                  </span>
                  <span className="ml-1 group-hover/link:translate-x-0.5 transition-transform duration-200">→</span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 