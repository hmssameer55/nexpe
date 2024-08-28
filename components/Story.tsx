'use client';

import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { Spotlight } from '@/components/ui/spotlight';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const words = [
	{
		text: 'At',
	},
	{
		text: 'GoNexPe.',
		className: 'text-[#FDB665] ',
	},
	{
		text: 'we',
	},
	{
		text: 'simplify',
		className: 'text-[#FDB665] ',
	},
	{
		text: 'and',
	},
	{
		text: 'secure',
		className: 'text-[#FDB665] ',
	},
	{
		text: 'payment',
	},
	{
		text: 'processing',
		className: 'text-[#FDB665] ',
	},
	{
		text: 'for',
	},
	{
		text: 'businesses.',
		className: 'text-[#FDB665] ',
	},
	{
		text: 'Our',
	},
	{
		text: 'innovative',
		className: 'text-[#FDB665] ',
	},
	{
		text: 'solutions',
	},
	{
		text: 'cater',
		className: 'text-[#FDB665] ',
	},
	{
		text: 'to',
	},
	{
		text: 'all',
		className: 'text-[#FDB665] ',
	},
	{
		text: 'business',
	},
	{
		text: 'sizes,',
		className: 'text-[#FDB665] ',
	},
	{
		text: 'delivering',
	},
	{
		text: 'fast,',
		className: 'text-[#FDB665] ',
	},
	{
		text: 'reliable,',
	},
	{
		text: 'and',
		className: 'text-[#FDB665] ',
	},
	{
		text: 'user-friendly',
	},
	{
		text: 'payment',
		className: 'text-[#FDB665] ',
	},
	{
		text: 'experiences.',
	},
	{
		text: 'Join us',
		className: 'text-[#FDB665] ',
	},
	{
		text: 'in',
	},
	{
		text: 'redefining',
	},
	{
		text: 'digital',
		className: 'text-[#FDB665] ',
	},
	{
		text: 'payment',
	},
	{
		text: 'solutions.',
		className: 'text-[#FDB665] ',
	},
];

const TextGenerateEffectDemo = () => {
	const ref = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div
			className="relative py-10 max-w-screen-lg mx-auto max-md:px-4"
			ref={ref}
		>
			{isInView && (
				<Spotlight
					className="-top-32 left-0 md:left-60 md:-top-20"
					fill="white"
				/>
			)}

			<h1 className="text-3xl mb-10 md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
				GoNexPe
			</h1>

			<TextGenerateEffect words={words} duration={2} filter={false} />
		</div>
	);
};

export default TextGenerateEffectDemo;
