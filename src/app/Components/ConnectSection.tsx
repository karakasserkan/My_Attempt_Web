import React from "react";
import Image from "next/image";
export const ConnectSection = () => {
  return (
    <div className="grid grid-cols-2 gap-20 items-center justify-center mt-28 font-inter place-items-center">
      <div>
        <Image
          src="/images/connect.png"
          alt="connect"
          width={500}
          height={500}
          className="mt-5"
        />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-blue-950">
          Connect your tools,
          <br /> close your tabs
        </h2>
        <p className="text-md text-gray-500 mt-5">
          Whether you want to edit your Google Docs, resolve <br/> Jira issues, or
          collaborate over Zoom, Miro has 100+ <br/> integrations with tools you
          already use and love.
        </p>
        <a
          href=""
          className="text-blue-500 hover:text-blue-600 hover:font-extrabold hover:underline"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};
