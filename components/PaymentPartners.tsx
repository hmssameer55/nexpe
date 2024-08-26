'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import BBPS from '@/public/assets/bbps.png';
import NPCI from '@/public/assets/npci.png';
import RBI from '@/public/assets/rbi.png';

const PaymentPartners = () => {
	const partners = [
		{
			image: BBPS,
			title: 'Simplified Bill Payments with BBPS',
			description:
				'We provide a unified platform for managing all your bill payments—utilities, subscriptions, and more—under one roof. Our app ensures fast, reliable payments and easy tracking, so you never miss a due date.',
		},
		{
			image: NPCI,
			title: 'Empowered by NPCI',
			description:
				'NPCI powers Indias digital payments with UPI, IMPS, and more, ensuring fast, secure transactions. Our app uses NPCI for instant transfers and encrypted security, making digital payments accessible to everyone.',
		},
		{
			image: RBI,
			title: 'Regulated by RBI',
			description:
				'Regulated by the Reserve Bank of India (RBI), our app meets the highest standards of security and compliance. We protect your financial data with advanced encryption, ensuring a trustworthy and secure payment experience.',
		},
	];

	const variants = {
		hidden: { opacity: 0, y: 50 },
		visible: (index: number) => ({
			opacity: 1,
			y: 0,
			transition: { duration: 0.7, delay: index * 0.4 },
		}),
	};

	return (
		<div className="max-w-screen-xl mx-auto">
			<h1 className="text-3xl font-bold text-center mb-12">
				Our Trusted Payment Network
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
				{partners.map((partner, index) => {
					const controls = useAnimation();
					const ref = React.useRef(null);
					const inView = useInView(ref, { once: true });

					React.useEffect(() => {
						if (inView) {
							controls.start('visible');
						}
					}, [controls, inView]);

					return (
						<motion.div
							ref={ref}
							key={index}
							initial="hidden"
							animate={controls}
							variants={variants}
							custom={index}
							className="bg-gray-800 rounded-lg overflow-hidden"
						>
							<div className="relative h-48">
								<Image
									src={partner.image}
									alt={partner.title}
									layout="fill"
									objectFit="cover"
								/>
							</div>
							<div className="p-6">
								<h2 className="text-xl font-semibold mb-2 text-[#FDB665]">
									{partner.title}
								</h2>
								<p className="text-gray-300 text-sm">{partner.description}</p>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default PaymentPartners;
