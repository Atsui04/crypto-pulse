# 🪙 Crypto Pulse

A real-time cryptocurrency tracker built with React, TypeScript, and the CoinGecko API — built to practice external API integration, global state management, and type-safe React architecture.

**[🔗 Live Demo](https://crypto-pulse-sigma-six.vercel.app)**

## 🚀 Features

- **Real-time market data** — live prices for the top 100 cryptocurrencies via the CoinGecko API
- **Search & filter** — quickly find any coin in the list
- **Coin detail pages** — interactive historical price charts (Chart.js)
- **Favorites** — save coins to a favorites list, persisted in local storage
- **Multi-language UI** — internationalization powered by i18next
- **Dark theme** — clean, modern interface with custom CSS properties
- **Loading & error states** — smooth UX during data fetching

## 🛠 Tech Stack

| Category     | Tools                      |
| ------------ | -------------------------- |
| Core         | React, TypeScript, Vite    |
| Server state | TanStack Query             |
| Client state | Zustand                    |
| Routing      | React Router v7            |
| Charts       | Chart.js / react-chartjs-2 |
| i18n         | i18next                    |
| HTTP client  | Axios                      |
| API          | CoinGecko API              |

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- A free CoinGecko Demo API key ([get one here](https://www.coingecko.com/en/api))

### Installation

```bash
git clone https://github.com/Atsui04/crypto-pulse.git
cd crypto-pulse
npm install
```

Create a `.env` file in the root directory:

VITE_COINGECKO_API_KEY=your_actual_key_here

Run the dev server:

```bash
npm run dev
```

## 🏗 Project Structure

src/
├── api/ # CoinGecko API request functions
├── components/
│ ├── coins-page/ # Coin detail page UI
│ ├── favorites-page/ # Favorites page UI
│ ├── header/ # Navigation, language & currency selectors
│ ├── home-page/ # Coins list, search, pagination
│ └── ui/ # Reusable, presentation-only components (loaders, skeletons, buttons)
├── layout/ # App shell: Header, Footer, Outlet
├── locales/ # en.json / uk.json translations
├── pages/ # Route-level views: Home, CoinPage, Favorites, NotFound
├── stores/ # Zustand stores (coins, favorites)
├── styles/ # Global styles & theme variables
├── types/ # Shared TypeScript types
├── utils/ # Filtering, formatting, sorting helpers
├── App.tsx # Root component + routes
├── constants.ts
├── i18n.ts # i18next config
└── main.tsx # Entry point

## 📈 Roadmap

- [x] Search and filter functionality
- [x] Coin detail pages with interactive price charts
- [x] Favorites list with local storage persistence
- [ ] Unit tests (Vitest + React Testing Library)
- [ ] Price alerts / notifications
- [ ] Portfolio (holdings) tracking

## 👤 Author

**Markiian Bushko** — [GitHub](https://github.com/Atsui04)
