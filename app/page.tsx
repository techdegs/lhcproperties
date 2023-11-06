"use client";
import Link from "next/link";
import React, { useState } from "react";
import HeroImage from "../images/hero-bg.jpg";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import Product from "@/components/Product";

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      {/* md:px-16 lg:px-24 px-8 w-full */}
      <div className="md:px-16 lg:px-24 lg:pb-24 px-8 relative flex w-full -mr-5 pt-5 max-md:max-w-full max-md:pb-24 max-md:px-5 bg-white">
        <div className="flex flex-wrap gap-6">
          <Product />
        </div>
      </div>
    </>
  );
}
