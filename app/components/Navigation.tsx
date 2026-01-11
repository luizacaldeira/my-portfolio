export default function Navigation() {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <ul className="flex gap-6 md:gap-10 text-white text-md   md:text-xl backdrop-filter backdrop-brightness-150 px-8 py-3 backdrop-blur-xl rounded-full shadow-lg border border-white/5">
                <li className="hover:text-indigo-300 transition-colors"><a href="#about">About</a></li>
                <li className="hover:text-indigo-300 transition-colors"><a href="#projects">Projects</a></li>
                <li className="hover:text-indigo-300 transition-colors"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}