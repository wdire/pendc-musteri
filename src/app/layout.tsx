import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Header from '@/components/layout/Header';
import ContentContainer from '@/components/layout/common/content-container';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Müşteri - PenDC',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ContentContainer>{children}</ContentContainer>
      </body>
    </html>
  );
}
