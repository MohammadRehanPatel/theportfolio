import React from "react";
import logo from "../../assets/images/NavLogo.png";
import { Socials } from "../../constants";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50  bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <img
            src={logo}
            alt="ogo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-spin"
          />
          <span className="font-boldml-[10px] hidden md:block text-gray-300">
            Mohammad Rehan Patel
          </span>
        </a>
        <div className="w-[500px] h-full  flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer ">
              About
            </a>
            <a href="#skills" className="cursor-pointer ">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer ">
              Projects
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <AiFillGithub
            href="www.github.com/MohammadRehanPatel"
            target="_blank"
            className="text-white h-7 w-7 cursor-pointer"
          />
          <AiFillLinkedin className="text-white h-7 w-7" />
          <AiFillTwitterCircle className="text-white h-7 w-7" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
