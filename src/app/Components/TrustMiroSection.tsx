import React from "react";

export const TrustMiroSection = () => {
  return (
    <div className="font-inter mt-28 pt-20 pb-20">
      <div className="container mx-auto">
        <div className="justify-center text-center">
          <h2 className="text-5xl font-bold text-blue-950 mb-5">
            Why companies large <br /> and small trust Miro
          </h2>
          <a href="#" className="text-blue-950 text-sm underline">
            Contact Sales to request a demo
          </a>
        </div>
        <div className="grid grid-rows-2 grid-cols-3 gap-10 mt-20 justify-center items-center text-center">
          <div>
            <h2 className="text-6xl font-bold text-blue-950">ISO</h2>
            <p className="text-sm text-blue-950 mt-5">
              ISO-27001 enterprise-grade security compliant
            </p>
          </div>
          <div>
            <h2 className="text-6xl font-bold text-blue-950">#1</h2>
            <p className="text-sm text-blue-950 mt-5">
                Visual Collaboration Platform on G2
            </p>
          </div>
          <div>
            <h2 className="text-6xl font-bold text-blue-950">99%</h2>
            <p className="text-sm text-blue-950 mt-5">
                of the Fortune 100 are customers
            </p>
          </div>
          <div>
            <h2 className="text-6xl font-bold text-blue-950 mt-10">1,000+</h2>
            <p className="text-sm text-blue-950 mt-5">
                community- and expert-built templates
            </p>
          </div>
          <div>
            <h2 className="text-6xl font-bold text-blue-950 mt-10">45M+</h2>
            <p className="text-sm text-blue-950 mt-5">
                users around the world
            </p>
          </div>
          <div>
            <h2 className="text-6xl font-bold text-blue-950 mt-10">100+</h2>
            <p className="text-sm text-blue-950 mt-5">
                integrations with technology partners
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
