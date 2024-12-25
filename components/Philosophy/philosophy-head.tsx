// components/Philosophy.tsx
import React from "react";
import Image from "next/image";


// Define the functional component with proper typing
const PhilosophyHead: React.FC = () => {
  return (
    <div className="flex flex-col items-center -mt-24 justify-center h-screen relative">
      {/* Use Next.js Image component for optimized image rendering */}
      <div className=" w-full h-full">
        <Image
          className="object-cover w-screen h-screen"
          src="/tt.jpg" // Use a relative path for the image in the public folder
          alt="Full screen"
          fill
          
          priority // Prioritize loading this image for performance
        />
      </div>
      <div className="  font-serif font-semibold right-0 z-10 bg-gray-950 bg-opacity-50 text-white text-center p-6">
        <p className=" md:text-base text-xs md:px-20 md:pb-6 opacity-80">
          <span className="block text-2xl font-bold uppercase">
            PHILOSOPHY At KHANNA REALESTATE
          </span>
          <span className="block text-lg mt-4">
            We have always strived for benchmark quality, customer-centric
            approach, robust engineering, in-house research, uncompromising
            business ethics, timeless values, and transparency in all spheres of
            business conduct. This has helped us in becoming the most preferred
            real estate brand in India.
          </span>
        </p>
      </div>
    </div>
  );
};

export default PhilosophyHead;
