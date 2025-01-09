import Image from "next/image";
import React from "react";
import { TbWorld } from "react-icons/tb";

export const Footer = () => {
  return (
    <div className="bg-blue-950 mt-32 font-inter">
      <div className="grid grid-cols-5 mx-10 pt-10 pb-24">
        {/* Product Section */}
        <div>
          <a href="#" className="text-white text-2xl font-extrabold mb-10">
            Product
          </a>
          <div className="text-white text-sm pb-5">
            <p>
              Online whiteboard <br />
            </p>
            <p>
              Apps & Integrations <br />
            </p>
            <p>
              Templates <br />
            </p>
            <p>
              Miroverse <br />
            </p>
            <p>Miro Developer Platform</p>
            <p>
              Miro for Devices <br />
            </p>
            <p>Security & Compliance</p>
            <p>
              Accessibility <br />
            </p>
            <p>Changelog</p>
          </div>
          <a
            href="#"
            className="text-gray-400 text-sm underline hover:text-white"
          >
            View demo →
          </a>
        </div>
        {/* Solutions Section */}
        <div>
          <a href="#" className="text-white text-2xl font-extrabold mb-10">
            Solutions
          </a>
          <div className="text-white text-sm pb-5">
            <p>
              Meetings and Workshops
              <br />
            </p>
            <p>
              Brainstorming & Ideation <br />
            </p>
            <p>
              Agile Workflows <br />
            </p>
            <p>
              Diagramming <br />
            </p>
            <p>Research & Design</p>
            <p>
              Strategy & Planning <br />
            </p>
            <p>Mind Map</p>
            <p>
              Concept Map <br />
            </p>
            <p>
              Online Sticky Notes
              <br />
            </p>
            <p>
              Flowchart
              <br />
            </p>
            <p>Wireframing</p>
          </div>
        </div>
        {/* Resources Section */}
        <div>
          <a href="#" className="text-white text-2xl font-extrabold mb-10">
            Resources
          </a>
          <div className="text-white text-sm pb-5">
            <p>
              Miro Academy
              <br />
            </p>
            <p>
              Help Center <br />
            </p>
            <p>
              Blog <br />
            </p>
            <p>
              Status <br />
            </p>
            <p>Miro Community</p>
            <p>
              Miro Professional Network <br />
            </p>
            <p>Miro Experts Directory</p>
            <p>
              Miro Events <br />
            </p>
          </div>
        </div>
        {/* Company Section */}
        <div>
          <a href="#" className="text-white text-2xl font-extrabold mb-10">
            Company
          </a>
          <div className="text-white text-sm pb-5">
            <p>
              About us <br />
            </p>
            <p>
              Careers 🚀 <br />
            </p>
            <p>
              Miro in the News <br />
            </p>
            <p>
              Customer Stories <br />
            </p>
          </div>
        </div>
        {/* Plans and Pricing Section */}
        <div>
          <a href="#" className="text-white text-2xl font-extrabold mb-10">
            Plans and Pricing
          </a>
          <div className="text-white text-sm pb-5">
            <p>
              Pricing
              <br />
            </p>
            <p>
              Business <br />
            </p>
            <p>
              Enterprise <br />
            </p>
            <p>
              Consultants
              <br />
            </p>
            <p>Education</p>
            <p>
              Startups <br />
            </p>
            <p>NPOs</p>
          </div>
          <a
            href="#"
            className="text-gray-400 text-sm underline hover:text-white"
          >
            Contact sales 
          </a>
        </div>
      </div>
      <hr className="border-gray-700 mx-10" />
      <div className="pt-12 mx-10 pb-12">
        <div className="flex justify-between">
          <div>
            <ul className="flex gap-7 items-center text-white text-sm">
              <li>
                <a href="#">
                  <Image
                    src="/images/icon1.png"
                    alt="logo"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    src="/images/icon2.png"
                    alt="logo"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    src="/images/icon3.png"
                    alt="logo"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    src="/images/icon4.png"
                    alt="logo"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    src="/images/icon5.png"
                    alt="logo"
                    width={25}
                    height={25}
                  />
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <a
                    href="#"
                    className="flex items-center gap-1 text-sm hover:text-white transition"
                  >
                    <TbWorld size={20} />
                    <span>EN</span>
                  </a>
                </div>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                © 2025 Miro
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Manage Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
