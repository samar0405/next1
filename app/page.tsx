import Image from "next/image";
import Get from "../app/images/get.svg";
import Add from "../app/images/Add.svg";
import Main from "../app/images/main.svg";
import Card1 from "../app/images/Card1.svg";
import Card2 from "../app/images/Card2.svg";
import Card3 from "../app/images/Card3.svg";
import Wiev from "../app/images/wiev-btn.svg";
import Creator1 from "../app/images/creator1.svg";
import Creator2 from "../app/images/creator2.svg";
import Creator3 from "../app/images/creator3.svg";
import Creator4 from "../app/images/creator4.svg";
import Creator5 from "../app/images/creator5.svg";
import Creator6 from "../app/images/creator6.svg";
import Creator7 from "../app/images/creator7.svg";
import Creator8 from "../app/images/creator8.svg";
import Creator9 from "../app/images/creator9.svg";
import Creator10 from "../app/images/creator10.svg";
import Creator11 from "../app/images/creator11.svg";
import Creator12 from "../app/images/creator12.svg";
import Category1 from "../app/images/cat1.svg";
import Category2 from "../app/images/cat2.svg";
import Category3 from "../app/images/cat3.svg";
import Category4 from "../app/images/cat4.svg";
import Category5 from "../app/images/cat5.svg";
import Category6 from "../app/images/cat6.svg";
import Category7 from "../app/images/cat7.svg";
import Category8 from "../app/images/cat8.svg";
import Seeall from "../app/images/seeall.svg";
import Cover1 from "../app/images/cover1.svg";
import Cover2 from "../app/images/cover2.svg";
import Cover3 from "../app/images/cover3.svg";
import Fullimg from "../app/images/NFT Highlight.svg";
import Caw1 from "../app/images/caw1.svg";
import Caw2 from "../app/images/caw2.svg";
import Caw3 from "../app/images/caw3.svg";
import Lastimg from "../app/images/Lastimg.svg";

export default function Home() {
  return (
    <main className="bg-[#2B2B2B] mt-[92px]">
      <div className="flex items-center justify-center p-14 gap-[96px] mt-[0px] mb-[0px] ml-auto mr-auto flex-wrap">
        <div className="text-center md:text-left">
          <h1 className="font-semibold text-[40px] md:text-[67px] text-[#fff] leading-tight">
            Discover <br />
            digital art & <br />
            Collect NFTs
          </h1>
          <p className="text-[#FFFFFF] mt-6 mb-6 font-normal text-[18px] md:text-[22px]">
            NFT marketplace UI created with Anima for{" "}
            <br className="hidden md:block" />
            Figma. Collect, buy and sell art from more{" "}
            <br className="hidden md:block" />
            than 20k NFT artists.
          </p>
          <div className="flex justify-center md:justify-start">
            <Image src={Get} alt="get" className="mb-6" />
          </div>
          <div className="flex justify-center md:justify-start">
            <Image src={Add} alt="add" />
          </div>
        </div>
        <div>
          <Image src={Main} alt="main" />
        </div>
      </div>
      <div className="p-4 md:p-10 pt-14">
        <h1 className="font-semibold text-[28px] md:text-[38px] text-[#fff]">
          Trending Collection
        </h1>
        <p className="text-[18px] md:text-[22px] text-[#fff] font-normal mb-10">
          Checkout our weekly updated trending collection.
        </p>
        <div className="flex justify-between items-center gap-6 flex-wrap pb-24">
          <Image src={Card1} alt="Card1" />
          <Image src={Card2} alt="Card2" />
          <Image src={Card3} alt="Card3" />
        </div>
      </div>
      <div className="p-4 md:p-10 pt-10">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h1 className="font-semibold text-[28px] md:text-[38px] text-[#fff]">
              Top creators
            </h1>
            <p className="text-[18px] md:text-[22px] text-[#fff] font-normal mb-10">
              Checkout Top Rated Creators on the NFT Marketplace
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <Image src={Wiev} alt="Wiev" />
          </div>
        </div>
        <div className="flex justify-between items-center gap-6 flex-wrap pt-10">
          <Image src={Creator1} alt="Creator1" />
          <Image src={Creator2} alt="Creator2" />
          <Image src={Creator3} alt="Creator3" />
          <Image src={Creator4} alt="Creator4" />
        </div>
        <div className="flex justify-between items-center gap-6 flex-wrap pt-16">
          <Image src={Creator5} alt="Creator5" />
          <Image src={Creator6} alt="Creator6" />
          <Image src={Creator7} alt="Creator7" />
          <Image src={Creator8} alt="Creator8" />
        </div>
        <div className="flex justify-between items-center gap-6 flex-wrap pt-16">
          <Image src={Creator9} alt="Creator9" />
          <Image src={Creator10} alt="Creator10" />
          <Image src={Creator11} alt="Creator11" />
          <Image src={Creator12} alt="Creator12" />
        </div>
      </div>
      <div className="p-4 md:p-10 pt-10">
        <div>
          <h1 className="font-semibold text-[28px] md:text-[38px] text-[#fff] pb-8">
            Browse Categories
          </h1>
        </div>
        <div className="flex justify-between items-center gap-6 flex-wrap pt-10">
          <Image src={Category1} alt="Category1" />
          <Image src={Category2} alt="Category2" />
          <Image src={Category3} alt="Category3" />
          <Image src={Category4} alt="Category4" />
        </div>
        <div className="flex justify-between items-center gap-6 flex-wrap pt-16">
          <Image src={Category5} alt="Category5" />
          <Image src={Category6} alt="Category6" />
          <Image src={Category7} alt="Category7" />
          <Image src={Category8} alt="Category8" />
        </div>
      </div>
      <div className="p-4 md:p-10 pt-10 pb-28">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h1 className="font-semibold text-[28px] md:text-[38px] text-[#fff]">
              Discover More NFTs
            </h1>
            <p className="text-[18px] md:text-[22px] text-[#fff] font-normal mb-10">
              Explore new trending NFTs
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <Image src={Seeall} alt="Seeall" />
          </div>
        </div>
        <div className="flex justify-between items-center gap-6 flex-wrap pt-10">
          <Image src={Cover1} alt="Cover1" />
          <Image src={Cover2} alt="Cover2" />
          <Image src={Cover3} alt="Cover3" />
        </div>
      </div>
      <Image src={Fullimg} alt="Fullimg" />
      <div className="p-4 md:p-10 pt-10 pb-28">
        <div>
          <h1 className="font-semibold text-[28px] md:text-[38px] text-[#fff]">
            How it works
          </h1>
          <p className="text-[18px] md:text-[22px] text-[#fff] font-normal mb-10">
            Find out how to get started
          </p>
        </div>
        <div className="flex justify-between items-center gap-6 flex-wrap pt-10">
          <Image src={Caw1} alt="Caw1" />
          <Image src={Caw2} alt="Caw2" />
          <Image src={Caw3} alt="Caw3" />
        </div>
      </div>
      <div className="p-4 md:p-28">
        <Image src={Lastimg} alt="Lastimg" />
      </div>
    </main>
  );
}
