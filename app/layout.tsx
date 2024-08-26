import type { Metadata } from 'next';
import { Lexend_Deca } from 'next/font/google';
import './globals.css';
import LenisScroll from '@/components/LenisScroll';

const inter = Lexend_Deca({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'GoNexpe',
	description: 'Pay as you go Next',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<LenisScroll />
				{children}
			</body>
		</html>
	);
}
