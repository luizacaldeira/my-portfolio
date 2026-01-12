'use client';

import { GraduationCap, Languages, MapPin} from "lucide-react";

export default function Education() {
   const languages = [
      { name: 'Portuguese', level: 100, label: 'Native' },
      { name: 'English', level: 85, label: 'Advanced' },
   ];
   return (
      <section 
         id="education" className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-10">
         <h2 className="text-white text-4xl mb-14 text-center"
         data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out"
         data-aos-anchor-placement='top-bottom'
         >
            Education
         </h2>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div
               className="
               group relative
               bg-white/7 backdrop-blur-lg border border-white/10
               rounded-2xl p-10
               hover:bg-white/15 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(79,0,204,0.45)] transition-all duration-300
               flex flex-col gap-8 w-full
               "
               data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-anchor-placement='top-bottom'
            
            >
               <div className="flex items-start justify-between gap-6">
               <div className="flex items-center gap-4">
                  <GraduationCap size={48} className="text-white shrink-0" />

                  <div>
                     <h3 className="text-white text-xl font-semibold leading-tight">
                     Graduation
                     </h3>
                     <span className="text-indigo-200 font-medium">
                     Information Systems
                     </span>
                  </div>
               </div>

               <div className="relative flex items-center gap-2">
                  <span className="h-3 w-3 bg-yellow-300 rounded-full animate-pulse animate-duration-1500" />

                  <span
                     className="
                     absolute -left-30 -top-3
                     opacity-0 scale-95
                     group-hover:opacity-100 group-hover:scale-100
                     transition-all duration-100
                     px-4 py-1 rounded-full
                     bg-linear-to-r from-yellow-400/20 to-orange-400/20
                     border border-yellow-400/30
                     text-yellow-300 text-sm font-semibold whitespace-nowrap
                     "
                  >
                     In Progress
                  </span>
               </div>
               </div>

               <div className="flex flex-col gap-4 text-white/90">
               <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Federal University of Juiz de Fora</span>
               </div>

               <span className="text-lg font-semibold text-white">
                  2023 – 2027
               </span>
               </div>
            </div>

            <div
               className="
               group relative
               bg-white/7 backdrop-blur-lg border border-white/10
               rounded-2xl p-10
               hover:bg-white/15 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(79,0,204,0.45)] transition-all duration-300
               flex flex-col gap-8
               "
               data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-anchor-placement='top-bottom'
            >
               <div className="flex items-center gap-4">
               <Languages size={42} className="text-white" />
               <h3 className="text-white font-semibold text-xl">
                  Languages
               </h3>
               </div>

               <div className="flex flex-col gap-5">
               {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-4">
                     <span className="w-24 text-white font-medium">
                     {lang.name}
                     </span>

                     <div className="flex-1 h-2 bg-white/25 rounded-full overflow-hidden border border-white/20">
                     <div
                        className="
                           h-full
                           bg-linear-to-r from-indigo-300 to-indigo-700
                           transition-all duration-500
                        "
                        style={{ width: `${lang.level}%` }}
                     />
                     </div>

                     <span className="w-20 text-right text-white/60 text-sm">
                     {lang.label}
                     </span>
                  </div>
               ))}
               </div>
            </div>
            <div id="projects"></div>
         </div>
         </section>

   );
}