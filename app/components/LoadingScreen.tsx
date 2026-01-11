'use client';
import { useState, useEffect } from "react";

export default function LoadingScreen() {
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const checkShaderLoaded = () => {
         const canvas = document.querySelector('canvas');
         if (canvas && canvas.width > 0 && canvas.height > 0) {
               requestAnimationFrame(() => {
                  setIsLoading(false);
               });
               return true;
         }
         return false;
      };

      const interval = setInterval(() => {
         if (checkShaderLoaded()) {
               clearInterval(interval);
         }
      }, 100);

      const fallbackTimeout = setTimeout(() => {
         setIsLoading(false);
         clearInterval(interval);
      }, 3000);

      return () => {
         clearInterval(interval);
         clearTimeout(fallbackTimeout);
      };
   }, []);

   if (!isLoading) return null;

   return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-500">
         <div className="w-12 h-12 border-3 border-indigo-300 border-t-transparent rounded-full animate-spin" />
      </div>
   );
}