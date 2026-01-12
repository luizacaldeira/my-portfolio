'use client'

import FormInput from "./ui/form-input";
import { SendHorizontal } from "lucide-react";
import { useState } from "react";

export type emailTemplate = {
   name: string;
   email: string;
   subject: string;
   message: string;
}

export default function ContactForm() {
   const emailTemplate: emailTemplate = {
      name: "",
      email: "",
      subject: "",
      message: ""
   }
   const [emailData, setEmailData] = useState<emailTemplate>(emailTemplate);
   const [formMessage, setFormMessage] = useState("");
   const [success, setSuccess] = useState(false);
      const [loading, setLoading] = useState(false);
      const [errors, setErrors] = useState<Partial<emailTemplate>>({});

   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const isValid = validate();
      if (!isValid) return;
      setLoading(true);
      const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData),
      });

      if (response.ok) {
            setFormMessage('Message sent successfully!');
            setEmailData(emailTemplate);
            setSuccess(true);
         setErrors({});
         setLoading(false);
            setTimeout(() => {
               setFormMessage("");
            }
            , 3000);
      } else {
            setFormMessage('Failed to send message. Please try again later.');
            setSuccess(false);
         setLoading(false);
            setTimeout(() => {
               setFormMessage("");
            }
            , 3000);
      }
   }

   function handleChange(value: string, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      const { name } = event.target;
      setEmailData({ ...emailData, [name]: value });
         setErrors(prev => ({ ...prev, [name]: undefined }));
   }

   function validate() {
      const newErrors: Partial<emailTemplate> = {};
      if (!emailData.name || emailData.name.trim().length < 2) newErrors.name = 'Please enter your full name.';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailData.email || !emailRegex.test(emailData.email)) newErrors.email = 'Please enter a valid email address.';
      if (emailData.subject && emailData.subject.length > 150) newErrors.subject = 'Subject is too long.';
      if (!emailData.message || emailData.message.trim().length < 10) newErrors.message = 'Please provide a short message (min 10 characters).';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   }

   return (
      <section className="mx-auto mb-0 w-full h-fit rounded-2xl border border-white/10 bg-white/7 px-6 sm:px-10 md:px-8 py-12 backdrop-blur-lg flex flex-col">
         
         <h2 className="mb-10 text-center text-3xl text-white">
            Contact Me
         </h2>
      
         <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 flex-1 justify-start"
         >
            {formMessage && (
            <div
               className={`flex items-center gap-2 rounded-2xl border px-4 py-2 text-xs font-semibold text-white transition-all
                  ${success 
                  ? 'border-emerald-400/30 bg-emerald-500/20' 
                  : 'border-red-400/30 bg-red-500/20'}
               `}
            >
               {formMessage}
            </div>
            )}
      
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-2">
               <FormInput
                  label="Full name"
                  placeholder="e.g. Jane Doe"
                  type="text"
                  name="name"
                  value={emailData.name}
                  onChange={handleChange}
               />
               {errors.name && (
                  <p className="text-xs text-red-300">{errors.name}</p>
               )}
            </div>
      
            <div className="flex flex-col gap-2">
               <FormInput
                  label="Email"
                  placeholder="you@company.com"
                  type="email"
                  name="email"
                  value={emailData.email}
                  onChange={handleChange}
               />
               {errors.email && (
                  <p className="text-xs text-red-300">{errors.email}</p>
               )}
            </div>
            </div>
      
            <div className="flex flex-col gap-2">
            <FormInput
               label="Subject"
               placeholder="e.g. Project inquiry — website redesign"
               type="text"
               name="subject"
               value={emailData.subject}
               onChange={handleChange}
            />
            {errors.subject && (
               <p className="text-xs text-red-300">{errors.subject}</p>
            )}
            </div>
      
            {/* Message */}
            <div className="flex flex-col gap-2">
            <FormInput
               label="Message"
               placeholder="Briefly describe your project, timeline, and budget (optional)"
               name="message"
               textarea
               value={emailData.message}
               onChange={handleChange}
            />
            {errors.message && (
               <p className="text-xs text-red-300">{errors.message}</p>
            )}
            </div>
      
            <button
            type="submit"
            disabled={loading}
            aria-label="Send message"
            className={`
               mt-4 font-display inline-flex w-full items-center justify-center gap-2 rounded-2xl
               bg-linear-to-r from-indigo-200/50 to-indigo-300/40 text-indigo-50 backdrop-blur-md px-6 py-3 font-medium border border-indigo-100/30
               transition-all duration-300 cursor-pointer
               hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.10)]
               disabled:cursor-not-allowed disabled:opacity-60
               md:w-fit
            `}
            >
            {loading ? (
               <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Sending...
               </>
            ) : (
               <>
                  Send message
                  <SendHorizontal strokeWidth={1.5} className="h-4 w-4" />
               </>
            )}
            </button>
         </form>
      </section>
      );
      
}