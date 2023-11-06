"use client";
import Link from "next/link";
import React, { useState } from "react";
import HeroImage from "../images/hero-bg.jpg";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Hero = () => {
  return (
    <>
      {/* md:px-16 lg:px-24 px-8 w-full */}
      <div className="md:px-16 lg:px-24 px-8 relative flex w-full -mr-5 pt-5 pb-36 max-md:max-w-full max-md:pb-24 max-md:px-5">
        <Image
          loading="lazy"
          src={HeroImage}
          alt=""
          className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
        />
        <div className="relative self-center flex w-full max-w-[1206px] flex-col -mb-7 max-md:max-w-full max-md:mb-2.5">
          <h1 className="justify-center text-white text-6xl font-semibold leading-[69px] whitespace-wrap mt-16 self-start max-md:max-w-full max-md:text-3xl max-md:mt-10">
            Buy, Rent or Sell <br />
            Your Properties <br />
            Easily.
          </h1>
          <p className="justify-center text-white text-base leading-7 whitespace-nowrap mt-2.5 self-start max-md:max-w-full">
            Let’s find a home that’s perfect for you
          </p>

          <Tabs defaultValue="Buy" className="my-5">
            <TabsList className="bg-white flex gap-4 justify-start w-[350px]">
              <TabsTrigger className="px-4" value="Buy">
                Buy
              </TabsTrigger>
              <TabsTrigger className="px-4" value="Sell">
                Sell
              </TabsTrigger>
              <TabsTrigger className="px-4" value="Rent">
                Rent
              </TabsTrigger>
            </TabsList>
            <TabsContent className="-mt-2 bg-white" value="Buy">
              <div className="flex space-evenly w-full gap-3 py-6 px-5 sm:px-3 sm:py-3">
                <div className="flex flex-col gap-1 flex-1">
                  <p className="text-gray-900">Buying Location</p>
                  <input
                    className="border-b focus:border-none outline-none w-full dark:bg-transparent text-gray-900"
                    type="search"
                    name="search-place"
                    placeholder="Search Places and locations..."
                  />
                </div>
                <button className="text-cyan-300 text-base font-semibold whitespace-nowrap dark:bg-cyan-300 dark:text-indigo-900 bg-indigo-950 px-3 rounded-md">
                  Browse Properties
                </button>
              </div>
            </TabsContent>
            <TabsContent className="-mt-2 bg-white" value="Sell">
              <div className="flex space-evenly w-full gap-3 py-6 px-5">
                <div className="flex flex-col gap-1 flex-1">
                  <p className="text-gray-900">Selling Location</p>
                  <input
                    className="border-b focus:border-none outline-none w-full"
                    type="search"
                    name="search-place"
                    placeholder="Search Places and locations..."
                  />
                </div>
                <button className="text-cyan-300 text-base font-semibold whitespace-nowrap dark:bg-cyan-300 dark:text-indigo-900 bg-indigo-950 px-3 rounded-md">
                  Browse Properties
                </button>
              </div>
            </TabsContent>
            <TabsContent value="Rent" className="-mt-2 bg-white">
              <div className="flex space-evenly w-full gap-3 py-6 px-5">
                <div className="flex flex-col gap-1 flex-1">
                  <p className="text-gray-900">Rent Location</p>
                  <input
                    className="border-b focus:border-none outline-none w-full"
                    type="search"
                    name="search-place"
                    placeholder="Search Places and locations..."
                  />
                </div>
                <button className="text-cyan-300 text-base font-semibold whitespace-nowrap dark:bg-cyan-300 dark:text-indigo-900 bg-indigo-950 px-3 rounded-md">
                  Browse Properties
                </button>
              </div>
            </TabsContent>
          </Tabs>

          <h4 className=" text-white">Or browse featured categories:</h4>
          <div className="flex flex-wrap max-w-[440px] justify-between mt-3">
            <div className="">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e269a2ea-5382-4545-a9d9-893561a3905b?"
                className=""
                alt="icon"
                width={30}
                height={30}
              />
              <Link href="/" className="text-white pt-3">
                Houses
              </Link>
            </div>
            <div className="">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a523901-6c83-4cd0-8c8e-e695a402236a?"
                className=""
                alt="icon"
                width={30}
                height={30}
              />
              <Link href="/" className="text-white pt-3">
                Apartments
              </Link>
            </div>
            <div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/70cfbf66-aa8a-4fcf-bd33-80495c23a6af?"
                className=""
                alt="icon"
                width={30}
                height={30}
              />
              <Link href="/" className="text-white pt-3">
                Office
              </Link>
            </div>
            <div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a03321d-a9fa-435c-812f-081e6acd6473?"
                className=""
                alt="icon"
                width={30}
                height={30}
              />
              <Link href="/" className="text-white pt-3">
                Lands
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
