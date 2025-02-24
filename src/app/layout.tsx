import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import 'antd/dist/reset.css';
import '@/styles/globals.css';
import { Suspense } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TymeX Interview Frontend',
  description: 'Generated',
  icons: {
    icon: '/favico.webp',
    shortcut: '/favico.webp',
  },
  other: {
    'google-adsense-account': 'ca-pub-6861885330336018',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Suspense>
          <AntdRegistry>{children}</AntdRegistry>
        </Suspense>
      </body>
    </html>
  );
}
