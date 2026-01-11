import Image from "next/image";
import { Hand, Mail, Linkedin, Github } from "lucide-react";
import TypingRoles from "./TypingRoles";
import CodeLines from "./CodeLines";

export default function Hero() {
return (
   <header className="w-full flex flex-col md:flex-row items-center md:items-start justify-between px-6 md:px-30 lg:px-45 py-6 md:py-10 gap-6 md:gap-10 mb-5">
      <div className="text-white flex flex-col justify-between w-full md:flex-1">
      <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-start gap-2 md:gap-6 text-3xl md:text-6xl font-light">
         <div className="inline-flex items-center whitespace-nowrap gap-2 md:gap-6">
            <p>
               Hi, I&apos;m
            </p>
            <p className="font-display mt-1 bg-linear-to-r from-indigo-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent animate-shimmer bg-size-[200%_100%] [text-shadow:0_0_20px_rgba(167,139,250,0.8),0_0_40px_rgba(167,139,250,0.5)]">
            Luiza
            </p>
            <span className="animate-wiggle-more animate-infinite animate-ease-in-out mt-0 md:mt-3">
            <Hand className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14" strokeWidth={0.95} />
            </span>
         </div>
      </div>

      <div className="mt-4 mb-6 md:mb-7 flex justify-center md:justify-start">
         <TypingRoles />
      </div>

      <div className="w-full flex justify-center md:justify-start ">
         <Image
            src="/keyframe.png"
            alt="keyframe illustration"
            width={350}
            height={400}
            className="w-48 sm:w-64 md:w-100 h-auto object-contain animate-fade-right animate-delay-300"
         />
      </div>
      </div>

      <div className="flex flex-col items-center md:items-end justify-between w-full md:w-fit gap-4 h-auto md:h-full">
      <div className="hidden md:block">
         <CodeLines />
      </div>

      <p className="text-center md:text-right text-white/80 max-w-xs font-display">
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
);
}