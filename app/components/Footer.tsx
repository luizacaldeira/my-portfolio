import { Heart } from "lucide-react";

export default function Footer() {
const year = new Date().getFullYear();

return (
   <footer className="w-full border-t border-white/5 backdrop-blur-lg py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center gap-2">
         <div className="text-white/80 text-sm">
         <p>Developed with Next.js — © {year} Luiza Caldeira</p>
         </div>
         <Heart size={10} color={"var(--color-indigo-100)"} className="animate-ping"/>
      <div />
      </div>
   </footer>
);
}
   