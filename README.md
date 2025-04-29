# Better Plating - Zinc Electroplating Company Website

A professional business website for Better Plating, a zinc electroplating company based in Kempton Park, South Africa. The website showcases the company's galvanizing services and products with a modern, responsive design.

![Better Plating Website](./attached_assets/webpage.png)

## Features

- **Modern Responsive Design**: Mobile-friendly layout that looks great on all devices
- **Dark/Light Mode**: Theme toggle for user preference and improved readability(Temporarily disabled)
- **SEO Optimized**: Meta tags and semantic markup for better search engine visibility
- **Multiple Pages**: Home, Services, Products, Process, About, and Contact sections
- **Inquiry Form**: Contact form for customers to request quotes and inquiries
- **Interactive Elements**: Animations, hover effects, and smooth scrolling
- **Map Integration**: Location map to help customers find the business
- **Product Gallery**: Showcase of galvanized steel products with filtering options

## Technology Stack

- **Frontend**: React, TypeScript, TailwindCSS, shadcn/ui components
- **Backend**: Express.js with Node.js
- **Routing**: Wouter for client-side routing
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query for server state management
- **Data Storage**: In-memory storage for inquiries
- **Styling**: Tailwind CSS with custom theming

## Project Structure

```
├── client/                 # Frontend code
│   ├── public/             # Static assets
│   └── src/
│       ├── components/     # React components
│       │   ├── home/       # Homepage section components
│       │   ├── layout/     # Layout components
│       │   └── ui/         # UI components
│       ├── hooks/          # Custom React hooks
│       ├── lib/            # Utility functions and libraries
│       ├── pages/          # Page components
│       ├── App.tsx         # Main application component
│       └── main.tsx        # Application entry point
├── server/                 # Backend code
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API route definitions
│   ├── storage.ts          # Data storage implementation
│   └── vite.ts             # Vite server configuration
├── shared/                 # Shared code between frontend and backend
│   └── schema.ts           # Data schema definitions
└── attached_assets/        # Images and other assets
```

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/better-plating.git
   cd better-plating
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5000`

## Build and Deployment

To build the project for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## License

This project is licensed under the MIT License.

## Contact

For project questions or support, contact:
- Email: zwiswamuridili990@gmail.co.za

For business questions or support, contact:
- Manuel: 0782269951
- Email: info@betterplating.co.za
- Address: No 13 Ossewa Street, Chloorkop, Kempton Park, South Africa
