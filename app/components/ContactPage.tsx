import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

export default function ContactPage() {
   return (
      <div id="contact" className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-20 h-full">
         <div className="flex flex-col md:flex-row gap-8 md:gap-10 h-full">
            <div className="flex-1 h-full">
               <ContactForm />
            </div>
            <div className="w-full md:w-60 lg:w-75 xl:w-85">
               <ContactDetails />
            </div>
         </div>
      </div>
   );
}