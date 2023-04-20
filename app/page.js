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

export default function Home() {
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
        <div className="mt-16">
          <h1 className="text-4xl font-mono tracking-tight sm:text-4xl text-zinc-500">
            Fernando Lima
          </h1>

          <div className="mt-4 flex flex-col items-center  justify-center w-full gap-8 sm:items-start sm:flex-row">
            <div className="w-full flex justify-center mb-4 sm:hidden">
              <Image
                src="/eu.png"
                alt="fe"
                width={80}
                height={80}
                className="inline-block h-20 w-20 rounded-full"
              />
            </div>
            <Image
              src="/eu.png"
              alt="fe"
              width={80}
              height={80}
              className="h-20 w-20 rounded-full hidden sm:block"
            />
            {/* eslint-disable */}
            <div>
              <p className="text-base text-zinc-600 dark:text-zinc-400 ">
                Hi there <span>👋</span> I'm Fernando, and I'm a Full Stack
                Software Engineer. I have experience and work on a daily basis
                with the following technologies: React, Tailwind CSS, Node.js,
                GraphQL, and more. In my spare time, I'm either working on my
                micro-SaaS project or being an instructor at{" "}
                <Link
                  href="https://codeftw.dev"
                  target="_blank"
                  className="underline text-gray-500"
                >
                  CodeFTW
                </Link>
                . Becoming better every day!
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
          </div>
        </div>
      </Container>
    </>
  );
}
