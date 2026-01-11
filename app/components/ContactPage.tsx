import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

export default function ContactPage() {
   return (
      <div id="contact" className="w-full max-w-6xl px-4 py-10 h-full">
         <div className="flex flex-col md:flex-row gap-8 md:gap-10 h-full">
            <div className="flex-1 h-full">
               <ContactForm />
            </div>
            <div className="w-full md:w-80 h-full">
               <ContactDetails />
            </div>
         </div>
      </div>
   );
}