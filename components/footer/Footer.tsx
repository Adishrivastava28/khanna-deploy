import React from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const PRODUCTS = [
    { name: "Drag And Drop", link: "#" },
    { name: "Visual Studio X", link: "#" },
    { name: "Easy Content", link: "#" },
  ];
  const RESOURCES = [
    { name: "Industries and tools", link: "#" },
    { name: "Use cases", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Online event", link: "#" },
    { name: "Nostrud exercitation", link: "#" },
  ];
  const COMPANY = [
    { name: "Diversity & inclusion", link: "#" },
    { name: "About us", link: "#" },
    { name: "Press", link: "#" },
    { name: "Customer Stories", link: "#" },
    { name: "Online communities", link: "#" },
  ];
  const SUPPORT = [
    { name: "Documentation", link: "#" },
    { name: "Tutorials & guides", link: "#" },
    { name: "Webinars", link: "#" },
    { name: "Open-source", link: "#" },
  ];
  const Icons = [
    { icon: <Instagram />, link: "#" },
    { icon: <Facebook />, link: "#" },
    { icon: <Linkedin />, link: "#" },
  ];

  return (
    <footer className="bg-black text-white mt-10">
      {/* Links Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
        <div>
          <h4 className="font-bold mb-4 text-center md:text-left">PRODUCTS</h4>
          <ul>
            {PRODUCTS.map((item, index) => (
              <li key={index} className="mb-2 text-center md:text-left">
                <a
                  href={item.link}
                  className="text-gray-400 hover:text-teal-500"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-center md:text-left">RESOURCES</h4>
          <ul>
            {RESOURCES.map((item, index) => (
              <li key={index} className="mb-2 text-center md:text-left">
                <a
                  href={item.link}
                  className="text-gray-400 hover:text-teal-500"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-center md:text-left">COMPANY</h4>
          <ul>
            {COMPANY.map((item, index) => (
              <li key={index} className="mb-2 text-center md:text-left">
                <a
                  href={item.link}
                  className="text-gray-400 hover:text-teal-500"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-center md:text-left">SUPPORT</h4>
          <ul>
            {SUPPORT.map((item, index) => (
              <li key={index} className="mb-2 text-center md:text-left">
                <a
                  href={item.link}
                  className="text-gray-400  hover:text-teal-500"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
        text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2020 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="flex justify-center space-x-4">
          {Icons.map((iconObj, index) => (
            <a
              key={index}
              href={iconObj.link}
              className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 text-xl text-white hover:text-gray-100 hover:bg-teal-500 duration-300"
            >
              {iconObj.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
