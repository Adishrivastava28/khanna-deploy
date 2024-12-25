import React from "react";
import Image from "next/image"; // Import Next.js Image component

import abtimg from "./addProperty.jpg"; // Adjust the path if needed
import { Button } from "@/components/ui/button"; // Import ShadCN Button
import Link from "next/link";

const PropertyAdd: React.FC = () => {
  return (
    <div className="md:flex h-auto my-10 mx-5 p-6  rounded-lg ">
      {/* Left Image Section */}
      <div className="w-full md:w-2/4 flex justify-center items-center mb-6 md:mb-0">
        <Image
          className="rounded-lg border"
          src={abtimg}
          alt="Real Estate Assistance"
          width={700} // Set the width for the image
          height={500} // Set the height for the image
          objectFit="cover" // Ensures the image looks good in the container
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-2/4  flex flex-col justify-center md:px-6">
        <h2 className=" text-base    sm:text-2xl font-semibold text-gray-800 mb-4">
          Ready to Sell Your Property?
        </h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-lg">
          Looking to sell your property with ease? Add your property details,
          and well handle the rest! Our dedicated team ensures your property
          gets the attention it deserves, connecting you with the right buyers
          and securing the best deals. Trust us to make selling your property
          seamless and hassle-free.
        </p>
        <Link href={"/contact"}>
        <Button variant="default" className="w-48">
          Add Property
        </Button></Link>
      </div>
    </div>
  );
};

export default PropertyAdd;
