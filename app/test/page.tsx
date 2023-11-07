import React from "react";

const Test = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-900 py-10 px-12">
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div>
            <div
              className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
            >
              <a href="link" className="cursor-pointer">
                <div>
                  <img
                    src="/images/house.png"
                    className="rounded-t h-72 w-full object-cover"
                  />

                  <div className="p-4">
                    <p
                      className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
                    ></p>

                    <small
                      className="leading-5 text-gray-500 dark:text-gray-400"
                    ></small>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Test;
