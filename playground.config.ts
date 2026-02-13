/**
 * API Playground Configuration
 *
 * Customize the playground appearance, branding, and behavior.
 * This file is the single source of truth for all customizations.
 */
export interface PlaygroundConfig {
  /** API display name */
  name: string;
  /** Short description / tagline */
  description?: string;
  /** Logo URL (displayed in sidebar header) */
  logo?: string;
  /** Default base URL for API requests */
  baseUrl: string;
  /** Path to the OpenAPI YAML spec file (relative to project root) */
  specPath: string;
  /** Theme customization */
  theme?: {
    /** Primary brand color (hex) — generates full palette */
    primaryColor?: string;
    /** Dark mode by default */
    darkMode?: boolean;
    /** Border radius for cards/inputs: 'none' | 'sm' | 'md' | 'lg' */
    radius?: 'none' | 'sm' | 'md' | 'lg';
  };
  /** Authentication defaults */
  auth?: {
    type?: 'bearer' | 'apiKey' | 'basic' | 'none';
    /** Header name for API key auth */
    headerName?: string;
    /** Placeholder text for the token input */
    placeholder?: string;
  };
  /** Feature toggles */
  features?: {
    /** Show code snippet panel */
    codeSnippets?: boolean;
    /** Which snippet languages to show */
    snippetLanguages?: ('curl' | 'javascript' | 'python' | 'sdk')[];
    /** Show response headers */
    responseHeaders?: boolean;
    /** Enable request history */
    history?: boolean;
    /** Show the "Try it" button */
    tryIt?: boolean;
  };
  /** Custom links in the sidebar footer */
  links?: { label: string; href: string }[];
  /** Custom CSS class applied to the root */
  className?: string;
}

const config: PlaygroundConfig = {
  name: 'PIDX Candle Service API',
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
  baseUrl: 'https://us-east-1.index-api.sidiora.exchange',
  specPath: './openapi.yaml',
  theme: {
    primaryColor: '#6366f1',
    darkMode: true,
    radius: 'md',
  },
  auth: {
    type: 'bearer',
    placeholder: 'Enter your API token...',
  },
  features: {
    codeSnippets: true,
    snippetLanguages: ['curl', 'javascript', 'python'],
    responseHeaders: true,
    history: true,
    tryIt: true,
  },
  links: [
    { label: 'Documentation', href: '/docs' },
  ],
};

export default config;
