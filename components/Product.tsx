import { BedDouble, LandPlot, Bath, CheckSquare, Heart } from "lucide-react";
import Image from 'next/image'
import Link from 'next/link'

const Product = () => {
  return (
    <div className="flex flex-col border border-cyan-100 max-w-[480px] md:w-[240px] lg:w-[290px] rounded-md w-[290px] shadow-md">
      <div className="relative rounded-md">
        <Image
          src="/images/house.png"
          width={340}
          height={140}
          className="w-full"
          alt="product"
        />
        <button className="absolute text-white bg-indigo-950 px-2 py-1 top-2 right-2">
          Rent
        </button>
      </div>

      <div className="bg-white p-4">
        <div className="flex-col gap-4">
          <div>
            <h4 className="text-2xl font-bold text-indigo-950">
              GHS 1,500 <span className="text-sm text-indigo-950">/month</span>
            </h4>
            <Link className="text-indigo-950" href={"/"}>
              Beverly Springfield
            </Link>
            <p className="text-indigo-950">Main Street. Spintex Road, Accra.</p>
          </div>
          <div className="flex gap-2 justify-between mt-5">
            <div className="flex items-center gap-1">
              <BedDouble color="darkblue" size={20} />
              <span className="text-indigo-950 text-sm">4 Bedroom</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath size={20} color="darkblue" />
              <span className="text-indigo-950 text-sm">3 Bath</span>
            </div>
            <div className="flex items-center gap-1">
              <LandPlot size={20} color="darkblue" />
              <span className="text-indigo-950 text-sm">2497 sqft</span>
            </div>
          </div>
          <div className="border-b border-b-gray-500 my-2" />
          <div className="flex justify-end gap-6">
            <Link href="/">
              <CheckSquare size={30} color="darkblue" />
            </Link>
            <button>
              <Heart size={30} color="red" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product