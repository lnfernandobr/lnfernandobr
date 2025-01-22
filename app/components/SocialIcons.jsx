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
      icon: TwitterIcon
    },
    {
      href: "https://github.com/lnfernandobr",
      label: "Follow on GitHub",
      icon: GitHubIcon
    },
    {
      href: "https://instagram.com/lnfernandobr",
      label: "Follow on Instagram",
      icon: InstagramIcon
    },
    {
      href: "https://www.linkedin.com/in/lnfernandobr",
      label: "Connect on LinkedIn",
      icon: LinkedInIcon
    }
  ];

  return (
    <div className="flex items-center justify-center gap-5 mt-2">
      {socialLinks.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors duration-200"
          aria-label={label}
        >
          <Icon className="h-5 w-5 fill-current" />
        </Link>
      ))}
    </div>
  );
}
