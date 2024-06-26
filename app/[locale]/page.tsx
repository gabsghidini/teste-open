"use client";
import { Header } from "../components/Header";
import { InfoSection } from "../components/InfoSection";
import { VideoInfoSection } from "../components/VideoInfoSection";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";
import { Carousel } from "../components/Carousel";

export default function Home() {
	return (
		<main>
			<Header />
			<InfoSection />
			<VideoInfoSection />
			<AboutSection />
			<Carousel />
			<Footer />
		</main>
	);
}
