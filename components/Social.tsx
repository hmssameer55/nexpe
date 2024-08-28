'use client';

import { motion, useInView } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { FaApple, FaGooglePlay } from 'react-icons/fa6';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';

export default function Social() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

	const storeData = [
		{
			name: 'Play Store',
			icon: <FaGooglePlay size={24} className="text-green-400" />,
			downloads: '5000+',
			color: 'from-green-500/20 to-green-500/5',
			borderColor: 'border-green-500/20',
		},
		{
			name: 'App Store',
			icon: <FaApple size={24} className="text-blue-400" />,
			downloads: '5000+',
			color: 'from-blue-500/20 to-blue-500/5',
			borderColor: 'border-blue-500/20',
		},
	];

	const textVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, delay: 0.2 + i * 0.1 },
		}),
	};

	return (
		<section className="min-h-screen flex items-center " ref={sectionRef}>
			<div className="container mx-auto px-4 py-10 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
				<motion.div
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
					variants={textVariants}
					className="lg:w-1/2 space-y-6 text-center lg:text-left"
				>
					<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
						Our users love our app!
					</h2>
					<p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
						Check out their reviews to see why they're raving about our seamless
						transactions, top-notch security, and user-friendly experience.
					</p>
					<p className="text-2xl md:text-4xl font-semibold text-white">
						Join the <span className="text-yellow-400">GoNexPe</span> community
						today!
					</p>
					<button
						className="hidden w-[170px] bg-zinc-500 h-[55px] my-3 md:flex items-center justify-center rounded-2xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r 
					before:from-[#fbbf24] before:to-[#fbbf24] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff] hover:text-zinc-800 font-medium tracking-wide"
					>
						Get Started
						<ArrowRight size={20} className="ml-2" />
					</button>
				</motion.div>

				<div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
					{storeData.map((store, index) => (
						<motion.div
							key={store.name}
							custom={index}
							initial="hidden"
							animate={isInView ? 'visible' : 'hidden'}
							variants={cardVariants}
						>
							<div
								className={`bg-gradient-to-br ${store.color} p-6 rounded-2xl border ${store.borderColor} backdrop-blur-sm`}
							>
								<div className="flex items-center justify-between mb-6">
									<div className="flex items-center space-x-3">
										<div className="p-2 bg-white/10 rounded-full">
											{store.icon}
										</div>
										<span className="text-white font-semibold text-xl">
											{store.name}
										</span>
									</div>
									<div className="text-sm font-medium text-white/70 bg-white/10 px-3 py-1 rounded-full">
										Featured
									</div>
								</div>
								<div className="space-y-4">
									<div className="flex justify-between items-center">
										<p className="text-3xl font-bold text-white">
											{store.downloads}
										</p>
										<div className="flex items-center space-x-1">
											<span className="text-lg font-semibold text-white">
												4.9
											</span>
											<div className="flex">
												{[...Array(5)].map((_, i) => (
													<Star
														key={i}
														className="text-yellow-400"
														size={16}
														fill="currentColor"
													/>
												))}
											</div>
										</div>
									</div>
									<p className="text-white/70">Active Installs</p>
									<div className="w-full bg-white/20 rounded-full h-2">
										<div className="bg-white w-4/5 h-2 rounded-full"></div>
									</div>
									<p className="text-sm text-white/70 text-right">
										5000+ Reviews
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
