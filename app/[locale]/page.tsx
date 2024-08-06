"use client";

import { InfoSection } from "../components/InfoSection";
import { VideoInfoSection } from "../components/VideoInfoSection";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";
import { Carousel } from "../components/Carousel";
import { Questrial } from 'next/font/google'

const questrial = Questrial({
	weight: '400',
	style: 'normal',
	subsets: ['latin'],
  	display: 'swap',
})

export default function Home() {
	return (
		<main className={questrial.className}>
			<InfoSection />
			<VideoInfoSection />
			<AboutSection />
			<Carousel />
			<Footer />
		</main>
	);
}
