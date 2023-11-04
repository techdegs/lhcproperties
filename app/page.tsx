"use client";
import Link from "next/link";
import React, { useState } from "react";
import HeroImage from "../images/hero-bg.jpg";
import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <section className="relative">
        <main className="md:px-16 lg:px-24 px-8 w-full"></main>
      </section>

      <div className="flex-col overflow-hidden self-stretch relative flex min-h-[500px] w-full -mr-5 pt-5 pb-36 px-20 max-md:max-w-full max-md:pb-24 max-md:px-5">
        <Image
          loading="lazy"
          src={HeroImage}
          alt=""
          className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
        />
        <div className="relative self-center flex w-full max-w-[1206px] flex-col -mb-7 max-md:max-w-full max-md:mb-2.5">
          <h1 className="justify-center text-white text-6xl font-extrabold leading-[69px] whitespace-wrap mt-16 self-start max-md:max-w-full max-md:text-3xl max-md:mt-10">
            Buy, Rent or Sell <br />
            Your Properties <br />
            Easily
          </h1>
          <p className="justify-center text-white text-base leading-7 whitespace-nowrap mt-2.5 self-start max-md:max-w-full">
            Let’s find a home that’s perfect for you
          </p>
          <div className="justify-between items-start bg-white flex w-60 max-w-full gap-5 mt-16 pl-6 pr-10 py-px rounded-xl border-b-zinc-300 border-b border-solid self-start max-md:justify-center max-md:mt-10 max-md:px-5">
            <div className="justify-center text-zinc-900 text-center text-sm font-semibold leading-7 self-stretch whitespace-nowrap items-center bg-white w-[55px] max-w-full pl-4 pr-3.5 py-6 rounded">
              Buy
            </div>
            <div className="justify-center text-neutral-500 text-center text-sm font-semibold leading-7 self-center my-auto">
              Rent
            </div>
            <div className="justify-center text-neutral-500 text-center text-sm font-semibold leading-7 self-center whitespace-nowrap my-auto">
              Sold
            </div>
          </div>
          <div className="bg-white self-center flex w-full items-start justify-between gap-5 pl-5 pr-8 py-5 rounded-none max-md:max-w-full max-md:flex-wrap max-md:pr-5">
            <div className="justify-between items-start bg-neutral-100 self-stretch flex grow shrink basis-auto gap-4 pl-5 pr-80 py-5 rounded-xl max-md:max-w-full max-md:flex-wrap max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f7530cd-7c05-4d90-8f53-bc97220882cf?"
                className="aspect-square object-contain object-center w-[15px] overflow-hidden max-w-full self-start"
              />
              <div className="justify-center text-zinc-900 text-sm whitespace-nowrap grow shrink basis-auto self-start">
                Enter an address, neighborhood, city, or ZIP code
              </div>
            </div>
            <div className="self-stretch flex grow shrink basis-auto items-start justify-between gap-3.5 pr-24 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0ed6851-a8ea-44f5-8110-c1778d8978a3?"
                className="aspect-square object-contain object-center w-3.5 overflow-hidden self-center max-w-full my-auto"
              />
              <div className="justify-center text-zinc-900 text-center text-sm font-semibold leading-7 self-center my-auto">
                {" "}
                Advanced
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7750e2df-ae9d-46ee-8cce-30a6bf88df93?"
                className="aspect-square object-contain object-center w-[55px] justify-center items-center overflow-hidden self-stretch max-w-full"
              />
            </div>
          </div>
          <div className="justify-center text-white text-sm font-semibold leading-5 whitespace-nowrap mt-6 self-start max-md:max-w-full">
            Or browse featured categories:
          </div>
          <div className="flex w-[435px] max-w-full items-start justify-between gap-5 mt-6 self-start max-md:flex-wrap">
            <div className="self-stretch flex items-start justify-between gap-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e269a2ea-5382-4545-a9d9-893561a3905b?"
                className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden flex-1"
              />
              <div className="justify-center text-white text-sm leading-7 self-center whitespace-nowrap my-auto">
                Houses
              </div>
            </div>
            <div className="self-stretch flex grow shrink basis-auto items-start justify-between gap-2.5 max-md:justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a523901-6c83-4cd0-8c8e-e695a402236a?"
                className="aspect-square object-contain object-center w-[30px] justify-center items-center overflow-hidden self-stretch max-w-full"
              />
              <div className="justify-center text-white text-sm leading-7 self-center my-auto">
                Apartments
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/70cfbf66-aa8a-4fcf-bd33-80495c23a6af?"
                className="aspect-square object-contain object-center w-[30px] justify-center items-center overflow-hidden self-stretch max-w-full"
              />
              <div className="justify-center text-white text-sm leading-7 self-center my-auto">
                Office
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a03321d-a9fa-435c-812f-081e6acd6473?"
                className="aspect-square object-contain object-center w-[30px] justify-center items-center overflow-hidden self-stretch max-w-full"
              />
              <div className="justify-center text-white text-sm leading-7 self-center whitespace-nowrap my-auto">
                Villa
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
