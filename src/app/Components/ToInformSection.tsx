import React from "react";
import { FaArrowRight } from "react-icons/fa";

export const ToInformSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center mt-20 md:mt-40">
        <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center">
              Collaborate without<br/> constraints
            </h2>
            <p className="absolute -right-12 md:-right-20 -top-8 md:-top-10 bg-yellow-400 py-1 px-3 rounded-lg text-xs font-bold rotate-12">
              YOUR IDEA STARTS HERE
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8 md:gap-10">
            <div className="p-4">
                <h3 className="text-xl md:text-2xl font-bold">Free forever</h3>
                <p className="text-gray-500 mt-4">
                  Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. 
                  Signing up with your work email lets you bring in your team faster. See our 
                  <a href="#" className="text-blue-500 hover:underline ml-1">pricing plans</a> for more features.
                </p>
            </div>
            <div className="p-4">
                <h3 className="text-xl md:text-2xl font-bold">Easy integrations</h3>
                <p className="text-gray-500 mt-4">
                  Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, 
                  so your workflow is seamless. View the full list in our
                  <a href="#" className="text-blue-500 hover:underline ml-1">Marketplace</a>.
                </p>
            </div>
            <div className="p-4">
                <h3 className="text-xl md:text-2xl font-bold">Security first</h3>
                <p className="text-gray-500 mt-4">
                  We treat your data like you would — with the utmost care. We follow industry-leading security 
                  standards and give you tools to protect intellectual property. Learn more at our 
                  <a href="#" className="text-blue-500 hover:underline ml-1">Trust Center</a>.
                </p>
            </div>
        </div>
        <div className="mt-8 md:mt-10">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-3xl h-10 transition-colors">
            <div className="flex items-center gap-2">
              <span className="text-sm">Sign up free</span>
              <FaArrowRight size={15} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
