# 📋 React Task Manager

A sleek, modern, and responsive task management web application built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, and **Microsoft Fluent UI**.

---

## ✨ Features

- ➕ **Add New Tasks**: Quickly create tasks with real-time input validation.
- ✅ **Toggle Completion**: Mark tasks as complete or pending with strike-through styling.
- 🗑️ **Delete Tasks**: Remove individual tasks with a single click.
- 🎨 **Modern Design**: Built using Fluent UI components wrapped in a custom Tailwind CSS layout.
- 📱 **Responsive Layout**: Designed for seamless experience across mobile, tablet, and desktop viewports.
- ⚡ **Lightning Fast**: Powered by Vite 8 with Instant Hot Module Replacement (HMR).
- 🛡️ **Type-Safe**: Full TypeScript coverage for state, props, and data structures.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Core UI library |
| **TypeScript** | Type checking & developer tooling |
| **Vite** | Next-generation frontend build tool |
| **Tailwind CSS v4** | Utility-first CSS styling framework |
| **Fluent UI React Components** | Microsoft's Fluent UI component library (`v9`) |
| **Fluent UI Icons** | Fluent icon set |

---

## 📁 Project Structure

```text
react-task-manager/
├── src/
│   ├── components/
│   │   ├── TaskCard.tsx    # Renders individual task items with checkbox & delete button
│   │   ├── TaskForm.tsx    # Input form for adding new tasks
│   │   └── TaskList.tsx    # Container list and empty state renderer
│   ├── types/
│   │   └── Task.ts         # TypeScript interfaces for Task data structures
│   ├── App.tsx             # Root component with state management & FluentProvider
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global stylesheet with Tailwind CSS imports
├── public/                 # Static assets
├── package.json            # Project dependencies and npm scripts
├── vite.config.ts          # Vite plugin setup (React & Tailwind CSS)
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher)

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd react-task-manager
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

---

## 💻 Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the app in development mode using Vite.<br />
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### `npm run build`
Builds the app for production to the `dist` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`
Locally preview the production build after running `npm run build`.

### `npm run lint`
Lints the codebase using ESLint to enforce code quality and style standards.

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
