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
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Products />
      <CTA />
      {/* md:px-16 lg:px-24 px-8 w-full py-24 */}
      <Footer />
    </>
  );
}
