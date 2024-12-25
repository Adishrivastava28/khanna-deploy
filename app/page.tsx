import Footer from "@/components/footer/Footer";
import Abt from "@/components/home/about";
import { CarouselSize } from "@/components/home/Carousel";

import Loc from "@/components/home/loc";
import LookingFor from "@/components/home/lookingfor";
import PropertyAdd from "@/components/home/PropertyAdd";
import PropertyCard from "@/components/property/PropertyCard";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const properties = [
    {
      propertyName: "Villa 1",
      propertyType: "Villa",
      price: "24 Cr Negotiable",
      area: "1 Acre",
      location: "ECR, Muthukadu",
      status: "For Sale",
      transaction: "Sale",
      imageSrc: "/images/property-1.jpeg", // Image for the property
      plotArea: "1 Acre",
      bedrooms: "4 BHK",
      furnishing: "Unfurnished",
      propertyAge: "New",
      flatNo: "N/A",
      buildingName: "N/A",
      street: "ECR",
      landmark: "Near Muthukadu",
      pinCode: "N/A",
      address: "ECR, Muthukadu",
      city: "Chennai",
      aboutProperty:
        "Swimming pool, Beautiful garden area, Driveway with car parking, North facing plot",
    },
    {
      propertyName: "Villa 2",
      propertyType: "Villa",
      price: "24 Cr Negotiable",
      area: "1 Acre",
      location: "ECR, Muthukadu",
      status: "For Sale",
      transaction: "Sale",
      imageSrc: "/images/property-2.jpeg", // Image for the property
      plotArea: "1 Acre",
      bedrooms: "7 BHK",
      furnishing: "Unfurnished",
      propertyAge: "New",
      flatNo: "N/A",
      buildingName: "N/A",
      street: "ECR",
      landmark: "Near Muthukadu",
      pinCode: "N/A",
      address: "ECR, Muthukadu",
      city: "Chennai",
      aboutProperty:
        "Swimming pool, Beautiful garden area, Driveway with car parking, North facing plot",
    },
    {
      propertyName: "Villa 3",
      propertyType: "Villa",
      price: "7.5 Cr Negotiable",
      area: "2.2 Grounds, 6500 sqft",
      location: "ECR, Muthukadu",
      status: "For Sale",
      transaction: "Sale",
      imageSrc: "/images/property-3.jpeg", // Image for the property
      plotArea: "2.2 Grounds, 6500 sqft",
      bedrooms: "4 BHK",
      furnishing: "Unfurnished",
      propertyAge: "New",
      flatNo: "N/A",
      buildingName: "N/A",
      street: "ECR",
      landmark: "Near Muthukadu",
      pinCode: "N/A",
      address: "ECR, Muthukadu",
      city: "Chennai",
      aboutProperty: "Swimming pool, Beautiful garden area, Beach View",
    },
    {
      propertyName: "DLF Commanders Court",
      propertyType: "Apartment",
      price: "7.2 Cr + Reg (Negotiable)",
      area: "4036 sqft",
      location: "Egmore",
      status: "For Sale",
      transaction: "Sale",
      imageSrc: "/propImg3.jpg", // Image for the property
      plotArea: "4036 sqft",
      bedrooms: "4 BHK",
      furnishing: "Fully Furnished",
      propertyAge: "New",
      flatNo: "N/A",
      buildingName: "DLF Commanders Court",
      street: "Egmore",
      landmark: "Near Egmore Station",
      pinCode: "N/A",
      address: "Egmore",
      city: "Chennai",
      aboutProperty:
        "4 BHK Duplex Penthouse, Fully Furnished Flat, Luxury Interiors, Handover in December 2024",
    },
  ];


  return (
    <>
      <div className="w-fit z-50 h-fit sticky  left-1/2 transform -translate-x-1/2 ">
        <Link href="/">
          <Image
            src="/lg2.png" // Replace with your logo path
            alt="Logo"
            width={96}
            height={96} // Adjust the dimensions as needed
            className="w-16 sm:w-24 z-50"
            //w-16 sm:w-20 md:w-24 lg:w-28 z-50
          />
        </Link>
      </div>
      <CarouselSize />
      <Abt />
      <LookingFor />
      <Loc></Loc>
      <div className="p-4">
        <div className="text-4xl mt-5 text-center mb-5">Featured Projects</div>
        <div className="flex flex-wrap justify-evenly gap-1">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              propertyName={property.propertyName}
              propertyType={property.propertyType}
              price={property.price}
              area={property.area}
              location={property.location}
              status={property.status}
              transaction={property.transaction}
              imageSrc={property.imageSrc}
              plotArea={property.plotArea}
              bedrooms={property.bedrooms}
              furnishing={property.furnishing}
              propertyAge={property.propertyAge}
              flatNo={property.flatNo}
              buildingName={property.buildingName}
              street={property.street}
              landmark={property.landmark}
              pinCode={property.pinCode}
              address={property.address}
              city={property.city}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-auto w-full space-y-4 mb-4">
        <Link
          href={"/properties"}
          className="flex flex-col items-center justify-center h-auto w-full space-y-4 mb-4"
        >
          {" "}
          <Button variant={"outline"} className="w-3/4 sm:w-1/3">
            Explore More
          </Button>
        </Link>
      </div>

      <PropertyAdd />
      {/* <DropdownButton /> */}
      <Footer></Footer>
    </>
  );
}
