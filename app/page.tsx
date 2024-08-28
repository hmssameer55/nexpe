'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import PaymentPartners from '@/components/PaymentPartners';
import Story from '@/components/Story';
import Hero from '@/components/Hero';
import { BackgroundBeams } from '@/components/ui/background-beams';
import Header from '@/components/Header';
import FAQ from '@/components/Faq';
import Social from '@/components/Social';
import DesktopFooter from '@/components/DesktopFooter';
import AnimatedSection from '@/components/AnimatedSection';

const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);
		if (media.matches !== matches) {
			setMatches(media.matches);
		}
		const listener = () => setMatches(media.matches);
		media.addListener(listener);
		return () => media.removeListener(listener);
	}, [matches, query]);

	return matches;
};

export default function Component() {
	const scrollbarsRef = useRef<Scrollbars>(null);
	const [currentPage, setCurrentPage] = useState(0);
	const isMobile = useMediaQuery('(max-width: 767px)');

	const pages = [
		'Home',
		'Our Story',
		'Payment Partners',
		'Social',
		'Faq',
		'Support',
	];

	useEffect(() => {
		const handleScroll = () => {
			if (scrollbarsRef.current && !isMobile) {
				const scrollPosition = scrollbarsRef.current.getScrollLeft();
				const pageWidth = scrollbarsRef.current.getClientWidth();
				const adjustedPosition = scrollPosition + pageWidth * 0.69;
				const currentPage = Math.floor(adjustedPosition / pageWidth);
				setCurrentPage(currentPage);
			}
		};

		if (!isMobile) {
			scrollbarsRef.current?.view.addEventListener('scroll', handleScroll);
		}

		return () => {
			if (!isMobile) {
				scrollbarsRef.current?.view.removeEventListener('scroll', handleScroll);
			}
		};
	}, [isMobile]);

	const handleWheel = (event: React.WheelEvent<Scrollbars>) => {
		if (!isMobile) {
			event.preventDefault();
			if (scrollbarsRef.current) {
				const scrollAmount = event.deltaY;
				scrollbarsRef.current.scrollLeft(
					scrollbarsRef.current.getScrollLeft() + scrollAmount
				);
			}
		}
	};

	const scrollTo = (index: number) => {
		if (isMobile) {
			const element = document.getElementById(`section-${index}`);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		} else if (scrollbarsRef.current) {
			const targetPosition = index * scrollbarsRef.current.getClientWidth();
			const startPosition = scrollbarsRef.current.getScrollLeft();
			const distance = targetPosition - startPosition;
			const duration = 1000; // ms
			let start: number | null = null;

			const step = (timestamp: number) => {
				if (!start) start = timestamp;
				const progress = timestamp - start;
				const percentage = Math.min(progress / duration, 1);
				const easeInOutCubic =
					percentage < 0.5
						? 4 * percentage * percentage * percentage
						: 1 - Math.pow(-2 * percentage + 2, 3) / 2;

				scrollbarsRef.current?.scrollLeft(
					startPosition + distance * easeInOutCubic
				);

				if (progress < duration) {
					window.requestAnimationFrame(step);
				}
			};

			window.requestAnimationFrame(step);
		}
	};

	const renderThumb = ({ style, ...props }) => {
		const thumbStyle = {
			backgroundColor: '#FDB665',
			width: '50px',
			height: '8px',
			borderRadius: '2px',
			marginTop: '-1px',
			cursor: 'pointer',
		};
		return <div style={{ ...style, ...thumbStyle }} {...props} />;
	};

	const renderTrackHorizontal = ({ style, ...props }) => {
		const trackStyle = {
			height: '6px',
			bottom: '20px',
			left: '15%',
			right: '15%',
			borderRadius: '3px',
			backgroundColor: 'rgba(255, 255, 255, 0.1)',
		};
		return <div style={{ ...style, ...trackStyle }} {...props} />;
	};

	const renderContent = () => (
		<>
			{pages.map((page, index) => (
				<section
					key={index}
					id={`section-${index}`}
					className={`${
						isMobile ? 'w-screen' : 'w-screen h-screen flex-shrink-0'
					}
					${index == 5 && 'md:max-w-md md:ml-10 !p-0'}
						 flex flex-col items-center justify-center p-5 md:p-10`}
				>
					{index === 0 ? (
						<div>
							<AnimatedSection index={index}>
								<Hero onScrollTo={scrollTo} />
								<BackgroundBeams />
							</AnimatedSection>
						</div>
					) : index === 1 ? (
						<AnimatedSection index={index}>
							<Story />
						</AnimatedSection>
					) : index === 2 ? (
						<PaymentPartners />
					) : index === 3 ? (
						<AnimatedSection index={index}>
							<Social />
						</AnimatedSection>
					) : index === 4 ? (
						<AnimatedSection index={index}>
							<FAQ />
						</AnimatedSection>
					) : (
						<DesktopFooter />
					)}
				</section>
			))}
		</>
	);

	return (
		<div className="h-screen flex flex-col overflow-hidden text-white">
			<Header currentPage={currentPage} scrollTo={scrollTo} pages={pages} />

			<div className="flex-1 overflow-hidden">
				{isMobile ? (
					<div className="h-full overflow-y-auto">{renderContent()}</div>
				) : (
					<Scrollbars
						ref={scrollbarsRef}
						style={{ width: '100%', height: '100%' }}
						renderThumbHorizontal={renderThumb}
						renderTrackHorizontal={renderTrackHorizontal}
						thumbSize={120}
						onWheel={handleWheel}
						universal={true}
						autoHide={false}
						hideTracksWhenNotNeeded={true}
					>
						<div className="flex">{renderContent()}</div>
					</Scrollbars>
				)}
			</div>
		</div>
	);
}
