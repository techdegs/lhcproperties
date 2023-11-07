import Link from "next/link"
import { Search } from "lucide-react";

const ProductDetails = () => {
  return (
    <section className="bg-gray-100 md:px-16 lg:px-24 px-8 w-full py-24">
      <div>
        <h4 className="text-gray-900 text-2xl font-bold">
          Properties Listings
        </h4>
        <Link className="text-gray-900 text-sm font-semibold" href={"/"}>
          Home /{" "}
        </Link>{" "}
        <span className="text-gray-900 text-sm">Properties Listings</span>
      </div>
      <div className="flex gap-8 justify-between my-10">
        <div className="hidden lg:flex md:flex bg-white w-[35%] shadow-md px-6 py-8 flex-col gap-6 rounded-md">
          <h4 className="text-gray-900 text-base">
            Find your perfect property
          </h4>
          <div className="flex items-center px-3 py-2 rounded-md bg-white border border-gray-400">
            <Search size={24} color="gray" />
            <input
              className="flex flex-1 text-gray-900 bg-transparent outline-none focus:outline-b"
              type="search"
              name=""
              id=""
              placeholder="Search Property..."
            />
          </div>

          <div>
            <h4 className="text-gray-900 text-base font-semibold mb-3">
              Property Types
            </h4>
            <div className="flex flex-col gap-2">
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="propertyType"
                    name="propertyType"
                    type="radio"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="propertyType"
                    className="font-medium text-gray-900"
                  >
                    Land Acquisition
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="propertyType"
                    name="propertyType"
                    type="radio"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="propertyType"
                    className="font-medium text-gray-900"
                  >
                    House Purchase
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="propertyType"
                    name="propertyType"
                    type="radio"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="propertyType"
                    className="font-medium text-gray-900"
                  >
                    Rent Space
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="sm:col-span-3">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Browse Region
              </label>
              <div className="mt-2">
                <select
                  id="region"
                  name="region"
                  autoComplete="region-name"
                  className="block px-3 py-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Select Region</option>
                  <option>Ashanti Region</option>
                  <option>Greater Accra</option>
                  <option>Eastern Region</option>
                  <option>Western Region</option>
                  <option>Central Region</option>
                  <option>Ahafo Region</option>
                  <option>Brong Region</option>
                  <option>Northern Region</option>
                </select>
              </div>
            </div>
          </div>

        </div>

        <div className="w-[65%] border"></div>
      </div>
    </section>
  );
}

export default ProductDetails