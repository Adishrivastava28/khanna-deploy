"use client"
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

type FormData = {
  name: string;
  email: string;
  msg: string;
  location: string;
  number: string;
  sub: string;
};

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    msg: "",
    location: "",
    number: "",
    sub: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    console.log(formData);
  };

  const submitHandler = async () => {
    try {
      // Make POST request
      const response = await axios.post("/api/email", formData);  // Update the endpoint to a Next.js API route
      console.log("Response:", formData);

      // Clear form data after successful submission
      setFormData({
        name: "",
        email: "",
        msg: "",
        location: "",
        number: "",
        sub: "",
      });
    } catch (error) {
      console.log("Error:", (error as Error).message);
    }
  };

  return (
    <div>
      <div className="w-fit z-50 h-fit sticky  left-1/2 transform -translate-x-1/2">
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
      <div className=" w-full h-30 z-10" id="navbar"></div>
      <div className="flex flex-col items-center justify-center h-screen  -mt-28">
        <Image
          className="object-cover w-full h-full z-24"
          src="/contact.jpg"
          alt="Full screen"
          layout="fill"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-4">
        <p className="text-lg md:text-base md:px-20 md:pb-6 opacity-60">
          <span className="block text-2xl font-bold mt-4">CONTACT US</span>
        </p>
      </div>
      <div className="mt-28   w-screen ">
        <div className="my-6 flex justify-center p-4">
          <p className="md:text-3xl sm:text-2xl text-xl font-mono border-4 border-gray-400 border-t-transparent border-r-transparent border-l-transparent">
            CONTACT US ON: 9003103849
          </p>
        </div>
        <div className="flex justify-center mb-6">
          <p className="text-lg border-4 border-gray-400 border-t-transparent  border-r-transparent border-l-transparent">
            WHAT CAN WE HELP YOU WITH?
          </p>
        </div>
        <div className="flex justify-center">
          <select
            onChange={handleInputChange}
            name="sub"
            value={formData.sub}
            className="text-lg block w-full focus:border-b-slate-950 focus:scale-105 duration-1000 sm:w-1/2 bg-white border-4 border-gray-400 border-t-transparent border-r-transparent border-l-transparent rounded-md py-2 px-4 focus:outline-none"
          >
            <option value="">Select Option</option>
            <option>Buying Property</option>
            <option>Investor Enquiries</option>
            <option>Land Proposal</option>
            <option>Other Reason</option>
          </select>
        </div>
        <div className="flex justify-center p-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleInputChange}
            className="text-lg block w-full focus:border-b-slate-950 focus:scale-105 duration-1000 sm:w-1/2 bg-white border-4 border-gray-400 border-t-transparent border-r-transparent border-l-transparent rounded-md py-2 px-4 focus:outline-none"
          />
        </div>
        <div className="flex justify-center p-4">
          <input
            type="email"
            onChange={handleInputChange}
            name="email"
            value={formData.email}
            placeholder="Email"
            className="text-lg block w-full focus:border-b-slate-950 focus:scale-105 duration-1000 sm:w-1/2 bg-white border-4 border-gray-400 border-t-transparent border-r-transparent border-l-transparent rounded-md py-2 px-4 focus:outline-none"
          />
        </div>
        <div className="flex justify-center p-4">
          <input
            type="text"
            onChange={handleInputChange}
            name="location"
            value={formData.location}
            placeholder="Location"
            className="text-lg block w-full focus:border-b-slate-950 focus:scale-105 duration-1000 sm:w-1/2 bg-white border-4 border-gray-400 border-t-transparent border-r-transparent border-l-transparent rounded-md py-2 px-4 focus:outline-none"
          />
        </div>
        <div className="flex justify-center p-4">
          <input
            type="tel"
            value={formData.number}
            onChange={handleInputChange}
            name="number"
            placeholder="Contact Number"
            className="text-lg block w-full sm:w-1/2 focus:border-b-slate-950 focus:scale-105 duration-1000 bg-white border-4 border-gray-400 border-t-transparent border-r-transparent border-l-transparent rounded-md py-2 px-4 focus:outline-none"
          />
        </div>
        <div className="flex justify-center p-4">
          <textarea
            onChange={handleInputChange}
            name="msg"
            value={formData.msg}
            placeholder="Message"
            className="text-lg block w-full sm:w-1/2 bg-white border-4 border-gray-400 border-t-transparent border-r-transparent border-l-transparent rounded-md py-2 px-4 focus:outline-none focus:border-b-slate-950 focus:scale-105 duration-1000"
          ></textarea>
        </div>
        <div className="flex justify-center p-4">
          <button
            onClick={submitHandler}
            className="text-lg sm:w-52 bg-black hover:bg-stone-800 hover:scale-110 duration-150 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ContactUs;
