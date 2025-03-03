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

## UI Preview
![image](https://github.com/user-attachments/assets/89e597b3-9e7d-4b8f-82b0-f03df09f5ec9)
![image](https://github.com/user-attachments/assets/7b6ccc58-dc67-4cf5-b5ec-73b1298a237e)
![image](https://github.com/user-attachments/assets/95fd3353-9c20-47f4-adca-c9c130ae6758) ![image](https://github.com/user-attachments/assets/2139addb-68e4-44c4-acb5-e7ab3a9f830e)![image](https://github.com/user-attachments/assets/b2f8ec5a-94ad-4b64-a1b0-6027d80068a8)![image](https://github.com/user-attachments/assets/71726c6a-2354-4a8d-8e8d-97b463863c63)





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
5. Add your Groq API key to an .env file. You can get your API key via the Groq console https://groq.com/
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
