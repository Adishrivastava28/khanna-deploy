import React from "react";
import Image from "next/image"; // Import Next.js Image component

import abtimg from "./abtimg.jpg"; // Adjust the path if needed


const Abt: React.FC = () => {
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
      <div className="w-full md:w-2/4 flex flex-col justify-center px-6">
        <div>
          <h2 className="font-light text-3xl">PASSION AT WORK</h2>
        </div>
        <div
          className="w-full h-80 overflow-auto max-h-80 md:mt-6 text-gray-600"
          id="abttxt"
        >
          Khanna Real Estate Solutions is a customer-centric consultancy,
          committed to redefining your real estate experience. What sets us
          apart is our unwavering dedication to prioritizing your needs. With a
          focus on delivering personalized solutions, we ensure that your
          requirements take center stage. Our distinctiveness lies in securing
          the best pricing for our clients, making every transaction a
          value-driven success. At Khanna Real Estate Solutions, your
          satisfaction is not just a goal  its our commitment.
          <br />
          <br />
          Khanna Real Estate Solutions is a premier consultancy firm
          specializing in residential and commercial real estate. Our dedicated
          team provides expert guidance, personalized strategies, and market
          insights to empower clients in making informed decisions.
        </div>
       
      </div>
    </div>
  );
};

export default Abt;
