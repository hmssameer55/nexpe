'use client';
import { useEffect } from 'react';
import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

export const TextGenerateEffect = ({
	words,
	className,
	filter = true,
	duration = 0.5,
}: {
	words: [{ text: string; className?: string }];
	className?: string;
	filter?: boolean;
	duration?: number;
}) => {
	const [scope, animate] = useAnimate();
	const isInView = useInView(scope);

	useEffect(() => {
		if (isInView) {
			animate(
				'span',
				{
					opacity: 1,
					filter: filter ? 'blur(0px)' : 'none',
				},
				{
					duration: duration ? duration : 1,
					delay: stagger(0.2),
				}
			);
		}
	}, [isInView]);

	const renderWords = () => {
		return (
			<motion.div ref={scope}>
				{words.map((word, idx) => {
					return (
						<motion.span
							key={word.text + idx}
							className={`opacity-0 ${word.className && word.className}`}
							style={{
								filter: filter ? 'blur(10px)' : 'none',
							}}
						>
							{word.text}{' '}
						</motion.span>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div className={cn('font-bold', className)}>
			<div className="mt-4">
				<div className="text-white text-2xl md:text-[2.3rem] leading-snug tracking-wider">
					{renderWords()}
				</div>
			</div>
		</div>
	);
};
