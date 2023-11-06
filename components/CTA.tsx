import React from 'react'
import Image from 'next/image'

const CTA = () => {
  return (
    <div className="md:px-16 lg:px-24 px-8 flex flex-col w-full -mr-5 py-24 max-md:max-w-full max-md:pb-24 max-md:px-5 bg-white relative">
      <Image
        src="/images/element.png"
        alt="cta"
        width={40}
        height={40}
        className="bg-contain absolute top-5 right-20"
      />
      <div className="flex bg-indigo-100">
        <div className="p-8">
          <h4 className="text-gray-900 font-bold text-xl">Get your dream house.</h4>
          <p className="text-gray-900">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            possimus reprehenderit nobis magni eveniet quasi tempora, laboriosam
            sit excepturi ipsam vitae! Voluptatibus consequatur quo dolorem
            labore nemo, dolor possimus atque.
          </p>
          <button className="text-cyan-300 text-base font-semibold whitespace-nowrap dark:bg-cyan-300 dark:text-indigo-900 bg-indigo-950 px-5 py-3 mt-5 rounded-lg">
            Register Now
          </button>
        </div>
        <div className="relative flex justify-end w-full">
          <Image src="/images/cta.png" width={260} height={260} alt='cta' className="absolute right-6 z-10 bottom-0 hidden lg:flex md:flex" />
        </div>
      </div>
    </div>
  );
}

export default CTA