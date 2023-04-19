import { Container } from "@/app/components/Container";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/app/components/SocialIcons";

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" target="_blank" rel="noopener" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Fernando Lima - Software developer</title>
        <meta
          name="description"
          content="I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Fernando Lima | Full Stack Software developer
          </h1>
        </div>
        <div className="mt-16 flex flex-col justify-center items-center w-full">
          <Image
            src="/eu.png"
            alt="fe"
            width={80}
            height={80}
            className="inline-block h-20 w-20 rounded-full"
          />
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hi there! I'm Fernando Lima, and I live in a small town in Brazil. I
            work as a full stack developer on a daily basis, with experience in
            React, Tailwind CSS, Node.js, GraphQL, and more. In my spare time,
            I'm either working on my microsaas project or being an instructor at
            codeftw.dev. Every day becoming better!
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/lnfernandobr"
              aria-label="Follow me on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com/lnfernandobr"
              aria-label="Follow me on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/lnfernandobr"
              aria-label="Follow me on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/lnfernandobr/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
