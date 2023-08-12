'use client';
import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import { Provider } from 'react-redux';
import { store } from '@/store';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dani Clothes Store',
  description: 'Best Minimalistic Clothing'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
