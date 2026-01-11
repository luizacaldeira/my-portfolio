import {Sparkles, Heart, Code2, Tv, Film, Dumbbell, BookOpen } from "lucide-react";


const devSkills = [
   'Responsive Design',
   'Intuitive UI/UX',
   'Dynamic Interfaces',
   'Performance',
];

const softSkills = [
   'Problem Solving',
   'Team Collaboration',
   'Quick Learner',
   'Attention to Detail',
];

const hobbies = [
   { name: 'Watching Series', icon: <Tv size={16} /> },
   { name: 'Video Editing', icon: <Film size={16} /> },
   { name: 'Gym & Fitness', icon: <Dumbbell size={16} /> },
   { name: 'Reading', icon: <BookOpen size={16} /> },
];

export default function Skills() {
   return (
      <section>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Development Focus Card */}
            <div className="group relative p-6 bg-white/7 backdrop-blur-lg border border-white/10 rounded-2xl hover:bg-white/15 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(79,0,204,0.45)] transition-all duration-300 flex flex-col gap-2">
               <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-all duration-300">
                     <Code2 size={30} className="text-blue-300" />
                  </div>
                  <h3 className="text-white text-xl font-semibold">Development Focus</h3>
               </div>
               <div className="flex flex-wrap gap-2">
                  {devSkills.map((skill, index) => (
                     <span
                        key={index}
                        className="px-3 py-1.5 bg-linear-to-r tag-blue border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium backdrop-blur-sm hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
                     >
                        {skill}
                     </span>
                  ))}
               </div>
            </div>

            {/* Soft Skills Card */}
            <div className="group relative bg-white/7 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/15 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(79,0,204,0.45)] transition-all duration-300
               flex flex-col gap-2">
               <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-500/10 rounded-xl group-hover:bg-green-500/20 transition-all duration-300">
                     <Sparkles size={30} className="text-green-300" />
                  </div>
                  <h3 className="text-white text-xl font-semibold">Soft Skills</h3>
               </div>
               <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, index) => (
                     <span
                        key={index}
                        className="px-3 py-1.5 bg-linear-to-r tag-green border border-green-400/30 rounded-full text-green-200 text-sm font-medium backdrop-blur-sm hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300"
                     >
                        {skill}
                     </span>
                  ))}
               </div>
            </div>

            {/* Hobbies Card */}
            <div className="group relative bg-white/7 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/15 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(79,0,204,0.45)] transition-all duration-300
               flex flex-col gap-2">
               <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-pink-500/10 rounded-xl group-hover:bg-pink-500/20 transition-all duration-300">
                     <Heart size={30} className="text-pink-300" />
                  </div>
                  <h3 className="text-white text-xl font-semibold">Hobbies</h3>
               </div>
               <div className="flex flex-wrap gap-2">
                  {hobbies.map((hobby, index) => (
                     <span
                        key={index}
                        className="px-3 py-1.5 bg-linear-to-r tag-pink border border-pink-400/30 rounded-full text-pink-200 text-sm font-medium backdrop-blur-sm hover:from-pink-500/30 hover:to-rose-500/30 transition-all duration-300 flex items-center gap-2"
                     >
                        {hobby.icon}
                        {hobby.name}
                     </span>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}