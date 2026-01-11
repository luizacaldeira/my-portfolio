'use client';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ShaderBG from './components/ShaderBG';
import LoadingScreen from './components/LoadingScreen';
import ToolsSwiper from './components/ToolsSwiper';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ContactForm from './components/ContactForm';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

export default function Page() {
	return (
		<div className="bg-grain h-full relative bg-black overflow-hidden">
				<LoadingScreen />
				<ShaderBG />
				<div className="relative z-10 h-full flex flex-col">
					<Navigation />
					<main className="flex flex-col items-center justify-center pt-40">
						<HeroSection />
						<ToolsSwiper />
						<Projects />
						<Education />
						<AboutMe />
						<Experience />
						<ContactPage />
					</main>
					<footer>
						<Footer />
					</footer>
				</div>
		</div>
	);
}