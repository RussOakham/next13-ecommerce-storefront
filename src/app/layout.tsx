import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'

import './globals.css'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'NextJS 13 Store',
	description: 'NextJS 13 Store using App Router',
}

interface RootLayoutProps {
	children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang="en-GB">
			<body className={urbanist.className}>
				<ModalProvider />
				<ToastProvider />
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout
