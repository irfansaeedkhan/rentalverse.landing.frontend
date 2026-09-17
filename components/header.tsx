// @ts-nocheck

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "@studio-freight/react-lenis";

import { Button } from "./ui/button";
import { Parallax } from "./parallex";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Opportunity", href: "#opportunity" },
  { label: "How It Works", href: "#howitworks" },
  { label: "Technology", href: "#technology" },
  { label: "Team", href: "#team" },
  { label: "Numeris", href: "#numeris" },
  { label: "Partnership", href: "#partnership" },
  { label: "Get Started", href: "#getstarted" },
];

const Header: React.FC = () => {
  const lenis = useLenis(({ scroll }: any) => {}) as any;
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const scrollTo = (target: string) => {
    setNavbarOpen(false);
    lenis?.scrollTo(target, { lerp: 0.05 });
  };

  return (
    <header
      id="header"
      className="relative h-dvh w-full overflow-hidden bg-[url('/assets/images/header-bg.webp')] bg-cover bg-center bg-no-repeat font-kanit md:h-[120dvh]"
    >
      <div className="absolute bottom-0 left-[50%] z-0 w-[130vw] translate-x-[-50%] sm:w-[90vw] md:top-0 md:w-[80vw]">
        <Image
          src="/assets/images/header-center.webp"
          width={670}
          height={417}
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 90vw, 80vw"
          alt="RentalVerse virtual workspace"
          className="size-full object-contain"
        />
        <div className="content absolute left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] text-center text-white">
          <p className="text-center text-sm font-light md:text-4xl">
            Unlock the Future of
          </p>
          <h1 className="text-center text-3xl font-normal md:text-6xl">
            Workspaces
          </h1>
          <Link
            href="https://rentalverse-app.vercel.app/auth/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <Button
              variant="secondary"
              className="mt-5 px-4 py-2 text-xs md:mt-10 md:px-6 md:py-4 md:text-xl"
            >
              Discover Apex Dashboard
            </Button>
          </Link>
        </div>
      </div>
      <Parallax
        speed={-1}
        className="absolute left-[10%] top-[15%] z-0 w-[50vw] sm:w-[40vw] md:left-[15%] md:top-[20%] md:w-[25vw]"
      >
        <Image
          src="/assets/images/header-man.webp"
          width={387}
          height={390}
          sizes="(max-width: 768px) 40vw, 25vw"
          alt="Professional using virtual workspace"
          className="size-full object-contain"
          loading="lazy"
        />
      </Parallax>
      <Parallax
        speed={2}
        className="absolute left-[10%] top-[35%] z-0 w-[33vw] sm:w-[20vw] md:left-[19%] md:top-[30%] md:w-[18vw]"
      >
        <Image
          src="/assets/images/header-chair.webp"
          width={251}
          height={273}
          sizes="(max-width: 768px) 20vw, 18vw"
          alt="Workspace chair"
          className="size-full object-contain"
          loading="lazy"
        />
      </Parallax>
      <Parallax
        speed={1}
        className="absolute left-[65%] top-[12%] z-0 w-[26vw] sm:top-[5%] sm:w-[15vw] md:left-[70%] md:top-[8%] md:w-[12vw]"
      >
        <Image
          src="/assets/images/header-laptop.webp"
          width={194}
          height={139}
          sizes="(max-width: 768px) 15vw, 12vw"
          alt="Laptop"
          className="size-full object-contain"
          loading="lazy"
        />
      </Parallax>
      <Parallax
        speed={0.5}
        className="absolute left-[50%] top-[28%] z-0 w-[50vw] sm:w-[40vw] md:left-[60%] md:top-[35%] md:w-[26vw]"
      >
        <Image
          src="/assets/images/header-lady-2.webp"
          width={410}
          height={388}
          sizes="(max-width: 768px) 40vw, 26vw"
          alt="Professional collaborating remotely"
          className="size-full object-contain"
          loading="lazy"
        />
      </Parallax>

      <nav
        className={cn(
          "fixed mx-auto w-full sm:left-[50%] sm:translate-x-[-50%] z-50 overflow-hidden backdrop-blur-md",
          navbarOpen ? "h-full" : "h-auto"
        )}
        aria-label="Main navigation"
      >
        <div className="sm:max-container mx-auto flex w-full items-center justify-between gap-5 p-6">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/assets/images/logo.svg"
              width={107}
              height={36}
              priority
              alt="RentalVerse"
              className="shrink-0"
            />
          </Link>

          <ul className="hidden cursor-pointer items-center text-sm font-normal text-white md:flex md:gap-5 xl:gap-9">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  type="button"
                  className="bg-transparent"
                  onClick={() => scrollTo(item.href)}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <Button
                type="button"
                variant="primary"
                onClick={() => scrollTo("#contact")}
              >
                Contact
              </Button>
            </li>
          </ul>

          <div className="relative z-50 md:hidden">
            <button
              type="button"
              aria-label={navbarOpen ? "Close menu" : "Open menu"}
              aria-expanded={navbarOpen}
              className="flex size-11 items-center justify-center"
              onClick={() => setNavbarOpen((prev) => !prev)}
            >
              <Image
                src="/assets/icons/menu-icon.svg"
                width={24}
                height={24}
                alt=""
                className="object-contain"
                aria-hidden
              />
            </button>
          </div>

          <div
            className={cn(
              "fixed top-0 left-0 w-[100vw] h-[100dvh] bg-primary transition-transform duration-300  z-50",
              navbarOpen ? "translate-x-0" : "-translate-x-full"
            )}
            aria-hidden={!navbarOpen}
          >
            <button
              type="button"
              aria-label="Close menu"
              className="absolute right-6 top-6 flex size-11 items-center justify-center"
              onClick={() => setNavbarOpen(false)}
            >
              <Image
                src="/assets/icons/close-icon.svg"
                width={24}
                height={24}
                alt=""
                className="object-contain"
                aria-hidden
              />
            </button>
            <ul className="mx-auto flex w-[90%] cursor-pointer flex-col items-center gap-9 pt-16 text-sm font-normal text-white">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    type="button"
                    className="bg-transparent py-2"
                    onClick={() => scrollTo(item.href)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="w-full">
                <Button
                  type="button"
                  variant="tertiary"
                  className="w-full"
                  onClick={() => scrollTo("#contact")}
                >
                  Contact
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
