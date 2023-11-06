import Image from "next/image";

const Feature = () => {
  return (
    <div className="md:px-16 lg:px-24 px-8 relative flex w-full -mr-5 pt-5 max-md:max-w-full max-md:pb-24 max-md:px-5 bg-white">
      <div className="flex flex-wrap gap-8 py-20 md:flex-wrap lg:flex-nowrap ">
        <div className="rounded-md bg-cyan-100 relative flex items-center w-full">
          <div className="p-8 max-w-[380px]">
            <h4 className="text-gray-900 text-4xl font-bold pb-4">
              The new way to find your property
            </h4>
            <p className="text-gray-900 text-base">
              Explore lot of options on properties on sale, or for rent and lot
              lands to acquire.
            </p>
            <button className="text-cyan-300 text-base font-semibold whitespace-nowrap dark:bg-cyan-300 dark:text-indigo-900 bg-indigo-950 px-5 py-3 mt-5 rounded-lg">
              How it works
            </button>
          </div>
          <div className="justify-end absolute right-0 bottom-0 hidden lg:flex md:flex">
            <Image
              className="flex-1 bg-contain"
              src="/images/feature.png"
              alt="feature"
              width={240}
              height={140}
            />
          </div>
        </div>
        <div className="grid featureGrid grid-cols-2 gap-4 w-full max-w-[400px]:grid-cols-1">
          <div className="border border-cyan-300 relative p-8 rounded-md">
            <p className="text-xl font-bold mb-1 text-indigo-900">01</p>
            <h4 className="text-gray-900 font-semibold text-lg">
              Search Your Dream Home
            </h4>
            <p className="text-gray-600">
              Get ready to experience the best deals on all properties here
            </p>
            <Image
              src="/images/icon1.png"
              width={24}
              height={24}
              alt="icon"
              className="absolute top-3 right-3"
            />
          </div>
          <div className="border border-cyan-300 relative p-8 rounded-md">
            <p className="text-xl font-bold mb-1 text-indigo-900">02</p>
            <h4 className="text-gray-900 font-semibold text-lg">
              Search Your Dream Home
            </h4>
            <p className="text-gray-600">
              Get ready to experience the best deals on all properties here
            </p>
            <Image
              src="/images/icon2.png"
              width={24}
              height={24}
              alt="icon"
              className="absolute top-3 right-3"
            />
          </div>
          <div className="border border-cyan-300 relative p-8 rounded-md">
            <p className="text-xl font-bold mb-1 text-indigo-900">03</p>
            <h4 className="text-gray-900 font-semibold text-lg">
              Search Your Dream Home
            </h4>
            <p className="text-gray-600">
              Get ready to experience the best deals on all properties here
            </p>
            <Image
              src="/images/icon3.png"
              width={24}
              height={24}
              alt="icon"
              className="absolute top-3 right-3"
            />
          </div>
          <div className="border border-cyan-300 relative p-8 rounded-md">
            <p className="text-xl font-bold mb-1 text-indigo-900">04</p>
            <h4 className="text-gray-900 font-semibold text-lg">
              Search Your Dream Home
            </h4>
            <p className="text-gray-600">
              Get ready to experience the best deals on all properties here
            </p>
            <Image
              src="/images/icon4.png"
              width={24}
              height={24}
              alt="icon"
              className="absolute top-3 right-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
