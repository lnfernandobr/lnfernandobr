'use client'

import { useLanguage } from './LanguageProvider';
import { translations } from '@/app/lib/translations';
import Link from 'next/link';
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  InstagramIcon,
} from "./SocialIconsSVG";

export function Social() {
  const { language } = useLanguage();
  const t = translations[language].social;

  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://twitter.com/lnfernandobr',
      icon: TwitterIcon,
      description: t?.twitter || 'Follow me on Twitter for tech insights, project updates, and development tips.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/lnfernandobr',
      icon: GitHubIcon,
      description: t?.github || 'Check out my open source contributions and personal projects.',
      color: 'from-zinc-600 to-zinc-800'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/lnfernandobr',
      icon: InstagramIcon,
      description: t?.instagram || 'Follow my personal journey and behind-the-scenes of my projects.',
      color: 'from-pink-400 to-purple-600'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lnfernandobr',
      icon: LinkedInIcon,
      description: t?.linkedin || 'Connect with me professionally and see my career journey.',
      color: 'from-blue-600 to-blue-800'
    },
  ];

  return (
    <div className="space-y-8 text-center">
      <h2 className="text-[18px] font-medium text-zinc-900 dark:text-zinc-100 mb-8">
        {t?.title || "Let's Connect 🤝"}
      </h2>

      <div className="grid gap-4 max-w-2xl mx-auto">
        {socialLinks.map((platform) => (
          <Link
            key={platform.name}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 border border-zinc-200 dark:border-zinc-700 rounded-xl p-5 text-left transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-600 hover:shadow-lg dark:hover:shadow-zinc-900/20 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-800"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            
            <div className="relative z-10 flex items-center gap-4 w-full">
              <div className={`p-2 rounded-lg bg-gradient-to-br ${platform.color} shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                <platform.icon className="h-5 w-5 fill-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-[16px] font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-200">
                  {platform.name}
                </h3>
                <p className="text-[14px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {platform.description}
                </p>
              </div>
              
              <div className="text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors duration-200">
                <span className="text-lg">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 