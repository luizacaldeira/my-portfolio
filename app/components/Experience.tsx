import { Briefcase, Calendar, Code2, GraduationCap, Search, Users } from "lucide-react";

interface ExperienceItem {
   title: string;
   company: string;
   period: string;
   description: string;
   impacts: string[];
   icon: React.ReactNode;
   tag: {
      label: string;
      color: string;
   };
   current?: boolean;
}

const experiences: ExperienceItem[] = [
   {
      title: "Commercial Advisor, Scrum Master & Front-End Developer",
      company: "Code Junior Enterprise",
      period: "07/2025 - 01/2026",
      description:
         "Front-end development of e-commerce applications using Next.js and React, combined with agile leadership and Scrum process facilitation.",
      impacts: [
         "Led customer journey analysis to support commercial prospecting and solution design",
         "Developed high-performance, responsive interfaces focused on usability and conversion",
         "Facilitated Scrum ceremonies, improving team alignment, delivery flow, and communication"
      ],
      icon: <Code2 size={24} />,
      tag: { label: "Junior Enterprise", color: "tag-blue" },
   },
   {
      title: "Trainee",
      company: "Code Junior Enterprise",
      period: "03/2025 - 07/2025",
      description:
         "Development of complete web applications with front-end and back-end integration.",
      impacts: [
         "Built responsive and accessible user interfaces using HTML5, CSS3, and JavaScript",
         "Implemented interactive features and form validations to enhance user experience"
      ],
      icon: <Briefcase size={24} />,
      tag: { label: "Junior Enterprise", color: "tag-blue" },
   },
   {
      title: "Research Scholarship Holder",
      company: "Meninas Digitais Program - FAPEMIG",
      period: "11/2024 - 11/2025",
      description:
         "Development of communication strategies and digital content to promote technology outreach.",
      impacts: [
         "Created engagement-driven content to encourage women’s participation in technology",
         "Produced and edited graphic and audiovisual materials for digital platforms"
      ],
      icon: <Search size={24} />,
      tag: { label: "Research", color: "tag-green" },
   },
   {
      title: "Technological Initiation Scholarship Holder",
      company: "MOTRANSP-PJF Project - Juiz de Fora City Hall",
      period: "06/2024 - 11/2024",
      description:
         "Analysis and optimization of urban public transportation systems.",
      impacts: [
         "Identified system inconsistencies and proposed data-driven improvements",
         "Analyzed routes, schedules, and fleet sizing to support operational optimization"
      ],
      icon: <GraduationCap size={24} />,
      tag: { label: "Research", color: "tag-green" },
   },
   {
      title: "Media Manager & Computational Workshops Coordinator",
      company: "Meninas Digitais UFJF Extension Project",
      period: "09/2023 - 09/2024",
      description:
         "Coordination of computational thinking workshops and digital media strategies.",
      impacts: [
         "Managed digital content to strengthen science communication and project visibility",
         "Organized and supported technology workshops for elementary school girls"
      ],
      icon: <Users size={24} />,
      tag: { label: "Extension Project", color: "tag-pink" },
   },
];


export default function Experience() {
   return (
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-20">
         <h2 
            className="text-white text-4xl mb-16 text-center"
            data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-bottom"
         >
            Experience
         </h2>
         
         <div className="relative">
            <div className="absolute md:left-8 left-7 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-indigo-500/50 to-transparent"></div>
            
            <div className="space-y-12">
               {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-20">
                     <div className={`absolute left-5 top-30 md:w-7 md:h-7 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                        exp.current 
                           ? 'bg-linear-to-r tag-pink border-white/50 shadow-[0_0_20px_rgba(99,102,241,0.6)]' 
                           : 'bg-indigo-800 border-white/30 hover:bg-white/20'
                     }`}
                        data-aos="zoom-in"
                        data-aos-duration="500"
                        data-aos-anchor-placement="center-bottom"
                     ></div>
                     
               <div className="
                  group relative
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  rounded-2xl p-6
                  transition-all duration-300
                  hover:bg-white/15
                  hover:-translate-y-1
                  hover:shadow-[0_20px_40px_-20px_rgba(79,0,204,0.45)]
                  "
                  data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out"
                  data-aos-anchor-placement="top-bottom"
                  >

                  <div className="flex flex-col md:flex-row justify-between items-start mb-5">
                     <div className="flex items-center gap-3 md:gap-4">
                        
                        <div className="
                        p-2 md:p-3 rounded-xl
                        bg-linear-to-br from-white/15 to-white/5
                        border border-white/20
                        transition-transform duration-300
                        group-hover:scale-105
                        w-fit">
                        <div className="text-white">
                           {exp.icon}
                        </div>
                        </div>

                        <div className="flex flex-col">
                           <h3 className="text-white text-md md:text-lg font-semibold leading-tight">
                              {exp.title}
                           </h3>
                           <p className="text-indigo-300 text-xs md:text-sm w-fit">
                              {exp.company}
                           </p>
                        </div>
                     </div>

                     <div className="flex flex-col md:mt-0 mt-3 items-start md:items-end w-fit gap-2">
                        <div className="flex items-center gap-2 text-white/60 text-xs">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                        </div>

                        <span
                        className={`
                           px-3 py-1
                           bg-linear-to-r ${exp.tag.color}
                           bg-opacity-20
                           border border-white/20
                           rounded-full
                           text-white text-xs font-semibold
                        `}
                        >
                        {exp.tag.label}
                        </span>
                     </div>
                  </div>

                  <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-4">
                     {exp.description}
                  </p>

                  <div className="
                     mt-4 pt-4
                     border-t border-white/10
                  ">
                     <p className="text-indigo-300 font-medium tracking-wider mb-3">
                        Impact
                     </p>

                     <ul className="space-y-2">
                        {exp.impacts.map((impact, i) => (
                        <li
                           key={i}
                           className="flex items-start gap-3 text-white/75 text-xs md:text-sm"
                        >
                           <span className="
                              mt-1 w-2 h-2
                              rounded-full
                              bg-indigo-400
                              shrink-0
                           " />
                           <span>{impact}</span>
                        </li>
                        ))}
                     </ul>
                  </div>
                        
                        {exp.current && (
                           <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-linear-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full text-green-200 text-xs font-semibold">
                              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                              Current Position
                           </div>
                        )}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}