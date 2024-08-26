'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';

const LenisScroll = () => {
	useEffect(() => {
		const lenis = new Lenis();

		lenis.on('scroll', (e) => {
			console.log(e);
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

	return null;
};

export default LenisScroll;
