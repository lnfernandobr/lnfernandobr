import Link from "next/link";

export function Navigation() {
  return (
    <nav>
      <ul className="flex justify-center gap-8">
        <li>
          <Link 
            href="#about" 
            className="text-[14px] text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors duration-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            href="#projects" 
            className="text-[14px] text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors duration-200"
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
} 