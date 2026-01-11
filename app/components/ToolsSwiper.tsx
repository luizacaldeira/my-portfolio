'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function ToolsSwiper() {
const tools = [
   { name: 'React.js', icon: <i className="devicon-react-original" /> },
   { name: 'Next.js', icon: <i className="devicon-nextjs-plain" /> },
   { name: 'JavaScript', icon: <i className="devicon-javascript-plain" /> },
   { name: 'Tailwind CSS', icon: <i className="devicon-tailwindcss-original" /> },
   { name: 'Node.js', icon: <i className="devicon-nodejs-plain" /> },
   { name: 'Git', icon: <i className="devicon-git-plain" /> },
   { name: 'Figma', icon: <i className="devicon-figma-plain" /> },
   { name: 'TypeScript', icon: <i className="devicon-typescript-plain" /> },
   { name: 'HTML5', icon: <i className="devicon-html5-plain" /> },
   { name: 'CSS3', icon: <i className="devicon-css3-plain" /> },
];

return (
   <section className="w-full h-fit max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-12 md:pt-20">
      <h2 className="text-white text-3xl md:text-4xl text-center mb-12">
      Tech Stack
      </h2>

      <Swiper
      modules={[Autoplay]}
      loop
      centeredSlides
      slidesPerView="auto"
      spaceBetween={32}
      autoplay={{
         delay: 100,
         disableOnInteraction: false,
      }}
      speed={2000}
      className="w-full flex items-center"
      >
      {tools.map((tool, index) => (
         <SwiperSlide
            key={index}
            className="w-auto! flex justify-center py-10"
         >
            <div className="flex justify-center w-35 sm:w-40 md:w-45">
            <div
               className="
                  group relative
                  w-24 h-24
                  sm:w-28 sm:h-28
                  md:w-32 md:h-32
                  lg:w-36 lg:h-36
                  rounded-full

                  backdrop-blur-lg border border-white/10
                  bg-white/5

                  hover:bg-white/15
                  hover:scale-[1.04]
                  hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]
               "
            >
               <div className="pointer-events-none absolute inset-0 rounded-full bg-linear-to-br from-white/40 via-white/10 to-transparent opacity-40" />

               <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                  <div className="text-white text-4xl md:text-5xl mb-1 drop-shadow-md">
                  {tool.icon}
                  </div>
                  <span className="text-white/90 text-xs sm:text-sm font-medium">
                  {tool.name}
                  </span>
               </div>
            </div>
            </div>
         </SwiperSlide>
      ))}
      </Swiper>
   </section>
);
}
