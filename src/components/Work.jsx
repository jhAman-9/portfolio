import React from "react";
import imageSearch from "../assets/Image-Search-Engine.jpg";
import foodapp from "../assets/Food-App.jpg";
import jobman from "../assets/Jobman.jpg";
import movix from "../assets/Movix.jpg";
import netflixgpt from "../assets/Netflix-gpt.jpg";
import youtube from "../assets/Youtube.jpg";

const Work = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="work">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Work</p>
        <p className="text-gray-400">Check out some of my recent work</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-cente h-[200px] bg-cover relative">
          <img src={movix} layout="fill" objectFit="cover" alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="https://movix-aj.netlify.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-cente h-[200px] bg-cover relative">
          <img src={jobman} layout="fill" objectFit="cover" alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="https://jobman-aj.netlify.app/login">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-cente h-[200px] bg-cover relative">
          <img src={netflixgpt} layout="fill" objectFit="cover" alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="https://netflix-gpt-ce98e.web.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-cente h-[200px] bg-cover relative">
          <img src={youtube} layout="fill" objectFit="cover" alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="https://yt-by-aj.vercel.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-cente h-[200px] bg-cover relative">
          <img src={imageSearch} layout="fill" objectFit="cover" alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="https://pink-ronni-11.tiiny.site/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-cente h-[200px] bg-cover relative">
          <img src={foodapp} layout="fill" objectFit="cover" alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
