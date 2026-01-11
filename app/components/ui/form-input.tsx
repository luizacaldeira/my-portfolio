interface FormInputProps {
   label: string;
   placeholder: string;
   type?: string;
   textarea?: boolean;
   value?: string;
   readOnly?: boolean;
   prefix?: string;
   rows?: number;
   name?: string,
   onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}


export default function FormInput({ label, placeholder, type = "text", textarea = false, value, readOnly, onChange, rows, name }: FormInputProps) {
   return (
      <div className="w-full flex flex-col">
         <label className="pl-1 text-md text-white/80 font-medium font-display mb-1">{label}</label>
         {textarea ? (
            <textarea
               placeholder={placeholder}
               className="px-3 py-2 rounded-2xl bg-white/15 border border-white/10 placeholder-white/50 text-white min-h-120px resize-vertical focus:outline-none focus:ring-1 focus:ring-indigo-400 transition-shadow duration-150"
               rows={rows ?? 5}
               value={value}
               onChange={(e) => onChange && onChange(e.target.value, e)}
               readOnly={readOnly}
               name={name}
            />
         ) : (
            <input
               type={type}
               placeholder={placeholder}
               className="px-3 py-2 rounded-2xl bg-white/15 border border-white/10 placeholder-white/50 text-white min-h-120px resize-vertical focus:outline-none focus:ring-1 focus:ring-indigo-400 transition-shadow duration-150"
               value={value}
               onChange={(e) => onChange && onChange(e.target.value, e)}
               readOnly={readOnly}
               name={name}
            />
         )}
      </div>
   );
}