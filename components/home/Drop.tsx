"use client"
import React, { useState } from "react";

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const handleLocationSelect = (location:string) => {
    setSelectedLocation(location);
    setIsOpen(false); // Close the dropdown after selecting a location
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full md:w-1/2 relative inline-block">
        <button
          className="inline-flex items-center mb-4 gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 w-full justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
        {selectedLocation ? `${selectedLocation}`:"Select a location" }
        </button>
        {isOpen && (
          <div className="absolute z-10 w-full mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              <div
                className="block px-4 text-center py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleLocationSelect("Kilpauk")}
              >
                Kilpauk
              </div>
              <div
                className="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleLocationSelect("Anna Nagar")}
              >
                Anna Nagar
              </div>
              <div
                className="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleLocationSelect("Egmore")}
              >
                Egmore
              </div>
              <div
                className="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleLocationSelect("Nungambakkam")}
              >
                Nungambakkam
              </div>
              <div
                className="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleLocationSelect("Alwarpet")}
              >
                Alwarpet
              </div>
              <div
                className="block px-4 text-center py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleLocationSelect("Besant Nagar")}
              >
                Besant Nagar
              </div>
              <div
                className="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleLocationSelect("T nagar")}
              >
                T nagar
              </div>
              <div
                className="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleLocationSelect("Porur")}
              >
                Porur
              </div>
              <div
                className="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleLocationSelect("ECR")}
              >
                ECR
              </div>
              <div
                className="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleLocationSelect("OMR")}
              >
                OMR
              </div>
              <div
                className="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleLocationSelect("Velachery")}
              >
                Velachery
              </div>
            </div>
          </div>
        )}
      </div>

      {selectedLocation === "Kilpauk" && (
        <div className="w-[100%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15544.966758133509!2d80.2387587!3d13.083863250000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526678dadf9ab5%3A0xf57a2071e1b6a4fb!2sKilpauk%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1713691925491!5m2!1sen!2sin"
            className="w-full h-96"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
      {selectedLocation === "Anna Nagar" && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31089.16682857616!2d80.18698691132968!3d13.089941333111025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264078822719b%3A0xbda01077b89581e2!2sAnna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1713690444633!5m2!1sen!2sin"
          className="w-full h-96"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
      {selectedLocation === "Egmore" && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.774790503032!2d80.26024500000001!3d13.07104244999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52660d4d9305c9%3A0xe2896dfdb1f85568!2sEgmore%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1713692062321!5m2!1sen!2sin"
          className="w-full h-96"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
      {selectedLocation === "Nungambakkam" && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15546.402682112763!2d80.24304725!3d13.061071350000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526667a7d738bf%3A0xf707957536204422!2sNungambakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1713692160146!5m2!1sen!2sin"
          className="w-full h-96"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}

      {selectedLocation === "Alwarpet" && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15548.170548983522!2d80.2513566!3d13.032956850000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b4687f6ae9%3A0x671019410bd08a22!2sAlwarpet%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1713692193431!5m2!1sen!2sin"
          className="w-full h-96"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
      {selectedLocation === "Besant Nagar" && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15550.34904197528!2d80.26823719999997!3d12.998229950000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267fadf0cdca9%3A0x54228587f3eb3efd!2sBesant%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1713692222907!5m2!1sen!2sin"
          className="w-full h-96"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
      {selectedLocation === "T nagar" && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.564986795056!2d80.23865384999996!3d13.042593849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526655a5da2371%3A0x4954f49743f04af0!2sT.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1713692262956!5m2!1sen!2sin"
          className="w-full h-96"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
      {selectedLocation === "Porur" && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31095.75617453228!2d80.15462815000001!3d13.037612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52611b90488f51%3A0x9665a1353b333074!2sPorur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1713692315749!5m2!1sen!2sin"
          className="w-full h-96"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
      {selectedLocation === "ECR" && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.954654940449!2d80.2500323!3d12.910636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53616f4c9ea6dd%3A0xc50f0832755a9625!2sEast%20Coast%20Rd%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1713692384761!5m2!1sen!2sin"
          className="w-full h-96"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
      {selectedLocation === "OMR" && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15567.889028953028!2d80.18216793250862!3d12.71523282741204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52513c9ba5777d%3A0x721ea4180dd7c4ea!2sOMR%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1713692447288!5m2!1sen!2sin"
          className="w-full h-96"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
      {selectedLocation === "Velachery" && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31103.091590235374!2d80.21977195!3d12.979113899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d9ff2065a3b%3A0x66435015604038cc!2sVelachery%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1713692478836!5m2!1sen!2sin"
          className="w-full h-96"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </div>
  );
};

export default DropdownButton;
