"use client"
import { TbWorld } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import Image from 'next/image'
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='container mx-auto font-inter'>
      <div className="flex justify-between items-center px-4 mt-5 md:mt-10">
        {/* Logo */}
        <div className="pb-2">
          <Image src="/images/logo.png" alt="logo" width={110} height={60} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <ul className="flex gap-5">
            <li>
              <a href="#" className="hover:text-blue-500 transition flex items-center gap-2">
                Product
                <FaAngleDown size={10}/>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition flex items-center gap-2">
                Solutions
                <FaAngleDown size={10}/>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition flex items-center gap-2">
                Resources
                <FaAngleDown size={10}/>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">Enterprise</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">Pricing</a>
            </li>
          </ul>
        </div>

        {/* Desktop Right Menu */}
        <div className="hidden lg:flex gap-5 items-center">
          <ul className="flex gap-5 items-center">
            <li>
              <div className="flex items-center gap-2">
                <a href="#" className="flex items-center gap-1 text-sm hover:text-blue-500 transition">
                  <TbWorld size={20}/>
                  <span>EN</span>
                </a>
              </div>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">Contact Sales</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">Login</a>
            </li>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-3xl h-10 hover:bg-blue-600 transition-colors">
              <div className="flex items-center gap-2">
                <span className="text-sm">Sign up free</span>
                <FaArrowRight size={15}/>
              </div>
            </button>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-gray-600 hover:text-blue-500 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed top-0 right-0 w-[80%] sm:w-[60%] md:w-[50%] h-full bg-white shadow-xl z-50 transition-transform">
            <div className="p-5">
              <button 
                className="absolute top-5 right-5 text-gray-600 hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaTimes size={24} />
              </button>

              <div className="mt-16 space-y-8">
                {/* Mobile Navigation Links */}
                <ul className="space-y-6">
                  <li>
                    <a href="#" className="flex items-center justify-between text-lg hover:text-blue-500 transition">
                      Product
                      <FaAngleDown size={12}/>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center justify-between text-lg hover:text-blue-500 transition">
                      Solutions
                      <FaAngleDown size={12}/>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center justify-between text-lg hover:text-blue-500 transition">
                      Resources
                      <FaAngleDown size={12}/>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-lg hover:text-blue-500 transition">Enterprise</a>
                  </li>
                  <li>
                    <a href="#" className="text-lg hover:text-blue-500 transition">Pricing</a>
                  </li>
                </ul>

                {/* Mobile Right Menu Items */}
                <div className="space-y-6 pt-6 border-t">
                  <div className="flex items-center gap-2">
                    <a href="#" className="flex items-center gap-1 text-lg hover:text-blue-500 transition">
                      <TbWorld size={20}/>
                      <span>EN</span>
                    </a>
                  </div>
                  <a href="#" className="block text-lg hover:text-blue-500 transition">Contact Sales</a>
                  <a href="#" className="block text-lg hover:text-blue-500 transition">Login</a>
                  <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-3xl h-12 hover:bg-blue-600 transition-colors">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg">Sign up free</span>
                      <FaArrowRight size={15}/>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Overlay */}
        {isMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </div>
  )
}

