import React from "react";
import Image from "next/image"; // Importing Next.js Image component
import img from "./Property-main.jpeg"; // Replace with a relevant background image

const PropertyHeader = () => {
  return (
    <div className="flex -mt-24 flex-col items-center justify-center h-screen relative">
      {/* Background Image */}
      <div className=" w-full h-full">
        <Image
          src={img}
          alt="Property Showcase  Background"
          layout="fill" // Ensures the image covers the entire container
          objectFit="cover" // Makes the image cover the area while maintaining aspect ratio
          quality={90} // Sets the image quality
          priority // Ensures the image loads with high priority
        />
      </div>

      {/* Overlay Section */}
      <div className=" bottom-0 left-0 font-serif font-semibold right-0 z-10 bg-gray-950 bg-opacity-50 text-white text-center p-6">
        <p className=" md:text-base text-xs md:px-20 md:pb-6 opacity-80">
          <span className="block text-2xl font-bold uppercase">
            Properties at Khanna Real Estate
          </span>
          <span className="block text-lg mt-4">
            Discover the perfect property that meets your needs and dreams. At
            Khanna Real Estate, we take pride in offering a wide range of
            properties to cater to diverse requirements. Whether you re looking
            for your dream home, a reliable investment opportunity, or the ideal
            commercial space, we ensure transparency, trust, and excellence at
            every step.
          </span>
          <span className="block text-lg mt-4">
            Our team of dedicated professionals is here to assist you in making
            informed decisions, providing unparalleled support, and connecting
            you with properties that truly stand out in quality and value.
          </span>
        </p>
      </div>
    </div>
  );
};

export default PropertyHeader;
