"use client"

import SocialMedia from "./SocialMedia";
import { Mail, Phone, MapPin,  Copy } from "lucide-react";
import { useState } from "react";

type SocialLinks = {
linkedin?: string;
email?: string;
phone?: string;
whatsapp?: string;
instagram?: string;
github?: string;
};

export default function ContactDetails({
links = {},
title = "Contact & Availability",
description = "Front-end developer building accessible, high-performance interfaces with care and purpose. Open to freelance, contract work, and collaborations.",
location = "Juiz de Fora, Brazil",
}: {
links?: SocialLinks;
title?: string;
description?: string;
location?: string;
}) {
const defaults: Required<SocialLinks> = {
   linkedin: "https://www.linkedin.com/in/luiza-caldeira/",
   email: "mailto:luizacaldeirad@gmail.com",
   phone: "tel:(31)9 9664 1192",
   whatsapp: "https://wa.me/55319996641192",
   instagram: "https://www.instagram.com/luizacald/",
   github: "https://github.com/luizacaldeira",
};

const final = { ...defaults, ...links };
const [copied, setCopied] = useState<string | null>(null);

async function handleCopy(text: string, key: string) {
   try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
   } catch (e) {
   }
}

return (
   <section className="flex flex-col h-full justify-start bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-[inset_0_2px_8px_0_rgba(255,255,255,0.06)]">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/80 text-sm mb-4">{description}</p>

      <div className="mb-4">
      <div className="flex items-center gap-2 text-white/80 mb-2 cs-glass-purple px-3 py-1 rounded-2xl w-fit">
         <MapPin size={16} />
         <span className="text-sm">{location}</span>
      </div>
      </div>

      <div className="mb-4">
      <h4 className="text-sm text-indigo-200 font-semibold mb-2">Contact</h4>

      <div className="flex flex-col gap-2">
         <div className="flex items-center justify-between cs-glass-blue p-2 rounded-2xl">
            <div className="flex items-center gap-2 text-white/90">
            <Mail size={16} />
            <a href={final.email} className="text-sm">Email</a>
            </div>
            <button
            onClick={() => handleCopy(final.email.replace(/^mailto:/, ""), "email")}
            className="text-white/60 hover:text-white p-1 rounded"
            aria-label="Copy email"
            >
            <Copy size={14} className="cursor-pointer"/>
            </button>
         </div>

         <div className="flex items-center justify-between cs-glass-green p-2 rounded-2xl">
            <div className="flex items-center gap-2 text-white/90">
            <Phone size={16} />
            <a href={final.phone} className="text-sm">Phone</a>
            </div>
            <button
            onClick={() => handleCopy(final.phone.replace(/^tel:/, ""), "phone")}
            className="text-white/60 hover:text-white p-1 rounded"
            aria-label="Copy phone"
            >
            <Copy size={14} className="cursor-pointer" />
            </button>
         </div>
      </div>

      {copied && (
         <p className="text-xs text-green-300 mt-2">{copied === 'email' ? 'Email copied to clipboard' : 'Phone copied to clipboard'}</p>
      )}
      </div>

      <div className="mb-2">
      <h4 className="text-sm text-indigo-200 font-semibold mb-2">Find me on</h4>
      <SocialMedia
         links={{
            linkedin: final.linkedin,
            github: final.github,
         }}
      />
      </div>

      <p className="text-xs text-white/60 mt-4">Prefer a different channel? Mention it in the message and I’ll follow up.</p>
   </section>
);
}
