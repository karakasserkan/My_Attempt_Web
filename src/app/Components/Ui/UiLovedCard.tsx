import Image from "next/image";
import React from "react";

export const UiLovedCard = () => {
  return (
    <div className="font-inter">
      <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
        <div className="px-6 py-4">
          <Image
            className="w-full"
            src="/images/avatar1.png"
            alt="Sunset in the mountains"
            width={500}
            height={500}
          />
          <p className="text-gray-500 text-base mt-4">
            When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.
          </p>
        </div>
        <div className="flex items-center mt-4 px-6 pb-4">
          <Image
            className="rounded-full mr-4"
            src="/images/jonathan.png"
            alt="Avatar"
            width={50}
            height={50}
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Roxanne Mustafa</p>
            <p className="text-gray-600">Design Team Lead at VMware</p>
          </div>
        </div>
      </div>
    </div>
  );
};
