import React from "react";
import red_baby from "./data/images/red-baby.png";
import three_babies from "./data/images/three-babies.png";
import yoga_women from "./data/images/yoga-women.png";
import arrow_svg from "./data/icons/arrow.svg";
import long_arrow_svg from "./data/icons/long-arrow.svg";
import v_arrow_svg from "./data/icons/v-arrow.svg";
import open_arms from "./data/images/open-arms.png";

const BlogSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="py-6 grid grid-cols-2 gap-8 w-11/12 max-w-[1344px]">
        <div className="flex flex-col space-y-8">
          <div className="bg-[#FEE8D3] p-8 rounded-3xl flex flex-col justify-between h-full">
            <h2 className="text-[32px] font-bold text-gray-900 mb-4 w-7/12 leading-tight font-nohemi">
              FUN OUTDOOR <img src={arrow_svg} alt="Arrow" className="inline-block ml-3 mb-2" />
              ACTIVITIES TO KEEP YOUR KIDS ACTIVE
            </h2>
            <p className="text-[14px] text-gray-900 mt-8">
              we believe in promoting a healthy and sustainable lifestyle. Our
              blogs are dedicated to sharing tips and insights on how to live an
              ecofit life
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <img src={red_baby} alt="Explore Collection" className="w-full h-full object-cover rounded-xl" />
              <button className="absolute text-[28px] bottom-4 font-bold font-nohemi text-white px-4 py-2 rounded text-sm hover:bg-opacity-80 transition">
                Explore Collection
              </button>
            </div>
            <div className="relative">
              <img src={yoga_women} alt="Read Blogs" className="w-full h-full object-cover rounded-xl" />
              <button className="absolute text-[28px] bottom-4 font-bold font-nohemi text-white px-4 py-2 rounded text-sm hover:bg-opacity-80 transition">
                Read Blogs
              </button>
            </div>
          </div>
        </div>
        <div className="flex">
          <img src={three_babies} alt="Kids playing" className="w-full h-auto object-cover rounded-3xl" />
        </div>
        <div className="col-span-2 mt-8 relative  mb-20">
          <img src={open_arms} alt="Open Arms" className="w-full h-full object-cover rounded-3xl" />
          <div className="absolute inset-0 flex justify-between items-end px-12 pb-8 text-black">
            <h2 className="text-[83px] font-bold w-9/12 font-nohemi" style={{ lineHeight: '1' }}>
            <img src={long_arrow_svg} alt="Arrow" className="ml-3 mb-10" />
              FUN OUTDOOR ACTIVITIES TO KEEP YOUR KIDS ACTIVE
            </h2>
            <button className="bg-white bg-opacity-75 text-gray-900 text-[16px] font-bold px-10 py-4 font-product-sans rounded-full hover:bg-gray-300 transition">
              Read Blogs <img src={v_arrow_svg} alt="Arrow" className="inline-block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;