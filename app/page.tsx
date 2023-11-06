"use client";
import Link from "next/link";
import React, { useState } from "react";
import HeroImage from "../images/hero-bg.jpg";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import Product from "@/components/Product";
import {MoveRight}from 'lucide-react'

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      {/* md:px-16 lg:px-24 px-8 w-full */}
      <div className="md:px-16 lg:px-24 px-8 relative flex flex-col w-full -mr-5 pt-5 max-md:max-w-full max-md:pb-24 max-md:px-5 bg-white">
        <div className="flex flex-wrap justify-between items-center mb-5">
          <div>
            <h4 className="text-indigo-950 text-2xl font-semibold">
              Based on your location
            </h4>
            <p className="text-gray-900">
              Some of our picked properties near your location
            </p>
            <div className="flex items-center sm:flex lg:hidden md:hidden my-2">
              <Link
                href="/properties"
                className=" text-indigo-950 font-bold cursor-pointer"
              >
                Browse more properties{" "}
              </Link>
              <span className="ml-3 inline-block">
                <MoveRight color="darkblue" size={20} />
              </span>{" "}
            </div>
          </div>
          <div className="hidden md:flex lg:flex">
            <Link
              href={"/properties"}
              className="text-cyan-300 text-base font-semibold whitespace-nowrap dark:bg-cyan-300 dark:text-indigo-900 bg-indigo-950 px-10 py-3 mt-5 rounded-lg"
            >
              Browse more properties
            </Link>
          </div>
        </div>
        <div className="flex flex-start flex-wrap gap-5 w-full">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  );
}
