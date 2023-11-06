import Image from 'next/image'
import Link from 'next/link'
import {Send} from 'lucide-react'

const Footer = () => {
  return (
    <div className="px-16 py-16 md:px-16 lg:px-24 w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col">
          <Image
            src="/images/lightlogo.png"
            alt="logo"
            width={205}
            height={145}
            className="contain"
          />
          <h4 className="font-semibold text-xl text-white">Address</h4>
          <p className="text-white">
            Dichemso-Kumasi. Off Airport Roundabout to Manhyia Palace
          </p>

          <h4 className="font-semibold text-xl text-white mt-2">Contact Us</h4>
          <p className="text-white">+233 32 200 8282</p>
          <p className="text-white">+233 24 656 2377</p>
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold text-xl text-white">Popular Search</h4>
          <Link className="text-white" href="/">
            Apartment for Rent
          </Link>
          <Link className="text-white" href="/">
            Land Acquisition
          </Link>
          <Link className="text-white" href="/">
            Mortgage
          </Link>
          <Link className="text-white" href="/">
            House Purchase
          </Link>

          <h4 className="font-semibold text-xl text-white mt-2">Discover Properties</h4>
          <Link className="text-white" href="/">
            Kumasi
          </Link>
          <Link className="text-white" href="/">
            Accra
          </Link>
          <Link className="text-white" href="/">
            Takoradi
          </Link>
          <Link className="text-white" href="/">
            Sunyani
          </Link>
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold text-xl text-white mt-2">Quick Links</h4>
          <Link className="text-white" href="/">
            All Properties
          </Link>
          <Link className="text-white" href="/">
            Pricing Plans
          </Link>
          <Link className="text-white" href="/">
            Our Services
          </Link>
          <Link className="text-white" href="/">
            Contact Support
          </Link>
          <Link className="text-white" href="/">
            Terms of Use
          </Link>
          <Link className="text-white" href="/">
            FAQs
          </Link>
        </div>
        <div>
          <h4 className="font-semibold text-xl text-white mt-2">Subscribe to News Letter</h4>
          <div className="flex bg-white px-2 py-3 rounded-3xl">
            <input type="text" className="flex flex-1 outline-none bg-transparent text-gray-900" placeholder="Enter your email" />
            <button><Send color="darkblue" size={24} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer