'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const AnimatedSection = ({
	children,
	index,
}: {
	children: React.ReactNode;
	index: number;
}) => {
	const controls = useAnimation();
	const ref = useRef(null);
	const inView = useInView(ref, { once: true });

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	const variants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, delay: index * 0.2 },
		},
	};

	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial="hidden"
			variants={variants}
			className="w-full"
		>
			{children}
		</motion.div>
	);
};

export default AnimatedSection;
