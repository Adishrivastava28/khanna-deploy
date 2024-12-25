"use client";
import { useState, useEffect } from "react";
import PropertyCard from "@/components/property/PropertyCard";
import PropertyAdd from "@/components/home/PropertyAdd";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import Link from "next/link";
import PropertyHeader from "@/components/property/PropertyHeader";

// Define the property type
interface Property {
  propertyName: string;
  propertyType: string;
  price: string;
  area: string;
  location: string;
  status: string;
  transaction: string;
  plotArea: string;
  bedrooms: string;
  furnishing: string;
  propertyAge: string;
  flatNo: string;
  buildingName: string;
  street: string;
  landmark: string;
  pinCode: string;
  address: string;
  city: string;
}

export default function PropertyMain() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/getproperty?page=${page}`);

        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
          console.log(`Error: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.properties) {
          setProperties((prevProperties) => [
            ...prevProperties,
            ...data.properties,
          ]);
          setHasMore(data.hasMore);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [page]);

  const loadMore = () => {
    if (hasMore && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div>
      <div className="w-fit z-50 h-fit sticky left-1/2 transform -translate-x-1/2">
        <Link href="/">
          <Image
            src="/lg2.png" // Replace with your logo path
            alt="Logo"
            width={96}
            height={96} // Adjust the dimensions as needed
            className="w-16 sm:w-24 z-50"
          />
        </Link>
      </div>
      <PropertyHeader />

      <div className="text-3xl font-serif text-center mt-4 mb-4">
        Current Projects
      </div>
      <p className="text-lg text-gray-700 text-center mt-4 px-4 md:px-20 mb-6">
        Explore a variety of projects tailored to suit your needs, whether
        you re looking for properties to buy, rent, or invest in.
      </p>

      <div className="flex flex-wrap justify-evenly gap-1">
        {properties.map((property, index) => {
          // Calculate image index, wrapping around after 15
          const imageIndex = (index % 15) + 1; // Will loop from 1 to 15
          const imageSrc = `/propImg${imageIndex}.jpg`; // Dynamically assign image

          return (
            <PropertyCard
              key={index}
              propertyName={property.propertyName}
              propertyType={property.propertyType}
              price={property.price}
              area={property.area}
              location={property.location}
              status={property.status}
              transaction={property.transaction}
              imageSrc={imageSrc} // Pass the dynamic imageSrc
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
          );
        })}
      </div>

      {hasMore && !loading && (
        <div className="text-center mt-4">
          <button onClick={loadMore} className="btn btn-primary">
            Load More
          </button>
        </div>
      )}

      {loading && <div className="text-center mt-4">Loading...</div>}

      <PropertyAdd />
      <Footer />
    </div>
  );
}
