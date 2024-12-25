"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";

// Define the paths for the images and the corresponding text for each image
const images = ["/img/a2.jpg", "/img/a1.jpeg", "/img/a3.jpg"];
const texts = [
  {
    heading: "FIND YOUR DREAM HOME",
    subheading: "Where Memories Begin",
    buttonText: "Learn More",
  },
  {
    heading: "DISCOVER PREMIUM LAND",
    subheading: "Exceptional land, Exceptional opportunities",
    buttonText: "Learn More",
  },
  {
    heading: "LOCATE YOUR IDEAL COMMERCIAL PROPERTY",
    subheading: "The best spaces for your business needs",
    buttonText: "Learn More",
  },
];

export function CarouselSize() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Auto-move carousel every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full h-screen -mt-24" // Make the carousel take full width and height of the screen
    >
      <CarouselContent className="flex w-full h-full">
        {/* Ensure content takes full width and height */}
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="w-full h-full flex items-center justify-center relative" // Make each item take full screen
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            <div className="w-full h-full flex items-center justify-center relative">
              <Card className="w-full h-full">
                <CardContent className="flex items-center justify-center w-full h-full p-0">
                  <img
                    src={image}
                    alt={`carousel-image-${index}`}
                    className="object-cover w-full h-screen rounded-lg" // Ensure the image covers the entire space
                  />
                  {/* Add overlay text */}
                  <div className="absolute inset-0 flex flex-col items-center mt-56 justify-center text-center text-white">
                    <h2 className="text-5xl font-bold mb-4">
                      {texts[index].heading}
                    </h2>
                    <p className="text-xl mb-6">{texts[index].subheading}</p>
                    <Link
                      href="/"
                      className="bg-yellow-500 text-black py-2 px-6 rounded-lg text-xl font-semibold"
                    >
                      {texts[index].buttonText}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
