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
    },
    {
      name: 'GitHub',
      href: 'https://github.com/lnfernandobr',
      icon: GitHubIcon,
      description: t?.github || 'Check out my open source contributions and personal projects.',
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/lnfernandobr',
      icon: InstagramIcon,
      description: t?.instagram || 'Follow my personal journey and behind-the-scenes of my projects.',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lnfernandobr',
      icon: LinkedInIcon,
      description: t?.linkedin || 'Connect with me professionally and see my career journey.',
    },
  ];

  return (
    <div className="space-y-8 text-center">
      <h2 className="text-[18px] font-medium text-zinc-900 dark:text-zinc-100 mb-6">
        {t?.title || "Let's Connect 🤝"}
      </h2>

      <div className="grid gap-6">
        {socialLinks.map((platform) => (
          <Link
            key={platform.name}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 border border-zinc-100 dark:border-zinc-800 rounded-lg p-4 text-left transition-colors duration-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
          >
            <platform.icon className="h-6 w-6 flex-shrink-0 fill-current text-zinc-500 dark:text-zinc-400" />
            <div>
              <h3 className="text-[16px] font-medium text-zinc-900 dark:text-zinc-100">
                {platform.name}
              </h3>
              <p className="text-[14px] text-zinc-600 dark:text-zinc-400">
                {platform.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 