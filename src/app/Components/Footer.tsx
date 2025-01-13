import Image from "next/image";
import React from "react";
import { TbWorld } from "react-icons/tb";

export const Footer = () => {
  return (
    <div className="bg-blue-950 mt-16 md:mt-32 font-inter">
      {/* Main Footer Grid */}
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-10">
          {/* Product Section */}
          <div className="space-y-4">
            <h3 className="text-white text-xl md:text-2xl font-extrabold">
              Product
            </h3>
            <div className="flex flex-col space-y-3 text-white text-sm">
              <a href="#" className="hover:text-gray-300 transition-colors">Online whiteboard</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Apps & Integrations</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Templates</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Miroverse</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Miro Developer Platform</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Miro for Devices</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Security & Compliance</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Accessibility</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Changelog</a>
            </div>
            <a href="#" className="inline-block text-gray-400 text-sm underline hover:text-white transition-colors">
              View demo →
            </a>
          </div>

          {/* Solutions Section */}
          <div className="space-y-4">
            <h3 className="text-white text-xl md:text-2xl font-extrabold">
              Solutions
            </h3>
            <div className="flex flex-col space-y-3 text-white text-sm">
              <a href="#" className="hover:text-gray-300 transition-colors">Meetings and Workshops</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Brainstorming & Ideation</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Agile Workflows</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Diagramming</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Research & Design</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Strategy & Planning</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Mind Map</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Concept Map</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Online Sticky Notes</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Flowchart</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Wireframing</a>
            </div>
          </div>

          {/* Resources Section */}
          <div className="space-y-4">
            <h3 className="text-white text-xl md:text-2xl font-extrabold">
              Resources
            </h3>
            <div className="flex flex-col space-y-3 text-white text-sm">
              <a href="#" className="hover:text-gray-300 transition-colors">Miro Academy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Help Center</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Blog</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Status</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Miro Community</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Miro Professional Network</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Miro Experts Directory</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Miro Events</a>
            </div>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="text-white text-xl md:text-2xl font-extrabold">
              Company
            </h3>
            <div className="flex flex-col space-y-3 text-white text-sm">
              <a href="#" className="hover:text-gray-300 transition-colors">About us</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Careers 🚀</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Miro in the News</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Customer Stories</a>
            </div>
          </div>

          {/* Plans Section */}
          <div className="space-y-4">
            <h3 className="text-white text-xl md:text-2xl font-extrabold">
              Plans and Pricing
            </h3>
            <div className="flex flex-col space-y-3 text-white text-sm">
              <a href="#" className="hover:text-gray-300 transition-colors">Pricing</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Business</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Enterprise</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Consultants</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Education</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Startups</a>
              <a href="#" className="hover:text-gray-300 transition-colors">NPOs</a>
            </div>
            <a href="#" className="inline-block text-gray-400 text-sm underline hover:text-white transition-colors">
              Contact sales
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <hr className="border-gray-700 mx-4 md:mx-10" />
      
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center">
          {/* Social Icons */}
          <div className="flex gap-4 md:gap-7 items-center flex-wrap justify-center">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image src="/images/icon1.png" alt="logo" width={20} height={20} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image src="/images/icon2.png" alt="logo" width={20} height={20} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image src="/images/icon3.png" alt="logo" width={20} height={20} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image src="/images/icon4.png" alt="logo" width={20} height={20} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image src="/images/icon5.png" alt="logo" width={25} height={25} />
            </a>
            <div className="flex items-center gap-2">
              <a href="#" className="flex items-center gap-1 text-white text-sm hover:text-gray-300 transition-colors">
                <TbWorld size={20} />
                <span>EN</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 md:gap-7 justify-center text-sm text-white">
            <a href="#" className="hover:text-gray-300 transition-colors">© 2025 Miro</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Manage Cookies</a>
          </div>
        </div>
      </div>
    </div>
  );
};
