import React from "react";
import Image from "next/image";
import Footlogo from "../app/images/foot-lodo.svg";
import Icons from "../app/images/Icons.svg";
import Explore from "../app/images/Explore.svg";
import Join from "../app/images/join.svg";
import Subscribe from "../app/images/Subscribe.svg";
import Divider from "../app/images/Divider.svg";

const Index = () => {
  return (
    <footer className="bg-[#3B3B3B]">
      <div className="max-w-[1280px] mx-auto p-4 md:p-10 flex flex-wrap justify-between gap-4">
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <Image src={Footlogo} alt="foot-logo" />
          <p className="text-[#FFFFFF] mt-6 mb-6 font-normal text-[16px] md:text-[22px]">
            NFT marketplace UI created <br className="hidden md:block" />
            with Anima for Figma.
          </p>
          <p className="text-[#FFFFFF] mt-6 mb-6 font-normal text-[16px] md:text-[22px]">
            Join our community
          </p>
          <Image src={Icons} alt="Icons" />
        </div>
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <Image src={Explore} alt="Explore" />
          <p className="text-[#FFFFFF] mt-6 mb-6 font-normal text-[16px] md:text-[22px]">
            Marketplace
          </p>
          <p className="text-[#FFFFFF] mt-6 mb-6 font-normal text-[16px] md:text-[22px]">
            Rankings
          </p>
          <p className="text-[#FFFFFF] mt-6 mb-6 font-normal text-[16px] md:text-[22px]">
            Connect a wallet
          </p>
        </div>
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <Image src={Join} alt="Join" className="pb-4" />
          <p className="text-[#FFFFFF] mt-6 mb-6 font-normal text-[16px] md:text-[22px] pb-6">
            Get exclusive promotions & updates{" "}
            <br className="hidden md:block" />
            straight to your inbox.
          </p>
          <Image src={Subscribe} alt="Subscribe" />
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <Image src={Divider} alt="Divider" />
        <p className="text-[#FFFFFF] mt-6 mb-6 font-normal text-[12px] md:text-[16px] pb-4">
          Ⓒ NFT Market. Use this template freely.
        </p>
      </div>
    </footer>
  );
};

export default Index;
