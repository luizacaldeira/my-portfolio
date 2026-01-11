import { useState, useEffect } from "react";

export function useTypingEffect(words: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 1500) {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [displayedText, setDisplayedText] = useState("");
   const [isDeleting, setIsDeleting] = useState(false);

   useEffect(() => {
      const currentWord = words[currentIndex];
      const speed = isDeleting ? deletingSpeed : typingSpeed;

      const timer = setTimeout(() => {
            if (!isDeleting) {
               if (displayedText.length < currentWord.length) {
                  setDisplayedText(currentWord.slice(0, displayedText.length + 1));
               } else {
                  setTimeout(() => setIsDeleting(true), pauseTime);
               }
            } else {
               if (displayedText.length > 0) {
                  setDisplayedText(currentWord.slice(0, displayedText.length - 1));
               } else {
                  setIsDeleting(false);
                  setCurrentIndex((prev) => (prev + 1) % words.length);
               }
            }
      }, speed);

      return () => clearTimeout(timer);
   }, [displayedText, isDeleting, currentIndex, words, typingSpeed, deletingSpeed, pauseTime]);

   return displayedText;
}