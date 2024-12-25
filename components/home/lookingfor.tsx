import React from "react";
import Image from "next/image";
import officeImg from "./look/rental.png";
import residentialImg from "./look/home.png";
import landImg from "./look/land.png";
import commercialImg from "./look/commercial.png";

const LookingFor: React.FC = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-light  text-[#35374b] mb-9 mt-10">
        WHAT ARE YOU LOOKING FOR?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Office Space */}
        <div className="text-center">
          <Image
            src={officeImg}
            alt="Office Space"
            width={70}
            height={70}
            className="mx-auto"
          />
          <h3 className="mt-2 font-bold">OFFICE SPACE</h3>
          <p className="mt-2">
            Give Your Business a Presence in Prime Location, Witness the most
            luxurious working atmosphere.
          </p>
        </div>

        {/* Residential Apartment */}
        <div className="text-center">
          <Image
            src={residentialImg}
            alt="Residential Apartment"
            width={70}
            height={70}
            className="mx-auto"
          />
          <h3 className="mt-2 font-bold">RESIDENTIAL APARTMENT</h3>
          <p className="mt-2">
            Find verified listings of luxury residential apartments for sale /
            Rent posted from verified owners.
          </p>
        </div>

        {/* Land */}
        <div className="text-center">
          <Image
            src={landImg}
            alt="Land"
            width={70}
            height={70}
            className="mx-auto"
          />
          <h3 className="mt-2 font-bold">LAND</h3>
          <p className="mt-2">
            Buy, rent or sale of residential and commercial land in your
            location.
          </p>
        </div>

        {/* Commercial Property */}
        <div className="text-center">
          <Image
            src={commercialImg}
            alt="Commercial Property"
            width={70}
            height={70}
            className="mx-auto"
          />
          <h3 className="mt-2 font-bold">COMMERCIAL</h3>
          <p className="mt-2">
            Get details of all the Commercial properties For Sale in prime
            locations, Office Space, Shops, Showrooms etc.
          </p>
        </div>
      </div>
    </>
  );
};

export default LookingFor;
