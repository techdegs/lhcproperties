import Image from 'next/image'
import Link from 'next/link'
import {Send, Facebook, Twitter, Instagram, Linkedin} from 'lucide-react'

const Footer = () => {
  return (
    <div className="px-16 py-16 md:px-16 lg:px-24 w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col gap-3">
          <Image
            src="/images/lightlogo.png"
            alt="logo"
            width={205}
            height={145}
            className="contain"
          />
          <h4 className="font-semibold text-xl text-white">Address</h4>
          <p className="text-gray-400 text-base">
            Dichemso-Kumasi. Off Airport Roundabout to Manhyia Palace
          </p>

          <h4 className="font-semibold text-xl text-white mt-2">Contact Us</h4>
          <p className="text-gray-400 text-base">+233 32 200 8282</p>
          <p className="text-gray-400 text-base">+233 24 656 2377</p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-xl text-white">Popular Search</h4>
          <Link className="text-gray-400 text-base" href="/">
            Apartment for Rent
          </Link>
          <Link className="text-gray-400 text-base" href="/">
            Land Acquisition
          </Link>
          <Link className="text-gray-400 text-base" href="/">
            Mortgage
          </Link>
          <Link className="text-gray-400 text-base" href="/">
            House Purchase
          </Link>

          <h4 className="font-semibold text-xl text-white mt-6">Discover Properties</h4>
          <Link className="text-gray-400 text-base" href="/">
            Kumasi
          </Link>
          <Link className="text-gray-400 text-base" href="/">
            Accra
          </Link>
          <Link className="text-gray-400 text-base" href="/">
            Takoradi
          </Link>
          <Link className="text-gray-400 text-base" href="/">
            Sunyani
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-xl text-white mt-2">Quick Links</h4>
          <Link className="text-gray-400 text-base" href="/">
            All Properties
          </Link>
          <Link className="text-gray-400 text-base" href="/">
            Pricing Plans
          </Link>
          <Link className="text-gray-400 text-base" href="/">
            Our Services
          </Link>
          <Link className="text-gray-400 text-base" href="/">
            Contact Support
          </Link>
          <Link className="text-gray-400 text-base" href="/">
            Terms of Use
          </Link>
          <Link className="text-gray-400 text-base" href="/">
            FAQs
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-xl text-white mt-2">Subscribe to News Letter</h4>
          <div className="flex bg-white px-2 py-3 rounded-3xl">
            <input type="text" className="flex flex-1 outline-none bg-transparent text-gray-900" placeholder="Enter your email" />
            <button><Send color="darkblue" size={24} /></button>
          </div>
          <h4 className="font-semibold text-xl text-white mt-2">Follow Us</h4>
          <ul className="flex gap-4 justify-start">
            <Link href="/"><Facebook color="gray" size={28} /></Link>
            <Link href="/"><Twitter color="gray" size={28} /></Link>
            <Link href="/"><Instagram color="gray" size={28} /></Link>
            <Link href="/"><Linkedin color="gray" size={28} /></Link>
          </ul>
        </div>
      </div>

      <div className="border-t mt-10 border-t-gray-500 flex justify-between pt-8">
        <p className="text-gray-400 text-base">© L.H.C - All rights reserved</p>
        <p className="text-gray-400 text-base">Privacy • Terms • Sitemap</p>
      </div>
    </div>
  );
}

export default Footer