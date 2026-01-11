import Image from "next/image";
import { Quote } from "lucide-react";
import Skills from "./Skills";

export default function AboutMe() {
   return (
      <section id="about" className="flex flex-col items-center w-full max-w-7xl mx-auto px-6 md:px-20 py-15">
         <h2 className="text-white text-3xl md:text-4xl   mb-10 text-center">
            About Me
         </h2>
         <div
            className="
               w-full flex flex-col md:flex-row items-center gap-12
               bg-white/5 backdrop-blur-xl border border-white/10
               rounded-3xl p-6 mb-6
               hover:bg-white/10 hover:-translate-y-1
               hover:shadow-[0_25px_50px_-15px_rgba(79,0,204,0.45)]
               transition-all duration-300
            "
         >
            <div className="relative shrink-0">
               <div className="absolute -inset-1 rounded-full bg-linear-to-tr from-violet-500/40 to-pink-500/40 blur-lg" />
               <Image
                  src="/luiza.jpeg"
                  alt="Luiza Caldeira"
                  width={200}
                  height={200}
                  className="relative rounded-full object-cover border-4 border-white/20 shadow-xl"
               />
            </div>
            <div className="max-w-2xl text-center md:text-left text-white/85">
               <p className="text-lg leading-relaxed mb-6">
               I’m Luiza Caldeira, a front-end developer shaping my professional path
               through academic training and real-world projects, always working where
               technology and design meet.
               </p>

               <p className="leading-relaxed mb-8">
               I’m motivated by growth, collaboration, and the opportunity to contribute
               to products that evolve with intention and care.
               </p>

               <div className="flex items-center gap-3 text-white/60">
                  <Quote size={20} fill="currentColor" />
                  <span className="italic font-display">
                     I care about how things look, feel, and connect with people.
                  </span>
               </div>

            </div>
         </div>
         <Skills />
      </section>
   );
}
