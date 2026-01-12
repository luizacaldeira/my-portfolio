import Image from "next/image";
import { Hand, Mail, Linkedin, Github, X } from "lucide-react";
import TypingRoles from "./TypingRoles";
import CodeLines from "./CodeLines";

export default function Hero() {
   const handleCloseClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      const warningBanner = e.currentTarget.parentElement;
      if (warningBanner) {
         warningBanner.style.display = 'none';
      }
   };
return (
   <div>
      <div className="flex lg:hidden w-full px-10 gap-2">
         <div className="flex items-center rounded-full gap-2 font-display text-xs cs-glass-blue w-fit px-2 py-1 text-center">
            <p>For the best experience, please view this portfolio on a desktop device.</p>
            <div onClick={handleCloseClick}>
               <X />
            </div>
         </div>
      </div>
      <header 
         className="w-full flex flex-col md:flex-row items-center lg:items-start justify-center px-6 md:px-10 py-6 md:py-10 gap-0 lg:gap-30 mb-5" 
         data-aos="fade-down" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom"
      >
         <div className="text-white flex flex-col justify-between">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-start gap-2 md:gap-6 text-3xl md:text-4xl lg:text-6xl font-light">
               <div className="inline-flex items-center whitespace-nowrap gap-2 md:gap-3 lg:gap-6">
                  <p>
                     Hi, I&apos;m
                  </p>
                  <p className="font-display mt-1 bg-linear-to-r from-indigo-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent animate-shimmer bg-size-[200%_100%] [text-shadow:0_0_20px_rgba(167,139,250,0.8),0_0_40px_rgba(167,139,250,0.5)]">
                  Luiza
                  </p>
                  <span className="animate-wiggle-more animate-infinite animate-ease-in-out mt-0 md:mt-3">
                  <Hand className="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14" strokeWidth={1} />
                  </span>
               </div>
            </div>

            <div className="mt-4 mb-6 md:mb-7 flex justify-center md:justify-start">
               <TypingRoles />
            </div>

            <div className="w-fit flex justify-center md:justify-start mb-5 lg:mb-1 animate-shake animate-infinite animate-duration-19000">
               <Image
                  src="/keyframe.png"
                  alt="keyframe illustration"
                  width={350}
                  height={400}
                  className="w-48 sm:w-64 md:w-80 h-auto object-contain animate-fade-right animate-delay-300"
               />
            </div>
         </div>

         <div className="flex flex-col items-center md:items-end justify-between gap-4 h-auto md:h-full">
         <div className="hidden md:block">
            <CodeLines />
         </div>

         <p className="text-center md:text-right  text-white/80 max-w-xs font-display">
            Let&apos;s create something amazing!
         </p>

         <div className="flex items-center gap-3">
            <a
               href="#contact"
               className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2 cs-glass-pink rounded-full font-semibold backdrop-blur-sm hover:scale-105 transition-all duration-300"
            >
               <Mail className="w-4 h-4 md:w-5 md:h-5" />
               <span className="text-sm md:text-base">Get in Touch</span>
            </a>
            <a
               href="https://www.linkedin.com/in/luizacaldeira/"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center justify-center rounded-full cs-glass-blue border border-white/20 p-2 transition-colors duration-200 shadow-md"
               aria-label="LinkedIn"
            >
               <Linkedin className="w-5 h-5" />
            </a>
            <a
               href="https://github.com/luizacaldeira"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center justify-center rounded-full cs-glass-dark border border-white/20 p-2 transition-colors duration-200 shadow-md"
               aria-label="GitHub"
            >
               <Github className="w-5 h-5 text-white" />
            </a>
         </div>
         </div>
      </header>
   </div>
);
}