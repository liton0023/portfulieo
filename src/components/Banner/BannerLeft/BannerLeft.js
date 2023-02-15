import React from 'react';
import { FaDownload, FaFacebookF, FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiFigma, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const BannerLeft = () => {

    const [text] = useTypewriter({
        words: ["React Developer","Frontend Developer", "Web Developer.","Professional Coder.",],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">LITON MAHMUD</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          A <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Hi, I am Md Liton Mahmud. I am a react Developer. <br/>
         I am 100% sincere, serious, hard-working, dedicated, committed, and honest.
        </p>
        <span className="">
            <a href="https://drive.google.com/file/d/1UNWc-Pe63CWVPQClrmtx2svXU4_GajoS/view?usp=sharing">
        <button className='flex items-center rounded px-3 bg-emerald-600 max-h-full cursor-pointer'><FaDownload/>Download Resume </button>
      </a>
            </span>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href="https://www.facebook.com/profile.php?id=100051386019265">
        <button><FaFacebookF /></button>
      </a>
            </span>
            <span className="bannerIcon">
            <a href="https://github.com/liton0023">
        <button> <FaGithub /></button>
      </a>
            </span>
            <span className="bannerIcon">
            <a href="www.linkedin.com/in/md-liton-mahmud-36055b22a">
        <button>  <FaLinkedinIn /></button>
      </a>  
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerLeft