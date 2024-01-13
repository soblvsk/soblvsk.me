import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'soblvsk',
    template: '%s | soblvsk',
  },
  description: 'Soblvsk Portfolio',
  openGraph: {
    title: {
      default: 'soblvsk',
      template: '%s | soblvsk',
    },
    description: 'Soblvsk Portfolio',
    type: 'website',
    siteName: 'soblvsk.me',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 px-6 pt-10 pb-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
