'use client';
import { useTypingEffect } from "@/hooks/useTypingEffect";

const roles = [
    "React Dev",
    "Frontend Dev",
    "UI Builder",
    "Web Designer",
    "Code Enthusiast",
    "Problem Solver"
];

export default function TypingRoles() {
    const displayedText = useTypingEffect(roles);

    return (
        <p className="font-mono text-md md:text-lg lg:text-xl bg-indigo-600 w-fit px-4 py-1 transition-all duration-300">
            {displayedText}<span className="animate-pulse">|</span>
        </p>
    );
}