import React from "react";
import Image from "next/image";
import Logo from "../app/images/Logo.svg";
import Signup from "../app/images/Sign Up.svg";

const Index = () => {
  return (
    <header className="bg-[#2B2B2B] fixed w-full z-30">
      <div className="max-w-[1280px] mx-auto px-4 py-4 flex justify-between items-center flex-wrap">
        <Image src={Logo} alt="logo" />
        <div className="flex items-center gap-8 flex-wrap">
          <p className="text-[#fff] text-sm md:text-base">Marketplace</p>
          <p className="text-[#fff] text-sm md:text-base">Rankings</p>
          <p className="text-[#fff] text-sm md:text-base">Connect a wallet</p>
          <Image src={Signup} alt="signup" className="w-[100px] md:w-auto" />
        </div>
      </div>
    </header>
  );
};

export default Index;
