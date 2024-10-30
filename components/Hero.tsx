'use client';

import React from 'react';
import Image from 'next/image';
import { FaLongArrowAltRight } from 'react-icons/fa';
import HeroImg from '@/public/assets/hero-device.png';
import HeroMobileImg from '@/public/assets/hero-mobile.png';
import { FaApple, FaGooglePlay } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Component({
	onScrollTo,
}: {
	onScrollTo: (index: number) => void;
}) {
	return (
		<div className="flex flex-col items-center justify-center w-full max-w-screen-lg p-5 gap-8 md:gap-14 z-10 max-md:min-h-screen">
			<div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-14">
				<Image
					src={HeroImg}
					alt="NexPe App Screenshot"
					width={350}
					height={600}
					className="object-contain w-full size-96 hidden md:block"
				/>
				<Image
					src={HeroMobileImg}
					alt="NexPe App Screenshot"
					width={350}
					height={600}
					className="object-contain w-full size-80  block md:hidden"
				/>

				<div className="w-full space-y-4 md:space-y-8 text-center md:text-left">
					<h1 className="text-4xl md:text-5xl lg:text-8xl leading-tight md:!leading-[100px] tracking-widest font-bold custom-shadow">
						Go
						<span className="text-primary custom-yellow-shadow">.</span>
						<br />
						Nexpe
					</h1>
					<p className="text-lg md:text-xl">Pay as you go, Next</p>
					<div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-5 text-base md:text-xl font-semibold tracking-wide">
						<Link href={"https://play.google.com/store/apps/details?id=com.nexpe"} target='_blank'>
							<motion.button
								className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 md:px-10 py-6 md:py-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<FaGooglePlay size={20} color="#FDB665" className="mr-2.5" />
								<span>Playstore</span>
							</motion.button>
						</Link>
						<motion.button
							className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 md:px-10 py-6 md:py-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<FaApple size={22} color="#FDB665" className="mr-2.5" />
							<span>Appstore</span>
						</motion.button>
					</div>
				</div>
			</div>
			<motion.button
				className="bg-primary rounded-full p-4 mt-0 absolute right-20 hidden md:block"
				onClick={() => onScrollTo(1)}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1 }}
				whileHover="hover"
				aria-label="Scroll to next section"
			>
				<motion.div
					variants={{
						hover: { x: 10 },
						initial: { x: 0 },
					}}
					transition={{
						type: 'spring',
						stiffness: 200,
						damping: 10,
					}}
				>
					<FaLongArrowAltRight size={24} className="text-white" />
				</motion.div>
			</motion.button>
		</div>
	);
}
