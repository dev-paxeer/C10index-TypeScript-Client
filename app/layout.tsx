import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PIDX Candle Service API — Playground',
  description: 'TradingView UDF-compatible API for Paxeer Index (PIDX) price data.

This service provides real-time and historical candlestick data for the PIDX index,
which is a weighted basket of 10 major cryptocurrencies:
- BTC (39.15%), ETH (30.13%), SOL (6.39%), XRP (5.65%), DOGE (3.39%)
- BNB (6.77%), ADA (2.64%), LINK (1.96%), AVAX (1.96%), TRON (1.96%)

## TradingView Integration
This API is fully compatible with TradingView's [UDF (Universal Data Feed)](https://www.tradingview.com/rest-api-spec/) specification.

## Supported Resolutions
- Intraday: 1m, 2m, 3m, 5m, 15m, 30m, 1h, 4h, 8h
- Daily/Weekly: 1D, 1W

## Base URL
- Production: `https://us-east-1.index-api.sidiora.exchange`
- Local: `http://localhost:3001`
',
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
