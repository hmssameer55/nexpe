'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Eye, Scale, CheckCircle } from 'lucide-react';

const features = [
	{
		id: 'secure',
		title: 'Secure',
		description:
			'Your payments are safeguarded with multi-layered security protocols, including encryption, two-factor authentication, and secure OTPs, ensuring maximum protection from fraud and unauthorized access.',
		icon: Shield,
	},
	{
		id: 'convenient',
		title: 'Convenient',
		description:
			'Pay bills at your convenience, anytime and anywhere, through a wide network of billers. Whether its utilities, telecom, or insurance, our platform supports a variety of recurring payments across multiple devices.',
		icon: Zap,
	},
	{
		id: 'transparent',
		title: 'Transparent',
		description:
			'Enjoy a hassle-free payment process with instant confirmations and clear, detailed transaction records. You’ll always know the status of your payments with no hidden steps or fees.',
		icon: Eye,
	},
	{
		id: 'regulated',
		title: 'Regulated',
		description:
			'Your transactions are governed by the strict regulations of the Reserve Bank of India (RBI) and managed by NPCI, giving you confidence that your payments meet the highest compliance and security standards.',
		icon: Scale,
	},
];

export default function WhyNexPe() {
	const [activeTab, setActiveTab] = useState('secure');

	return (
		<main className="max-w-screen-xl mx-auto  px-4 md:px-8">
			<h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-white">
				Why Choose GoNexPe ?
			</h2>
			<div className="grid md:grid-cols-2 gap-8 mb-12">
				<div className="space-y-4">
					{features.map((feature) => (
						<motion.div
							key={feature.id}
							className={`w-full text-left p-4 rounded-lg transition-colors cursor-pointer ${
								activeTab === feature.id
									? 'bg-orange-400 text-black'
									: 'bg-gray-800 hover:bg-gray-700'
							}`}
							onMouseEnter={() => setActiveTab(feature.id)}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
						>
							<div className="flex items-center space-x-3">
								<feature.icon className="h-6 w-6" />
								<span className="text-lg font-semibold">{feature.title}</span>
							</div>
						</motion.div>
					))}
				</div>
				<AnimatePresence mode="wait">
					<motion.div
						key={activeTab}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className="bg-gray-900 rounded-lg p-6 shadow-lg"
					>
						{features.map(
							(feature) =>
								activeTab === feature.id && (
									<div key={feature.id} className="space-y-4">
										<div className="flex items-center space-x-3">
											<feature.icon className="h-8 w-8 text-orange-400" />
											<h3 className="text-2xl font-semibold">
												{feature.title}
											</h3>
										</div>
										<p className="text-lg text-gray-300">
											{feature.description}
										</p>
									</div>
								)
						)}
					</motion.div>
				</AnimatePresence>
			</div>
			{/* <motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.5 }}
					className="bg-gray-900 rounded-lg p-8 text-center"
				>
					<h3 className="text-2xl font-bold text-orange-400 mb-6">
						Experience the NexPe Advantage
					</h3>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
						{[
							{ icon: Zap, text: 'Fast' },
							{ icon: Shield, text: 'Secure' },
							{ icon: Eye, text: 'Transparent' },
							{ icon: CheckCircle, text: 'Reliable' },
						].map((item, index) => (
							<div key={index} className="flex flex-col items-center">
								<item.icon className="h-8 w-8 text-orange-400 mb-2" />
								<span className="text-gray-300">{item.text}</span>
							</div>
						))}
					</div>
					<p className="text-lg text-gray-300 mb-4">
						At Go NexPe, we are committed to connecting you to India's most
						trusted and regulated bill payment network.
					</p>
					<p className="text-lg text-gray-300">
						Whether you're paying utility bills, recharging your mobile, or
						managing recurring payments, our platform guarantees a hassle-free
						experience backed by national-level infrastructure.
					</p>
				</motion.div> */}
		</main>
	);
}
