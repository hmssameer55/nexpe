'use client';

import { motion, useInView } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { FaApple, FaGooglePlay } from 'react-icons/fa6';
import { PinContainer } from './ui/3d-pin';
import { useRef } from 'react';

export default function Social() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

	const storeData = [
		{
			name: 'Play Store',
			icon: <FaGooglePlay size={20} color="#FDB665" className="mr-2.5" />,
			downloads: '5000+',
		},
		{
			name: 'App Store',
			icon: <FaApple size={22} color="#FDB665" className="mr-2.5" />,
			downloads: '5000+',
		},
	];

	const textVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	const cardVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: (i: number) => ({
			opacity: 1,
			x: 0,
			transition: { duration: 0.5, delay: 0.5 + i * 0.2 },
		}),
	};

	const buttonVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 1 } },
	};

	return (
		<section className="min-h-screen  flex items-center" ref={sectionRef}>
			<div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between gap-6">
				<motion.div
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
					variants={textVariants}
					className="lg:w-1/2 space-y-6 text-center lg:text-left"
				>
					<h2 className="text-4xl font-bold tracking-tight">
						Our users love our app!
					</h2>
					<p className="text-xl text-muted-foreground">
						Check out their reviews to see why they're raving about our seamless
						transactions, top-notch security, and user-friendly experience.
					</p>
					<p className="text-3xl font-semibold">
						Join the <span className="text-primary">GoNexPe</span> community
						today!
					</p>
					<motion.button
						variants={buttonVariants}
						className="my-3 max-sm:mx-auto flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md bg-slate-600 text-white hover:scale-105 hover:shadow-lg hover:text-white before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#FFB400] before:to-[#FF9A00] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 after:absolute after:top-0 after:left-full after:w-full after:h-full after:bg-white after:opacity-5 after:transition-all after:duration-500 after:ease-in-out hover:after:left-0 after:rounded-xl px-6 py-4 text-lg"
					>
						<span className="relative z-10">Get Started</span>
						<ArrowRight size={20} className="ml-2" />
					</motion.button>
				</motion.div>

				<div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2">
					{storeData.map((store, index) => (
						<motion.div
							key={store.name}
							custom={index}
							initial="hidden"
							animate={isInView ? 'visible' : 'hidden'}
							variants={cardVariants}
						>
							<PinContainer
								title="/ui.aceternity.com"
								href="https://twitter.com/mannupaaji"
							>
								<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] h-[16rem] ">
									<div className="flex items-center">
										{store.icon}
										<span className="text-white font-semibold text-2xl">
											{store.name}
										</span>
									</div>

									<div
										className="flex flex-1 w-full
									 rounded-lg mt-4 bg-gradient-to-br
									  from-indigo-100/10 via-indigo-100/20 to-indigo-100/10"
									>
										<div className="flex flex-col items-center gap-5 w-full p-4">
											<p className="text-center text-white text-2xl font-semibold">
												{store.downloads}
											</p>
											<div className="flex gap-1">
												{[...Array(5)].map((_, index) => (
													<Star
														key={index}
														className="text-primary"
														size={25}
														fill="yellow"
													/>
												))}
											</div>
											<p>
												<span className="text-white font-semibold">4.9</span>{' '}
												(5000+)
											</p>
										</div>
									</div>
								</div>
							</PinContainer>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
