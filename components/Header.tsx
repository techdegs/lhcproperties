"use client";
import Link from "next/link";
import React, { useState } from "react";
import LightLogo from "../images/lightlogo.png";
import DarkLogo from "../images/darklogo.png"
import Image from "next/image";

import { Moon, Sun } from "lucide-react";
import { useTheme} from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { X, AlignLeft } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, theme } = useTheme()
  console.log(theme)

  return (
    <>
      <header className="top-0 md:px-16 lg:px-24 px-[1.5rem] place-content-between py-4 flex items-center flex-row w-full">
        <Link href={"/"} prefetch={false}>
          <div className="w-40">
            <div className="flex items-center justify-center">
              <Image priority src={theme === "light" ? DarkLogo : LightLogo} alt="logo" />
            </div>
          </div>
        </Link>
        <div className="hidden flex-1 justify-end flex-row items-center gap-10 lg:flex">
          <div className="flex gap-8">
            <Link href="/" className="text-indigo-950 dark:text-white text-base font-semibold">
              Home
            </Link>
            <Link href="/properties" className="text-indigo-950 dark:text-white text-base">
              Properties
            </Link>
            <Link
              href="/"
              className="text-indigo-950 text-base dark:text-white whitespace-nowrap"
            >
              Properties
            </Link>
          </div>
          <button className="text-cyan-300 text-base font-semibold whitespace-nowrap dark:bg-cyan-300 dark:text-indigo-900 bg-indigo-950 py-3 px-3 rounded-full">
            SELL PROPERTY
          </button>
        </div>
        <div className="flex flex-row gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" className="ml-3">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button
            onClick={() => setIsOpen(true)}
            className="text-cyan-400 lg:hidden items-center"
          >
            <AlignLeft  size={24} />
          </button>
        </div>
      </header>

      <header
        className={
          "fixed overflow-hidden z-10 bg-gray-800 bg-opacity-30 inset-0 transform ease-in-out " +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0 "
            : " transition-all delay-500 opacity-0 translate-x-full  ")
        }
      >
        <div
          className={
            "w-screen flex justify-end max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
            (isOpen ? " translate-x-0 " : " translate-x-[80%] ")
          }
        >
          <nav className="relative w-full max-w-lg pb-10 gap-2 flex flex-col overflow-y-scroll h-full px-8 mt-10">
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="mb-5"
            >
             
              <X className="text-red-700 float-right"  size={24} />
            </button>
            <Link className="text-gray-900 text-lg text-right" href="/">
              Home
            </Link>
            <Link className="text-gray-900 text-lg text-right" href="/">
              Properties
            </Link>
          </nav>
        </div>
        <section
          className=" w-screen h-full cursor-pointer "
          onClick={() => {
            setIsOpen(false);
          }}
        ></section>
      </header>
    </>
  );
};

export default Header;
