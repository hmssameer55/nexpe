'use client';

import { motion } from 'framer-motion';
import { FaFacebook, FaSquareXTwitter, FaInstagram } from 'react-icons/fa6';
import Link from 'next/link';

function SocialIcon({ href, Icon }) {
	return (
		<Link
			href={href}
			className="text-zinc-400 hover:text-primary transition-colors duration-200"
		>
			<Icon size={32} />
		</Link>
	);
}

function FooterLink({ href, children }) {
	return (
		<Link
			href={href}
			className="text-zinc-400 hover:text-primary transition-colors text-sm"
		>
			<></>
			{children}
		</Link>
	);
}

export default function DesktopFooter() {
	return (
		<div className="overflow-hidden relative bg-zinc-900 text-zinc-200 border-none p-0 w-full">
			<motion.div
				className="absolute top-0 left-0 w-full h-full bg-[#0b0b0b] hidden md:block"
				initial={{ y: '100%' }}
				animate={{ y: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				style={{
					clipPath: 'ellipse(20% 65% at 0% 54%)',
				}}
			/>
			<div className="relative z-10 py-10 px-6 md:pl-12 md:py-12 flex items-center md:h-screen rounded-none">
				<div className="flex flex-col items-center space-y-10 md:space-y-14">
					<div className="flex space-x-6">
						<SocialIcon href="https://facebook.com" Icon={FaFacebook} />
						<SocialIcon href="https://twitter.com" Icon={FaSquareXTwitter} />
						<SocialIcon href="https://instagram.com" Icon={FaInstagram} />
					</div>
					<div className="flex flex-wrap justify-center gap-4">
						<FooterLink href="/terms">Terms and Conditions</FooterLink>
						<FooterLink href="/privacy">Privacy Policy</FooterLink>
						<FooterLink href="/cancellation">
							Cancellation and Refunds
						</FooterLink>
					</div>
					<p className="text-sm text-zinc-400">
						© 2024 GoNexPe. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
}
