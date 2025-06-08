# Healthcare Notes Management System

A modern web application for managing patient notes and assessments in a healthcare setting. This application allows healthcare providers to create, view, and update patient notes with detailed OASIS assessments.

## 🚀 Features

- Patient note management
- Audio transcription support
- OASIS Section G assessments
- Real-time form validation
- Responsive design
- Modern UI/UX

## 🛠️ Tech Stack

### Core Dependencies

- **React 19**: Modern UI library for building user interfaces
- **TypeScript**: For type-safe code
- **Vite**: Next-generation frontend tooling
- **React Router**: For client-side routing
- **React Query**: For server state management and data fetching
- **React Hook Form**: For form handling and validation
- **Zod**: For schema validation
- **Tailwind CSS**: For styling
- **Radix UI**: For accessible UI components
- **Moment.js**: For date formatting
- **Axios**: For HTTP requests

### Development Tools

- ESLint: For code linting
- Prettier: For code formatting
- TypeScript: For type checking

## 📋 Prerequisites

- Node.js (v18 or higher)
- A modern web browser

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd [project-directory]
```

2. Install dependencies:
```bash
yarn
```

3. Create .env file:
  Create a ".env" file containing the API URL of the project's API. Use the ".env.example" file for example.

4. Start the development server:
```bash
yarn dev
```

## 🏗️ Project Structure

```
src/
├── api/          # API integration and services
├── components/   # Reusable UI components
├── lib/          # Utility functions and configurations
├── pages/        # Page components
├── routes.tsx    # Application routes
└── app.tsx       # Root application component
```

## 🔑 Key Features

### Form Handling
- Uses React Hook Form for efficient form management
- Zod schemas for validation

### State Management
- React Query for server state management
- Optimistic updates for better UX
- Automatic background refetching

### UI Components
- Radix UI primitives for accessible components
- Tailwind CSS for styling
- Responsive design patterns
