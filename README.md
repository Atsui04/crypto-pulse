# 🪙 Crypto-Pulse

A modern, real-time cryptocurrency tracking web application. This project was developed to master external API integration, React hooks, and effective state management.

## 🚀 Features

- **Real-time Data:** Fetches live prices for Top-10 cryptocurrencies using the CoinGecko API.
- **Loading States:** Smooth user experience with a dedicated Loader component during data fetching.
- **Responsive Design:** Dark-themed UI designed for clarity and modern aesthetics.
- **API Security:** Implements environment variables (`.env`) to keep sensitive API keys secure.

## 🛠 Tech Stack

- **React** (Vite)
- **JavaScript** (ES6+)
- **CSS3** (Custom Properties, Flexbox)
- **CoinGecko API**

## 📦 Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Atsui04/crypto-pulse.git
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Configure Environment Variables:**

- **Create a .env file in the root directory.**
- **Obtain a free Demo API Key from CoinGecko.**
- **Add your key to the file:**

  ```
    VITE_COINGECKO_API_KEY=your_actual_key_here
  ```

4. **Run the project:**

   ```bash
   npm run dev
   ```

## 🏗 Project Structure

- **`src/api` - Services for handling external HTTP requests.**
- **`src/components` - Reusable UI components.**
- **`src/styles` - Global styles and dark theme configuration.**

## 📈 Roadmap

- **[ ] Search and filter functionality.**
- **[ ] Detailed coin pages with interactive price charts (Chart.js).**
- **[ ] "Favorites" list with local storage persistence.**
