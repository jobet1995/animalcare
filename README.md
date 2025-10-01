# AnimalKind - Animal Shelter Web Application

This is a web application for "AnimalKind", a fictional non-profit animal shelter. The application allows users to browse adoptable animals, apply for adoption, learn about the shelter, and more. It features an admin dashboard for staff to manage shelter operations and leverages generative AI for a pet matching service and a helpful chatbot.

## Tech Stack

This project is built with a modern, component-based architecture:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Component Library**: [ShadCN UI](https://ui.shadcn.com/)
- **Generative AI**: [Genkit](https://firebase.google.com/docs/genkit) with [Google Gemini](https://deepmind.google.com/technologies/gemini/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Containerization**: [Docker](https://www.docker.com/)

## Features

- **Animal Listings**: Browse available cats, dogs, and other animals with detailed profiles.
- **Adoption Application**: A multi-step form for users to apply for adoption.
- **AI Pet Matcher**: An AI-powered tool that recommends pets based on a user's lifestyle and preferences.
- **AI Chatbot**: A friendly assistant to answer user questions about animals, adoption, and the shelter.
- **Admin Dashboard**: A secure area for staff to manage animals, view applications, and monitor shelter statistics.
- **Dynamic Content**: Pages for events, blog posts, and general information.
- **Donation Page**: A dedicated section for supporting the shelter.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en) (v20 or later)
- [npm](https://www.npmjs.com/) or a compatible package manager

### 1. Set Up Environment Variables

Before running the application, you need to set up your environment variables. Copy the `.env.example` file (if present) or create a new file named `.env` in the root of the project.

You will need a Google Gemini API key for the AI features to work.

```
GEMINI_API_KEY=YOUR_API_KEY_HERE
```

### 2. Install Dependencies

Install the project dependencies using npm:

```bash
npm install
```

### 3. Run the Development Server

Start the Next.js development server:

```bash
npm run dev
```

The application will be available at [http://localhost:9002](http://localhost:9002).

## Docker

This project includes a `Dockerfile` and `docker-compose.yml` for easy containerization.

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop/)

### Build and Run

To build and run the application using Docker Compose, run the following command from the project root:

```bash
docker-compose up --build
```

The application will be available at [http://localhost:9002](http://localhost:9002). The `docker-compose.yml` is configured to use the `.env` file for environment variables.

## Available Scripts

- `npm run dev`: Starts the development server with Turbopack.
- `npm run build`: Creates a production build of the application.
- `npm run start`: Starts the production server.
- `npm run lint`: Lints the codebase using Next.js's built-in ESLint configuration.
- `npm run typecheck`: Runs the TypeScript compiler to check for type errors.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
