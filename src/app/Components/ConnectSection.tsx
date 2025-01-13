import React from "react";
import Image from "next/image";
export const ConnectSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center justify-center mt-16 md:mt-28 font-inter">
        <div className="flex justify-center lg:justify-start order-2 lg:order-1">
          <Image
            src="/images/connect.png"
            alt="connect"
            width={500}
            height={500}
            className="w-full max-w-[500px] h-auto"
          />
        </div>
        <div className="text-center lg:text-left order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
            Connect your tools,
            <br /> close your tabs
          </h2>
          <p className="text-md text-gray-500 mt-5">
            Whether you want to edit your Google Docs, resolve
            Jira issues, or collaborate over Zoom, Miro has 100+
            integrations with tools you already use and love.
          </p>
          <a
            href=""
            className="inline-block mt-4 text-blue-500 hover:text-blue-600 hover:font-extrabold hover:underline transition-colors"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};
