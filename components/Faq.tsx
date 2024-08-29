'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Card } from '@/components/ui/card';

const faqs = [
	{
		question: 'What payment methods does GoNexpe accept?',
		answer: `GoNexpe accepts major credit cards, debit cards, and various online payment methods, ensuring a smooth and secure transaction experience.`,
	},
	{
		question: 'Is my payment information secure with GoNexpe?',
		answer: `Yes, GoNexpe uses advanced encryption technology to protect your payment information during transactions.`,
	},
	{
		question: 'Does GoNexpe store my credit card details?',
		answer: `No, GoNexpe does not store your credit card details on their servers.`,
	},
	{
		question: 'How does GoNexpe ensure the security of my transactions?',
		answer: `GoNexpe employs industry-standard security measures, including SSL encryption and secure payment gateways, to safeguard your transactions.`,
	},
	{
		question: 'Are there any additional charges or fees during checkout?',
		answer: `GoNexpe is transparent about all costs; any additional charges, if applicable, are clearly shown before finalizing the payment.`,
	},
	{
		question: 'What should I do if I experience a payment issue?',
		answer: `If you encounter a payment issue, contact GoNexpe's customer support team immediately for assistance.`,
	},
];

const FAQItem = ({ question, answer, isOpen, onToggle, index }) => {
	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: 20 },
				visible: { opacity: 1, y: 0 },
			}}
		>
			<Card className="overflow-hidden bg-transparent border-b border-gray-800">
				<button
					className="flex w-full justify-between items-center text-left px-6 py-4"
					onClick={() => onToggle(index)}
					aria-expanded={isOpen}
				>
					<span
						className={`text-base md:text-lg font-medium transition-colors duration-200 ${
							isOpen ? 'text-primary' : 'text-gray-200'
						}`}
					>
						{question}
					</span>
					<motion.div
						initial={false}
						animate={{ rotate: isOpen ? 180 : 0 }}
						transition={{ duration: 0.2, ease: 'easeInOut' }}
						className={`flex items-center justify-center w-6 h-6 transition-colors duration-200 ${
							isOpen ? 'text-blue-500' : 'text-gray-200'
						}`}
					>
						{isOpen ? (
							<Minus className="w-6 h-6 text-white" />
						) : (
							<Plus className="w-6 h-6 text-primary" />
						)}
					</motion.div>
				</button>
				<AnimatePresence initial={false}>
					{isOpen && (
						<motion.div
							key="content"
							initial="collapsed"
							animate="open"
							exit="collapsed"
							variants={{
								open: {
									opacity: 1,
									height: 'auto',
									marginTop: 8,
									marginBottom: 16,
								},
								collapsed: {
									opacity: 0,
									height: 0,
									marginTop: 0,
									marginBottom: 0,
								},
							}}
							transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
							className="px-6 overflow-hidden max-w-screen-sm"
						>
							<motion.div
								variants={{
									collapsed: { opacity: 0, y: 10 },
									open: { opacity: 1, y: 0 },
								}}
								transition={{ duration: 0.4, ease: 'easeOut' }}
								className="text-gray-400"
							>
								{answer.split(' ').map((word, index) => (
									<motion.span
										key={index}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.4, delay: index * 0.02 }}
										className="inline-block mr-1"
									>
										{word}
									</motion.span>
								))}
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</Card>
		</motion.div>
	);
};

export default function Component() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	const handleToggle = (index: number) => {
		setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	};

	return (
		<div
			ref={ref}
			className="md:min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 p-5 md:p-20"
		>
			<motion.h2
				initial={{ opacity: 0, y: -50 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8, ease: 'easeOut' }}
				className="text-2xl md:text-5xl font-bold md:mb-8 text-primary !leading-snug"
			>
				Frequently asked questions
			</motion.h2>
			<motion.div
				className="space-y-2.5 w-full"
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? 'visible' : 'hidden'}
			>
				{faqs.map((faq, index) => (
					<FAQItem
						key={index}
						question={faq.question}
						answer={faq.answer}
						isOpen={openIndex === index}
						onToggle={handleToggle}
						index={index}
					/>
				))}
			</motion.div>
		</div>
	);
}
