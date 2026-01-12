
import { Linkedin, Github } from "lucide-react";

type SocialLinks = {
   linkedin?: string;
   github?: string;
};

export default function SocialMedia({
   links = {},
}: {
   links?: SocialLinks;
}) {
   const defaults: Required<SocialLinks> = {
      linkedin: 'https://www.linkedin.com/in/luiza-caldeira/',
      github: 'https://github.com/luizacaldeira',
      };

   const final = { ...defaults, ...links };

   const items = [
      { href: final.linkedin, label: 'LinkedIn', icon: <Linkedin size={18} /> },
      { href: final.github, label: 'GitHub', icon: <Github size={18} /> },
   ];

   return (
      <div className="flex items-center gap-3">
         {items.map((it) => (
            <a
               key={it.label}
               href={it.href}
               target={it.href.startsWith('http') ? '_blank' : undefined}
               rel={it.href.startsWith('http') ? 'noopener noreferrer' : undefined}
               aria-label={it.label}
               title={it.label}
               className="inline-flex items-center justify-center p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors duration-200"
            >
               {it.icon}
            </a>
         ))}
      </div>
   );
}