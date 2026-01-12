import { Eye, GithubIcon } from 'lucide-react';
import Image from 'next/image';

interface Project {
   title: string;
   description: string;
   imageUrl: string;
   projectUrl: string;
   githubUrl?: string;
   technologies?: string[];
   status?: 'In Progress' | 'Completed';
   progress?: number;
}

const myProjects: Project[] = [
   {
      title: 'MedSys',
      description:
         'A system for managing medical appointments and patient records. Featuring a user-friendly interface and secure data handling.',
      imageUrl: '/texted-med.png',
      projectUrl: 'https://medsys-expo.vercel.app/',
      githubUrl: 'https://github.com/luizacaldeira/medsys',
      technologies: ['React', 'Laravel', 'Tailwind CSS'],
      status: 'In Progress',
      progress: 85,
   },
   {
      title: 'Luma Skin Care',
      description:
         'An e-commerce website for skincare products. Features a sleek, animated design and smooth user experience.',
      imageUrl: '/lumaskin.png',
      projectUrl: 'https://luma-skin.vercel.app/',
      githubUrl: 'https://github.com/luizacaldeira/luma-skin',
      technologies: ['Next.js', 'Tailwind CSS', 'Node.js'],
      status: 'Completed',
   },
];

export default function Projects({
   projects = myProjects,
}: {
   projects?: Project[];
}) {
   return (
      <section id="projects" className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-10">
         <h2 className="text-white text-4xl mb-12 text-center">Projects</h2>

         <div className="flex flex-col lg:flex-row gap-7 items-center">
            {projects.map((project) => (
               <div
                  key={project.title}
                  className="w-full relative rounded-2xl overflow-hidden backdrop-blur-lg bg-white/5 border border-white/10 flex flex-col md:flex-row min-h-80"
               >
                  {/* Image */}
                  <div className="relative h-56 md:h-auto md:w-2/5 w-full overflow-hidden shrink-0">
                     <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
                     />
                     <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-80 pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col p-6 md:rounded-b-none md:rounded-r-2xl w-full gap-4">
                     {/* Header */}
                     <div>
                        <h3 className="text-white text-xl font-semibold mb-1">
                           {project.title}
                        </h3>

                        <p className="text-white/80 text-sm">
                           {project.description}
                        </p>
                     </div>

                     {/* Technologies */}
                     {project.technologies && (
                        <div className="flex flex-wrap gap-2">
                           {project.technologies.map((tech, index) => (
                              <span
                                 key={index}
                                 className="text-xs text-indigo-100 bg-blue-400/10 px-2.5 py-1 rounded-full border border-blue-300/20 backdrop-blur-sm"
                              >
                                 {tech}
                              </span>
                           ))}
                        </div>
                     )}

                     {/* Actions */}
                     <div className="mt-2 flex flex-col gap-3">
                        <div className="flex gap-3">
                           {project.status !== 'In Progress' && (
                              <a
                                 href={project.projectUrl}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="flex text-sm items-center justify-center px-5 py-1.5 rounded-2xl 
                                 bg-linear-to-r from-indigo-400/50 to-indigo-400/50 
                                 hover:from-indigo-300/50 hover:to-indigo-500/50 
                                 text-white font-semibold transition duration-300 
                                 hover:shadow-[0_0_25px_rgba(99,102,241,0.45)]"
                              >
                                 <Eye className="inline w-4 h-4 mr-2" />
                                 View Project
                              </a>
                           )}

                           {project.githubUrl && (
                              <a
                                 href={project.githubUrl}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="text-sm px-4 py-1.5 rounded-2xl 
                                 bg-indigo-400/15 border border-indigo-300/20 
                                 hover:bg-indigo-100/25 hover:text-indigo-900 duration-350
                                 text-white font-medium transition backdrop-blur-md"
                              >
                                 <GithubIcon className="inline w-4 h-4 mr-2 mb-0.5" />
                                 GitHub
                              </a>
                           )}
                        </div>

                        {/* Progress */}
                        {project.status === 'In Progress' && (
                           <div className="flex flex-col gap-1">
                              <span className="text-xs text-amber-100 font-semibold">
                                 In Progress
                              </span>

                              <div className="flex items-center gap-2">
                                 <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden border border-indigo-200/30">
                                    <div
                                       className="h-full bg-linear-to-r from-transparent to-amber-500 transition-all duration-700"
                                       style={{
                                          width: `${project.progress ?? 50}%`,
                                       }}
                                    />
                                 </div>

                                 <span className="text-xs text-indigo-100 font-semibold min-w-8 text-right">
                                    {project.progress ?? 50}%
                                 </span>
                              </div>
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}
