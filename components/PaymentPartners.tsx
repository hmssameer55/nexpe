'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import BBPS from '@/public/assets/bbps.png';
import NPCI from '@/public/assets/npci.png';
import RBI from '@/public/assets/rbi.png';

const PaymentPartners = () => {
	const partners = [
		{
			image: BBPS,
			title: 'What is BBPS ?',
			description:
				'BBPS, by NPCI, offers a unified platform for seamless bill payments across India. Pay utility, telecom, DTH, and other service bills effortlessly from one place.',
			highlights: [
				'One-stop platform: Supports various recurring bills and payments. Pay via UPI, debit/credit cards, net banking, and wallets.',
				'Instant Confirmation: Real-time verification with instant receipts.',
				'Convenient: Accessible via mobile, web, and authorized agents.',
			],
		},
		{
			image: NPCI,
			title: 'Role of NPCI',
			description:
				"The NPCI, under RBI's guidance, ensures BBPS operates with strict safety & interoperability standards, offering secure transactions backed by national financial authorities.",
			highlights: [
				'Standardized Infrastructure: Uniform standards ensure secure transactions across all service providers.',
				"Reliable Network: NPCI's expertise guarantees smooth and uninterrupted payment processing.",
				'Transaction Security: Advanced encryption keeps your data confidential throughout the payment process.',
			],
		},
		{
			image: RBI,
			title: "RBI's Regulatory Oversight",
			description:
				'The Reserve Bank of India (RBI) regulates BBPS and NPCI, ensuring your payments are safe, compliant, and secure by enforcing strict financial standards.',
			highlights: [
				'User Data Privacy: Robust measures protect your personal and payment information.',
				'Anti-Fraud Safeguards: Two-factor authentication (2FA), secure OTPs, and alerts prevent unauthorized access.',
				'Consumer Protection: RBI oversight ensures swift and transparent resolution of payment disputes.',
			],
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
		<div className="max-w-screen-xl mx-auto max-md:px-4">
			<div className=" mb-10 space-y-3  md:px-10">
				<h1 className="text-center text-2xl md:text-3xl font-bold text-primary ">
					Our Trusted Payment Network
				</h1>
				<p className="text-justify md:text-center text-gray-300">
					At Go NexPe, security, transparency, and convenience are our top
					priorities. Built on the trusted Bharat Bill Payment System (BBPS),
					our platform is regulated by the RBI and governed by NPCI, ensuring
					your payments are secure and seamless.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
				{partners.map((partner, index) => {
					const controls = useAnimation();
					const ref = React.useRef(null);
					const inView = useInView(ref, { once: true });

					useEffect(() => {
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
							<div className="relative h-44 ">
								<Image
									src={partner.image}
									alt={partner.title}
									width={200}
									height={200}
									className="w-full h-full object-cover"
								/>
								<h2 className="text base md:text-xl font-semibold whitespace-nowrap  text-[#FDB665] text-center absolute transform -translate-x-1/2 bottom-4 left-1/2">
									{partner.title}
								</h2>
							</div>
							<div className="p-4 pb-0">
								<p className="text-gray-300 text-xs md:text-sm leading-snug">
									{partner.description}
								</p>
								<div className="mt-2">
									<p className="text-primary font-semibold text-sm">
										Key Highlights:
									</p>
									<ul className="text-gray-300 text-xs p-3">
										{partner.highlights.map((highlight, index) => (
											<li key={index} className="mb-1 list-disc">
												{highlight}
											</li>
										))}
									</ul>
								</div>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default PaymentPartners;
