import React from "react";

export const TrustMiroSection = () => {
  return (
    <div className="font-inter mt-16 md:mt-28 py-10 md:py-20">
      <div className="container mx-auto px-4">
        <div className="justify-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 mb-5">
            Why companies large and small trust Miro
          </h2>
          <a href="#" className="text-blue-950 text-sm underline hover:text-blue-800 transition-colors">
            Contact Sales to request a demo
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-10 md:mt-20">
          {/* ISO */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950">ISO</h2>
            <p className="text-sm text-blue-950 mt-3 md:mt-5">
              ISO-27001 enterprise-grade security compliant
            </p>
          </div>

          {/* #1 */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950">#1</h2>
            <p className="text-sm text-blue-950 mt-3 md:mt-5">
              Visual Collaboration Platform on G2
            </p>
          </div>

          {/* 99% */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950">99%</h2>
            <p className="text-sm text-blue-950 mt-3 md:mt-5">
              of the Fortune 100 are customers
            </p>
          </div>

          {/* 1,000+ */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950">1,000+</h2>
            <p className="text-sm text-blue-950 mt-3 md:mt-5">
              community- and expert-built templates
            </p>
          </div>

          {/* 45M+ */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950">45M+</h2>
            <p className="text-sm text-blue-950 mt-3 md:mt-5">
              users around the world
            </p>
          </div>

          {/* 100+ */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950">100+</h2>
            <p className="text-sm text-blue-950 mt-3 md:mt-5">
              integrations with technology partners
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
