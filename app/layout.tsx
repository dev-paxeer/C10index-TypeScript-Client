import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PIDX Candle Service API — Playground',
  description: 'TradingView UDF-compatible API for Paxeer Index (PIDX) price data.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-surface-0 text-surface-900 antialiased">
        {children}
      </body>
    </html>
  );
}
