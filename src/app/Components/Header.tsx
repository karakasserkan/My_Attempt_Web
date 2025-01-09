import { TbWorld } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image'
import { FaAngleDown } from "react-icons/fa";

export const Header = () => {
  return (
    <div className='container mx-auto font-inter'>
      <div className="flex justify-between items-center mt-10">
        <div className="pb-2">
          <Image src="/images/logo.png" alt="logo" width={110} height={60} />
        </div>
        <div>
          <ul className="flex gap-5">
            <li><a href="#" className="hover:text-blue-500 transition flex items-center gap-2">Product
              <FaAngleDown size={10}/>
              </a></li>
            <li><a href="#" className="hover:text-blue-500 transition flex items-center gap-2">Solutions
            <FaAngleDown size={10}/>
            </a></li>
            <li><a href="#" className="hover:text-blue-500 transition flex items-center gap-2">Resources
            <FaAngleDown size={10}/>
            </a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Enterprise</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Pricing</a></li>
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <ul className="flex gap-5 items-center">
            <li>
              <div className="flex items-center gap-2">
                <a href="#" className="flex items-center gap-1 text-sm hover:text-blue-500 transition">
                  <TbWorld size={20}/>
                  <span>EN</span>
                </a>
              </div>
            </li>
            <li><a href="#" className="hover:text-blue-500 transition">Contact Sales</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Login</a></li>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-3xl h-10">
              <div className="flex items-center gap-2">
                <a href="#" className="flex items-center gap-2">
                  <span className="text-sm">Sign up free</span>
                  <FaArrowRight size={15}/>
                </a>
              </div>
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}

