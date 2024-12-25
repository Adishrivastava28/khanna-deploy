import Footer from "@/components/footer/Footer";
import PhilosophyHead from "@/components/Philosophy/philosophy-head";
import Sections from "@/components/Philosophy/section";
import Image from "next/image";
import Link from "next/link";




export default function Philosophy (){


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
        <PhilosophyHead></PhilosophyHead>

        <Sections></Sections>
        <Footer></Footer>
      </div>
    );
}