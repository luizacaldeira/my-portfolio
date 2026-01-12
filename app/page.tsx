'use client';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ShaderBG from './components/ShaderBG';
import LoadingScreen from './components/LoadingScreen';
import ToolsSwiper from './components/ToolsSwiper';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Page() {
	useEffect(() => {
		AOS.init({ once: false });
	}, []);
	return (
		<div id="top" className="bg-grain h-full relative bg-black overflow-hidden">
				<LoadingScreen />
				<ShaderBG />
				<div className="relative z-10 h-full flex flex-col">
					<Navigation />
					<main className="flex flex-col items-center justify-center pt-40">
						<HeroSection />
						<AboutMe />
						<ToolsSwiper />
						<Education />
						<Projects />
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