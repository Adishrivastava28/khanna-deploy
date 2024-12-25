import Footer from "@/components/footer/Footer";
import Abt from "@/components/home/about";
import { CarouselSize } from "@/components/home/Carousel";
import DropdownButton from "@/components/home/Drop";
import Loc from "@/components/home/loc";
import LookingFor from "@/components/home/lookingfor";
import PropertyAdd from "@/components/home/PropertyAdd";
import PropertyCard from "@/components/property/PropertyCard";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const properties = [
    {
      propertyName: "Sunset Villa",
      propertyType: "Villa",
      price: "$750,000",
      area: "3500",
      location: "789 Pine Ave, Springfield, IL",
      status: "For Sale",
      transaction: "Sale",
      imageSrc: "/images/property-1.jpeg", // Image for the property
      plotArea: "4000",
      bedrooms: "4",
      furnishing: "Furnished",
      propertyAge: "5 years",
      flatNo: "B2",
      buildingName: "Sunset Towers",
      street: "Pine Ave",
      landmark: "Near Springfield Park",
      pinCode: "62704",
      address: "789 Pine Ave, Springfield, IL",
      city: "Springfield",
    },
    {
      propertyName: "Maple Condo",
      propertyType: "Condo",
      price: "$200,000",
      area: "1200",
      location: "101 Maple St, Springfield, IL",
      status: "For Rent",
      transaction: "Rent",
      imageSrc: "/images/property-2.jpeg", // Image for the property
      plotArea: "1500",
      bedrooms: "2",
      furnishing: "Semi-Furnished",
      propertyAge: "3 years",
      flatNo: "C1",
      buildingName: "Maple Heights",
      street: "Maple St",
      landmark: "Next to City Mall",
      pinCode: "62702",
      address: "101 Maple St, Springfield, IL",
      city: "Springfield",
    },
    {
      propertyName: "Ocean Breeze Apartment",
      propertyType: "Apartment",
      price: "$450,000",
      area: "1800",
      location: "120 Ocean Dr, Miami, FL",
      status: "For Sale",
      transaction: "Sale",
      imageSrc: "/images/property-3.jpeg", // Image for the property
      plotArea: "2000",
      bedrooms: "3",
      furnishing: "Unfurnished",
      propertyAge: "10 years",
      flatNo: "A5",
      buildingName: "Ocean Breeze",
      street: "Ocean Dr",
      landmark: "Near Miami Beach",
      pinCode: "33139",
      address: "120 Ocean Dr, Miami, FL",
      city: "Miami",
    },
    {
      propertyName: "Hilltop Mansion",
      propertyType: "Mansion",
      price: "$2,500,000",
      area: "7500",
      location: "456 Hilltop Rd, Beverly Hills, CA",
      status: "For Sale",
      transaction: "Sale",
      imageSrc: "/images/property-4.jpeg", // Image for the property
      plotArea: "10000",
      bedrooms: "6",
      furnishing: "Fully Furnished",
      propertyAge: "15 years",
      flatNo: "N/A",
      buildingName: "Hilltop Estates",
      street: "Hilltop Rd",
      landmark: "Near Beverly Hills Park",
      pinCode: "90210",
      address: "456 Hilltop Rd, Beverly Hills, CA",
      city: "Beverly Hills",
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
