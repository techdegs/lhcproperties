import * as React from "react";

export default function Home() {
  return (
    <div className="bg-white flex flex-col">
      <div className="bg-white self-stretch flex w-full flex-col px-5 max-md:max-w-full">
        <div className="flex-col overflow-hidden self-stretch relative flex min-h-[760px] w-full -mr-5 pt-5 pb-36 px-20 max-md:max-w-full max-md:pb-24 max-md:px-5">
          <img
            loading="lazy"
            srcSet="..."
            className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
          />
          <div className="relative self-center flex w-full max-w-[1206px] flex-col -mb-7 max-md:max-w-full max-md:mb-2.5">
            <div className="self-center flex w-full items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
              <div className="flex w-[687px] max-w-full items-start justify-between gap-5 self-start max-md:flex-wrap max-md:justify-center">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f726a98-7918-4bd2-bd26-d48444757d1a?"
                  className="aspect-[3.14] object-contain object-center w-[138px] justify-center items-center overflow-hidden self-stretch max-w-full"
                />
                <div className="justify-center text-white text-center text-sm font-semibold leading-7 capitalize self-center my-auto">
                  Home
                </div>
                <div className="justify-center text-white text-center text-sm font-semibold leading-7 capitalize self-center my-auto">
                  Listing
                </div>
                <div className="justify-center text-white text-center text-sm font-semibold leading-7 capitalize self-center my-auto">
                  Property
                </div>
                <div className="justify-center text-white text-center text-sm font-semibold leading-7 capitalize self-center my-auto">
                  Blog
                </div>
                <div className="justify-center text-white text-center text-sm font-semibold leading-7 capitalize self-center whitespace-nowrap my-auto">
                  Pages
                </div>
              </div>
              <div className="flex items-start justify-between gap-2 self-start max-md:justify-center">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f20c99cd-e645-48f0-a224-2b92f99ccf07?"
                  className="aspect-square object-contain object-center w-4 overflow-hidden self-center max-w-full my-auto"
                />
                <div className="justify-center text-white text-sm font-semibold leading-7 my-auto">
                  Login / Register
                </div>
                <div className="justify-center text-white text-center text-sm font-semibold leading-7 self-stretch whitespace-nowrap items-end border w-[165px] max-w-full pl-6 pr-12 py-4 rounded-xl border-solid border-white max-md:px-5">
                  Add Property
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bddcf8f6-b3a8-4de7-90ff-e04f16708a7c?"
                  className="aspect-[2.78] object-contain object-center w-[25px] justify-center items-center overflow-hidden self-center max-w-full my-auto"
                />
              </div>
            </div>
            <div className="justify-center text-white text-5xl font-semibold leading-[69px] whitespace-nowrap mt-16 self-start max-md:max-w-full max-md:text-4xl max-md:mt-10">
              Find the perfect place to
            </div>
            <div className="justify-center text-white text-5xl font-semibold leading-[69px] whitespace-nowrap self-start max-md:max-w-full max-md:text-4xl">
              Live with your family
            </div>
            <div className="justify-center text-white text-base leading-7 whitespace-nowrap mt-2.5 self-start max-md:max-w-full">
              Let’s find a home that’s perfect for you
            </div>
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
        <div className="self-center flex w-full max-w-[1563px] flex-col mt-32 max-md:max-w-full max-md:mt-10">
          <div className="self-stretch max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
                <div className="bg-red-400 bg-opacity-10 flex grow flex-col w-full mx-auto pl-16 pt-16 rounded-xl max-md:max-w-full max-md:mt-6 max-md:pl-5">
                  <div className="justify-center text-zinc-900 text-2xl font-semibold leading-8 tracking-wide self-stretch whitespace-nowrap max-md:max-w-full">
                    The New Way to Find
                  </div>
                  <div className="self-stretch mt-3 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[44%] max-md:w-full max-md:ml-0">
                        <div className="flex flex-col">
                          <div className="justify-center text-zinc-900 text-2xl font-semibold leading-8 tracking-wide self-stretch whitespace-nowrap">
                            Your Home
                          </div>
                          <div className="justify-center text-zinc-900 text-base leading-7 self-stretch whitespace-nowrap mt-3">
                            From as low as $10 per day with
                          </div>
                          <div className="justify-center text-zinc-900 text-base leading-7 self-stretch whitespace-nowrap">
                            limited time offer discounts.
                          </div>
                          <div className="justify-center text-white text-center text-base font-semibold leading-6 self-stretch whitespace-nowrap items-start border bg-red-400 w-full grow mt-6 pl-8 pr-14 py-5 rounded-xl border-solid border-red-400 max-md:px-5">
                            How İt Works
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-[56%] ml-5 max-md:w-full max-md:ml-0">
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="aspect-[0.93] object-contain object-center w-full overflow-hidden grow mt-2 max-md:mt-2.5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col max-md:max-w-full max-md:mt-6">
                  <div className="self-stretch pr-96 max-md:max-w-full max-md:pr-5">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                        <div className="border flex w-full max-w-[284px] grow flex-col mx-auto pt-5 pb-11 rounded-xl border-solid border-zinc-300 max-md:mt-6">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/01d3a9b1-e5f4-4723-9d88-430a14ca587f?"
                            className="aspect-square object-contain object-center w-9 overflow-hidden max-w-full mr-8 self-end max-md:mr-2.5"
                          />
                          <div className="flex w-full flex-col px-8 self-end max-md:px-5">
                            <div className="justify-center text-red-400 text-2xl font-semibold leading-9 self-stretch whitespace-nowrap">
                              01
                            </div>
                            <div className="justify-center text-zinc-900 text-base font-semibold leading-6 self-stretch whitespace-nowrap mt-3.5">
                              Search Your Dream Home
                            </div>
                            <div className="justify-center text-zinc-900 text-sm leading-6 self-stretch whitespace-nowrap mt-2.5">
                              Get ready to launch your real
                            </div>
                            <div className="justify-center text-zinc-900 text-sm leading-6 self-stretch whitespace-nowrap">
                              estate website without...
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                        <div className="border flex w-full max-w-[283px] grow flex-col mx-auto pt-5 pb-11 rounded-xl border-solid border-zinc-300 max-md:mt-6">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4eaef779-8636-4312-a3d3-a0003965ad9b?"
                            className="aspect-square object-contain object-center w-9 overflow-hidden max-w-full mr-8 self-end max-md:mr-2.5"
                          />
                          <div className="flex w-full flex-col px-8 self-end max-md:px-5">
                            <div className="justify-center text-red-400 text-2xl font-semibold leading-9 self-stretch whitespace-nowrap">
                              02
                            </div>
                            <div className="justify-center text-zinc-900 text-base font-semibold leading-6 self-stretch whitespace-nowrap mt-3.5">
                              Search Your Dream Home
                            </div>
                            <div className="justify-center text-zinc-900 text-sm leading-6 self-stretch whitespace-nowrap mt-2.5">
                              Get ready to launch your real
                            </div>
                            <div className="justify-center text-zinc-900 text-sm leading-6 self-stretch whitespace-nowrap">
                              estate website without...
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch mt-8 pr-96 max-md:max-w-full max-md:pr-5">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                        <div className="border flex w-full max-w-[284px] grow flex-col mx-auto pt-5 pb-11 rounded-xl border-solid border-zinc-300 max-md:mt-6">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0472e25-8667-4a54-969a-7b5450367f0c?"
                            className="aspect-square object-contain object-center w-9 overflow-hidden max-w-full mr-8 self-end max-md:mr-2.5"
                          />
                          <div className="flex w-full flex-col px-8 self-end max-md:px-5">
                            <div className="justify-center text-red-400 text-2xl font-semibold leading-9 self-stretch whitespace-nowrap">
                              03
                            </div>
                            <div className="justify-center text-zinc-900 text-base font-semibold leading-6 self-stretch whitespace-nowrap mt-3">
                              Search Your Dream Home
                            </div>
                            <div className="justify-center text-zinc-900 text-sm leading-6 self-stretch whitespace-nowrap mt-2">
                              Get ready to launch your real
                            </div>
                            <div className="justify-center text-zinc-900 text-sm leading-6 self-stretch whitespace-nowrap">
                              estate website without...
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                        <div className="border flex w-full max-w-[283px] grow flex-col mx-auto pt-5 pb-11 rounded-xl border-solid border-zinc-300 max-md:mt-6">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf0a4b9b-7733-4fe8-bb00-28076883c57e?"
                            className="aspect-square object-contain object-center w-9 overflow-hidden max-w-full mr-8 self-end max-md:mr-2.5"
                          />
                          <div className="flex w-full flex-col px-8 self-end max-md:px-5">
                            <div className="justify-center text-red-400 text-2xl font-semibold leading-9 self-stretch whitespace-nowrap">
                              04
                            </div>
                            <div className="justify-center text-zinc-900 text-base font-semibold leading-6 self-stretch whitespace-nowrap mt-3">
                              Search Your Dream Home
                            </div>
                            <div className="justify-center text-zinc-900 text-sm leading-6 self-stretch whitespace-nowrap mt-2">
                              Get ready to launch your real
                            </div>
                            <div className="justify-center text-zinc-900 text-sm leading-6 self-stretch whitespace-nowrap">
                              estate website without...
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-center flex w-full items-start justify-between gap-5 mt-32 pr-2.5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
            <div className="flex flex-col self-end max-md:max-w-full">
              <div className="justify-center text-zinc-900 text-3xl font-semibold leading-10 tracking-wide self-stretch whitespace-nowrap max-md:max-w-full">
                Discover Our Featured Listings
              </div>
              <div className="justify-center text-zinc-900 text-sm leading-6 self-stretch whitespace-nowrap max-md:max-w-full">
                Aliquam lacinia diam quis lacus euismod
              </div>
            </div>
            <div className="flex items-start justify-between gap-3 mt-10 pr-14 self-end max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/92949018-4a21-4b53-8369-86f8596e7f49?"
                className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
              />
              <div className="rounded bg-neutral-800 flex h-2 flex-col flex-1 my-auto" />
              <div className="bg-zinc-300 flex h-1.5 flex-col flex-1 my-auto rounded" />
              <div className="bg-zinc-300 flex h-1.5 flex-col flex-1 my-auto rounded" />
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b7ec465-8384-43e2-b32b-15b97bd25773?"
              className="aspect-square object-contain object-center w-3.5 overflow-hidden max-w-full mt-10 self-end"
            />
          </div>
          <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[26%] max-md:w-full max-md:ml-0">
                <div className="border bg-white flex w-full max-w-[382px] grow flex-col mx-auto pt-px pb-5 rounded-xl border-solid border-zinc-300 max-md:mt-8">
                  <div className="flex-col overflow-hidden self-stretch relative flex aspect-[1.5465587044534412] w-full pl-5 pr-20 py-5 max-md:pr-5">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                    />
                    <div className="relative bg-red-400 flex w-[124px] max-w-full items-start gap-1 pl-3 pr-3.5 py-3 rounded-md self-start">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/87c83b5e-e6ac-40ac-ad10-5f1be5143b32?"
                        className="aspect-[17] object-contain object-center w-[17px] overflow-hidden max-w-full mt-2 self-start"
                      />
                      <div className="justify-center text-white text-xs font-semibold leading-7 whitespace-nowrap self-start">
                        FEATURED
                      </div>
                    </div>
                    <div className="relative justify-center text-zinc-900 text-base leading-7 whitespace-nowrap items-center bg-white w-[124px] max-w-full mt-36 pl-3 pr-3.5 py-2 rounded-md self-start max-md:mt-10">
                      <span className="font-semibold">$14,000 / </span>
                      <span className="">mo</span>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col w-full mt-6 px-5 max-md:px-5">
                    <div className="justify-center text-zinc-900 text-base font-semibold leading-6 self-stretch whitespace-nowrap">
                      Equestrian Family Home
                    </div>
                    <div className="justify-center text-neutral-500 text-sm leading-6 self-stretch whitespace-nowrap">
                      California City, CA, USA
                    </div>
                    <div className="self-stretch flex w-full items-start justify-between gap-5 mt-6 max-md:justify-center">
                      <div className="flex flex-col self-start">
                        <div className="justify-center text-zinc-900 text-sm leading-7 whitespace-nowrap ml-5 self-start max-md:ml-2.5">
                          3 bed
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d63d187-cfac-47e1-ad0f-4149e5873ac8?"
                          className="aspect-[54] object-contain object-center w-full overflow-hidden grow self-start"
                        />
                      </div>
                      <div className="flex items-start gap-px self-start">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdb8c7b6-5a25-4d2d-93a9-b0d9f0795433?"
                          className="aspect-[18] object-contain object-center w-[18px] overflow-hidden max-w-full mt-2.5 self-start"
                        />
                        <div className="justify-center text-zinc-900 text-sm leading-7 whitespace-nowrap self-start">
                          4 bath
                        </div>
                      </div>
                      <div className="flex items-start gap-px self-start">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7eda9123-3136-4a47-9b6a-0de4a869fc07?"
                          className="aspect-[18] object-contain object-center w-[18px] overflow-hidden max-w-full mt-2.5 self-start"
                        />
                        <div className="justify-center text-zinc-900 text-sm leading-7 whitespace-nowrap self-start">
                          1200 sqft
                        </div>
                      </div>
                    </div>
                    <div className="bg-zinc-300 self-stretch flex w-full h-px flex-col mt-4" />
                    <div className="self-stretch flex w-full items-start justify-between gap-5 mt-2">
                      <div className="justify-center text-zinc-900 text-sm leading-7 self-center my-auto">
                        For Rent
                      </div>
                      <div className="self-stretch flex items-start justify-between gap-0.5 max-md:justify-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e08421c-f7ce-4b12-ac5a-1ae110b89521?"
                          className="aspect-square object-contain object-center w-full justify-end items-center overflow-hidden flex-1"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/727f7e23-9a6b-4f93-ad05-6aecf2bf51c1?"
                          className="aspect-square object-contain object-center w-full justify-end items-center overflow-hidden flex-1"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/208fcb6d-6a35-46ae-9871-72afe7833090?"
                          className="aspect-square object-contain object-center w-full justify-end items-center overflow-hidden flex-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
                <div className="border bg-white flex w-full max-w-[382px] grow flex-col mx-auto pt-px pb-5 rounded-xl border-solid border-zinc-300 max-md:mt-8">
                  <div className="flex-col overflow-hidden self-stretch relative flex aspect-[1.5465587044534412] w-full pl-5 pr-20 pt-48 pb-5 max-md:pr-5 max-md:pt-24">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                    />
                    <div className="relative justify-center text-zinc-900 text-base leading-7 whitespace-nowrap items-center bg-white w-[126px] max-w-full pl-3 pr-3.5 py-2 rounded-md self-start">
                      <span className="font-semibold">$82,000 / </span>
                      <span className="">mo</span>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col w-full mt-6 px-5 max-md:px-5">
                    <div className="justify-center text-zinc-900 text-base font-semibold leading-6 self-stretch whitespace-nowrap">
                      Luxury villa in Rego Park
                    </div>
                    <div className="justify-center text-neutral-500 text-sm leading-6 self-stretch whitespace-nowrap">
                      California City, CA, USA
                    </div>
                    <div className="self-stretch flex w-full items-start justify-between gap-5 mt-6 max-md:justify-center">
                      <div className="flex flex-col self-start">
                        <div className="justify-center text-zinc-900 text-sm leading-7 whitespace-nowrap ml-5 self-start max-md:ml-2.5">
                          3 bed
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab1f0122-ff55-4879-b233-ab1b4d66c955?"
                          className="aspect-[54] object-contain object-center w-full overflow-hidden grow self-start"
                        />
                      </div>
                      <div className="flex items-start gap-px self-start">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/37727d2b-68d2-4867-a934-70e0f8d29bfc?"
                          className="aspect-[18] object-contain object-center w-[18px] overflow-hidden max-w-full mt-2.5 self-start"
                        />
                        <div className="justify-center text-zinc-900 text-sm leading-7 whitespace-nowrap self-start">
                          4 bath
                        </div>
                      </div>
                      <div className="flex items-start gap-px self-start">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a785c219-793f-4d25-9a9c-8a3d78960531?"
                          className="aspect-[18] object-contain object-center w-[18px] overflow-hidden max-w-full mt-2.5 self-start"
                        />
                        <div className="justify-center text-zinc-900 text-sm leading-7 whitespace-nowrap self-start">
                          1200 sqft
                        </div>
                      </div>
                    </div>
                    <div className="bg-zinc-300 self-stretch flex w-full h-px flex-col mt-4" />
                    <div className="self-stretch flex w-full items-start justify-between gap-5 mt-2">
                      <div className="justify-center text-zinc-900 text-sm leading-7 self-center my-auto">
                        For Rent
                      </div>
                      <div className="self-stretch flex items-start justify-between gap-0.5 max-md:justify-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c00db1f2-efbc-4a88-b3cc-fcaade18ccbe?"
                          className="aspect-square object-contain object-center w-full justify-end items-center overflow-hidden flex-1"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/655d2520-b3f6-4155-8544-4255b118ea37?"
                          className="aspect-square object-contain object-center w-full justify-end items-center overflow-hidden flex-1"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/12097fd9-d3a8-434e-802e-67f694836a15?"
                          className="aspect-square object-contain object-center w-full justify-end items-center overflow-hidden flex-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
                <div className="border bg-white flex w-full max-w-[382px] grow flex-col mx-auto pt-px pb-5 rounded-xl border-solid border-zinc-300 max-md:mt-8">
                  <div className="flex-col overflow-hidden self-stretch relative flex aspect-[1.5465587044534412] w-full pl-5 pr-20 pt-48 pb-5 max-md:pr-5 max-md:pt-24">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                    />
                    <div className="relative justify-center text-zinc-900 text-base leading-7 whitespace-nowrap items-center bg-white w-[127px] max-w-full pl-3 pr-3.5 py-2 rounded-md self-start">
                      <span className="font-semibold">$63,000 / </span>
                      <span className="">mo</span>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col w-full mt-6 px-5 max-md:px-5">
                    <div className="justify-center text-zinc-900 text-base font-semibold leading-6 self-stretch whitespace-nowrap">
                      Villa on Hollywood Boulevard
                    </div>
                    <div className="justify-center text-neutral-500 text-sm leading-6 self-stretch whitespace-nowrap">
                      California City, CA, USA
                    </div>
                    <div className="self-stretch flex w-full items-start justify-between gap-5 mt-6 max-md:justify-center">
                      <div className="flex flex-col self-start">
                        <div className="justify-center text-zinc-900 text-sm leading-7 whitespace-nowrap ml-5 self-start max-md:ml-2.5">
                          3 bed
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/eeee539e-da2c-4bb3-b9ce-dc050cf5d05a?"
                          className="aspect-[54] object-contain object-center w-full overflow-hidden grow self-start"
                        />
                      </div>
                      <div className="flex items-start gap-px self-start">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc67e62c-d3a2-44de-a1df-6d30ef1cf2dc?"
                          className="aspect-[18] object-contain object-center w-[18px] overflow-hidden max-w-full mt-2.5 self-start"
                        />
                        <div className="justify-center text-zinc-900 text-sm leading-7 whitespace-nowrap self-start">
                          4 bath
                        </div>
                      </div>
                      <div className="flex items-start gap-px self-start">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e957750e-be3c-4f99-a2d5-e6be5e4f7d5f?"
                          className="aspect-[18] object-contain object-center w-[18px] overflow-hidden max-w-full mt-2.5 self-start"
                        />
                        <div className="justify-center text-zinc-900 text-sm leading-7 whitespace-nowrap self-start">
                          1200 sqft
                        </div>
                      </div>
                    </div>
                    <div className="bg-zinc-300 self-stretch flex w-full h-px flex-col mt-4" />
                    <div className="self-stretch flex w-full items-start justify-between gap-5 mt-2">
                      <div className="justify-center text-zinc-900 text-sm leading-7 self-center my-auto">
                        For Rent
                      </div>
                      <div className="self-stretch flex items-start justify-between gap-0.5 max-md:justify-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a2ccc1e-0994-4f2d-8487-e2bf1bf0a4d0?"
                          className="aspect-square object-contain object-center w-full justify-end items-center overflow-hidden flex-1"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b290e915-f812-4956-b826-bda60f1a5581?"
                          className="aspect-square object-contain object-center w-full justify-end items-center overflow-hidden flex-1"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/afe6d8d7-7e5b-4eca-bf5d-6ad5282c7144?"
                          className="aspect-square object-contain object-center w-full justify-end items-center overflow-hidden flex-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[22%] ml-5 max-md:w-full max-md:ml-0">
                <div className="border bg-white flex w-full max-w-[327px] grow flex-col mx-auto pt-px pb-5 rounded-xl border-solid border-zinc-300 max-md:mt-8">
                  <div className="flex-col overflow-hidden self-stretch relative flex aspect-[1.3238866396761133] w-full pl-5 pr-20 pt-48 pb-5 max-md:pr-5 max-md:pt-24">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                    />
                    <div className="relative justify-center text-zinc-900 text-base leading-7 whitespace-nowrap items-center bg-white w-[126px] max-w-full pl-3 pr-3.5 py-2 rounded-md self-start">
                      <span className="font-semibold">$63,000 / </span>
                      <span className="">mo</span>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col w-full mt-6 pl-5 max-md:pl-5">
                    <div className="justify-center text-zinc-900 text-base font-semibold leading-6 self-stretch whitespace-nowrap">
                      Triple Story House for Rent
                    </div>
                    <div className="justify-center text-neutral-500 text-sm leading-6 self-stretch whitespace-nowrap">
                      California City, CA, USA
                    </div>
                    <div className="self-stretch flex w-full items-start justify-between gap-5 mt-6 max-md:justify-center">
                      <div className="flex flex-col self-start">
                        <div className="justify-center text-zinc-900 text-sm leading-7 whitespace-nowrap ml-5 self-start max-md:ml-2.5">
                          3 bed
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e077da6a-088a-44ac-b67d-a74186d47f01?"
                          className="aspect-[54] object-contain object-center w-full overflow-hidden grow self-start"
                        />
                      </div>
                      <div className="flex items-start gap-px self-start">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c17b75f-4e34-46e5-b96a-d3d3f3d431f1?"
                          className="aspect-[18] object-contain object-center w-[18px] overflow-hidden max-w-full mt-2.5 self-start"
                        />
                        <div className="justify-center text-zinc-900 text-sm leading-7 whitespace-nowrap self-start">
                          4 bath
                        </div>
                      </div>
                      <div className="flex items-start gap-px self-start">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca58b536-f7a0-4e1e-805d-e0159e3f561f?"
                          className="aspect-[18] object-contain object-center w-[18px] overflow-hidden max-w-full mt-2.5 self-start"
                        />
                        <div className="justify-center text-zinc-900 text-sm leading-7 whitespace-nowrap self-start">
                          1200 sqft
                        </div>
                      </div>
                    </div>
                    <div className="bg-zinc-300 self-stretch flex w-full h-px flex-col mt-4" />
                    <div className="self-stretch flex w-full items-start justify-between gap-5 mt-2">
                      <div className="justify-center text-zinc-900 text-sm leading-7 self-center my-auto">
                        For Rent
                      </div>
                      <div className="self-stretch flex items-start justify-between gap-0.5 max-md:justify-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e06db037-63e1-490e-9649-df12e50284ee?"
                          className="aspect-square object-contain object-center w-[35px] justify-end items-center overflow-hidden self-stretch max-w-full"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a2b2c27-7229-4ea1-865a-9d9e85fdd324?"
                          className="aspect-square object-contain object-center w-[35px] justify-end items-center overflow-hidden self-stretch max-w-full"
                        />
                        <div className="justify-end items-center bg-white self-stretch flex w-[3px] h-[35px] flex-col grow shrink-0 basis-auto rounded-md" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-center flex w-full items-start justify-between gap-5 mt-32 pr-3.5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
            <div className="flex flex-col self-end max-md:max-w-full">
              <div className="justify-center text-zinc-900 text-3xl font-semibold leading-10 tracking-wide self-stretch whitespace-nowrap max-md:max-w-full">
                Explore Cities
              </div>
              <div className="justify-center text-zinc-900 text-sm leading-6 self-stretch whitespace-nowrap max-md:max-w-full">
                Aliquam lacinia diam quis lacus euismod
              </div>
            </div>
            <div className="flex items-start justify-between gap-3 mt-10 pr-20 self-end max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c935f728-232e-4010-8aa3-9523137bacb4?"
                className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
              />
              <div className="rounded bg-neutral-800 flex h-2 flex-col flex-1 my-auto" />
              <div className="bg-zinc-300 flex h-1.5 flex-col flex-1 my-auto rounded" />
              <div className="bg-zinc-300 flex h-1.5 flex-col flex-1 my-auto rounded" />
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/08d24a6a-a7dc-46f3-ba37-2124a1777541?"
              className="aspect-square object-contain object-center w-3.5 overflow-hidden max-w-full mt-10 self-end"
            />
          </div>
          <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[26%] max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-square object-contain object-center w-full overflow-hidden self-stretch"
                  />
                  <div className="justify-center text-zinc-900 text-base font-semibold leading-6 self-stretch whitespace-nowrap mt-5">
                    Los Angeles
                  </div>
                  <div className="justify-center text-zinc-900 text-base leading-7 self-stretch whitespace-nowrap">
                    12 Properties
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-square object-contain object-center w-full overflow-hidden self-stretch"
                  />
                  <div className="justify-center text-zinc-900 text-base font-semibold leading-6 self-stretch whitespace-nowrap mt-5">
                    Miami
                  </div>
                  <div className="justify-center text-zinc-900 text-base leading-7 self-stretch whitespace-nowrap mt-1">
                    12 Properties
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-square object-contain object-center w-full overflow-hidden self-stretch"
                  />
                  <div className="justify-center text-zinc-900 text-base font-semibold leading-6 self-stretch whitespace-nowrap mt-5">
                    New York
                  </div>
                  <div className="justify-center text-zinc-900 text-base leading-7 self-stretch whitespace-nowrap mt-1">
                    12 Properties
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[22%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-square object-contain object-center w-full overflow-hidden self-stretch"
                  />
                  <div className="justify-center text-zinc-900 text-base font-semibold leading-6 self-stretch whitespace-nowrap mt-5">
                    Chicago
                  </div>
                  <div className="justify-center text-zinc-900 text-base leading-7 self-stretch whitespace-nowrap">
                    12 Properties
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral-100 self-stretch flex w-full flex-col -mr-5 mt-28 px-20 py-32 max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-24">
          <div className="self-center w-full max-w-[1186px] -mb-6 max-md:max-w-full max-md:mb-2.5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
                <div className="flex flex-col my-auto max-md:mt-10">
                  <div className="justify-center text-zinc-900 text-3xl font-semibold leading-10 self-stretch whitespace-nowrap">
                    Let’s find the right
                  </div>
                  <div className="justify-center text-zinc-900 text-3xl font-semibold leading-10 self-stretch whitespace-nowrap">
                    selling option for you
                  </div>
                  <div className="justify-center text-zinc-900 text-base leading-7 self-stretch whitespace-nowrap mt-7">
                    As the complexity of buildings to increase, the
                  </div>
                  <div className="justify-center text-zinc-900 text-base leading-7 self-stretch whitespace-nowrap">
                    field of architecture
                  </div>
                  <div className="self-stretch flex items-start justify-between gap-3 mt-9">
                    <div className="justify-center text-white text-center text-xs leading-6 self-stretch whitespace-nowrap items-center bg-zinc-900 w-[25px] max-w-full pl-2.5 pr-2.5 py-2.5 rounded-xl">
                      ✓
                    </div>
                    <div className="justify-center text-zinc-900 text-base font-semibold leading-6 self-center whitespace-nowrap grow shrink basis-auto my-auto">
                      Find excellent deals
                    </div>
                  </div>
                  <div className="self-stretch flex items-start justify-between gap-3 mt-5">
                    <div className="justify-center text-white text-center text-xs leading-6 whitespace-nowrap items-center bg-zinc-900 w-[25px] max-w-full pl-2.5 pr-2.5 py-2.5 rounded-xl self-start">
                      ✓
                    </div>
                    <div className="justify-center text-zinc-900 text-base font-semibold leading-6 whitespace-nowrap grow shrink basis-auto self-start">
                      Friendly host & Fast support
                    </div>
                  </div>
                  <div className="self-stretch flex items-start justify-between gap-3 mt-5">
                    <div className="justify-center text-white text-center text-xs leading-6 whitespace-nowrap items-center bg-zinc-900 w-[25px] max-w-full pl-2.5 pr-2.5 py-2.5 rounded-xl self-start">
                      ✓
                    </div>
                    <div className="justify-center text-zinc-900 text-base font-semibold leading-6 whitespace-nowrap grow shrink basis-auto self-start">
                      List your own property
                    </div>
                  </div>
                  <div className="justify-center text-zinc-900 text-center text-base font-semibold leading-6 self-stretch whitespace-nowrap items-start border bg-white w-full grow mt-10 pl-8 pr-14 py-6 rounded-xl border-solid border-zinc-900 max-md:px-5">
                    Learn More
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-[1.11] object-contain object-center w-full overflow-hidden grow rounded-xl max-md:max-w-full max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center text-zinc-900 text-center text-3xl font-semibold leading-10 self-center whitespace-nowrap mt-28 max-md:mt-10">
          Testimonials
        </div>
        <div className="justify-center text-zinc-900 text-center text-sm leading-6 self-center whitespace-nowrap mt-3.5">
          10,000+ unique online course list designs
        </div>
        <div className="justify-center text-zinc-300 text-center text-6xl font-black leading-6 self-center mt-24 max-md:text-4xl max-md:mt-10">
          “
        </div>
        <div className="justify-center text-zinc-900 text-center text-2xl font-semibold leading-10 self-center whitespace-nowrap mt-8 max-md:max-w-full">
          What a great experience! I have visited one of the workshops and
        </div>
        <div className="justify-center text-zinc-900 text-center text-2xl font-semibold leading-10 self-center whitespace-nowrap max-md:max-w-full">
          attended a masterclass, and both were super useful for young
        </div>
        <div className="justify-center text-zinc-900 text-center text-2xl font-semibold leading-10 self-center whitespace-nowrap">
          designers. Highly recommended.
        </div>
        <div className="justify-center text-zinc-900 text-center text-base font-semibold leading-6 self-center whitespace-nowrap mt-9">
          Ali Tufan
        </div>
        <div className="justify-center text-zinc-900 text-center text-sm leading-6 self-center whitespace-nowrap mt-2.5">
          Product Manager, Apple Inc
        </div>
        <div className="self-center flex w-[478px] max-w-full items-start justify-between gap-5 mt-7 max-md:flex-wrap max-md:justify-center">
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[0.99] object-contain object-center w-full opacity-20 overflow-hidden flex-1"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[0.99] object-contain object-center w-full overflow-hidden flex-1"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[0.99] object-contain object-center w-full opacity-20 overflow-hidden flex-1"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[0.99] object-contain object-center w-full opacity-20 overflow-hidden flex-1"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[0.99] object-contain object-center w-full opacity-20 overflow-hidden flex-1"
          />
        </div>
        <div className="justify-center text-zinc-900 text-center text-3xl font-semibold leading-10 self-center whitespace-nowrap mt-32 max-md:mt-10">
          Featured Properties
        </div>
        <div className="justify-center text-zinc-900 text-center text-sm leading-6 self-center whitespace-nowrap mt-2">
          Aliquam lacinia diam quis lacus euismod
        </div>
        <div className="justify-end bg-gray-100 self-center w-full max-w-[1206px] mt-16 pl-10 rounded-xl max-md:max-w-full max-md:mt-10 max-md:pl-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col mt-32 max-md:max-w-full max-md:mt-10">
                <div className="flex w-[201px] max-w-full items-start gap-5 self-start">
                  <div className="bg-red-400 self-stretch flex w-[103px] max-w-full items-start justify-between gap-1 pl-3 pr-3.5 py-3 rounded-md">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbb966e5-bd6f-4fc8-ae3f-bfb7a91b8275?"
                      className="aspect-[17] object-contain object-center w-[17px] overflow-hidden max-w-full mt-2 self-start"
                    />
                    <div className="justify-center text-white text-xs font-semibold leading-7 whitespace-nowrap self-start">
                      FEATURED
                    </div>
                  </div>
                  <div className="justify-center text-white text-xs font-semibold leading-7 self-stretch whitespace-nowrap items-center bg-zinc-900 w-[78px] max-w-full pl-3 pr-3.5 py-3 rounded-md">
                    FOR SALE
                  </div>
                </div>
                <div className="justify-center text-zinc-900 text-xl font-semibold leading-8 whitespace-nowrap mt-7 self-start max-md:max-w-full">
                  Comfortable Villa Green
                </div>
                <div className="justify-center text-neutral-500 text-base leading-7 whitespace-nowrap mt-2.5 self-start max-md:max-w-full">
                  California City, CA, USA
                </div>
                <div className="flex w-[471px] max-w-full items-start justify-between gap-2.5 mt-9 self-start max-md:flex-wrap max-md:justify-center">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/314394d1-6f93-4495-a3a4-0824a6f5af46?"
                    className="aspect-square object-contain object-center w-[50px] justify-end items-center shadow-lg overflow-hidden self-stretch max-w-full"
                  />
                  <div className="justify-center text-zinc-900 text-base font-semibold leading-6 self-center my-auto">
                    3 bed
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac1edc67-ebe8-4235-9f0a-70d7151a7853?"
                    className="aspect-square object-contain object-center w-[50px] justify-end items-center shadow-lg overflow-hidden self-stretch max-w-full"
                  />
                  <div className="justify-center text-zinc-900 text-base font-semibold leading-6 self-center my-auto">
                    4 bath
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c83bd1e3-959b-49e4-9b2c-4666490b71ba?"
                    className="aspect-square object-contain object-center w-[50px] justify-end items-center shadow-lg overflow-hidden self-stretch max-w-full"
                  />
                  <div className="justify-center text-zinc-900 text-base font-semibold leading-6 self-center whitespace-nowrap my-auto">
                    1200 sqft
                  </div>
                </div>
                <div className="w-[471px] max-w-full mt-12 self-start max-md:mt-10">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col max-md:mt-6">
                        <div className="justify-center text-zinc-900 text-sm leading-6 self-stretch whitespace-nowrap">
                          Total Free Customer Care
                        </div>
                        <div className="justify-center text-zinc-900 text-base font-semibold leading-6 self-stretch whitespace-nowrap mt-3">
                          +(0) 123 050 945 02
                        </div>
                        <div className="justify-center text-zinc-900 text-xl font-semibold leading-8 self-stretch whitespace-nowrap mt-8">
                          $14,000 / mo
                        </div>
                        <div className="self-stretch flex w-full items-start justify-between gap-5 mt-28 max-md:mt-10">
                          <div className="self-stretch flex items-start justify-between gap-3 max-md:justify-center">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cae446a-44a7-4557-96cb-996326d2360b?"
                              className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                            />
                            <div className="rounded bg-neutral-800 flex h-2 flex-col grow shrink-0 basis-auto flex-1" />
                            <div className="bg-zinc-300 flex h-1.5 flex-col grow shrink-0 basis-auto flex-1 my-auto rounded" />
                            <div className="bg-zinc-300 flex h-1.5 flex-col grow shrink-0 basis-auto flex-1 my-auto rounded" />
                            <div className="bg-zinc-300 flex h-1.5 flex-col grow shrink-0 basis-auto flex-1 my-auto rounded" />
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3147f099-a33e-4b17-886d-16680890b6a2?"
                            className="aspect-square object-contain object-center w-3.5 overflow-hidden self-stretch max-w-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex flex-col max-md:mt-6">
                        <div className="justify-center text-zinc-900 text-sm leading-6 whitespace-nowrap self-end">
                          Nee Live Support?
                        </div>
                        <div className="justify-center text-zinc-900 text-base font-semibold leading-6 whitespace-nowrap mt-2.5 self-end">
                          hi@homez.com
                        </div>
                        <div className="flex w-[140px] max-w-full items-start gap-2.5 mt-8 self-end max-md:justify-center">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7631385-bb06-4718-8b99-28bce1ab60dd?"
                            className="aspect-square object-contain object-center w-full justify-end items-center overflow-hidden flex-1"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/80578b7c-b84c-431a-bc4c-5d6c3a382906?"
                            className="aspect-square object-contain object-center w-full justify-end items-center overflow-hidden flex-1"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/10a4b308-3e10-40d3-b592-3792a0132667?"
                            className="aspect-square object-contain object-center w-full justify-end items-center overflow-hidden flex-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[0.92] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
        <div className="justify-center text-zinc-900 text-center text-3xl font-semibold leading-10 self-center whitespace-nowrap mt-28 max-md:mt-10">
          Membership Plans
        </div>
        <div className="justify-center text-zinc-900 text-center text-sm leading-6 self-center whitespace-nowrap mt-2">
          Lorem ipsum dolor sit amet, consectetur.
        </div>
        <div className="self-center flex w-[380px] max-w-full items-start gap-4 mt-8 max-md:justify-center">
          <div className="justify-center text-zinc-900 text-sm leading-7 self-center my-auto">
            Billed Monthly
          </div>
          <div className="fill-red-400 fill-opacity-10 flex flex-col w-[60px] pl-1.5 pr-9 py-1.5 self-start max-md:pr-5">
            <div className="bg-white self-stretch flex w-full h-5 flex-col rounded-xl" />
          </div>
          <div className="justify-center text-zinc-900 text-sm leading-7 self-center my-auto">
            Billed Yearly
          </div>
          <div className="justify-center text-red-400 text-sm font-medium leading-7 self-stretch whitespace-nowrap items-center bg-red-400 bg-opacity-10 w-[93px] max-w-full px-4 py-3 rounded-[60px]">
            Save 20%
          </div>
        </div>
        <div className="self-center w-full max-w-[1206px] mt-14 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="border flex w-full max-w-[386px] grow flex-col mx-auto pt-10 pb-12 px-12 rounded-lg border-solid border-zinc-300 max-md:mt-6 max-md:px-5">
                <div className="self-stretch flex w-full items-start justify-between gap-5">
                  <div className="flex flex-col mt-4 self-start">
                    <div className="justify-center text-zinc-900 text-xl font-semibold leading-8 self-stretch whitespace-nowrap">
                      Basic
                    </div>
                    <div className="justify-center text-slate-900 text-4xl font-semibold leading-[54px] tracking-wider self-stretch whitespace-nowrap mt-1">
                      Free
                    </div>
                    <div className="justify-center text-zinc-900 text-sm leading-6 self-stretch whitespace-nowrap mt-2">
                      per month
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec3dec31-e2b4-4d79-bf11-4b69c2dc8ba5?"
                    className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden flex-1"
                  />
                </div>
                <div className="justify-center text-zinc-900 text-sm leading-6 self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                  Standard listing submission, active for
                </div>
                <div className="justify-center text-zinc-900 text-sm leading-6 self-stretch whitespace-nowrap">
                  30 dayss
                </div>
                <div className="self-stretch flex items-start justify-between gap-3.5 mt-11 max-md:mt-10">
                  <div className="justify-center text-white text-center text-xs leading-5 whitespace-nowrap items-center bg-zinc-900 w-[18px] max-w-full p-1.5 rounded-lg self-start">
                    ✓
                  </div>
                  <div className="justify-center text-zinc-900 text-sm leading-7 whitespace-nowrap grow shrink basis-auto self-start">
                    All Operating Supported
                  </div>
                </div>
                <div className="self-stretch flex items-start justify-between gap-3.5 mt-7">
                  <div className="justify-center text-white text-center text-xs leading-5 self-stretch whitespace-nowrap items-center bg-zinc-900 w-[18px] max-w-full p-1.5 rounded-lg">
                    ✓
                  </div>
                  <div className="justify-center text-zinc-900 text-sm leading-7 self-center whitespace-nowrap grow shrink basis-auto my-auto">
                    Great Interface
                  </div>
                </div>
                <div className="self-stretch flex items-start justify-between gap-3.5 mt-7">
                  <div className="justify-center text-white text-center text-xs leading-5 whitespace-nowrap items-center bg-zinc-900 w-[18px] max-w-full p-1.5 rounded-lg self-start">
                    ✓
                  </div>
                  <div className="justify-center text-zinc-900 text-sm leading-7 whitespace-nowrap grow shrink basis-auto self-start">
                    Allows encryption
                  </div>
                </div>
                <div className="self-stretch flex items-start justify-between gap-3.5 mt-7">
                  <div className="justify-center text-white text-center text-xs leading-5 whitespace-nowrap items-center bg-zinc-900 w-[18px] max-w-full p-1.5 rounded-lg self-start">
                    ✓
                  </div>
                  <div className="justify-center text-zinc-900 text-sm leading-7 whitespace-nowrap grow shrink basis-auto self-start">
                    Face recognized system
                  </div>
                </div>
                <div className="self-stretch flex items-start justify-between gap-3.5 mt-7">
                  <div className="justify-center text-white text-center text-xs leading-5 whitespace-nowrap items-center bg-zinc-900 w-[18px] max-w-full p-1.5 rounded-lg self-start">
                    ✓
                  </div>
                  <div className="justify-center text-zinc-900 text-sm leading-7 whitespace-nowrap grow shrink basis-auto self-start">
                    24/7 Full support
                  </div>
                </div>
                <div className="justify-center items-start border bg-white self-stretch flex w-full flex-col mt-11 px-20 py-6 rounded-xl border-solid border-red-400 max-md:mt-10 max-md:px-5">
                  <div className="justify-center text-red-400 text-center text-base font-semibold leading-6 self-center ml-0 whitespace-nowrap">
                    Join
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="border bg-red-400 bg-opacity-10 flex w-full max-w-[386px] grow flex-col mx-auto pt-10 pb-12 px-12 rounded-lg border-solid border-zinc-300 max-md:mt-6 max-md:px-5">
                <div className="self-stretch flex w-full items-start justify-between gap-5">
                  <div className="flex flex-col mt-4 self-start">
                    <div className="justify-center text-red-400 text-xl font-semibold leading-8 self-stretch whitespace-nowrap">
                      Professional
                    </div>
                    <div className="justify-center text-slate-900 text-4xl font-semibold leading-[54px] tracking-wider self-stretch whitespace-nowrap">
                      $199.95
                    </div>
                    <div className="justify-center text-zinc-900 text-sm leading-6 self-stretch whitespace-nowrap mt-1.5">
                      per month
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/66417ef0-857c-4c6d-b912-2e1ea39f02f6?"
                    className="aspect-square object-contain object-center w-[70px] justify-center items-center overflow-hidden max-w-full self-start"
                  />
                </div>
                <div className="justify-center text-zinc-900 text-sm leading-6 self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                  Standard listing submission, active for
                </div>
                <div className="justify-center text-zinc-900 text-sm leading-6 self-stretch whitespace-nowrap">
                  30 dayss
                </div>
                <div className="self-stretch flex items-start justify-between gap-3.5 mt-11 max-md:mt-10">
                  <div className="justify-center text-white text-center text-xs leading-5 whitespace-nowrap items-center bg-zinc-900 w-[18px] max-w-full p-1.5 rounded-lg self-start">
                    ✓
                  </div>
                  <div className="justify-center text-zinc-900 text-sm leading-7 whitespace-nowrap grow shrink basis-auto self-start">
                    All Operating Supported
                  </div>
                </div>
                <div className="self-stretch flex items-start justify-between gap-3.5 mt-7">
                  <div className="justify-center text-white text-center text-xs leading-5 self-stretch whitespace-nowrap items-center bg-zinc-900 w-[18px] max-w-full p-1.5 rounded-lg">
                    ✓
                  </div>
                  <div className="justify-center text-zinc-900 text-sm leading-7 self-center whitespace-nowrap grow shrink basis-auto my-auto">
                    Great Interface
                  </div>
                </div>
                <div className="self-stretch flex items-start justify-between gap-3.5 mt-7">
                  <div className="justify-center text-white text-center text-xs leading-5 whitespace-nowrap items-center bg-zinc-900 w-[18px] max-w-full p-1.5 rounded-lg self-start">
                    ✓
                  </div>
                  <div className="justify-center text-zinc-900 text-sm leading-7 whitespace-nowrap grow shrink basis-auto self-start">
                    Allows encryption
                  </div>
                </div>
                <div className="self-stretch flex items-start justify-between gap-3.5 mt-7">
                  <div className="justify-center text-white text-center text-xs leading-5 whitespace-nowrap items-center bg-zinc-900 w-[18px] max-w-full p-1.5 rounded-lg self-start">
                    ✓
                  </div>
                  <div className="justify-center text-zinc-900 text-sm leading-7 whitespace-nowrap grow shrink basis-auto self-start">
                    Face recognized system
                  </div>
                </div>
                <div className="self-stretch flex items-start justify-between gap-3.5 mt-7">
                  <div className="justify-center text-white text-center text-xs leading-5 whitespace-nowrap items-center bg-zinc-900 w-[18px] max-w-full p-1.5 rounded-lg self-start">
                    ✓
                  </div>
                  <div className="justify-center text-zinc-900 text-sm leading-7 whitespace-nowrap grow shrink basis-auto self-start">
                    24/7 Full support
                  </div>
                </div>
                <div className="justify-center items-start border bg-white self-stretch flex w-full flex-col mt-11 px-20 py-6 rounded-xl border-solid border-red-400 max-md:mt-10 max-md:px-5">
                  <div className="justify-center text-red-400 text-center text-base font-semibold leading-6 self-center ml-0 whitespace-nowrap">
                    Join
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="border flex w-full max-w-[386px] grow flex-col mx-auto pt-10 pb-12 px-12 rounded-lg border-solid border-zinc-300 max-md:mt-6 max-md:px-5">
                <div className="self-stretch flex w-full items-start justify-between gap-5">
                  <div className="flex flex-col mt-4 self-start">
                    <div className="justify-center text-zinc-900 text-xl font-semibold leading-8 self-stretch whitespace-nowrap">
                      Business
                    </div>
                    <div className="justify-center text-slate-900 text-4xl font-semibold leading-[54px] tracking-wider self-stretch whitespace-nowrap">
                      $399.95
                    </div>
                    <div className="justify-center text-zinc-900 text-sm leading-6 self-stretch whitespace-nowrap mt-1.5">
                      per month
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/162186bc-b4b8-4932-9dba-e70a1139aa98?"
                    className="aspect-square object-contain object-center w-[70px] justify-center items-center overflow-hidden max-w-full self-start"
                  />
                </div>
                <div className="justify-center text-zinc-900 text-sm leading-6 self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                  Standard listing submission, active for
                </div>
                <div className="justify-center text-zinc-900 text-sm leading-6 self-stretch whitespace-nowrap">
                  30 dayss
                </div>
                <div className="self-stretch flex items-start justify-between gap-3.5 mt-11 max-md:mt-10">
                  <div className="justify-center text-white text-center text-xs leading-5 whitespace-nowrap items-center bg-zinc-900 w-[18px] max-w-full p-1.5 rounded-lg self-start">
                    ✓
                  </div>
                  <div className="justify-center text-zinc-900 text-sm leading-7 whitespace-nowrap grow shrink basis-auto self-start">
                    All Operating Supported
                  </div>
                </div>
                <div className="self-stretch flex items-start justify-between gap-3.5 mt-7">
                  <div className="justify-center text-white text-center text-xs leading-5 self-stretch whitespace-nowrap items-center bg-zinc-900 w-[18px] max-w-full p-1.5 rounded-lg">
                    ✓
                  </div>
                  <div className="justify-center text-zinc-900 text-sm leading-7 self-center whitespace-nowrap grow shrink basis-auto my-auto">
                    Great Interface
                  </div>
                </div>
                <div className="self-stretch flex items-start justify-between gap-3.5 mt-7">
                  <div className="justify-center text-white text-center text-xs leading-5 whitespace-nowrap items-center bg-zinc-900 w-[18px] max-w-full p-1.5 rounded-lg self-start">
                    ✓
                  </div>
                  <div className="justify-center text-zinc-900 text-sm leading-7 whitespace-nowrap grow shrink basis-auto self-start">
                    Allows encryption
                  </div>
                </div>
                <div className="self-stretch flex items-start justify-between gap-3.5 mt-7">
                  <div className="justify-center text-white text-center text-xs leading-5 whitespace-nowrap items-center bg-zinc-900 w-[18px] max-w-full p-1.5 rounded-lg self-start">
                    ✓
                  </div>
                  <div className="justify-center text-zinc-900 text-sm leading-7 whitespace-nowrap grow shrink basis-auto self-start">
                    Face recognized system
                  </div>
                </div>
                <div className="self-stretch flex items-start justify-between gap-3.5 mt-7">
                  <div className="justify-center text-white text-center text-xs leading-5 whitespace-nowrap items-center bg-zinc-900 w-[18px] max-w-full p-1.5 rounded-lg self-start">
                    ✓
                  </div>
                  <div className="justify-center text-zinc-900 text-sm leading-7 whitespace-nowrap grow shrink basis-auto self-start">
                    24/7 Full support
                  </div>
                </div>
                <div className="justify-center items-start border bg-white self-stretch flex w-full flex-col mt-11 px-20 py-6 rounded-xl border-solid border-red-400 max-md:mt-10 max-md:px-5">
                  <div className="justify-center text-red-400 text-center text-base font-semibold leading-6 self-center ml-0 whitespace-nowrap">
                    Join
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center flex w-full max-w-[1206px] items-start justify-between gap-5 mt-32 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
          <div className="flex flex-col self-end">
            <div className="justify-center text-zinc-900 text-3xl font-semibold leading-10 tracking-wide self-stretch whitespace-nowrap">
              Our Exclusive Agents
            </div>
            <div className="justify-center text-zinc-900 text-sm leading-6 self-stretch whitespace-nowrap">
              Aliquam lacinia diam quis lacus euismod
            </div>
          </div>
          <div className="flex items-start justify-between gap-3 mt-10 self-end max-md:justify-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/12e9b35e-f65e-4165-9cda-59239585ffe4?"
              className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
            />
            <div className="rounded bg-neutral-800 flex h-2 flex-col flex-1 my-auto" />
            <div className="bg-zinc-300 flex h-1.5 flex-col flex-1 my-auto rounded" />
            <div className="bg-zinc-300 flex h-1.5 flex-col flex-1 my-auto rounded" />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/10d2fd55-9dff-488d-b44d-3b95bbcd3cd0?"
            className="aspect-square object-contain object-center w-3.5 overflow-hidden max-w-full mt-10 self-end"
          />
        </div>
        <div className="self-center flex w-full max-w-[1206px] items-start justify-between gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
          <div className="self-stretch flex flex-col">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-square object-contain object-center w-full overflow-hidden self-stretch"
            />
            <div className="justify-center text-zinc-900 text-center text-base font-semibold leading-6 self-center whitespace-nowrap mt-5">
              Arlene McCoy
            </div>
            <div className="justify-center text-zinc-900 text-center text-base leading-7 self-center whitespace-nowrap">
              Broker
            </div>
          </div>
          <div className="self-stretch flex flex-col">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-square object-contain object-center w-full overflow-hidden self-stretch"
            />
            <div className="justify-center text-zinc-900 text-center text-base font-semibold leading-6 self-center whitespace-nowrap mt-5">
              Esther Howard
            </div>
            <div className="justify-center text-zinc-900 text-center text-base leading-7 self-center whitespace-nowrap mt-1.5">
              Broker
            </div>
          </div>
          <div className="self-stretch flex flex-col">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-square object-contain object-center w-full overflow-hidden self-stretch"
            />
            <div className="justify-center text-zinc-900 text-center text-base font-semibold leading-6 self-center whitespace-nowrap mt-5">
              Cody Fisher
            </div>
            <div className="justify-center text-zinc-900 text-center text-base leading-7 self-center whitespace-nowrap">
              Broker
            </div>
          </div>
          <div className="self-stretch flex flex-col">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-square object-contain object-center w-full overflow-hidden self-stretch"
            />
            <div className="justify-center text-zinc-900 text-center text-base font-semibold leading-6 self-center whitespace-nowrap mt-5">
              Bessie Cooper
            </div>
            <div className="justify-center text-zinc-900 text-center text-base leading-7 self-center whitespace-nowrap">
              Broker
            </div>
          </div>
          <div className="self-stretch flex flex-col">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-square object-contain object-center w-full overflow-hidden self-stretch"
            />
            <div className="justify-center text-zinc-900 text-center text-base font-semibold leading-6 self-center whitespace-nowrap mt-5">
              Guy Hawkins
            </div>
            <div className="justify-center text-zinc-900 text-center text-base leading-7 self-center whitespace-nowrap">
              Broker
            </div>
          </div>
        </div>
        <div className="bg-slate-50 self-stretch flex w-full flex-col -mr-5 mt-28 pt-3.5 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="self-center w-full max-w-[1188px] max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[57%] max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-[1.26] object-contain object-center w-full opacity-[0.7056] overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </div>
              <div className="flex flex-col items-stretch w-[43%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <div className="justify-center text-zinc-900 text-center text-sm leading-9 whitespace-nowrap items-center opacity-[0.7056] bg-white w-32 max-w-full px-7 py-2.5 rounded-[60px] self-start max-md:px-5">
                    Start today
                  </div>
                  <div className="justify-center text-slate-900 text-3xl font-semibold leading-10 tracking-wide opacity-[0.7056] whitespace-nowrap mt-5 self-start max-md:max-w-full">
                    Download the App
                  </div>
                  <div className="justify-center text-slate-900 text-sm leading-6 opacity-[0.7056] whitespace-nowrap mt-2 self-start max-md:max-w-full">
                    Take classes on the go with the realton app. Stream or
                    download to
                  </div>
                  <div className="justify-center text-slate-900 text-sm leading-6 opacity-[0.7056] whitespace-nowrap self-start max-md:max-w-full">
                    watch on the plane, the subway, or wherever you learn best.
                  </div>
                  <div className="flex w-[470px] max-w-full items-start justify-between gap-5 mt-16 pr-7 self-start max-md:flex-wrap max-md:mt-10 max-md:pr-5">
                    <div className="justify-between items-start opacity-[0.7056] bg-slate-900 flex gap-5 flex-1 pl-5 pr-9 py-3.5 rounded-xl max-md:pr-5">
                      <div className="justify-center text-white text-3xl leading-7 whitespace-nowrap items-center pr-5 pt-1 pb-1.5 border-r-white border-r-opacity-30 border-r border-solid self-start max-md:pr-5">
                        
                      </div>
                      <div className="flex flex-col self-start">
                        <div className="justify-center text-white text-xs leading-6 self-stretch whitespace-nowrap">
                          Download on the
                        </div>
                        <div className="justify-center text-white text-base font-semibold leading-6 self-stretch whitespace-nowrap mt-1.5">
                          Apple Store
                        </div>
                      </div>
                    </div>
                    <div className="justify-between items-start opacity-[0.7056] bg-slate-900 flex gap-5 flex-1 pl-5 pr-8 py-3 rounded-xl max-md:pr-5">
                      <div className="justify-center text-white text-3xl leading-7 whitespace-nowrap items-center pr-6 py-1 border-r-white border-r-opacity-30 border-r border-solid self-start max-md:pr-5">
                        
                      </div>
                      <div className="flex flex-col self-start">
                        <div className="justify-center text-white text-xs leading-6 self-stretch whitespace-nowrap">
                          Get in on
                        </div>
                        <div className="justify-center text-white text-base font-semibold leading-6 self-stretch whitespace-nowrap mt-1.5">
                          Google Play
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-end items-start overflow-hidden self-stretch relative flex min-h-[628px] w-full -mr-5 pt-16 px-20 max-md:max-w-full max-md:px-5">
          <img
            loading="lazy"
            srcSet="..."
            className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
          />
          <div className="relative self-center flex w-full max-w-[1230px] grow flex-col max-md:max-w-full">
            <div className="justify-between items-start self-center flex w-full gap-5 pl-3 pr-7 pb-8 border-b-white border-b-opacity-10 border-b border-solid max-md:max-w-full max-md:flex-wrap max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2a51f16-bf6c-4f03-8dee-48bbe67cb0b1?"
                className="aspect-[3.14] object-contain object-center w-[138px] justify-center items-center overflow-hidden max-w-full self-start"
              />
              <div className="flex w-[231px] max-w-full items-start justify-between gap-5 mt-3.5 self-start max-md:justify-center">
                <div className="justify-center text-white text-right text-sm font-bold leading-6 self-center my-auto">
                  Follow us
                </div>
                <div className="justify-center text-stone-300 text-center text-sm leading-10 self-stretch">
                  
                </div>
                <div className="justify-center text-stone-300 text-center text-sm leading-10 self-start">
                  
                </div>
                <div className="justify-center text-stone-300 text-center text-sm leading-10 self-stretch">
                  
                </div>
                <div className="justify-center text-stone-300 text-center text-sm leading-10 whitespace-nowrap self-start">
                  
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col mt-16 max-md:max-w-full max-md:mt-10">
              <div className="self-center w-full max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[65%] max-md:w-full max-md:ml-0">
                    <div className="max-md:max-w-full max-md:mt-10">
                      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
                          <div className="flex grow flex-col max-md:mt-10">
                            <div className="justify-center text-white text-base font-semibold leading-6 self-stretch whitespace-nowrap">
                              Popular Search
                            </div>
                            <div className="justify-center text-stone-300 text-sm leading-10 self-stretch whitespace-nowrap mt-4">
                              Apartment for Rent
                            </div>
                            <div className="justify-center text-stone-300 text-sm leading-10 self-stretch whitespace-nowrap">
                              Apartment Low to hide
                            </div>
                            <div className="justify-center text-stone-300 text-sm leading-10 self-stretch whitespace-nowrap">
                              Offices for Buy
                            </div>
                            <div className="justify-center text-stone-300 text-sm leading-10 self-stretch whitespace-nowrap">
                              Offices for Rent
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0">
                          <div className="flex grow flex-col max-md:mt-10">
                            <div className="justify-center text-white text-base font-semibold leading-6 self-stretch whitespace-nowrap">
                              Quick Links
                            </div>
                            <div className="justify-center text-stone-300 text-sm leading-10 self-stretch whitespace-nowrap mt-4">
                              Terms of Use
                            </div>
                            <div className="justify-center text-stone-300 text-sm leading-10 self-stretch whitespace-nowrap">
                              Privacy Policy
                            </div>
                            <div className="justify-center text-stone-300 text-sm leading-10 self-stretch whitespace-nowrap">
                              Pricing Plans
                            </div>
                            <div className="justify-center text-stone-300 text-sm leading-10 self-stretch whitespace-nowrap">
                              Our Services
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-stretch w-1/5 ml-5 max-md:w-full max-md:ml-0">
                          <div className="flex grow flex-col max-md:mt-10">
                            <div className="justify-center text-white text-base font-semibold leading-6 self-stretch whitespace-nowrap">
                              Discover
                            </div>
                            <div className="justify-center text-stone-300 text-sm leading-10 self-stretch whitespace-nowrap mt-5">
                              Miami
                            </div>
                            <div className="justify-center text-stone-300 text-sm leading-10 self-stretch whitespace-nowrap">
                              Los Angeles
                            </div>
                            <div className="justify-center text-stone-300 text-sm leading-10 self-stretch whitespace-nowrap">
                              Chicago
                            </div>
                            <div className="justify-center text-stone-300 text-sm leading-10 self-stretch whitespace-nowrap">
                              New York
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col max-md:mt-10">
                      <div className="self-stretch flex w-full items-start justify-between gap-5">
                        <div className="self-stretch flex flex-col">
                          <div className="justify-center text-stone-300 text-sm leading-6 self-stretch whitespace-nowrap">
                            Total Free Customer Care
                          </div>
                          <div className="justify-center text-white text-base font-semibold leading-6 self-stretch whitespace-nowrap mt-2.5">
                            +(0) 123 050 945 02
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col">
                          <div className="justify-center text-stone-300 text-sm leading-6 self-stretch whitespace-nowrap">
                            Nee Live Support?
                          </div>
                          <div className="justify-center text-white text-base font-semibold leading-6 self-stretch whitespace-nowrap mt-2">
                            hi@homez.com
                          </div>
                        </div>
                      </div>
                      <div className="justify-center text-white text-base font-semibold leading-6 self-stretch whitespace-nowrap mt-14 max-md:mt-10">
                        Keep Yourself Up to Date
                      </div>
                      <div className="justify-between items-start bg-white self-stretch flex w-full gap-5 mt-6 pl-8 pr-8 py-7 rounded-xl max-md:px-5">
                        <div className="justify-center text-gray-500 text-sm self-start">
                          Your Email
                        </div>
                        <div className="justify-center text-zinc-900 text-center text-base font-semibold leading-6 whitespace-nowrap self-start">
                          Subscribe
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-center text-stone-300 text-sm leading-10 whitespace-nowrap ml-72 self-start max-md:ml-2.5">
                Contact Support
              </div>
              <div className="justify-center text-stone-300 text-sm leading-10 whitespace-nowrap ml-72 self-start max-md:ml-2.5">
                Careers
              </div>
              <div className="justify-center text-stone-300 text-sm leading-10 whitespace-nowrap ml-72 mt-1 self-start max-md:ml-2.5">
                FAQs
              </div>
            </div>
            <div className="self-center flex w-full items-start justify-between gap-5 mt-7 pt-8 pb-11 px-3 border-t-white border-t-opacity-10 border-t border-solid max-md:max-w-full max-md:flex-wrap">
              <div className="justify-center text-stone-300 text-sm leading-6">
                © Homez - All rights reserved
              </div>
              <div className="self-stretch flex items-start justify-between gap-px max-md:justify-center">
                <div className="justify-center text-stone-300 text-right text-sm leading-6 self-stretch">
                  Privacy
                </div>
                <div className="justify-center text-stone-300 text-right text-sm leading-6 self-center my-auto">
                  {" "}
                  ·{" "}
                </div>
                <div className="justify-center text-stone-300 text-right text-sm leading-6 self-start">
                  Terms
                </div>
                <div className="justify-center text-stone-300 text-right text-sm leading-6 self-center my-auto">
                  {" "}
                  ·{" "}
                </div>
                <div className="justify-center text-stone-300 text-right text-sm leading-6 self-stretch whitespace-nowrap">
                  Sitemap
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
