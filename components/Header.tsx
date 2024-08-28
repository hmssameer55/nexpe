'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import BrandLogo from '@/public/assets/brand-logo-full.png';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
	pages: string[];
	currentPage: number;
	scrollTo: (index: number) => void;
}

export default function Component({
	pages,
	currentPage,
	scrollTo,
}: HeaderProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<motion.header
			className="flex justify-between items-center px-4 sm:px-6 py-4 z-10 bg-transparent fixed top-0 left-0 right-0 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] backdrop-blur-sm"
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ type: 'spring', stiffness: 100, damping: 15 }}
		>
			<Image
				src={BrandLogo}
				alt="NexPe Logo"
				width={120}
				height={120}
				className="w-24 sm:w-32 md:w-36"
			/>
			<nav className="hidden md:flex space-x-6">
				{pages.map((page, index) => (
					<button
						key={index}
						onClick={() => scrollTo(index)}
						className={`${
							currentPage === index
								? "text-primary font-bold relative after:content-[''] after:absolute after:top-[-20px] after:left-0 after:w-full after:h-[8px] after:bg-[#FDB665] after:rounded-b-lg"
								: 'text-white'
						} hover:text-primary transition-colors text-lg font-semibold antialiased tracking-wider`}
					>
						{page}
					</button>
				))}
			</nav>
			<div className="hidden md:flex items-center space-x-4">
				<span className="text-sm sm:text-md">
					Email: <span className="text-primary">support@gonexpe.com</span>
				</span>
			</div>
			<button
				className="md:hidden text-white focus:outline-none"
				onClick={toggleMenu}
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
			>
				{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
			</button>
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.2 }}
						className="absolute top-full left-0 right-0 bg-black bg-opacity-90 p-4 md:hidden"
					>
						<nav className="flex flex-col space-y-4">
							{pages.map((page, index) => (
								<button
									key={index}
									onClick={() => {
										scrollTo(index);
										setIsMenuOpen(false);
									}}
									className={`${
										currentPage === index ? '' : 'text-white'
									} hover:text-primary transition-colors text-md font-semibold antialiased tracking-wider`}
								>
									{page}
								</button>
							))}
						</nav>
						<div className="mt-4 text-xs">
							Email: <span className="text-primary">support@gonexpe.com</span>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
}
