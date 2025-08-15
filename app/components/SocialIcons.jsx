import Link from "next/link";
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  InstagramIcon,
} from "./SocialIconsSVG";

export function SocialIcons() {
  const socialLinks = [
    {
      href: "https://twitter.com/lnfernandobr",
      label: "Follow on Twitter",
      icon: TwitterIcon,
      color: "hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400"
    },
    {
      href: "https://github.com/lnfernandobr",
      label: "Follow on GitHub",
      icon: GitHubIcon,
      color: "hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-700 dark:hover:text-zinc-300"
    },
    {
      href: "https://instagram.com/lnfernandobr",
      label: "Follow on Instagram",
      icon: InstagramIcon,
      color: "hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:text-pink-600 dark:hover:text-pink-400"
    },
    {
      href: "https://www.linkedin.com/in/lnfernandobr",
      label: "Connect on LinkedIn",
      icon: LinkedInIcon,
      color: "hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400"
    }
  ];

  return (
    <div className="flex items-center justify-center gap-3">
      {socialLinks.map(({ href, label, icon: Icon, color }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-lg text-zinc-500 dark:text-zinc-400 transition-all duration-200 ${color}`}
          aria-label={label}
        >
          <Icon className="h-5 w-5 fill-current" />
        </Link>
      ))}
    </div>
  );
}
