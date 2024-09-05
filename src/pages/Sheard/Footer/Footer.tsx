import teaBox from "../../../assets/Images/Tea-Box1.webp";
import logo from "../../../assets/Images/ChaKhabalogo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <div className="mt-10 mb-0 ">
      <div className="relative">
        <div
          className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-1
         lg:py-20 py-8 px-8 md:px-32 relative z-10 text-white"
        >
          <div data-aos="fade-up">
            <img src={logo} alt="" className="h-[50px] mt-2" />
            <p className="lg:mt-8 mt-4 text-lg md:font-normal font-medium  lg:w-[230px]">
              For those who need a warm, soothing cup of tea to kickstart their
              day, we’re here to brew the perfect blend. Every sip is crafted to
              bring you comfort and joy, right from the first taste.
            </p>
            <div className="lg:my-6 my-4 flex ">
              <div className="border border-white rounded-lg h-8 w-8 p-2  hover:bg-orange-500 duration-300">
                <FaFacebookF />
              </div>
              <div className="border border-white rounded-lg h-8 w-8 p-1 text-xl hover:bg-orange-500 duration-300 ml-3 ">
                <FaInstagram />
              </div>
              <div className="border border-white rounded-lg h-8 w-8 p-1 text-xl hover:bg-orange-500 duration-300 ml-3">
                <FiTwitter />
              </div>
              <div className="border border-white rounded-lg h-8 w-8 p-1 text-xl hover:bg-orange-500 duration-300 ml-3">
                <CiYoutube />
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="lg:mt-12 mt-5  lg:ml-2 md:ml-32 lg:w-[230px]">
            <p className="font-bold text-2xl">Quick Link</p>
            <ul className="lg:mt-7 mt-4  md:font-normal font-medium ml-2 text-lg">
              <li className="list-none hover:list-disc hover:text-orange-500 hover:translate-x-4 
              duration-300 lg:w-[80px] w-[100px]">
                <p>About Us</p>
              </li>
              <li className="list-none hover:list-disc hover:text-orange-500 hover:translate-x-4 duration-300 
              lg:mt-6 mt-4 w-[120px]">
                <p>Our Services</p>
              </li>
              <li className="list-none hover:list-disc hover:text-orange-500 hover:translate-x-4 duration-300 lg:mt-6 mt-4 w-[100px] ">
                <p>Tea/Coffee</p>
              </li>
              <li className="list-none hover:list-disc hover:text-orange-500 hover:translate-x-4 duration-300 lg:mt-6 mt-4 w-[50px]">
                <p>Blogs</p>
              </li>
            </ul>
          </div>
          <div data-aos="fade-up" className="lg:mt-12 mt-8  ">
            <p className="font-bold text-2xl">Contact Us</p>
            <div className="lg:mt-7 mt-4 text-lg  md:font-normal font-medium ">
              <div className="  ">
                <div className="flex">
                 <p className="mt-1"> <FaPhoneAlt /></p>
                  <p className="ml-3">Phone Number</p>
                </div>
                <p className="mt-1 ml-2">&#40;+88&#41;01234567789</p>
              </div>
              <div className=" mt-4 ">
                <div className="flex">
                 <p className="mt-1"> <MdOutlineEmail /></p>
                  <p className="ml-3">Email</p>
                </div>
                <p className="mt-1 ml-2">developerpriya96@gmail.com</p>
              </div>
              <div className=" mt-4 ">
                <div className="flex">
                 <p className="mt-1"> <FaLocationDot /></p>
                  <p className="ml-3">Location</p>
                </div>
                <p className="mt-1 ml-2">2 No. Love Lane, Chattogram.</p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="lg:mt-12 md:mt-3 mt-8                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ml-2"
          >
            <p className="font-bold text-2xl">Subscribe to Newslater</p>
            <div>
              <div className="flex my-10">
                <input type="email" placeholder="Enter Email" className="rounded-sm h-12 px-4 py-2 bg-orange-100 
                border-2 border-orange-100 hover:border-orange-500 "  /> 
                <button className="h-12  bg-orange-500 hover:bg-stone-800 rounded-md py-2 px-4 font-semibold text-lg">Subscribe</button>
              </div>
              <div className="my-8 text-lg"><p>When looking for a new bouquet Tea party</p></div>
            </div>
          </div>
        </div>

        {/* Pseudo-element to blur the background image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 h-full w-full"
          style={{
            backgroundImage: `url(${teaBox})`,
            filter: "brightness(40%)",
          }}
        ></div>
      </div>
      <div className="bg-black text-center text-white py-8 text-lg">
        <p>© 2023 All Rights Reserved চা খাবা</p>
      </div>
    </div>
  );
};

export default Footer;
