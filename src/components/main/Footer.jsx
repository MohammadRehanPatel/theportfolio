import React from "react";
import { RxGithubLogo, RxTwitterLogo, RxLinkedinLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-row gap-10 items-center justify-start">
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </p>
            <a
              href="www.github.com/MohammadRehanPatel"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </p>
          </div>
        </div>
        <div className="mb-[20px] text-[15px] text-center">
          &copy; Rehan Dev 2024 Inc. All Right Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
