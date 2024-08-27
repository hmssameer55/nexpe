'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Card } from '@/components/ui/card';

const faqs = [
	{
		question: 'What is the purpose of this website?',
		answer:
			'This website is a place to help you find the best products and services in the world.',
	},
	{
		question: 'How do I contact support?',
		answer:
			"You can contact our support team through the 'Contact Us' page or by emailing support@example.com.",
	},
	{
		question: 'How do I find the best products?',
		answer:
			'You can use our search feature, browse categories, or check out our curated lists of top-rated products.',
	},
	{
		question: 'Can I return a product?',
		answer:
			'Yes, we offer a 30-day return policy for most products. Please check the specific product page for details.',
	},
	{
		question: 'Do you offer international shipping?',
		answer:
			'Yes, we ship to many countries worldwide. Shipping costs and delivery times vary by location.',
	},
	{
		question: 'How can I track my order?',
		answer:
			"Once your order is shipped, you'll receive a tracking number via email. You can use this to track your package on our website.",
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
						className={`text-lg font-medium transition-colors duration-200 ${
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
			className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-20 w-screen p-5 md:p-20"
		>
			<motion.h2
				initial={{ opacity: 0, y: -50 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8, ease: 'easeOut' }}
				className="text-3xl md:text-5xl font-bold md:mb-8 text-primary !leading-snug"
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
