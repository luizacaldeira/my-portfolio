import { Home } from "lucide-react";

export default function Navigation() {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <ul className="flex gap-6 md:gap-10 text-white text-md md:text-xl backdrop-filter backdrop-brightness-100 bg-white/5 px-10 py-3 backdrop-blur-lg rounded-full shadow-lg border border-white/10">
                <li className="hover:text-indigo-300 hover:transition-colors">
                    <a href="#top">
                        <Home className="w-5 h-5 inline-block mr-1 mb-0.5" />
                    </a>
                </li>
                <li className="hover:text-indigo-300 transition-colors"><a href="#about">About</a></li>
                <li className="hover:text-indigo-300 transition-colors"><a href="#projects">Projects</a></li>
                <li className="hover:text-indigo-300 transition-colors"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}