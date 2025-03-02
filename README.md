# Qoop.ai Home Page

## Overview

Qoop.ai is a modern, interactive, and high-performance home page for a fictional SaaS platform. Built with the latest web technologies, it features smooth animations, dynamic content fetching, and a responsive UI.

## Tech Stack

- **Framework:** Next.js 15
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4 + ShadCN (Canary)
- **Animations:** Framer Motion
- **API Integration:** Fetching testimonials from `https://jsonplaceholder.typicode.com/comments`
- **AI Analysis:** Vercel AI API + Groq provider

## Features

- **Modern UI:** Responsive and mobile-first design
- **Smooth Animations:** Framer Motion-powered transitions
- **Dynamic Content:** Fetches user testimonials from an API
- **Dark Mode Toggle** 
- **Interactive Elements:** Hover and click effects
- **Newsletter Subscription Form** (mocked API call)
- **AI Analysis:** Analyses and categorizes testimonials by sentiment.
- **Translation:** Support for both English and Spanish using Next.js react-i18n 

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/qoop-ai-test.git
   cd qoop-ai-test
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. Open your browser and navigate to `http://localhost:3000`
5. Add your Groq API key to an .env file
    ```
    GROQ_API_KEY='your_api_key'
   ```

## API Integration

- The testimonials section fetches user comments dynamically from `https://jsonplaceholder.typicode.com/comments`
- Ratings are randomly generated

## Deployment

To deploy the project on Vercel:

```sh
npm run build
npm run start
```

Or, if using Vercel CLI:

```sh
vercel
```

🚀 **Qoop.ai - Elevate Your Collaboration!**
