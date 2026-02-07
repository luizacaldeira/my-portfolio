'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function ToolsSwiper() {
const tools = [
   { name: 'React.js', icon: <i className="devicon-react-original" /> },
   { name: 'Next.js', icon: <i className="devicon-nextjs-plain" /> },
   {name: 'Angular', icon: <i className="devicon-angular-plain"/>},
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
   <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-12">
      <h2 className="text-white text-3xl md:text-4xl text-center mb-12">
      Tech Stack
      </h2>

      <Swiper
      modules={[Autoplay]}
      loop={true}
      slidesPerView="auto"
      spaceBetween={20}
      autoplay={{
         delay: 0,
         disableOnInteraction: false,
      }}
      speed={4000}
      className=" w-full! p-10"
      >
      {tools.map((tool, index) => (
         <SwiperSlide
            key={index}
            className="w-auto! flex justify-center"
         >
            <div
            className="
               group relative
               w-24 h-24
               sm:w-28 sm:h-28
               md:w-32 md:h-32
               rounded-full
               backdrop-blur-lg border border-white/10
               bg-white/5
               hover:bg-white/15
               transition-all
            "
            >
            <div className="pointer-events-none absolute inset-0 rounded-full bg-linear-to-br from-white/40 via-white/10 to-transparent opacity-40" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
               <div className="text-white text-4xl md:text-5xl mb-1 drop-shadow-md">
                  {tool.icon}
               </div>
               <span className="text-white/90 text-xs sm:text-sm">
                  {tool.name}
               </span>
            </div>
            </div>
         </SwiperSlide>
      ))}
      </Swiper>
   </section>
);
}
