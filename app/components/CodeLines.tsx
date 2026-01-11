export default function CodeLines() {
return (
      <div className="flex flex-col gap-5 items-end h-full justify-between py-5">	
      {/* linha 1 */}
      <div className="flex gap-2 pl-8 animate-shake animate-infinite animate-duration-10000">
            <div className="bg-slate-400/80 w-30 h-1 rounded-sm animate-fade-left animate-delay-150" />
            <div className="bg-indigo-500 w-56 h-1 rounded-sm animate-fade-left animate-delay-200" />
      </div>

      {/* linha 2 */}
      <div className="flex gap-2 pl-3 animate-shake animate-infinite animate-duration-10000 animate-delay-500">
            <div className="bg-violet-500 w-12 h-1 rounded-sm animate-fade-left animate-delay-220" />
            <div className="bg-indigo-600 w-36 h-1 rounded-sm animate-fade-left animate-delay-260" />
            <div className="bg-indigo-400 w-24 h-1 rounded-sm animate-fade-left animate-delay-300" />
      </div>

      {/* linha 3 */}
      <div className="flex gap-2 pl-12 animate-shake animate-infinite animate-duration-10000 animate-delay-900">
            <div className="bg-pink-600 w-26 h-1 rounded-sm animate-fade-left animate-delay-320" />
            <div className="bg-indigo-500 w-60 h-1 rounded-sm animate-fade-left animate-delay-360" />
      </div>

      {/* linha 4 */}
      <div className="flex gap-2 pl-1 animate-shake animate-infinite animate-duration-10000 animate-delay-1300">
            <div className="bg-violet-400 w-30 h-1 rounded-sm animate-fade-left animate-delay-380" />
            <div className="bg-indigo-300 w-44 h-1 rounded-sm animate-fade-left animate-delay-420" />
            <div className="bg-indigo-600 w-28 h-1 rounded-sm animate-fade-left animate-delay-450" />
      </div>

      {/* linha 5 */}
      <div className="flex gap-2 pl-10 animate-shake animate-infinite animate-duration-10000 animate-delay-1800">
            <div className="bg-slate-500 w-33 h-1 rounded-sm animate-fade-left animate-delay-480" />
            <div className="bg-indigo-500 w-48 h-1 rounded-sm animate-fade-left animate-delay-520" />
      </div>

      {/* linha 6 */}
      <div className="flex gap-2 pl-5 animate-shake animate-infinite animate-duration-10000 animate-delay-2300">
            <div className="bg-pink-600 w-16 h-1 rounded-sm animate-fade-left animate-delay-540" />
            <div className="bg-indigo-600 w-64 h-1 rounded-sm animate-fade-left animate-delay-580" />
      </div>
      </div>
);
}